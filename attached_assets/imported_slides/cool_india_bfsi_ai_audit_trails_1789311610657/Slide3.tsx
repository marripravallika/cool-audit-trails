import React, { useState, useEffect, useRef } from "react";
const Slide3: React.FC = () => {
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
  return <div id="slide-3" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-3" style={{
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
          }}>{"03"}</span></p></div><div key={2} style={{
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
          }}>{"Proposed Solution: CooL Evidence Receipts"}</span></p></div><div key={3} style={{
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
          }}>{"CooL seals the change record; the regulated firm keeps its operational systems and chooses what metadata to include."}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "46.08px",
        top: "136.32px",
        width: "225.6px",
        height: "115.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "19.2px"
      }} /><div key={5} style={{
        position: "absolute",
        left: "59.52px",
        top: "151.68px",
        width: "24px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"1"}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "87.36px",
        top: "146.88px",
        width: "168px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"AI change / event"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "63.36px",
        top: "182.4px",
        width: "187.2px",
        height: "43.2px",
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
          }}>{"Model update, prompt revision, algo order"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "274.56px",
        top: "174.72px",
        width: "26.88px",
        height: "24.96px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1E60B4"
          }}>{"\u2192"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "292.8px",
        top: "136.32px",
        width: "225.6px",
        height: "115.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "19.2px"
      }} /><div key={10} style={{
        position: "absolute",
        left: "306.24px",
        top: "151.68px",
        width: "24px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"2"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "334.08px",
        top: "146.88px",
        width: "168px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"CooL capture"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "310.08px",
        top: "182.4px",
        width: "187.2px",
        height: "43.2px",
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
          }}>{"Create a canonical change record"}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "521.28px",
        top: "174.72px",
        width: "26.88px",
        height: "24.96px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1E60B4"
          }}>{"\u2192"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "539.52px",
        top: "136.32px",
        width: "225.6px",
        height: "115.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "19.2px"
      }} /><div key={15} style={{
        position: "absolute",
        left: "552.96px",
        top: "151.68px",
        width: "24px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"3"}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "580.8px",
        top: "146.88px",
        width: "168px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"Cryptographic seal"}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "556.8px",
        top: "182.4px",
        width: "187.2px",
        height: "43.2px",
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
          }}>{"Digest + hybrid digital signature"}</span></p></div><div key={18} style={{
        position: "absolute",
        left: "768px",
        top: "174.72px",
        width: "26.88px",
        height: "24.96px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1E60B4"
          }}>{"\u2192"}</span></p></div><div key={19} style={{
        position: "absolute",
        left: "786.24px",
        top: "136.32px",
        width: "225.6px",
        height: "115.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "19.2px"
      }} /><div key={20} style={{
        position: "absolute",
        left: "799.68px",
        top: "151.68px",
        width: "24px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"4"}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "827.52px",
        top: "146.88px",
        width: "168px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"Transparency log"}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "803.52px",
        top: "182.4px",
        width: "187.2px",
        height: "43.2px",
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
          }}>{"Append-only inclusion proof"}</span></p></div><div key={23} style={{
        position: "absolute",
        left: "1014.72px",
        top: "174.72px",
        width: "26.88px",
        height: "24.96px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(18pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1E60B4"
          }}>{"\u2192"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "1032.96px",
        top: "136.32px",
        width: "225.6px",
        height: "115.2px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "19.2px"
      }} /><div key={25} style={{
        position: "absolute",
        left: "1046.4px",
        top: "151.68px",
        width: "24px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"5"}</span></p></div><div key={26} style={{
        position: "absolute",
        left: "1074.24px",
        top: "146.88px",
        width: "168px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"Offline check"}</span></p></div><div key={27} style={{
        position: "absolute",
        left: "1050.24px",
        top: "182.4px",
        width: "187.2px",
        height: "43.2px",
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
          }}>{"Auditor verifies a portable receipt"}</span></p></div><div key={28} style={{
        position: "absolute",
        left: "52.8px",
        top: "288px",
        width: "554.88px",
        height: "131.52px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "21.92px"
      }} /><div key={29} style={{
        position: "absolute",
        left: "70.08px",
        top: "303.36px",
        width: "518.4px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"A. Credit scoring model"}</span></p></div><div key={30} style={{
        position: "absolute",
        left: "70.08px",
        top: "332.16px",
        width: "513.6px",
        height: "43.2px",
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
          }}>{"A bank changes loan-model version 2.3.1 to 2.3.2. Receipt records model ID, version, approver, validation-report hash and deployment time."}</span></p></div><div key={31} style={{
        position: "absolute",
        left: "70.08px",
        top: "384.96px",
        width: "513.6px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1A897B"
          }}>{"Outcome: RBI examiner can validate the change evidence."}</span></p></div><div key={32} style={{
        position: "absolute",
        left: "646.08px",
        top: "288px",
        width: "554.88px",
        height: "131.52px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "21.92px"
      }} /><div key={33} style={{
        position: "absolute",
        left: "663.36px",
        top: "303.36px",
        width: "518.4px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"B. Retail algo order"}</span></p></div><div key={34} style={{
        position: "absolute",
        left: "663.36px",
        top: "332.16px",
        width: "513.6px",
        height: "43.2px",
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
          }}>{"A broker\u2019s \u201CMomentum50\u201D strategy sends an order. Receipt binds the internal order reference, Algo ID, order action and timestamp."}</span></p></div><div key={35} style={{
        position: "absolute",
        left: "663.36px",
        top: "384.96px",
        width: "513.6px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1A897B"
          }}>{"Outcome: Supports a searchable, verifiable audit package for SEBI reviews."}</span></p></div><div key={36} style={{
        position: "absolute",
        left: "52.8px",
        top: "443.52px",
        width: "554.88px",
        height: "131.52px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "21.92px"
      }} /><div key={37} style={{
        position: "absolute",
        left: "70.08px",
        top: "458.88px",
        width: "518.4px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"C. Fraud-policy update"}</span></p></div><div key={38} style={{
        position: "absolute",
        left: "70.08px",
        top: "487.68px",
        width: "513.6px",
        height: "43.2px",
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
          }}>{"A payments/NBFC team changes a fraud-rule threshold. Receipt records the policy version, risk approval and release reference \u2014 without storing raw customer data."}</span></p></div><div key={39} style={{
        position: "absolute",
        left: "70.08px",
        top: "540.48px",
        width: "513.6px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1A897B"
          }}>{"Outcome: Shows who authorized the control change and when."}</span></p></div><div key={40} style={{
        position: "absolute",
        left: "646.08px",
        top: "443.52px",
        width: "554.88px",
        height: "131.52px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "21.92px"
      }} /><div key={41} style={{
        position: "absolute",
        left: "663.36px",
        top: "458.88px",
        width: "518.4px",
        height: "24px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(13pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#09152D"
          }}>{"D. AI assistant tool grant"}</span></p></div><div key={42} style={{
        position: "absolute",
        left: "663.36px",
        top: "487.68px",
        width: "513.6px",
        height: "43.2px",
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
          }}>{"A collections assistant is given permission to call a payment-status API. Receipt binds the tool grant, policy and approver."}</span></p></div><div key={43} style={{
        position: "absolute",
        left: "663.36px",
        top: "540.48px",
        width: "513.6px",
        height: "21.12px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "left",
          lineHeight: "1.2",
          fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(9pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#1A897B"
          }}>{"Outcome: Creates evidence for access-control and model-governance reviews."}</span></p></div><div key={44} style={{
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
          }}>{"CooL SDK \u2022 India BFSI concept"}</span></p></div><div key={45} style={{
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
          }}>{"Product basis: CooL seals prompts, models, policies and tool grants; independent offline verification [page:10][page:11]"}</span></p></div></div></div>;
};
export default Slide3;
