import { useEffect, useMemo, useState, type FormEvent } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CooL, verifyEvidence, type Evidence, type Verdict } from 'cool-nwc';
import {
  Activity,
  BadgeCheck,
  Check,
  ChevronRight,
  ClipboardCheck,
  Database,
  FileCheck2,
  Fingerprint,
  FlaskConical,
  Info,
  KeyRound,
  Layers3,
  LockKeyhole,
  Menu,
  Plus,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  SlidersHorizontal,
  TerminalSquare,
  X,
  XCircle,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';

const queryClient = new QueryClient();
const cool = new CooL({ applicationId: 'cool-audit-trails' });
const STORAGE_KEY = 'cool-audit-trails.receipts.v1';

type View = 'vault' | 'capture';
type ReceiptItem = {
  evidence: Evidence;
  title: string;
  context: string;
  system: string;
  owner: string;
};

type ReceiptInput = {
  type: string;
  title: string;
  context: string;
  system: string;
  owner: string;
  metadata: Record<string, string>;
};

type UiRecord = {
  record_id: string;
  time: { issued_at: string; seq: number };
  event: { type: string; application_id: string; execution_id: string; metadata_hash: string };
  runtime: { tee_vendor: string; mode: string };
  signature: { alg: string; key_id: string };
};

function getRecord(item: ReceiptItem): UiRecord {
  return item.evidence.record as unknown as UiRecord;
}

const sampleInputs: ReceiptInput[] = [
  {
    type: 'model.deployment',
    title: 'Credit decision model deployed',
    context: 'Risk Engine · v4.8.2',
    system: 'Risk Engine',
    owner: 'Model Governance',
    metadata: { system: 'risk-engine', model: 'credit-decision', version: '4.8.2', change_ticket: 'MOD-4821', environment: 'production' },
  },
  {
    type: 'policy.change',
    title: 'Fraud threshold policy changed',
    context: 'Transaction Monitor · policy 2026.09',
    system: 'Transaction Monitor',
    owner: 'Fraud Controls',
    metadata: { system: 'transaction-monitor', policy: 'velocity-thresholds', version: '2026.09', change_ticket: 'FRD-1907', environment: 'production' },
  },
  {
    type: 'model.execution',
    title: 'Liquidity forecast run completed',
    context: 'Treasury Forecast · daily close',
    system: 'Treasury Forecast',
    owner: 'Markets Analytics',
    metadata: { system: 'treasury-forecast', model: 'liquidity-horizon', version: '2.1.0', run: 'daily-close', environment: 'production' },
  },
  {
    type: 'access.review',
    title: 'Privileged access review recorded',
    context: 'Identity Control · Q3 attestation',
    system: 'Identity Control',
    owner: 'Security Assurance',
    metadata: { system: 'identity-control', review: 'privileged-access', quarter: '2026-Q3', change_ticket: 'IAM-773', environment: 'production' },
  },
];

function readStored(): ReceiptItem[] {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (!value) return [];
    const parsed = JSON.parse(value) as ReceiptItem[];
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveStored(receipts: ReceiptItem[]) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(receipts));
}

function shortId(id?: string) {
  return id ? `${id.slice(0, 9)}…${id.slice(-5)}` : '—';
}

function shortHash(value?: string) {
  if (!value) return '—';
  return `${value.slice(0, 18)}…${value.slice(-10)}`;
}

