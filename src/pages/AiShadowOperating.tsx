import { Link } from "react-router-dom";
import {
  Eye,
  Shield,
  BarChart3,
  Lock,
  Network,
  AlertTriangle,
  Users,
  FileWarning,
  GitBranch,
  Bot,
} from "lucide-react";

const benefits = [
  {
    icon: Eye,
    title: "Continuous Discovery",
    desc: "Identify every unsanctioned AI tool, copilot, and autonomous agent the moment it appears across SaaS, browsers, and code.",
  },
  {
    icon: Shield,
    title: "Policy-Aware Guardrails",
    desc: "Apply granular controls to what agents can read, write, and execute — without blocking productive use.",
  },
  {
    icon: BarChart3,
    title: "Risk Intelligence",
    desc: "Quantify exposure across data leakage, model misuse, and runaway automation in a single, explainable score.",
  },
  {
    icon: Lock,
    title: "Audit-Ready by Default",
    desc: "Every prompt, action, and decision is logged and exportable for SOC 2, ISO 27001, NIST AI RMF, and the EU AI Act.",
  },
];

const risks = [
  {
    icon: FileWarning,
    title: "Sensitive Data Leakage",
    desc: "Employees paste source code, customer records, and strategy docs into public LLMs — the Samsung 2023 incident is now a weekly occurrence at most large enterprises.",
  },
  {
    icon: Bot,
    title: "Unsupervised Autonomous Agents",
    desc: "Agentic tools chain tool-calls, send emails, and modify systems with credentials no one inventoried. A single misaligned goal can cascade across production.",
  },
  {
    icon: GitBranch,
    title: "Untracked Model Sprawl",
    desc: "Teams spin up fine-tunes, RAG pipelines, and MCP servers outside IT. Without a registry, there is no way to patch, retire, or evaluate them.",
  },
  {
    icon: Users,
    title: "Compliance & Legal Exposure",
    desc: "Shadow AI usage routinely violates GDPR, HIPAA, the EU AI Act, and customer DPAs — long before legal or security ever hears about it.",
  },
];

const pillars = [
  {
    label: "Visibility",
    title: "Map every AI agent in your enterprise",
    desc: "From ChatGPT plugins to autonomous workflows, see the full graph of who's running what, where, and on which data — in real time. Discovery spans browsers, SaaS, code repos, and network telemetry so nothing operates in the dark.",
    icon: Network,
  },
  {
    label: "Control",
    title: "Govern autonomous actions before they run",
    desc: "Set permission boundaries by team, system, and data class. Block risky tool calls automatically, route ambiguous ones for human approval, and let safe agents move at full speed.",
    icon: Shield,
  },
  {
    label: "Insight",
    title: "Turn shadow signals into board-level metrics",
    desc: "Translate raw agent telemetry into the KPIs leadership actually asks about: ROI, risk, adoption, and compliance posture — without requiring a data team to build the dashboards.",
    icon: BarChart3,
  },
];

export default function AiShadowOperating() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased font-[Inter,sans-serif] selection:bg-orange-500/40">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
            <span className="font-semibold tracking-wider text-sm">SHADOW.OPS</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#what" className="hover:text-white transition">What it is</a>
            <a href="#risks" className="hover:text-white transition">Risks</a>
            <a href="#model" className="hover:text-white transition">The model</a>
            <a href="#benefits" className="hover:text-white transition">Benefits</a>
            <Link to="/" className="hover:text-white transition">Back to GraceAI</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Subtle gradient backdrop instead of generated image */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(239,68,68,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,_#0a0a0a)]" />

        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block text-xs tracking-widest text-white/70 border border-white/15 rounded-full px-4 py-1.5 backdrop-blur-sm">
            An informational primer on the Shadow AI Operating model
          </span>
          <h1 className="mt-8 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            Govern the AI agents
            <br />
            already running your business
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            Shadow AI is the unsanctioned, unmonitored use of AI tools and autonomous agents
            inside an organization. The Shadow AI Operating model is the emerging discipline
            of bringing that activity into the light — without slowing it down.
          </p>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section id="what" className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-orange-500 text-sm font-medium mb-4">What is Shadow AI?</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              The AI your security team doesn't know about — yet.
            </h2>
          </div>
          <div className="space-y-5 text-white/75 leading-relaxed">
            <p>
              <span className="text-white font-medium">Shadow AI</span> describes the use of
              generative tools, copilots, browser extensions, and autonomous agents that
              operate outside official IT or security oversight. Employees adopt them to move
              faster; the enterprise inherits the risk.
            </p>
            <p>
              Surveys from CSA, Gartner, and CIO.com place shadow AI usage at over{" "}
              <span className="text-white font-medium">75% of knowledge workers</span>, while
              fewer than 1 in 5 organizations claim a complete inventory of the agents touching
              their data.
            </p>
            <p>
              The <span className="text-white font-medium">Shadow AI Operating model</span> is
              the response: a continuous loop of discover → assess → control → audit applied
              specifically to non-deterministic, agentic systems.
            </p>
          </div>
        </div>
      </section>

      {/* RISKS */}
      <section id="risks" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-orange-500 text-sm font-medium mb-4">Why it matters</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Four risks every enterprise underestimates
          </h2>

          <div className="mt-14 grid md:grid-cols-2 gap-6">
            {risks.map((r) => (
              <div
                key={r.title}
                className="rounded-2xl p-8 bg-white/[0.03] border border-white/10"
              >
                <r.icon className="w-6 h-6 text-orange-500 mb-5" />
                <h3 className="text-xl font-medium mb-3">{r.title}</h3>
                <p className="text-white/65 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE MODEL — three pillars */}
      <section id="model" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-orange-500 text-sm font-medium mb-4">The operating model</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Three pillars: Visibility, Control, Insight
          </h2>

          <div className="mt-14 space-y-6">
            {pillars.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-12"
              >
                <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-orange-500 mb-4">
                  <f.icon className="w-4 h-4" /> {f.label}
                </div>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                  {f.title}
                </h3>
                <p className="text-white/70 leading-relaxed max-w-3xl">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section id="benefits" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-orange-500 text-sm font-medium mb-4">What good looks like</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Turn shadow AI into a controlled advantage
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl p-6 bg-white/[0.03] border border-white/10"
              >
                <b.icon className="w-5 h-5 text-orange-500 mb-4" />
                <h3 className="font-medium mb-2">{b.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALLOUT */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-br from-red-600/10 to-transparent p-8 md:p-10 flex gap-5">
            <AlertTriangle className="w-6 h-6 text-orange-500 shrink-0 mt-1" />
            <div>
              <p className="text-lg font-medium mb-2">Shadow AI is not a tooling problem.</p>
              <p className="text-white/70 leading-relaxed">
                It's an operating-model problem. Banning AI tools simply pushes them further
                into the shadow. The organizations winning with AI are the ones that make the
                sanctioned path the easiest, fastest path — and observe everything else.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Shadow.Ops — informational overview by GraceAI.{" "}
        <Link to="/" className="underline hover:text-white/70">Back to home</Link>
      </footer>
    </div>
  );
}
