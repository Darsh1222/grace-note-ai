import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Zap, Shield, BarChart3, Eye, Network, Lock } from "lucide-react";
import heroBg from "@/assets/shadow-hero-bg.jpg";
import dashboard from "@/assets/shadow-dashboard.jpg";

const logos = ["NEXORA", "LUMEN", "VERTEX", "QUARTZ", "HELIX", "ORBIT", "AXIOM", "ZENITH"];

const benefits = [
  {
    icon: Eye,
    title: "Continuous Discovery",
    desc: "Detect every unsanctioned AI tool, agent, and integration the moment it appears across your stack.",
  },
  {
    icon: Shield,
    title: "Policy-Aware Guardrails",
    desc: "Apply granular controls to what autonomous agents can read, write, and execute — without slowing teams down.",
  },
  {
    icon: BarChart3,
    title: "Risk Intelligence",
    desc: "Quantify exposure across data leakage, model misuse, and runaway automation with a single risk score.",
  },
  {
    icon: Lock,
    title: "Audit-Ready by Default",
    desc: "Every prompt, action, and decision is logged and exportable for SOC 2, ISO 27001, and the EU AI Act.",
  },
];

const features = [
  {
    label: "Visibility",
    title: "Map every AI agent in your enterprise",
    desc: "From ChatGPT plugins to autonomous workflows, see the full graph of who's running what, where, and on which data — in real time.",
    icon: Network,
  },
  {
    label: "Control",
    title: "Govern autonomous actions before they run",
    desc: "Set permission boundaries by team, system, and data class. Block risky tool calls automatically — approve the rest in one click.",
    icon: Shield,
  },
  {
    label: "Insight",
    title: "Turn shadow signals into board-level metrics",
    desc: "Translate raw agent telemetry into the KPIs leadership actually asks about: ROI, risk, adoption, and compliance posture.",
    icon: BarChart3,
  },
];

