import { BrowserRouter, Routes, Route } from "react-router-dom";
import { C } from "./lib/constants";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ fontFamily:"'DM Sans','Helvetica Neue',sans-serif", background:"#fff", color:C.navy, overflowX:"hidden" }}>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,700;1,400;1,700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
          *{box-sizing:border-box;margin:0;padding:0;}
          ::selection{background:rgba(13,27,53,0.15);}
          @keyframes heroIn{from{opacity:0;transform:translateY(36px)}to{opacity:1;transform:none}}
          @keyframes imgFade{from{opacity:0}to{opacity:1}}
          @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(8px)}}
          input:focus,textarea:focus,select:focus{outline:none;}
          button:focus-visible{outline:2px solid ${C.gold};outline-offset:3px;}
          @media(max-width:1024px){
            .navD{display:none!important;}
            .navM{display:flex!important;}
            .twoCol{grid-template-columns:1fr!important;gap:48px!important;}
            .threeCol{grid-template-columns:1fr 1fr!important;}
            .fourCol{grid-template-columns:1fr 1fr!important;gap:24px!important;}
            .contactGrid{grid-template-columns:1fr!important;gap:48px!important;}
          }
          @media(max-width:640px){
            .threeCol{grid-template-columns:1fr!important;}
            .fourCol{grid-template-columns:1fr!important;}
          }
        `}</style>
        <ScrollToTop />
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
