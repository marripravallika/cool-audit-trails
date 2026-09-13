import React, { useState, useEffect, useRef } from "react";
const Slide4: React.FC = () => {
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
  return <div id="slide-4" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-4" style={{
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
          }}>{"04"}</span></p></div><div key={2} style={{
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
          }}>{"How the Product Fits the Stack"}</span></p></div><div key={3} style={{
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
          }}>{"CooL is the cryptographic evidence layer that runs beside existing AI, trading and compliance systems."}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "105.6px",
        top: "132.48px",
        width: "1065.6px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "12px"
      }} /><div key={5} style={{
        position: "absolute",
        left: "105.6px",
        top: "132.48px",
        width: "15.36px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#09152D",
        border: "1.33px solid #09152D"
      }} /><div key={6} style={{
        position: "absolute",
        left: "139.2px",
        top: "147.84px",
        width: "201.6px",
        height: "22.08px",
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
            color: "#09152D"
          }}>{"Business systems"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "350.4px",
        top: "147.84px",
        width: "782.4px",
        height: "28.8px",
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
            color: "#243044"
          }}>{"Credit / fraud models \u2022 Trading strategies \u2022 Customer and collections agents"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "105.6px",
        top: "221.76px",
        width: "1065.6px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "12px"
      }} /><div key={9} style={{
        position: "absolute",
        left: "105.6px",
        top: "221.76px",
        width: "15.36px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#1E60B4",
        border: "1.33px solid #1E60B4"
      }} /><div key={10} style={{
        position: "absolute",
        left: "139.2px",
        top: "237.12px",
        width: "201.6px",
        height: "22.08px",
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
            color: "#09152D"
          }}>{"Capture layer"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "350.4px",
        top: "237.12px",
        width: "782.4px",
        height: "28.8px",
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
            color: "#243044"
          }}>{"CooL SDK / deployment hook records an approved change or defined event"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "105.6px",
        top: "311.04px",
        width: "1065.6px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "12px"
      }} /><div key={13} style={{
        position: "absolute",
        left: "105.6px",
        top: "311.04px",
        width: "15.36px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#1A897B",
        border: "1.33px solid #1A897B"
      }} /><div key={14} style={{
        position: "absolute",
        left: "139.2px",
        top: "326.4px",
        width: "201.6px",
        height: "22.08px",
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
            color: "#09152D"
          }}>{"Proof layer"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "350.4px",
        top: "326.4px",
        width: "782.4px",
        height: "28.8px",
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
            color: "#243044"
          }}>{"Deterministic CBOR \u2192 SHA-256 commitment \u2192 ML-DSA-65 + Ed25519 seal"}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "105.6px",
        top: "400.32px",
        width: "1065.6px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "12px"
      }} /><div key={17} style={{
        position: "absolute",
        left: "105.6px",
        top: "400.32px",
        width: "15.36px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#EE8D37",
        border: "1.33px solid #EE8D37"
      }} /><div key={18} style={{
        position: "absolute",
        left: "139.2px",
        top: "415.68px",
        width: "201.6px",
        height: "22.08px",
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
            color: "#09152D"
          }}>{"Evidence layer"}</span></p></div><div key={19} style={{
        position: "absolute",
        left: "350.4px",
        top: "415.68px",
        width: "782.4px",
        height: "28.8px",
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
            color: "#243044"
          }}>{"RFC 6962 transparency log \u2192 portable receipt \u2192 retention archive"}</span></p></div><div key={20} style={{
        position: "absolute",
        left: "105.6px",
        top: "489.6px",
        width: "1065.6px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "12px"
      }} /><div key={21} style={{
        position: "absolute",
        left: "105.6px",
        top: "489.6px",
        width: "15.36px",
        height: "72px",
        boxSizing: "border-box",
        backgroundColor: "#1EA16F",
        border: "1.33px solid #1EA16F"
      }} /><div key={22} style={{
        position: "absolute",
        left: "139.2px",
        top: "504.96px",
        width: "201.6px",
        height: "22.08px",
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
            color: "#09152D"
          }}>{"Verification"}</span></p></div><div key={23} style={{
        position: "absolute",
        left: "350.4px",
        top: "504.96px",
        width: "782.4px",
        height: "28.8px",
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
            color: "#243044"
          }}>{"Internal audit \u2022 RBI/SEBI examiner \u2022 external assessor runs offline verification"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "86.4px",
        top: "583.68px",
        width: "1108.8px",
        height: "65.28px",
        boxSizing: "border-box",
        backgroundColor: "#E7F7F3",
        border: "1.33px solid #A7DACD",
        borderRadius: "10.88px"
      }} /><div key={25} style={{
        position: "absolute",
        left: "110.4px",
        top: "601.92px",
        width: "230.4px",
        height: "23.04px",
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
            fontWeight: "700",
            color: "#1A897B"
          }}>{"Important scope boundary:"}</span></p></div><div key={26} style={{
        position: "absolute",
        left: "326.4px",
        top: "592.32px",
        width: "830.4px",
        height: "40.32px",
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
            color: "#243044"
          }}>{"CooL proves a captured record was cryptographically bound and logged; it does not by itself prove that the record includes every required regulatory field, that the model decision was correct, or that a specific model physically executed. Those controls need workflow, integration and\u2014where required\u2014hardware attestation."}</span></p></div><div key={27} style={{
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
          }}>{"CooL SDK \u2022 India BFSI concept"}</span></p></div><div key={28} style={{
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
          }}>{"Product docs: deterministic CBOR, SHA-256, hybrid signatures, transparency log and offline verifier [web:9][page:11]"}</span></p></div></div></div>;
};
export default Slide4;