export default function AiShadowOperating() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased font-[Inter,sans-serif] selection:bg-orange-500/40">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
            <span className="font-semibold tracking-wider text-sm">SHADOW.OPS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#why" className="hover:text-white transition">Why us</a>
            <a href="#benefits" className="hover:text-white transition">Benefits</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
            <Link to="/" className="hover:text-white transition">Back to GraceAI</Link>
          </nav>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-white/90 transition"
          >
            Get started <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-90 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-[#0a0a0a]" />
        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block text-xs tracking-widest text-white/70 border border-white/15 rounded-full px-4 py-1.5 backdrop-blur-sm">
            Trusted by +2,400 security & AI teams
          </span>
          <h1 className="mt-8 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            Govern the AI agents
            <br />
            already running your business
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Shadow.Ops gives security, IT, and AI leaders one place to discover, control,
            and audit every autonomous agent — sanctioned or not — before it ships risk into production.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              Get started <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-20 max-w-5xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_30px_120px_-20px_rgba(239,68,68,0.35)]">
            <img src={dashboard} alt="Shadow.Ops dashboard" width={1440} height={960} className="w-full block" />
          </div>
        </div>
      </section>

      {/* LOGOS */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-center text-white/60 text-sm tracking-wide mb-10">
            Trusted by the world's most innovative teams
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/5 rounded-xl overflow-hidden border border-white/5">
            {logos.map((l) => (
              <div
                key={l}
                className="bg-[#0a0a0a] h-20 flex items-center justify-center text-white/50 font-semibold tracking-[0.25em] text-sm hover:text-white/80 transition"
              >
                {l}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl">
            <p className="text-orange-500 text-sm font-medium mb-4">Why choose us?</p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
              The difference between
              <br /> shadow risk and shadow advantage
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 rounded-2xl p-8 bg-gradient-to-br from-red-600/30 via-orange-500/10 to-transparent border border-white/10 min-h-[320px] flex items-end">
              <div>
                <p className="text-white/60 text-sm">Why Shadow.Ops?</p>
                <p className="mt-2 text-2xl font-medium">Built for the agentic era.</p>
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-4 h-4 text-orange-500" />
                <p className="font-medium">Our platform</p>
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                {[
                  "Real-time agent discovery",
                  "Action-level guardrails",
                  "Unified audit trail",
                  "Enterprise-grade security",
                  "Deploys in under an hour",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-orange-500 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8 bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-4 h-4 text-white/50" />
                <p className="font-medium text-white/80">Others</p>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                {[
                  "Quarterly manual audits",
                  "Prompt-only logging",
                  "Generic DLP rules",
                  "Limited integration coverage",
                  "Months of rollout",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-white/30 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-orange-500 text-sm font-medium mb-4">Benefits</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Turn shadow AI into a competitive, controlled advantage
          </h2>

          <div className="mt-14 rounded-2xl overflow-hidden border border-white/10 relative">
            <img src={dashboard} alt="" loading="lazy" className="w-full block opacity-90" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>

          <div className="mt-12 grid md:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-xl p-6 bg-white/[0.03] border border-white/10">
                <b.icon className="w-5 h-5 text-orange-500 mb-4" />
                <h3 className="font-medium mb-2">{b.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-orange-500 text-sm font-medium mb-4">Features</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Powerful controls to operate AI with confidence
          </h2>

          <div className="mt-14 space-y-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-12 grid md:grid-cols-2 gap-10 items-center"
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-orange-500 mb-4">
                    <f.icon className="w-4 h-4" /> {f.label}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{f.title}</h3>
                  <p className="text-white/65 leading-relaxed">{f.desc}</p>
                  <a href="#pricing" className="mt-6 inline-flex items-center gap-2 text-sm bg-white text-black px-4 py-2 rounded-full hover:bg-white/90 transition">
                    Get started <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
                <div className={`rounded-xl overflow-hidden border border-white/10 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <img src={dashboard} alt="" loading="lazy" className="w-full block" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-orange-500 text-sm font-medium mb-4 text-center">Pricing</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-center max-w-3xl mx-auto">
            Know exactly what you pay. No hidden fees, no surprises.
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { name: "Starter", price: "$0", desc: "For small teams piloting agents", features: ["Up to 5 agents", "Basic discovery", "Community support"] },
              { name: "Growth", price: "$24", desc: "Scaling AI across departments", features: ["Unlimited agents", "Real-time guardrails", "SSO & audit logs", "Priority support"], popular: true },
              { name: "Enterprise", price: "Custom", desc: "Regulated and global orgs", features: ["EU AI Act reporting", "Dedicated CSM", "On-prem deployment", "Custom integrations"] },
            ].map((p) => (
              <div
                key={p.name}
                className={`rounded-2xl p-8 border ${p.popular ? "border-orange-500/50 bg-gradient-to-b from-red-600/15 to-transparent" : "border-white/10 bg-white/[0.03]"} relative`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-8 text-[10px] tracking-widest uppercase bg-orange-500 text-black px-3 py-1 rounded-full font-semibold">
                    Popular
                  </span>
                )}
                <p className="text-sm text-white/60">{p.name}</p>
                <p className="mt-4 text-4xl font-semibold">
                  {p.price}
                  {p.price.startsWith("$") && p.price !== "$0" && <span className="text-base text-white/50 font-normal">/user/mo</span>}
                </p>
                <p className="mt-3 text-sm text-white/60">{p.desc}</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-white/80">
                      <Check className="w-4 h-4 text-orange-500 shrink-0" /> {f}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-white text-black font-medium py-2.5 rounded-full hover:bg-white/90 transition">
                  Get started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Ready to bring shadow AI into the light?
          </h2>
          <p className="mt-4 text-white/60">
            Join the security and AI leaders building the operating layer for the agentic enterprise.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition"
          >
            Start your free trial <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Shadow.Ops — A GraceAI exploration.{" "}
        <Link to="/" className="underline hover:text-white/70">Back to home</Link>
      </footer>
    </div>
  );
}