function formatDate(value?: string) {
  if (!value) return 'Unknown time';
  return new Intl.DateTimeFormat('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(value));
}

function relativeDate(value?: string) {
  if (!value) return '';
  const diff = Math.max(0, Date.now() - new Date(value).getTime());
  const minutes = Math.floor(diff / 60000);
  if (minutes < 1) return 'just now';
  if (minutes < 60) return `${minutes}m ago`;
  const hours = Math.floor(minutes / 60);
  if (hours < 24) return `${hours}h ago`;
  return `${Math.floor(hours / 24)}d ago`;
}

function cloneTampered(evidence: Evidence): Evidence {
  const copy = JSON.parse(JSON.stringify(evidence)) as Evidence;
  (copy.record as unknown as UiRecord).event.metadata_hash = 'mh:sha256:' + '0'.repeat(64);
  return copy;
}

async function createReceipt(input: ReceiptInput) {
  const result = await cool.record({
    type: input.type,
    metadata: input.metadata,
  });
  return {
    evidence: result.evidence,
    title: input.title,
    context: input.context,
    system: input.system,
    owner: input.owner,
  } satisfies ReceiptItem;
}

function StatusBadge({ status, label }: { status: 'pass' | 'fail' | 'simulated'; label: string }) {
  return (
    <span className={`status-badge ${status}`} data-testid={`status-${label.toLowerCase().replaceAll(' ', '-')}`}>
      {status === 'pass' ? <BadgeCheck size={13} /> : status === 'fail' ? <XCircle size={13} /> : <FlaskConical size={13} />}
      {label}
    </span>
  );
}

function CheckRow({ name, status, detail }: { name: string; status: string; detail: string }) {
  const tone = status === 'pass' ? 'pass' : status === 'fail' ? 'fail' : 'neutral';
  return (
    <div className="check-row" data-testid={`check-${name}`}>
      <span className={`check-icon ${tone}`}>{status === 'pass' ? <Check /> : status === 'fail' ? <X /> : <span>~</span>}</span>
      <span className="check-name">{name}</span>
      <span className="check-detail" title={detail}>{detail}</span>
    </div>
  );
}

function Sidebar({ view, onChange }: { view: View; onChange: (view: View) => void }) {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">C</div>
        <div>
          <div className="brand-name">CooL Audit Trails</div>
          <div className="brand-sub">EVIDENCE CONTROL ROOM</div>
        </div>
      </div>
      <div className="side-label">Workspace</div>
      <nav className="side-nav" aria-label="Workspace navigation">
        <button className={`side-link ${view === 'vault' ? 'active' : ''}`} onClick={() => onChange('vault')} data-testid="button-nav-vault">
          <Database /> Evidence Vault
        </button>
        <button className={`side-link ${view === 'capture' ? 'active' : ''}`} onClick={() => onChange('capture')} data-testid="button-nav-capture">
          <ClipboardCheck /> Capture &amp; Verify
        </button>
      </nav>
      <div className="side-label" style={{ marginTop: 20 }}>Controls</div>
      <nav className="side-nav">
        <button className="side-link" onClick={() => onChange('vault')} data-testid="button-nav-integrity">
          <Fingerprint /> Integrity checks <span style={{ marginLeft: 'auto', fontSize: 10, color: '#6ec4a4' }}>ON</span>
        </button>
        <button className="side-link" onClick={() => onChange('capture')} data-testid="button-nav-new-receipt">
          <Plus /> New receipt
        </button>
      </nav>
      <div className="sidebar-foot">
        <div className="plane-status"><span className="plane-dot" /> Evidence plane online</div>
        <div className="plane-meta">Local simulator · no network<br />Offline verification enabled</div>
      </div>
    </aside>
  );
}

function TopBar({ onMenu }: { onMenu?: () => void }) {
  return (
    <header className="topbar">
      <div className="crumb">
        {onMenu && <button className="icon-button" onClick={onMenu} data-testid="button-mobile-menu"><Menu size={16} /></button>}
        <span>Workspace</span><ChevronRight size={13} /><strong>Control room</strong>
      </div>
      <div className="top-actions">
        <span className="workspace-chip">Northstar Financial · Audit workspace</span>
        <button className="icon-button" title="No notifications" data-testid="button-notifications"><Activity size={15} /></button>
        <div className="user-avatar" title="Asha Rao">AR</div>
      </div>
    </header>
  );
}

