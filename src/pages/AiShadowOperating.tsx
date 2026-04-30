import { Link } from "react-router-dom";
import {
  Eye,
  Network,
  BarChart3,
  Workflow,
  Layers,
  Sparkles,
  Gauge,
  Repeat,
  Instagram,
} from "lucide-react";

const benefits = [
  {
    icon: Gauge,
    title: "Leverage Without Headcount",
    desc: "Scale output without scaling org charts. AI agents handle the repeatable layer of the business so people focus on judgment and creativity.",
  },
  {
    icon: Repeat,
    title: "Always-On Operations",
    desc: "Workflows run in the background — overnight, on weekends, between meetings. The business compounds while the team sleeps.",
  },
  {
    icon: Layers,
    title: "Composable by Design",
    desc: "Each agent is a small, swappable unit. Stack them into bigger workflows, retire them when something better comes along.",
  },
  {
    icon: Sparkles,
    title: "Founder-Level Speed",
    desc: "Ship, iterate, and ship again at the pace of one person with infinite assistants — without giving up the polish of a real team.",
  },
];

const principles = [
  {
    icon: Eye,
    title: "Run quiet, ship loud",
    desc: "The operating layer stays invisible to customers. What they see is faster shipping, sharper craft, and replies that arrive before they expected one.",
  },
  {
    icon: Workflow,
    title: "Workflows over headcount",
    desc: "Before hiring, model the work as a workflow. Most operational roles in a modern business are a sequence of decisions and handoffs — exactly what agents are good at.",
  },
  {
    icon: Network,
    title: "Humans on the edges, agents in the middle",
    desc: "People set the strategy and approve the outputs that matter. Agents do the connective tissue — research, drafting, formatting, follow-up, scheduling.",
  },
];

const pillars = [
  {
    label: "Build",
    title: "Design the business as a system of agents",
    desc: "Map every recurring task — content, support, ops, research, analytics. Each one becomes a small agent with a clear input, output, and owner. The org chart becomes a workflow chart.",
    icon: Layers,
  },
  {
    label: "Operate",
    title: "Let the system run itself, mostly",
    desc: "Agents trigger each other, pass work between tools, and escalate the few decisions that need a human. The founder steps in for taste, strategy, and the things that compound.",
    icon: Workflow,
  },
  {
    label: "Compound",
    title: "Improve the system, not just the output",
    desc: "Every week the workflow gets sharper: a better prompt, a smarter handoff, one less manual step. The business gets faster and cheaper to run while output goes up.",
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
            <span className="font-semibold tracking-wider text-sm">
              AI SHADOW OPS <span className="text-white/50 font-normal">by GraceAI</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#what" className="hover:text-white transition">What it is</a>
            <a href="#principles" className="hover:text-white transition">Principles</a>
            <a href="#model" className="hover:text-white transition">The model</a>
            <a href="#benefits" className="hover:text-white transition">Benefits</a>
            <Link to="/" className="hover:text-white transition">Back to GraceAI</Link>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(239,68,68,0.18),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,_#0a0a0a)]" />

        <div className="relative container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            Run a business
            <br />
            in the background.
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            AI Shadow Operating is a business model where AI agents quietly run the
            operational layer of a company — letting a small team ship like a big one.
          </p>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section id="what" className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-orange-500 text-sm font-medium mb-4">What is AI Shadow Operating?</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
              A business that runs itself, with the founder in the room.
            </h2>
          </div>
          <div className="space-y-5 text-white/75 leading-relaxed">
            <p>
              <span className="text-white font-medium">AI Shadow Operating</span> is a way of
              building a company where the day-to-day work — research, content, ops, support,
              analytics — runs through a layer of AI agents instead of a layer of hires.
            </p>
            <p>
              The "shadow" isn't hidden in a bad way. It's the part of the business customers
              never see: the workflows that draft, schedule, format, follow up, and report. In
              this model, that layer is mostly machines.
            </p>
            <p>
              The result is a small, sharp team operating with the surface area of a much
              larger one — and a founder who can spend their time on the things that actually
              compound.
            </p>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section id="principles" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-orange-500 text-sm font-medium mb-4">Operating principles</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Three ideas the model is built on
          </h2>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {principles.map((r) => (
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

      {/* THE MODEL */}
      <section id="model" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-orange-500 text-sm font-medium mb-4">The model</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Build → Operate → Compound
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
          <p className="text-orange-500 text-sm font-medium mb-4">Why it works</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            What a shadow-operated business actually feels like
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

      {/* CALLOUT + IG */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-br from-red-600/10 to-transparent p-8 md:p-10 text-center">
            <p className="text-2xl md:text-3xl font-semibold tracking-tight mb-3">
              Curious how GraceAI runs in the shadows?
            </p>
            <p className="text-white/70 leading-relaxed mb-6">
              Follow along as we build a company on top of the AI Shadow Operating model.
            </p>
            <a
              href="https://instagram.com/graceai.music"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-medium px-5 py-2.5 rounded-full hover:bg-white/90 transition"
            >
              <Instagram className="w-4 h-4" />
              @graceai.music on Instagram
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/5 py-10 text-center text-xs text-white/40">
        © {new Date().getFullYear()} AI Shadow Ops — by GraceAI.{" "}
        <Link to="/" className="underline hover:text-white/70">Back to home</Link>
      </footer>
    </div>
  );
}
