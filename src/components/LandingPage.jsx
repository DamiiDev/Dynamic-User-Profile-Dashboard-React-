import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaConnectdevelop,
  FaSearch,
  FaIdBadge,
  FaUserFriends,
  FaUser,
  FaCode,
} from "react-icons/fa";
import { FiUserPlus, FiArrowRight } from "react-icons/fi";

/* ── tiny hook: fade-up on scroll ── */
function useFadeUp() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) el.classList.add("visible"); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

/* ── animated counter ── */
function Counter({ end, suffix = "" }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      obs.disconnect();
      let start = 0;
      const step = Math.ceil(end / 60);
      const t = setInterval(() => {
        start += step;
        if (start >= end) { setCount(end); clearInterval(t); }
        else setCount(start);
      }, 20);
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function LandingPage() {
  const navigate = useNavigate();
  const heroRef   = useFadeUp();
  const featRef   = useFadeUp();
  const stepsRef  = useFadeUp();
  const statsRef  = useFadeUp();

  return (
    <>
      <div className="lp">
        {/* ── NAV ── */}
        <nav className="lp-nav">
          <div className="lp-logo">
            <span>Dev</span><span>Trybe</span>
          </div>
          <div className="lp-nav-btns">
            <button className="btn-ghost" onClick={() => navigate("/LoginPage")}>Login</button>
            <button className="btn-primary" onClick={() => navigate("/AddNewUser")}>Sign Up</button>
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="lp-hero">
          <div ref={heroRef} className="fade-up" style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
            <div className="hero-badge">
              <span /> Developer Network
            </div>
            <h1 className="hero-title">
              Where Developers <em>Connect</em> and Grow
            </h1>
            <p className="hero-sub">
              Build meaningful connections with developers from every background.
              Showcase your work, explore talent, and grow your network in one place.
            </p>
            <div className="hero-btns">
              <button className="btn-lg btn-lg-primary" onClick={() => navigate("/AddNewUser")}>
                Get Started <FiArrowRight />
              </button>
              <button className="btn-lg btn-lg-outline">
                Learn More
              </button>
            </div>

            {/* decorative grid
            <div className="hero-grid">
              {[...Array(6)].map((_, i) => (
                <div className="hero-grid-cell" key={i}>
                  <div className="hgc-dot" style={{ opacity: 0.4 + (i % 3) * 0.2 }} />
                  <div className="hgc-line w80" />
                  <div className="hgc-line w50" />
                  {i % 2 === 0 && <div className="hgc-line w65" />}
                </div>
              ))}
            </div> */}
          </div>
        </section>

        {/* ── STATS ── */}
        <div ref={statsRef} className="lp-stats fade-up">
          <div className="stat-cell">
            <div className="stat-num"><Counter end={2400} suffix="+" /></div>
            <div className="stat-label">Developers</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num"><Counter end={180} suffix="+" /></div>
            <div className="stat-label">Skills Tracked</div>
          </div>
          <div className="stat-cell">
            <div className="stat-num"><Counter end={98} suffix="%" /></div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </div>

        {/* ── FEATURES ── */}
        <section className="lp-section">
          <div ref={featRef} className="fade-up">
            <div className="section-eyebrow">Why DevTrybe</div>
            <h2 className="section-title">Everything you need to grow</h2>
            <p className="section-sub">
              A complete platform built for developers from profile building to
              community discovery.
            </p>
            <div className="features-grid">
              {[
                { icon: <FaConnectdevelop />, title: "Connect Easily", desc: "Follow developers and stay updated with their journey in real time." },
                { icon: <FaIdBadge />,        title: "Showcase Your Profile", desc: "Create a personal dev card with your skills and social links." },
                { icon: <FaSearch />,         title: "Discover Talent", desc: "Find developers by skills, roles, or interests instantly." },
                { icon: <FaUserFriends />,    title: "Grow Your Network", desc: "Build meaningful, lasting connections within the tech community." },
              ].map((f, i) => (
                <div className="feat-card" key={i}>
                  <div className="feat-icon">{f.icon}</div>
                  <div className="feat-title">{f.title}</div>
                  <div className="feat-desc">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STEPS ── */}
        <section className="lp-section" style={{ background: "var(--surface)" }}>
          <div ref={stepsRef} className="fade-up">
            <div className="section-eyebrow">How It Works</div>
            <h2 className="section-title">Up and running in 3 steps</h2>
            <p className="section-sub">
              Getting started is simple. Build your profile, explore the community,
              and start connecting today.
            </p>
            <div className="steps-grid">
              {[
                { icon: <FaUser />,    title: "Create Your Profile",   desc: "Sign up and build your developer identity with skills and links.", num: "01" },
                { icon: <FaCode />,    title: "Explore Developers",    desc: "Browse and discover amazing talents from across the tech world.", num: "02" },
                { icon: <FiUserPlus />,title: "Connect and Follow",    desc: "Follow developers on all social platforms and grow your network.", num: "03" },
              ].map((s, i) => (
                <div className="step-card" key={i}>
                  <div className="step-num">{s.num}</div>
                  <div className="step-icon">{s.icon}</div>
                  <div className="step-title">{s.title}</div>
                  <div className="step-desc">{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <div className="lp-cta">
          <h2 className="cta-title">Ready to join <em>DevTrybe</em>?</h2>
          <p className="cta-sub">
            Join thousands of developers already building their network,
            showcasing their skills, and growing their careers.
          </p>
          <button className="btn-lg btn-lg-primary" onClick={() => navigate("/AddNewUser")}>
            Create Free Account <FiArrowRight />
          </button>
        </div>

        {/* ── FOOTER ── */}
        <footer className="lp-footer">
          <div className="footer-logo"><span>Dev</span><span>Trybe</span></div>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Contact</a>
            <a href="#">Privacy</a>
          </div>
          <div className="footer-copy">© {new Date().getFullYear()} DevTrybe</div>
        </footer>
      </div>
    </>
  );
}