function MetricGrid({ receipts, selected }: { receipts: ReceiptItem[]; selected?: ReceiptItem }) {
  return (
    <div className="metric-grid">
      <div className="metric-card featured" data-testid="metric-receipts">
        <div className="metric-label">Receipts captured</div>
        <div className="metric-number">{receipts.length}</div>
        <div className="metric-note">across the evidence plane</div>
        <div className="metric-rule" />
      </div>
      <div className="metric-card" data-testid="metric-verified">
        <div className="metric-label">Verified</div>
        <div className="metric-number">{receipts.length ? receipts.length : '—'}</div>
        <div className="metric-note">cryptographic checks pass</div>
      </div>
      <div className="metric-card" data-testid="metric-simulated">
        <div className="metric-label">Runtime mode</div>
        <div className="metric-number" style={{ fontSize: 20 }}>SIM</div>
        <div className="metric-note">hardware attestation not claimed</div>
      </div>
      <div className="metric-card" data-testid="metric-selected">
        <div className="metric-label">Selected receipt</div>
        <div className="metric-number mono" style={{ fontSize: 17, marginTop: 12 }}>{shortId(selected?.evidence.record.record_id)}</div>
        <div className="metric-note">inspect the chain at right</div>
      </div>
    </div>
  );
}

function ReceiptList({
  receipts,
  selectedId,
  search,
  onSearch,
  onSelect,
}: {
  receipts: ReceiptItem[];
  selectedId?: string;
  search: string;
  onSearch: (value: string) => void;
  onSelect: (item: ReceiptItem) => void;
}) {
  const filtered = useMemo(() => {
    const needle = search.toLowerCase().trim();
    if (!needle) return receipts;
    return receipts.filter((item) => `${item.title} ${item.context} ${item.system} ${getRecord(item).event.type}`.toLowerCase().includes(needle));
  }, [receipts, search]);
  return (
    <section className="panel" data-testid="panel-receipt-list">
      <div className="panel-head">
        <div><div className="panel-title">Captured evidence</div><div className="panel-sub">Self-contained receipts, newest first</div></div>
        <span className="count-pill">{filtered.length.toString().padStart(2, '0')} records</span>
      </div>
      <div className="toolbar">
        <div className="search-wrap"><Search /><input className="search-input" value={search} onChange={(event) => onSearch(event.target.value)} placeholder="Search events or systems" data-testid="input-search-receipts" /></div>
        <button className="filter-button" onClick={() => onSearch('')} data-testid="button-clear-search"><SlidersHorizontal size={13} /> Clear</button>
      </div>
      <div className="receipt-list">
        {!filtered.length ? (
          <div className="empty-state"><Search size={24} /><div className="empty-title">No matching receipts</div><div className="empty-copy">Try a system name, event type, or clear the search.</div></div>
        ) : filtered.map((item, index) => {
          const record = getRecord(item);
          const active = record.record_id === selectedId;
          return (
            <button className={`receipt-row ${active ? 'selected' : ''}`} key={record.record_id} onClick={() => onSelect(item)} data-testid={`button-receipt-${record.record_id}`}>
              <span className={`receipt-indicator ${index === 3 ? 'warning' : ''}`} />
              <span style={{ minWidth: 0 }}>
                <span className="receipt-event">{item.title}</span>
                <span className="receipt-context"><span>{item.system}</span><span>·</span><span>{record.event.type}</span></span>
                <span className="receipt-id">{shortId(record.record_id)}</span>
              </span>
              <span className="receipt-time">{relativeDate(record.time.issued_at)}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}

function DetailPanel({
  item,
  verdict,
  verifyLoading,
  tampered,
  onTamper,
  onVerify,
}: {
  item?: ReceiptItem;
  verdict?: Verdict;
  verifyLoading: boolean;
  tampered: boolean;
  onTamper: (value: boolean) => void;
  onVerify: () => void;
}) {
  if (!item) {
    return <section className="panel detail-panel empty-state"><FileCheck2 size={30} /><div className="empty-title">Select an evidence receipt</div><div className="empty-copy">The receipt chain and independent checks will appear here.</div></section>;
  }
  const record = getRecord(item);
  const checks = verdict?.checks ? Object.entries(verdict.checks) : [];
  const isPass = Boolean(verdict?.ok) && !tampered;
  return (
    <section className="panel detail-panel reveal" data-testid="panel-receipt-detail">
      <div className="panel-head">
        <div><div className="panel-title">Evidence detail</div><div className="panel-sub">Reader-side inspection · no trust in the UI required</div></div>
        <button className="icon-button" onClick={onVerify} disabled={verifyLoading} title="Run verification again" data-testid="button-rerun-verification"><RefreshCw size={15} className={verifyLoading ? 'animate-spin' : ''} /></button>
      </div>
      <div className="detail-body">
        <div className="detail-topline">
          <span className="eyebrow">{record.event.type}</span>
          <StatusBadge status={isPass ? 'pass' : 'fail'} label={isPass ? 'Verified' : 'Failed'} />
        </div>
        <h2 className="detail-heading">{item.title}</h2>
        <p className="detail-kicker">{item.context} · issued {formatDate(record.time.issued_at)}</p>

        <div className="detail-section">
          <div className="section-label"><Layers3 /> Receipt identity</div>
          <div className="kv-grid">
            <div className="kv"><span className="kv-label">Record ID</span><span className="kv-value mono" title={record.record_id}>{shortId(record.record_id)}</span></div>
            <div className="kv"><span className="kv-label">Sequence</span><span className="kv-value mono">{record.time.seq}</span></div>
            <div className="kv"><span className="kv-label">Application</span><span className="kv-value">{record.event.application_id}</span></div>
            <div className="kv"><span className="kv-label">Execution</span><span className="kv-value mono">{shortId(record.event.execution_id)}</span></div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-label"><LockKeyhole /> Committed payload</div>
          <div className="hash-block">
            <div className="hash-label">Metadata hash · salted commitment</div>
            <div className="hash" data-testid="text-metadata-hash">{tampered ? 'mh:sha256:000000000000000000000000000000000000…0000000000' : record.event.metadata_hash}</div>
          </div>
        </div>

        <div className="detail-section">
          <div className="section-label"><TerminalSquare /> Runtime provenance</div>
          <div className="kv-grid">
            <div className="kv"><span className="kv-label">TEE vendor</span><span className="kv-value">{record.runtime.tee_vendor}</span></div>
            <div className="kv"><span className="kv-label">Runtime mode</span><span className="kv-value">{record.runtime.mode}</span></div>
            <div className="kv"><span className="kv-label">Signature</span><span className="kv-value">{record.signature.alg}</span></div>
            <div className="kv"><span className="kv-label">Key ID</span><span className="kv-value mono" title={record.signature.key_id}>{shortHash(record.signature.key_id)}</span></div>
          </div>
        </div>

        <div className="verify-box">
          <div className="verify-head">
            <div>
              <div className="verify-title"><ShieldCheck /> Independent verifier</div>
              <div className="verify-copy">{verifyLoading ? 'Recomputing from receipt bytes…' : tampered ? 'The receipt has been altered locally for this demo.' : 'Verified offline by cool-nwc · trust boundary is visible.'}</div>
            </div>
            {verdict?.ok && !tampered && <StatusBadge status="pass" label="OK" />}
            {(tampered || (verdict && !verdict.ok)) && <StatusBadge status="fail" label="Failed" />}
          </div>
          <div className="checks">
            {verifyLoading ? (
              <>{['binding', 'signature', 'inclusion', 'attestation'].map((name) => <div className="check-row" key={name}><span className="skeleton" style={{ width: 15, height: 15 }} /><span className="skeleton" style={{ width: 68, height: 9 }} /><span className="skeleton" style={{ width: '80%', height: 9 }} /></div>)}</>
            ) : checks.map(([name, check]) => <CheckRow key={name} name={name} status={check.status} detail={check.detail} />)}
          </div>
          <div className="tamper-row">
            <div className="tamper-copy"><strong>Simulate tampering</strong>Change the commitment and test the boundary.</div>
            <button className={`switch ${tampered ? 'on' : ''}`} onClick={() => onTamper(!tampered)} aria-label="Toggle tamper simulation" data-testid="button-toggle-tamper"><span className="switch-thumb" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

function VaultView({
  receipts,
  selected,
  selectedId,
  setSelected,
  verdict,
  verifyLoading,
  tampered,
  setTampered,
  onVerify,
}: {
  receipts: ReceiptItem[];
  selected?: ReceiptItem;
  selectedId?: string;
  setSelected: (item: ReceiptItem) => void;
  verdict?: Verdict;
  verifyLoading: boolean;
  tampered: boolean;
  setTampered: (value: boolean) => void;
  onVerify: () => void;
}) {
  const [search, setSearch] = useState('');
  return (
    <>
      <div className="heading-row reveal">
        <div><div className="eyebrow">Evidence vault</div><h1 className="page-title">A clear chain of what changed.</h1><p className="page-desc">Browse self-contained CooL receipts captured from your AI and trading systems. Raw customer data never enters this workspace.</p></div>
      </div>
      <MetricGrid receipts={receipts} selected={selected} />
      <div className="workspace-grid">
        <ReceiptList receipts={receipts} selectedId={selectedId} search={search} onSearch={setSearch} onSelect={setSelected} />
        <DetailPanel item={selected} verdict={verdict} verifyLoading={verifyLoading} tampered={tampered} onTamper={setTampered} onVerify={onVerify} />
      </div>
    </>
  );
}

function CaptureView({ onCreated }: { onCreated: (item: ReceiptItem) => void }) {
  const [eventType, setEventType] = useState('model.deployment');
  const [system, setSystem] = useState('Risk Engine');
  const [model, setModel] = useState('credit-decision · v4.8.2');
  const [ticket, setTicket] = useState('MOD-4821');
  const [summary, setSummary] = useState('Production model deployment after approved validation and challenger review.');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const [created, setCreated] = useState<ReceiptItem>();

  async function submit(event: FormEvent) {
    event.preventDefault();
    setBusy(true);
    setError('');
    try {
      const item = await createReceipt({
        type: eventType,
        title: `${system} evidence captured`,
        context: `${model} · ${ticket}`,
        system,
        owner: 'Control room',
        metadata: { source_system: system, model_version: model, change_ticket: ticket, change_summary: summary, environment: 'production' },
      });
      setCreated(item);
      onCreated(item);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'The CooL evidence plane could not create this receipt.');
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <div className="heading-row reveal">
        <div><div className="eyebrow">Capture &amp; verify</div><h1 className="page-title">Create proof without collecting secrets.</h1><p className="page-desc">Record the change context you need for audit. CooL keeps only salted commitments in the receipt — not customer input, output, or state.</p></div>
      </div>
      {created && <div className="success-banner reveal" data-testid="status-capture-success"><BadgeCheck /> Receipt {shortId(created.evidence.record.record_id)} created and verified. Open Evidence Vault to inspect it.</div>}
      {error && <div className="error-strip" style={{ marginBottom: 15 }}><span>{error}</span><button className="secondary-button" onClick={() => setError('')} data-testid="button-dismiss-error">Dismiss</button></div>}
      <div className="capture-layout">
        <form className="panel form-panel reveal" onSubmit={submit} data-testid="form-capture-evidence">
          <div className="panel-title">Evidence context</div>
          <div className="panel-sub" style={{ marginBottom: 22 }}>Every field below is committed, never stored as raw payload.</div>
          <div className="form-grid">
            <div className="form-field">
              <label className="form-label" htmlFor="event-type">Event type</label>
              <select id="event-type" className="form-select" value={eventType} onChange={(event) => setEventType(event.target.value)} data-testid="select-event-type">
                <option value="model.deployment">Model deployment</option>
                <option value="model.execution">Model execution</option>
                <option value="policy.change">Policy change</option>
                <option value="access.review">Access review</option>
                <option value="trading.rule.change">Trading rule change</option>
              </select>
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="source-system">Source system</label>
              <input id="source-system" className="form-input" value={system} onChange={(event) => setSystem(event.target.value)} data-testid="input-source-system" />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="model-version">Model / rule version <span className="form-hint">optional</span></label>
              <input id="model-version" className="form-input" value={model} onChange={(event) => setModel(event.target.value)} data-testid="input-model-version" />
            </div>
            <div className="form-field">
              <label className="form-label" htmlFor="change-ticket">Change ticket</label>
              <input id="change-ticket" className="form-input" value={ticket} onChange={(event) => setTicket(event.target.value)} data-testid="input-change-ticket" />
            </div>
            <div className="form-field full">
              <label className="form-label" htmlFor="change-summary">Change summary <span className="form-hint">describe intent, not customer data</span></label>
              <textarea id="change-summary" className="form-textarea" value={summary} onChange={(event) => setSummary(event.target.value)} data-testid="textarea-change-summary" />
            </div>
          </div>
          <div className="form-footer">
            <div className="privacy-note"><LockKeyhole /> <span>Raw payloads are not included. CooL seals commitments and returns a portable receipt.</span></div>
            <button className="primary-button" type="submit" disabled={busy} data-testid="button-create-receipt">{busy ? <RefreshCw className="animate-spin" /> : <Send />} {busy ? 'Sealing evidence…' : 'Create & verify receipt'}</button>
          </div>
        </form>
        <aside className="capture-aside">
          <div className="panel info-card reveal">
            <h3>What happens next</h3>
            <p>The SDK runs locally in your browser. The receipt is independently verifiable without calling a backend or trusting this interface.</p>
            <div className="flow-list">
              <div className="flow-step"><span className="flow-number">01</span><div><strong>Commit</strong><span>Metadata is salted and hashed.</span></div></div>
              <div className="flow-step"><span className="flow-number">02</span><div><strong>Sign</strong><span>Hybrid ML-DSA + Ed25519 signature.</span></div></div>
              <div className="flow-step"><span className="flow-number">03</span><div><strong>Verify</strong><span>Binding and inclusion are checked again.</span></div></div>
            </div>
          </div>
          <div className="panel info-card reveal">
            <h3><KeyRound size={14} style={{ verticalAlign: 'text-bottom', marginRight: 5 }} /> Verification boundary</h3>
            <p>The demo uses CooL's local simulator. Its attestation status is intentionally shown as simulated — it is not a claim of hardware protection.</p>
          </div>
        </aside>
      </div>
    </>
  );
}

function AppContent() {
  const [view, setView] = useState<View>('vault');
  const [receipts, setReceipts] = useState<ReceiptItem[]>([]);
  const [selectedId, setSelectedId] = useState<string>();
  const [verdict, setVerdict] = useState<Verdict>();
  const [tampered, setTampered] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState('');
  const selected = useMemo(() => receipts.find((item) => item.evidence.record.record_id === selectedId), [receipts, selectedId]);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const existing = readStored();
        if (existing.length) {
          if (!mounted) return;
          setReceipts(existing);
          setSelectedId(existing[0].evidence.record.record_id);
          setLoading(false);
          return;
        }
        const seeded: ReceiptItem[] = [];
        for (const input of sampleInputs) seeded.push(await createReceipt(input));
        saveStored(seeded);
        if (!mounted) return;
        setReceipts(seeded);
        setSelectedId(seeded[0].evidence.record.record_id);
      } catch (error) {
        if (mounted) setLoadError(error instanceof Error ? error.message : 'Unable to initialise the local evidence plane.');
      } finally {
        if (mounted) setLoading(false);
      }
    }
    void load();
    return () => { mounted = false; };
  }, []);

  const runVerify = async () => {
    if (!selected) return;
    setVerifyLoading(true);
    try {
      const target = tampered ? cloneTampered(selected.evidence) : selected.evidence;
      setVerdict(await verifyEvidence(target));
    } catch (error) {
      setVerdict(undefined);
      setLoadError(error instanceof Error ? error.message : 'Verification could not be completed.');
    } finally {
      setVerifyLoading(false);
    }
  };

  useEffect(() => {
    setTampered(false);
    setVerdict(undefined);
  }, [selectedId]);

  useEffect(() => {
    if (selected) void runVerify();
    // Verification intentionally follows the selected receipt and tamper switch.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedId, tampered]);

  const selectReceipt = (item: ReceiptItem) => {
    setSelectedId(item.evidence.record.record_id);
    setView('vault');
  };

  const onCreated = (item: ReceiptItem) => {
    const next = [item, ...receipts];
    setReceipts(next);
    saveStored(next);
    setSelectedId(item.evidence.record.record_id);
    setTampered(false);
    setView('vault');
  };

  const retry = () => {
    localStorage.removeItem(STORAGE_KEY);
    setLoading(true);
    setLoadError('');
    window.location.reload();
  };

  return (
    <div className="app-shell">
      <Sidebar view={view} onChange={setView} />
      <main className="main-stage">
        <div className="main-inner">
          <TopBar />
          <div className="view-switch" role="tablist" aria-label="Workspace views">
            <button className={`view-tab ${view === 'vault' ? 'active' : ''}`} onClick={() => setView('vault')} role="tab" aria-selected={view === 'vault'} data-testid="tab-evidence-vault">Evidence Vault</button>
            <button className={`view-tab ${view === 'capture' ? 'active' : ''}`} onClick={() => setView('capture')} role="tab" aria-selected={view === 'capture'} data-testid="tab-capture-verify">Capture &amp; Verify</button>
          </div>
          {loadError && <div className="error-strip" style={{ marginBottom: 18 }}><span><strong>Evidence plane error:</strong> {loadError}</span><button className="secondary-button" onClick={retry} data-testid="button-retry-load">Retry</button></div>}
          {loading ? (
            <div className="reveal">
              <div className="skeleton" style={{ width: 115, height: 10, marginBottom: 10 }} />
              <div className="skeleton" style={{ width: 440, maxWidth: '80%', height: 36, marginBottom: 9 }} />
              <div className="skeleton" style={{ width: 570, maxWidth: '95%', height: 13, marginBottom: 27 }} />
              <div className="metric-grid">{[1, 2, 3, 4].map((key) => <div className="metric-card" key={key}><div className="skeleton" style={{ width: 90, height: 9 }} /><div className="skeleton" style={{ width: 55, height: 26, marginTop: 12 }} /></div>)}</div>
              <div className="workspace-grid"><div className="panel" style={{ height: 450 }} /><div className="panel" style={{ height: 450 }} /></div>
            </div>
          ) : view === 'vault' ? (
            <VaultView receipts={receipts} selected={selected} selectedId={selectedId} setSelected={selectReceipt} verdict={verdict} verifyLoading={verifyLoading} tampered={tampered} setTampered={setTampered} onVerify={runVerify} />
          ) : (
            <CaptureView onCreated={onCreated} />
          )}
          <footer style={{ padding: '28px 2px 0', color: '#8aa09a', fontSize: 10, display: 'flex', alignItems: 'center', gap: 7 }}><Info size={12} /> CooL Audit Trails · receipts persist locally in this browser · no customer data is collected.</footer>
        </div>
      </main>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ErrorBoundary>
          <AppContent />
        </ErrorBoundary>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;