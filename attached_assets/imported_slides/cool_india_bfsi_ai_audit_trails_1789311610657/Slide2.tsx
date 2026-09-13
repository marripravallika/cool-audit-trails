import React, { useState, useEffect, useRef } from "react";
const Slide2: React.FC = () => {
  const outerRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({
    s: 1,
    x: 0,
    y: 0
  });
  useEffect(() => {
    const el = outerRef.current;
    if (!el) return;
    const update = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      const s = Math.min(w / 1279.97, h / 720);
      setLayout({
        s,
        x: (w - 1279.97 * s) / 2,
        y: (h - 720 * s) / 2
      });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  return <div id="slide-2" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-2" style={{
      position: "absolute",
      width: "1279.97px",
      height: "720px",
      overflow: "hidden",
      transformOrigin: "top left",
      color: "#000000",
      backgroundColor: "#F2F6FC",
      transform: `scale(${layout.s})`,
      left: layout.x + "px",
      top: layout.y + "px"
    }}><div key={0} style={{
        position: "absolute",
        left: "0px",
        top: "0px",
        width: "1279.97px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "#21B8D1"
      }} /><div key={1} style={{
        position: "absolute",
        left: "43.2px",
        top: "40.32px",
        width: "52.8px",
        height: "40.32px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(14pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"02"}</span></p></div><div key={2} style={{
        position: "absolute",
        left: "100.8px",
        top: "32.64px",
        width: "1132.8px",
        height: "52.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(28pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(28pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"Market Need: Compliance Is Operational"}</span></p></div><div key={3} style={{
        position: "absolute",
        left: "102.72px",
        top: "89.28px",
        width: "1113.6px",
        height: "31.68px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            color: "#637184"
          }}>{"This is a must-have: regulated firms must show control, traceability and usable audit evidence."}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "52.8px",
        top: "148.8px",
        width: "374.4px",
        height: "211.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "35.2px"
      }} /><div key={5} style={{
        position: "absolute",
        left: "52.8px",
        top: "148.8px",
        width: "374.4px",
        height: "11.52px",
        boxSizing: "border-box",
        backgroundColor: "#1E60B4",
        border: "1.33px solid #1E60B4"
      }} /><div key={6} style={{
        position: "absolute",
        left: "72px",
        top: "174.72px",
        width: "336px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"RBI \u2022 banks & NBFCs"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "72px",
        top: "211.2px",
        width: "336px",
        height: "80.64px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            color: "#243044"
          }}>{"Draft 2026 guidance calls for governance, model inventory, independent validation and oversight of AI/ML model risk."}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "72px",
        top: "305.28px",
        width: "336px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1E60B4"
          }}>{"Buyer: Board, risk and compliance teams"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "451.2px",
        top: "148.8px",
        width: "374.4px",
        height: "211.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "35.2px"
      }} /><div key={10} style={{
        position: "absolute",
        left: "451.2px",
        top: "148.8px",
        width: "374.4px",
        height: "11.52px",
        boxSizing: "border-box",
        backgroundColor: "#1A897B",
        border: "1.33px solid #1A897B"
      }} /><div key={11} style={{
        position: "absolute",
        left: "470.4px",
        top: "174.72px",
        width: "336px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"SEBI \u2022 brokers"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "470.4px",
        top: "211.2px",
        width: "336px",
        height: "80.64px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            color: "#243044"
          }}>{"The retail algo-trading framework took effect in April 2026; brokers must retain detailed order records and audit trails."}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "470.4px",
        top: "305.28px",
        width: "336px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1A897B"
          }}>{"Buyer: Broker compliance and trading tech"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "849.6px",
        top: "148.8px",
        width: "374.4px",
        height: "211.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "35.2px"
      }} /><div key={15} style={{
        position: "absolute",
        left: "849.6px",
        top: "148.8px",
        width: "374.4px",
        height: "11.52px",
        boxSizing: "border-box",
        backgroundColor: "#EE8D37",
        border: "1.33px solid #EE8D37"
      }} /><div key={16} style={{
        position: "absolute",
        left: "868.8px",
        top: "174.72px",
        width: "336px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"DPDP \u2022 data fiduciaries"}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "868.8px",
        top: "211.2px",
        width: "336px",
        height: "80.64px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(11pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            color: "#243044"
          }}>{"Consent and processing records must be managed so they can be demonstrated when required; AI workflows increase the evidence burden."}</span></p></div><div key={18} style={{
        position: "absolute",
        left: "868.8px",
        top: "305.28px",
        width: "336px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(10pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#EE8D37"
          }}>{"Buyer: Privacy, security and product teams"}</span></p></div><div key={19} style={{
        position: "absolute",
        left: "52.8px",
        top: "398.4px",
        width: "1171.2px",
        height: "182.4px",
        boxSizing: "border-box",
        backgroundColor: "#E8F1FA",
        border: "1.33px solid #B9D2EC",
        borderRadius: "30.4px"
      }} /><div key={20} style={{
        position: "absolute",
        left: "78.72px",
        top: "422.4px",
        width: "211.2px",
        height: "28.8px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(16pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"The buying trigger"}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "78.72px",
        top: "460.8px",
        width: "1094.4px",
        height: "62.4px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            color: "#243044"
          }}>{"\u201CShow us the audit trail.\u201D  A broker, bank or NBFC must respond quickly with records that are complete, attributable and difficult to dispute. CooL is positioned as an evidence layer alongside existing GRC, SIEM, database and deployment tools \u2014 not as a replacement for them."}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "78.72px",
        top: "543.36px",
        width: "1094.4px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(12pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1E60B4"
          }}>{"Must-have test: a compliance requirement + recurring audit exposure + operational risk + a clear budget owner."}</span></p></div><div key={23} style={{
        position: "absolute",
        left: "43.2px",
        top: "681.6px",
        width: "403.2px",
        height: "19.2px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(8pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(8pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            color: "#637184"
          }}>{"CooL SDK \u2022 India BFSI concept"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "672px",
        top: "681.6px",
        width: "561.6px",
        height: "19.2px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "right",
          lineHeight: "1.2",
          fontSize: "calc(7pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(7pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            color: "#637184"
          }}>{"Sources: RBI draft MRM guidance [web:74][web:120]; SEBI reporting [web:89][web:91]; DPDP records [web:107]"}</span></p></div></div></div>;
};
export default Slide2;
