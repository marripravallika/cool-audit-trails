import React, { useState, useEffect, useRef } from "react";
const Slide1: React.FC = () => {
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
  return <div id="slide-1" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-1" style={{
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
          }}>{"01"}</span></p></div><div key={2} style={{
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
          }}>{"India\u2019s AI Audit-Trail Gap"}</span></p></div><div key={3} style={{
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
          }}>{"Banks, brokers and NBFCs need defensible records of AI changes and automated decisions."}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "52.8px",
        top: "136.32px",
        width: "1171.2px",
        height: "96px",
        boxSizing: "border-box",
        backgroundColor: "#09152D",
        border: "1.33px solid #09152D",
        borderRadius: "16px"
      }} /><div key={5} style={{
        position: "absolute",
        left: "81.6px",
        top: "159.36px",
        width: "1113.6px",
        height: "49.92px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(17pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(17pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"The core problem: AI is increasingly making or influencing financial decisions, but firms cannot easily prove what changed, who approved it, or whether the historical record was altered."}</span></p></div><div key={6} style={{
        position: "absolute",
        left: "52.8px",
        top: "264px",
        width: "369.6px",
        height: "350.4px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "58.4px"
      }} /><div key={7} style={{
        position: "absolute",
        left: "52.8px",
        top: "264px",
        width: "369.6px",
        height: "9.6px",
        boxSizing: "border-box",
        backgroundColor: "#21B8D1",
        border: "1.33px solid #21B8D1"
      }} /><div key={8} style={{
        position: "absolute",
        left: "70.08px",
        top: "281.28px",
        width: "335.04px",
        height: "30.72px",
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
            fontWeight: "700",
            color: "#09152D"
          }}>{"Where AI is used"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "70.08px",
        top: "319.68px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"\u2022"}</span></p></div><div key={10} style={{
        position: "absolute",
        left: "90.24px",
        top: "319.68px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"Credit scoring and loan eligibility"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "70.08px",
        top: "372.48px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"\u2022"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "90.24px",
        top: "372.48px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"Fraud detection and payment-risk scoring"}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "70.08px",
        top: "425.28px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"\u2022"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "90.24px",
        top: "425.28px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"Customer-service and collections agents"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "70.08px",
        top: "478.08px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#21B8D1"
          }}>{"\u2022"}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "90.24px",
        top: "478.08px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"Retail algorithmic trading"}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "456px",
        top: "264px",
        width: "369.6px",
        height: "350.4px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "58.4px"
      }} /><div key={18} style={{
        position: "absolute",
        left: "456px",
        top: "264px",
        width: "369.6px",
        height: "9.6px",
        boxSizing: "border-box",
        backgroundColor: "#EE8D37",
        border: "1.33px solid #EE8D37"
      }} /><div key={19} style={{
        position: "absolute",
        left: "473.28px",
        top: "281.28px",
        width: "335.04px",
        height: "30.72px",
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
            fontWeight: "700",
            color: "#09152D"
          }}>{"Why normal logs fail"}</span></p></div><div key={20} style={{
        position: "absolute",
        left: "473.28px",
        top: "319.68px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#EE8D37"
          }}>{"\u2022"}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "493.44px",
        top: "319.68px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"Excel, tickets and databases can be edited"}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "473.28px",
        top: "372.48px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#EE8D37"
          }}>{"\u2022"}</span></p></div><div key={23} style={{
        position: "absolute",
        left: "493.44px",
        top: "372.48px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"Evidence is scattered across teams and vendors"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "473.28px",
        top: "425.28px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#EE8D37"
          }}>{"\u2022"}</span></p></div><div key={25} style={{
        position: "absolute",
        left: "493.44px",
        top: "425.28px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"Manual reconstruction is slow during an inspection"}</span></p></div><div key={26} style={{
        position: "absolute",
        left: "473.28px",
        top: "478.08px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#EE8D37"
          }}>{"\u2022"}</span></p></div><div key={27} style={{
        position: "absolute",
        left: "493.44px",
        top: "478.08px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"It is hard to independently validate history"}</span></p></div><div key={28} style={{
        position: "absolute",
        left: "859.2px",
        top: "264px",
        width: "369.6px",
        height: "350.4px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "58.4px"
      }} /><div key={29} style={{
        position: "absolute",
        left: "859.2px",
        top: "264px",
        width: "369.6px",
        height: "9.6px",
        boxSizing: "border-box",
        backgroundColor: "#D5434D",
        border: "1.33px solid #D5434D"
      }} /><div key={30} style={{
        position: "absolute",
        left: "876.48px",
        top: "281.28px",
        width: "335.04px",
        height: "30.72px",
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
            fontWeight: "700",
            color: "#09152D"
          }}>{"Why it is urgent"}</span></p></div><div key={31} style={{
        position: "absolute",
        left: "876.48px",
        top: "319.68px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#D5434D"
          }}>{"\u2022"}</span></p></div><div key={32} style={{
        position: "absolute",
        left: "896.64px",
        top: "319.68px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"RBI\u2019s June 2026 draft elevates model governance"}</span></p></div><div key={33} style={{
        position: "absolute",
        left: "876.48px",
        top: "372.48px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#D5434D"
          }}>{"\u2022"}</span></p></div><div key={34} style={{
        position: "absolute",
        left: "896.64px",
        top: "372.48px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"SEBI\u2019s retail algo-trading framework is live"}</span></p></div><div key={35} style={{
        position: "absolute",
        left: "876.48px",
        top: "425.28px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#D5434D"
          }}>{"\u2022"}</span></p></div><div key={36} style={{
        position: "absolute",
        left: "896.64px",
        top: "425.28px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"A failed audit can cause regulatory and reputational damage"}</span></p></div><div key={37} style={{
        position: "absolute",
        left: "876.48px",
        top: "478.08px",
        width: "15.36px",
        height: "24px",
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
            fontWeight: "700",
            color: "#D5434D"
          }}>{"\u2022"}</span></p></div><div key={38} style={{
        position: "absolute",
        left: "896.64px",
        top: "478.08px",
        width: "315.84px",
        height: "45.12px",
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
          }}>{"Compliance teams need evidence continuously"}</span></p></div><div key={39} style={{
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
          }}>{"CooL SDK \u2022 India BFSI concept"}</span></p></div><div key={40} style={{
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
          }}>{"Sources: RBI draft MRM reporting; SEBI retail algo framework [web:74][web:89]"}</span></p></div></div></div>;
};
export default Slide1;
