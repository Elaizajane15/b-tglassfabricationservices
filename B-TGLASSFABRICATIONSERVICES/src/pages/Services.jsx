import { useNavigate } from "react-router-dom";
import { C, IMG, SERVICES_DATA } from "../lib/constants";
import Reveal from "../components/Reveal";

const PROCESS = [
  { n:"1", t:"Consultation", b:"Site visit, measurements, material discussion." },
  { n:"2", t:"Quotation",    b:"Detailed itemised quote within 48 hours." },
  { n:"3", t:"Fabrication",  b:"Precisely fabricated in our Cebu workshop." },
  { n:"4", t:"Installation", b:"On-schedule installation, minimal disruption." },
];

export default function Services() {
  const navigate = useNavigate();
  const go = to => navigate(to);

  return (
    <div>
      {/* Hero banner */}
      <div style={{ position:"relative", height:"65vh", overflow:"hidden", display:"flex", alignItems:"flex-end" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.services})`, backgroundSize:"cover", backgroundPosition:"center" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(13,27,53,0.45) 0%, rgba(13,27,53,0.92) 100%)" }} />
        <div style={{ position:"relative", maxWidth:1280, margin:"0 auto", padding:"0 48px 72px", width:"100%" }}>
          <Reveal>
            <p style={{ fontSize:11, color:C.gold, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:16 }}>Services</p>
            <h1 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(44px,6vw,80px)", fontWeight:700, color:"#fff", lineHeight:1.05, margin:0 }}>
              Everything in Glass<br /><em style={{ fontStyle:"italic", color:C.glass, fontWeight:400 }}>&amp; Aluminum.</em>
            </h1>
          </Reveal>
        </div>
      </div>

      {/* Services grid with images */}
      <section style={{ background:"#fff", padding:"100px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:1, background:C.border }} className="threeCol">
            {SERVICES_DATA.map((s,i) => (
              <Reveal key={s.num} delay={i*0.07}>
                <div style={{ position:"relative", overflow:"hidden", cursor:"default" }}
                  onMouseEnter={e => { e.currentTarget.querySelector(".svcImg").style.transform="scale(1.06)"; }}
                  onMouseLeave={e => { e.currentTarget.querySelector(".svcImg").style.transform="scale(1)"; }}>
                  <div className="svcImg" style={{ height:240, backgroundImage:`url(${s.img})`, backgroundSize:"cover", backgroundPosition:"center", transition:"transform .55s ease" }} />
                  <div style={{ background:"#fff", padding:"32px 28px" }}>
                    <span style={{ fontSize:10, color:C.glass, letterSpacing:"0.12em", display:"block", marginBottom:12 }}>{s.num}</span>
                    <div style={{ width:24, height:2, background:C.navy, marginBottom:16 }} />
                    <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:22, fontWeight:700, color:C.navy, margin:"0 0 10px" }}>{s.title}</h3>
                    <p style={{ fontSize:13, lineHeight:1.75, color:C.muted }}>{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ position:"relative", overflow:"hidden", padding:"100px 0" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.contact})`, backgroundSize:"cover", backgroundAttachment:"fixed", backgroundPosition:"center" }} />
        <div style={{ position:"absolute", inset:0, background:"rgba(13,27,53,0.93)" }} />
        <div style={{ position:"relative", maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <Reveal>
            <p style={{ fontSize:11, color:C.gold, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:16 }}>How It Works</p>
            <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(28px,3vw,52px)", fontWeight:700, color:"#fff", lineHeight:1.1, margin:"0 0 64px" }}>Our Process.</h2>
          </Reveal>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:48, position:"relative" }} className="fourCol">
            <div style={{ position:"absolute", top:40, left:"12%", right:"12%", height:1, background:`linear-gradient(to right, ${C.gold}, rgba(139,189,212,0.3), ${C.gold})`, opacity:0.3 }} />
            {PROCESS.map((p,i) => (
              <Reveal key={p.n} delay={i*0.12}>
                <div style={{ textAlign:"center" }}>
                  <div style={{ width:72, height:72, borderRadius:"50%", border:`1px solid ${C.gold}`, display:"flex", alignItems:"center", justifyContent:"center", margin:"0 auto 28px", background:"rgba(13,27,53,0.8)" }}>
                    <span style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:32, fontWeight:700, color:C.gold }}>{p.n}</span>
                  </div>
                  <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:20, fontWeight:700, color:"#fff", margin:"0 0 10px" }}>{p.t}</p>
                  <p style={{ fontSize:13, color:"rgba(255,255,255,0.45)", lineHeight:1.7 }}>{p.b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:C.off, padding:"96px 48px", textAlign:"center" }}>
        <Reveal>
          <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(28px,4vw,52px)", fontWeight:700, color:C.navy, margin:"0 0 40px", lineHeight:1.1 }}>Let's Discuss Your Project.</h2>
          <button onClick={() => go("/contact")} style={{ background:C.navy, color:"#fff", border:"none", borderRadius:1, padding:"15px 44px", fontSize:12, cursor:"pointer", letterSpacing:"0.14em", fontFamily:"'DM Sans',sans-serif", fontWeight:700, textTransform:"uppercase" }}>Get a Quote →</button>
        </Reveal>
      </section>
    </div>
  );
}
