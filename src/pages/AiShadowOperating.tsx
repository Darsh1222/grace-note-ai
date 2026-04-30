import { Link } from "react-router-dom";
import { useState } from "react";
import {
  ArrowRight,
  Check,
  X,
  Zap,
  Sparkles,
  Layers,
  Workflow,
  Repeat,
  Gauge,
  Bot,
  ShoppingBag,
  FileText,
  ChevronDown,
  Instagram,
} from "lucide-react";
import heroBg from "@/assets/shadow-hero-bg.jpg";

const benefits = [
  {
    icon: Zap,
    title: "Instant Setup, Zero Hassle",
    desc: "Spin up an AI digital product — guides, templates, mini-tools — in days, not quarters.",
  },
  {
    icon: Sparkles,
    title: "Audience Becomes Revenue",
    desc: "Turn the people already watching you into paying customers with products that solve their actual problems.",
  },
  {
    icon: Repeat,
    title: "Sells While You Sleep",
    desc: "Digital products + AI workflows = a storefront that runs itself between posts, calls, and sleep.",
  },
  {
    icon: Gauge,
    title: "Founder-Level Speed",
    desc: "Ship, iterate, and ship again at the pace of one person with infinite assistants.",
  },
];

const features = [
  {
    label: "AI Digital Products",
    title: "Productize what you already know",
    desc: "Notion templates, prompt packs, mini AI tools, on-demand guides. Package your expertise once and sell it forever — with AI doing the heavy lifting on creation, formatting, and delivery.",
    icon: ShoppingBag,
  },
  {
    label: "Shadow Workflows",
    title: "Operations that run in the background",
    desc: "Content drafting, customer replies, fulfillment, follow-ups — chained AI agents handle the operational layer so the front of the business stays clean and human.",
    icon: Workflow,
  },
  {
    label: "Audience Engine",
    title: "Turn attention into compounding output",
    desc: "Repurpose every post, every reply, every DM into the next product, the next launch, the next email. The audience feeds the system and the system feeds the audience.",
    icon: Bot,
  },
];

const testimonials = [
  {
    quote: "I went from posting for free to launching three digital products in a month. The shadow workflow does the boring 80%.",
    name: "Maya Chen",
    role: "Creator, 120k followers",
  },
  {
    quote: "It's like having a team of five without the team of five. My audience finally has things to actually buy from me.",
    name: "Darius Okafor",
    role: "Indie founder",
  },
  {
    quote: "The instant setup was unreal. We went from idea to a paid AI tool live for our community in four days.",
    name: "Priya Patel",
    role: "Newsletter operator",
  },
];

const faqs = [
  {
    q: "What is AI Shadow Operating?",
    a: "It's a business model where AI agents quietly run the operational layer of a company — content, ops, support, fulfillment — while the founder focuses on audience, taste, and product. The 'shadow' is everything the customer never sees.",
  },
  {
    q: "What do you mean by AI digital products?",
    a: "Things like Notion templates, prompt libraries, mini AI tools, on-demand guides, and custom GPT-style assistants. Low overhead, infinitely duplicable, and a perfect fit for an audience that already trusts you.",
  },
  {
    q: "Do I need to be technical?",
    a: "No. The whole point is that AI handles the technical and operational layer. If you can describe a workflow in plain English, you can run a shadow-operated business.",
  },
  {
    q: "How is this different from just 'using AI'?",
    a: "Most people use AI as a faster keyboard. Shadow Operating uses AI as the org chart — chained agents handling whole workflows end-to-end, not just one prompt at a time.",
  },
  {
    q: "Where do I start?",
    a: "Start with one product and one workflow. Pick the thing your audience asks you for the most. Package it. Then automate the boring parts of selling and delivering it.",
  },
];

