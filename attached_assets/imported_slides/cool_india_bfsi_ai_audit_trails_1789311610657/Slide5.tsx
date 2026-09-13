import React, { useState, useEffect, useRef } from "react";
const Slide5: React.FC = () => {
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
  return <div id="slide-5" ref={outerRef} className="w-screen h-screen overflow-hidden relative" style={{
    backgroundColor: "#000"
  }}><div id="slide-inner-5" style={{
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
          }}>{"05"}</span></p></div><div key={2} style={{
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
          }}>{"Impact, Buyers and Next Steps"}</span></p></div><div key={3} style={{
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
          }}>{"Start where the requirement is clearest: Indian brokers and regulated financial institutions with high AI change velocity."}</span></p></div><div key={4} style={{
        position: "absolute",
        left: "52.8px",
        top: "139.2px",
        width: "369.6px",
        height: "369.6px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "61.6px"
      }} /><div key={5} style={{
        position: "absolute",
        left: "52.8px",
        top: "139.2px",
        width: "369.6px",
        height: "9.6px",
        boxSizing: "border-box",
        backgroundColor: "#1EA16F",
        border: "1.33px solid #1EA16F"
      }} /><div key={6} style={{
        position: "absolute",
        left: "70.08px",
        top: "156.48px",
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
          }}>{"Expected impact"}</span></p></div><div key={7} style={{
        position: "absolute",
        left: "70.08px",
        top: "194.88px",
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
            color: "#1EA16F"
          }}>{"\u2022"}</span></p></div><div key={8} style={{
        position: "absolute",
        left: "90.24px",
        top: "194.88px",
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
          }}>{"Faster production of audit evidence"}</span></p></div><div key={9} style={{
        position: "absolute",
        left: "70.08px",
        top: "247.68px",
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
            color: "#1EA16F"
          }}>{"\u2022"}</span></p></div><div key={10} style={{
        position: "absolute",
        left: "90.24px",
        top: "247.68px",
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
          }}>{"Less manual search across tickets, emails and databases"}</span></p></div><div key={11} style={{
        position: "absolute",
        left: "70.08px",
        top: "300.48px",
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
            color: "#1EA16F"
          }}>{"\u2022"}</span></p></div><div key={12} style={{
        position: "absolute",
        left: "90.24px",
        top: "300.48px",
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
          }}>{"Clearer ownership of model and policy changes"}</span></p></div><div key={13} style={{
        position: "absolute",
        left: "70.08px",
        top: "353.28px",
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
            color: "#1EA16F"
          }}>{"\u2022"}</span></p></div><div key={14} style={{
        position: "absolute",
        left: "90.24px",
        top: "353.28px",
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
          }}>{"Independent validation of a receipt\u2019s integrity"}</span></p></div><div key={15} style={{
        position: "absolute",
        left: "70.08px",
        top: "406.08px",
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
            color: "#1EA16F"
          }}>{"\u2022"}</span></p></div><div key={16} style={{
        position: "absolute",
        left: "90.24px",
        top: "406.08px",
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
          }}>{"Stronger readiness for regulatory review"}</span></p></div><div key={17} style={{
        position: "absolute",
        left: "456px",
        top: "139.2px",
        width: "369.6px",
        height: "369.6px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "61.6px"
      }} /><div key={18} style={{
        position: "absolute",
        left: "456px",
        top: "139.2px",
        width: "369.6px",
        height: "9.6px",
        boxSizing: "border-box",
        backgroundColor: "#1E60B4",
        border: "1.33px solid #1E60B4"
      }} /><div key={19} style={{
        position: "absolute",
        left: "473.28px",
        top: "156.48px",
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
          }}>{"Initial buyers"}</span></p></div><div key={20} style={{
        position: "absolute",
        left: "473.28px",
        top: "194.88px",
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
            color: "#1E60B4"
          }}>{"\u2022"}</span></p></div><div key={21} style={{
        position: "absolute",
        left: "493.44px",
        top: "194.88px",
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
          }}>{"Brokers operating retail algo platforms"}</span></p></div><div key={22} style={{
        position: "absolute",
        left: "473.28px",
        top: "247.68px",
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
            color: "#1E60B4"
          }}>{"\u2022"}</span></p></div><div key={23} style={{
        position: "absolute",
        left: "493.44px",
        top: "247.68px",
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
          }}>{"Private banks and large NBFCs"}</span></p></div><div key={24} style={{
        position: "absolute",
        left: "473.28px",
        top: "300.48px",
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
            color: "#1E60B4"
          }}>{"\u2022"}</span></p></div><div key={25} style={{
        position: "absolute",
        left: "493.44px",
        top: "300.48px",
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
          }}>{"Payment and fraud-risk platforms"}</span></p></div><div key={26} style={{
        position: "absolute",
        left: "473.28px",
        top: "353.28px",
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
            color: "#1E60B4"
          }}>{"\u2022"}</span></p></div><div key={27} style={{
        position: "absolute",
        left: "493.44px",
        top: "353.28px",
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
          }}>{"Insurers preparing for AI governance"}</span></p></div><div key={28} style={{
        position: "absolute",
        left: "473.28px",
        top: "406.08px",
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
            color: "#1E60B4"
          }}>{"\u2022"}</span></p></div><div key={29} style={{
        position: "absolute",
        left: "493.44px",
        top: "406.08px",
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
          }}>{"Internal-audit and compliance teams"}</span></p></div><div key={30} style={{
        position: "absolute",
        left: "859.2px",
        top: "139.2px",
        width: "369.6px",
        height: "369.6px",
        boxSizing: "border-box",
        backgroundColor: "#FFFFFF",
        border: "1.33px solid #D5DFED",
        borderRadius: "61.6px"
      }} /><div key={31} style={{
        position: "absolute",
        left: "859.2px",
        top: "139.2px",
        width: "369.6px",
        height: "9.6px",
        boxSizing: "border-box",
        backgroundColor: "#EE8D37",
        border: "1.33px solid #EE8D37"
      }} /><div key={32} style={{
        position: "absolute",
        left: "876.48px",
        top: "156.48px",
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
          }}>{"Pilot plan"}</span></p></div><div key={33} style={{
        position: "absolute",
        left: "876.48px",
        top: "194.88px",
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
          }}>{"\u2022"}</span></p></div><div key={34} style={{
        position: "absolute",
        left: "896.64px",
        top: "194.88px",
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
          }}>{"Pick one high-risk workflow"}</span></p></div><div key={35} style={{
        position: "absolute",
        left: "876.48px",
        top: "247.68px",
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
          }}>{"\u2022"}</span></p></div><div key={36} style={{
        position: "absolute",
        left: "896.64px",
        top: "247.68px",
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
          }}>{"Define mandatory receipt fields with compliance"}</span></p></div><div key={37} style={{
        position: "absolute",
        left: "876.48px",
        top: "300.48px",
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
          }}>{"\u2022"}</span></p></div><div key={38} style={{
        position: "absolute",
        left: "896.64px",
        top: "300.48px",
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
          }}>{"Integrate CooL at the deployment / order-event point"}</span></p></div><div key={39} style={{
        position: "absolute",
        left: "876.48px",
        top: "353.28px",
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
          }}>{"\u2022"}</span></p></div><div key={40} style={{
        position: "absolute",
        left: "896.64px",
        top: "353.28px",
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
          }}>{"Generate a 90-day evidence pack"}</span></p></div><div key={41} style={{
        position: "absolute",
        left: "876.48px",
        top: "406.08px",
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
          }}>{"\u2022"}</span></p></div><div key={42} style={{
        position: "absolute",
        left: "896.64px",
        top: "406.08px",
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
          }}>{"Run a mock audit with internal audit"}</span></p></div><div key={43} style={{
        position: "absolute",
        left: "52.8px",
        top: "549.12px",
        width: "1171.2px",
        height: "74.88px",
        boxSizing: "border-box",
        backgroundColor: "#09152D",
        border: "1.33px solid #09152D",
        borderRadius: "12.48px"
      }} /><div key={44} style={{
        position: "absolute",
        left: "82.56px",
        top: "572.16px",
        width: "1108.8px",
        height: "26.88px",
        boxSizing: "border-box",
        backgroundColor: "transparent",
        padding: "2.67px 5.33px 2.67px 5.33px",
        wordWrap: "break-word"
      }}><p style={{
          textAlign: "center",
          lineHeight: "1.2",
          fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
          marginTop: "0",
          marginBottom: "0"
        }}><span style={{
            fontSize: "calc(15pt * var(--pptx-font-scale, 1))",
            fontFamily: "'Aptos', sans-serif",
            fontWeight: "700",
            color: "#FFFFFF"
          }}>{"Success metric: An auditor can select a change or trading event and independently verify its evidence in minutes \u2014 instead of relying on weeks of reconstructed documentation."}</span></p></div><div key={45} style={{
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
          }}>{"CooL SDK \u2022 India BFSI concept"}</span></p></div><div key={46} style={{
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
          }}>{"Sources: RBI governance direction [web:74][web:120]; SEBI algo records [web:89][web:91]"}</span></p></div></div></div>;
};
export default Slide5;
