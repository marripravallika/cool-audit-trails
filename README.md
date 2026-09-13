# CooL Audit Trails

> A verifiable evidence workspace for AI and trading changes in regulated financial systems.
> 
🌐 Live Demo: https://cool-audit-trails.vercel.app
CooL Audit Trails is a functional browser demo for the problem described in the India BFSI AI audit-trail brief: banks, brokers, NBFCs, and payment teams need to prove what changed, who approved it, and whether the historical record was altered.

The demo keeps the core experience small and testable:

- Browse realistic evidence receipts in a local Evidence Vault.
- Capture a new governed event such as a model deployment, policy change, or tool grant.
- Create a portable cryptographic receipt with the CooL SDK.
- Verify that receipt again with the standalone verifier.
- Toggle an intentional local tamper and watch the binding and signature checks fail.
- Keep receipts in `localStorage` so the evidence remains after a browser reload.

## Why CooL is important here

Normal logs, tickets, spreadsheets, and database rows are operational records. They are useful, but they are not independently verifiable evidence: a later reader still has to trust the system that produced the log.

CooL is the product's proof layer. The application calls:

```ts
const cool = new CooL({ applicationId: "cool-audit-trails" });

const { evidence } = await cool.record({
  type: "model.deployment",
  metadata: {
    system: "Risk Engine",
    version: "v4.8.2",
    approver: "Asha Rao",
  },
  payloads: {
    validation_report: "validation-report-reference",
  },
});

const verdict = await verifyEvidence(evidence);
```

The receipt contains commitments rather than raw customer data. The verifier recomputes the evidence binding and checks the CooL signature and transparency-log proof without needing the original application database. In the local simulator, the runtime is intentionally labeled `simulated`; the demo never presents that mode as hardware attestation.

That gives an auditor a useful separation of concerns:

1. The regulated system owns the workflow and the fields it chooses to capture.
2. CooL binds the captured record to deterministic evidence and signs it.
3. The auditor can verify the portable receipt independently.
4. The application still needs workflow controls to prove that the captured record is complete and that the model decision was correct.

## Architecture / workflow

```text
Capture form
    |
    v
CooL.record({ type, metadata, payloads })
    |
    v
Self-contained cool.evidence.v1 receipt
    |
    +--> localStorage Evidence Vault
    |
    +--> verifyEvidence(receipt)
              |
              +--> binding
              +--> signature
              +--> inclusion
              +--> attestation / enclave status
              +--> anchor status
```

The app is a frontend-only functional prototype. It uses the browser-safe CooL SDK directly and does not send customer data or receipts to a backend.

## Run locally

Requirements:

- Node.js 20+
- pnpm

```bash
pnpm install
pnpm --filter @workspace/cool-audit-trails run dev
```

For a production build:

```bash
PORT=3000 BASE_PATH=/ pnpm --filter @workspace/cool-audit-trails run build
```

The app is a Vite SPA and can be hosted as static files. The Replit preview workflow supplies the runtime port and base path automatically.

## Project structure

- `artifacts/cool-audit-trails/src/App.tsx` — Evidence Vault, Capture & Verify flow, receipt inspection, and tamper demo.
- `artifacts/cool-audit-trails/src/index.css` — product theme and responsive layout.
- `artifacts/cool-audit-trails/package.json` — browser app dependencies, including `cool-nwc`.
- `attached_assets/cool_india_bfsi_ai_audit_trails_1789311610657.pptx` — source problem brief.

## Technical decisions

- **CooL in the critical path:** receipt creation and verification are real SDK calls, not mocked status labels.
- **Local persistence:** `localStorage` keeps the demo self-contained and makes reload behavior visible without requiring a database or secrets.
- **Explicit simulator boundary:** CooL's simulator output is shown as simulated so reviewers can distinguish cryptographic evidence from hardware-backed attestation.
- **No raw payload storage:** the form demonstrates commitment-only capture and does not persist the submitted payload text.
- **No local authentication:** this is a reviewable prototype, not a multi-tenant production system.

## Limitations and next steps

- Receipts are stored only in the current browser profile.
- The demo does not yet connect to a bank's deployment pipeline, trading gateway, policy registry, or retention archive.
- It runs CooL in simulator mode; a production deployment would use a supported attestation provider and an explicit trust-root policy.
- The next production step would be a server-side capture service with role-based approvals, immutable retention storage, signed export bundles, and integrations for RBI/SEBI review workflows.

## License

MIT. See `LICENSE`.