export default function AiShadowOperating() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white antialiased font-[Inter,sans-serif] selection:bg-red-500/40">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/60 border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-[0_0_20px_rgba(239,68,68,0.6)]" />
            <span className="font-semibold tracking-wider text-sm">
              AI SHADOW OPS <span className="text-white/50 font-normal">by GraceAI</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#why" className="hover:text-white transition">Why us</a>
            <a href="#benefits" className="hover:text-white transition">Benefits</a>
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <Link to="/" className="hover:text-white transition">Back to GraceAI</Link>
          </nav>
          <a
            href="https://instagram.com/graceai.music"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-white text-black text-sm font-medium px-4 py-2 rounded-full hover:bg-white/90 transition"
          >
            Follow <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover opacity-95 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-[#0a0a0a]" />

        <div className="relative container mx-auto px-6 text-center">
          <span className="inline-block text-xs tracking-widest text-white/80 border border-white/15 rounded-full px-4 py-1.5 backdrop-blur-sm">
            For creators building AI digital products
          </span>
          <h1 className="mt-8 text-5xl md:text-7xl font-semibold leading-[1.05] tracking-tight">
            Take advantage
            <br />
            of your audience.
          </h1>
          <p className="mt-6 text-white/70 max-w-2xl mx-auto text-base md:text-lg">
            AI Shadow Operating is the business model behind the next wave of one-person
            companies. Build AI digital products, run operations in the background, and turn
            attention into a real business.
          </p>
          <div className="mt-10 flex items-center justify-center">
            <a
              href="https://instagram.com/graceai.music"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              Follow the build <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section id="why" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-red-500 text-sm font-medium mb-4">Why this model?</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            The difference between posting content
            <br /> and owning a business.
          </h2>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-1 rounded-2xl p-8 bg-gradient-to-br from-red-600/30 via-red-500/10 to-transparent border border-white/10 min-h-[320px] flex items-end">
              <div>
                <p className="text-white/60 text-sm">Why Shadow Ops?</p>
                <p className="mt-2 text-2xl font-medium">Built for the audience era.</p>
              </div>
            </div>

            <div className="rounded-2xl p-8 bg-white/[0.03] border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <Zap className="w-4 h-4 text-red-500" />
                <p className="font-medium">This model</p>
              </div>
              <ul className="space-y-3 text-sm text-white/80">
                {[
                  "AI digital products that scale",
                  "Workflows replace headcount",
                  "Audience funnels into revenue",
                  "Ship a product in days",
                  "Runs in the background",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-red-500 shrink-0" /> {t}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-8 bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-6">
                <X className="w-4 h-4 text-white/50" />
                <p className="font-medium text-white/80">The old way</p>
              </div>
              <ul className="space-y-3 text-sm text-white/60">
                {[
                  "Trade hours for money",
                  "Hire before you can afford it",
                  "Audience grows, revenue doesn't",
                  "Months to ship anything",
                  "Founder is the bottleneck",
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
          <p className="text-red-500 text-sm font-medium mb-4">Benefits</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Turn attention into confident, fast revenue
          </h2>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-xl p-6 bg-white/[0.03] border border-white/10"
              >
                <b.icon className="w-5 h-5 text-red-500 mb-4" />
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
          <p className="text-red-500 text-sm font-medium mb-4">The pieces</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            Three ingredients of a shadow-operated business
          </h2>

          <div className="mt-14 space-y-6">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.04] to-transparent p-8 md:p-12 grid md:grid-cols-5 gap-10 items-center"
              >
                <div className={`md:col-span-3 ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-red-500 mb-4">
                    <f.icon className="w-4 h-4" /> {f.label}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
                    {f.title}
                  </h3>
                  <p className="text-white/65 leading-relaxed">{f.desc}</p>
                </div>
                <div className={`md:col-span-2 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="aspect-square rounded-2xl border border-white/10 bg-gradient-to-br from-red-600/20 via-red-500/5 to-transparent flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.25),_transparent_70%)]" />
                    <f.icon className="w-20 h-20 text-red-500/80 relative" strokeWidth={1.2} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <p className="text-red-500 text-sm font-medium mb-4">In the wild</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            How creators are using the model
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl p-8 bg-white/[0.03] border border-white/10 flex flex-col"
              >
                <FileText className="w-5 h-5 text-red-500 mb-5" />
                <p className="text-white/85 leading-relaxed mb-6">"{t.quote}"</p>
                <div className="mt-auto">
                  <p className="font-medium">{t.name}</p>
                  <p className="text-sm text-white/50">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-red-500 text-sm font-medium mb-4 text-center">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-center">
            Questions, answered.
          </h2>

          <div className="mt-14 space-y-3">
            {faqs.map((f, i) => {
              const open = openFaq === i;
              return (
                <button
                  key={f.q}
                  onClick={() => setOpenFaq(open ? null : i)}
                  className="w-full text-left rounded-xl border border-white/10 bg-white/[0.03] p-6 hover:bg-white/[0.05] transition"
                >
                  <div className="flex items-center justify-between gap-6">
                    <span className="font-medium">{f.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-white/60 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
                    />
                  </div>
                  {open && (
                    <p className="mt-4 text-sm text-white/65 leading-relaxed">{f.a}</p>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto rounded-2xl border border-white/10 bg-gradient-to-br from-red-600/15 to-transparent p-10 md:p-14 text-center">
            <Layers className="w-7 h-7 text-red-500 mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Watch a shadow-operated business get built in real time.
            </h2>
            <p className="mt-4 text-white/70">
              Follow the GraceAI build journal — products, workflows, what works, what flops.
            </p>
            <a
              href="https://instagram.com/graceai.music"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 bg-white text-black font-medium px-6 py-3 rounded-full hover:bg-white/90 transition"
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
