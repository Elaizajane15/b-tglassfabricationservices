import { useState } from "react";
import { C, IMG, SERVICES_DATA } from "../lib/constants";
import Reveal from "../components/Reveal";
import { Logo } from "../components/Logo";
import { PhoneIcon, MailIcon, PinIcon, GlobeIcon, ClockIcon, CheckIcon } from "../components/Icons";

const INFO = [
  { icon:<PhoneIcon size={18} />, label:"Phone",   val:"09624920133" },
  { icon:<MailIcon size={18} />,  label:"Email",   val:"elaizajanemoreno3@gmail.com" },
  { icon:<PinIcon size={18} />,   label:"Address", val:"blk 18 lot 13 Esperanza Homes,\nCan-asujan, Carcar City, Cebu" },
  { icon:<GlobeIcon size={18} />, label:"Website", val:"bandtglass.com" },
  { icon:<ClockIcon size={18} />, label:"Hours",   val:"Monday – Saturday\n8:00 AM – 5:00 PM" },
];

const ADDRESS = "Blk 18 Lot 13 Esperanza Homes, Can-asujan, Carcar City, Cebu, Philippines";
const MAP_EMBED_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

// Get a free key at https://web3forms.com (enter the Gmail that should receive inquiries)
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name:"", email:"", phone:"", service:"", message:"" });
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const set = k => e => setForm({ ...form, [k]:e.target.value });

  const handleSubmit = async () => {
    setError("");
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError("Please fill in your name, email, and project details.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!WEB3FORMS_KEY) {
      setError("Contact form is not configured yet. Please call or email us directly.");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: `New Quote Request from ${form.name} — ${form.service || "General"}`,
          from_name: "B & T Glass Quote Request",
          replyto: form.email,
          name: form.name,
          email: form.email,
          phone: form.phone,
          service: form.service || "Not specified",
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setSent(true);
        setForm({ name:"", email:"", phone:"", service:"", message:"" });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <div>
      {/* Cinematic banner */}
      <div style={{ position:"relative", height:"55vh", overflow:"hidden", display:"flex", alignItems:"flex-end" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url(${IMG.contact})`, backgroundSize:"cover", backgroundPosition:"center" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to bottom, rgba(13,27,53,0.4) 0%, rgba(13,27,53,0.92) 100%)" }} />
        <div style={{ position:"relative", maxWidth:1280, margin:"0 auto", padding:"0 48px 72px", width:"100%" }}>
          <Reveal>
            <p style={{ fontSize:11, color:C.gold, letterSpacing:"0.22em", textTransform:"uppercase", marginBottom:16 }}>Contact Us</p>
            <h1 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:"clamp(44px,6vw,80px)", fontWeight:700, color:"#fff", lineHeight:1.05, margin:0 }}>
              Let's Work<br /><em style={{ fontStyle:"italic", color:C.glass, fontWeight:400 }}>Together.</em>
            </h1>
          </Reveal>
        </div>
      </div>

      {/* Contact content */}
      <section style={{ background:"#fff", padding:"100px 0" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <div style={{ display:"grid", gridTemplateColumns:"380px 1fr", gap:96, alignItems:"start" }} className="contactGrid">
            {/* Info */}
            <Reveal from="left">
              <div>
                <p style={{ fontSize:11, color:C.navy, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:32, fontWeight:700 }}>Get In Touch</p>
                {INFO.map(c => (
                  <div key={c.label} style={{ display:"flex", gap:20, padding:"24px 0", borderBottom:`1px solid ${C.border}`, alignItems:"flex-start" }}>
                    <div style={{ width:44, height:44, borderRadius:"50%", background:C.off, border:`1px solid ${C.border}`, display:"flex", alignItems:"center", justifyContent:"center", color:C.navy, flexShrink:0 }}>{c.icon}</div>
                    <div>
                      <p style={{ fontSize:10, color:C.navy, letterSpacing:"0.16em", textTransform:"uppercase", marginBottom:5, fontWeight:700 }}>{c.label}</p>
                      <p style={{ fontSize:14, color:C.steel, lineHeight:1.7, whiteSpace:"pre-line" }}>{c.val}</p>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop:32, padding:"24px", background:C.navy, borderRadius:1 }}>
                  <Logo size={36} light />
                  <p style={{ fontSize:11, color:C.gold, letterSpacing:"0.18em", marginTop:12, textTransform:"uppercase" }}>Precision · Quality · Durability</p>
                </div>
              </div>
            </Reveal>

            {/* Form */}
            <Reveal from="right" delay={0.15}>
              {sent ? (
                <div style={{ background:C.navy, borderRadius:2, padding:"72px 56px", display:"flex", flexDirection:"column", alignItems:"flex-start", gap:20 }}>
                  <div style={{ width:60, height:60, borderRadius:"50%", border:`2px solid ${C.gold}`, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ color:C.gold, display:"flex" }}><CheckIcon size={26} /></span>
                  </div>
                  <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:36, fontWeight:700, color:"#fff", margin:0 }}>Message Sent.</h3>
                  <p style={{ fontSize:14, color:"rgba(255,255,255,0.5)", lineHeight:1.75 }}>Thank you for reaching out. We'll be in touch within 24 hours.</p>
                </div>
              ) : (
                <div style={{ background:C.off, border:`1px solid ${C.border}`, borderRadius:2, padding:"52px 48px" }}>
                  <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:28, fontWeight:700, color:C.navy, margin:"0 0 36px" }}>Send Us a Message</p>
                  <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
                      {[["name","Full Name","Juan dela Cruz"],["email","Email","juan@email.com"]].map(([k,l,p])=>(
                        <div key={k} style={{ display:"flex", flexDirection:"column", gap:8 }}>
                          <label style={{ fontSize:10, color:C.navy, letterSpacing:"0.16em", textTransform:"uppercase", fontWeight:700 }}>{l}</label>
                          <input placeholder={p} value={form[k]} onChange={set(k)} style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:1, padding:"13px 16px", fontSize:14, fontFamily:"'DM Sans',sans-serif", color:C.navy, transition:"border-color .2s" }} onFocus={e=>e.target.style.borderColor=C.navy} onBlur={e=>e.target.style.borderColor=C.border} />
                        </div>
                      ))}
                    </div>
                    <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:20 }}>
                      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                        <label style={{ fontSize:10, color:C.navy, letterSpacing:"0.16em", textTransform:"uppercase", fontWeight:700 }}>Phone</label>
                        <input placeholder="09XX XXX XXXX" value={form.phone} onChange={set("phone")} style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:1, padding:"13px 16px", fontSize:14, fontFamily:"'DM Sans',sans-serif", color:C.navy, transition:"border-color .2s" }} onFocus={e=>e.target.style.borderColor=C.navy} onBlur={e=>e.target.style.borderColor=C.border} />
                      </div>
                      <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                        <label style={{ fontSize:10, color:C.navy, letterSpacing:"0.16em", textTransform:"uppercase", fontWeight:700 }}>Service Needed</label>
                        <select value={form.service} onChange={set("service")} style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:1, padding:"13px 16px", fontSize:14, fontFamily:"'DM Sans',sans-serif", color:C.navy }}>
                          <option value="">Select a service</option>
                          {SERVICES_DATA.map(s=><option key={s.num} value={s.title}>{s.title}</option>)}
                          <option value="Other">Other / Not sure</option>
                        </select>
                      </div>
                    </div>
                    <div style={{ display:"flex", flexDirection:"column", gap:8 }}>
                      <label style={{ fontSize:10, color:C.navy, letterSpacing:"0.16em", textTransform:"uppercase", fontWeight:700 }}>Project Details</label>
                      <textarea placeholder="Tell us about your project — dimensions, location, timeline..." value={form.message} onChange={set("message")} rows={5} style={{ background:"#fff", border:`1px solid ${C.border}`, borderRadius:1, padding:"13px 16px", fontSize:14, fontFamily:"'DM Sans',sans-serif", color:C.navy, resize:"vertical", transition:"border-color .2s" }} onFocus={e=>e.target.style.borderColor=C.navy} onBlur={e=>e.target.style.borderColor=C.border} />
                    </div>
                    {error && <p role="alert" style={{ fontSize:13, color:"#b42318", margin:0 }}>{error}</p>}
                    <button onClick={handleSubmit} disabled={sending} style={{ background:C.navy, color:"#fff", border:"none", borderRadius:1, padding:"15px 44px", fontSize:12, cursor:sending?"wait":"pointer", opacity:sending?0.7:1, letterSpacing:"0.14em", fontFamily:"'DM Sans',sans-serif", fontWeight:700, textTransform:"uppercase", alignSelf:"flex-start", transition:"opacity .2s" }} onMouseEnter={e=>{ if(!sending) e.currentTarget.style.opacity=".85"; }} onMouseLeave={e=>{ if(!sending) e.currentTarget.style.opacity="1"; }}>
                      {sending ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ background:C.off, padding:"0 0 100px" }}>
        <div style={{ maxWidth:1280, margin:"0 auto", padding:"0 48px" }}>
          <Reveal>
            <p style={{ fontSize:11, color:C.navy, letterSpacing:"0.2em", textTransform:"uppercase", marginBottom:24, fontWeight:700 }}>Find Us Here</p>
            <div style={{ border:`1px solid ${C.border}`, borderRadius:2, overflow:"hidden", height:420 }}>
              <iframe
                title="B & T Glass Fabrication Services location"
                src={MAP_EMBED_SRC}
                width="100%"
                height="100%"
                style={{ border:0, display:"block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
