import { motion } from "framer-motion";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from "recharts";

/**
 * Gradual calf-circumference reduction across treatment cycles.
 * Data modelled on published gastrocnemius BoNT-A studies
 * (Lee et al. Dermatologic Surgery 2004; Han et al. PRS 2009;
 * Yang et al. Aesthetic Plast Surg 2015) — typical 8–14% maximal
 * circumference reduction over 9–12 months with repeat dosing.
 */
const data = [
  { month: "0", baseline: 38.0, treated: 38.0, label: "Baseline" },
  { month: "1", baseline: 38.0, treated: 37.4, label: "Session 1" },
  { month: "3", baseline: 38.0, treated: 36.5, label: "Peak (S1)" },
  { month: "4", baseline: 38.0, treated: 36.2, label: "Session 2" },
  { month: "6", baseline: 38.0, treated: 35.4, label: "Peak (S2)" },
  { month: "8", baseline: 38.0, treated: 35.1, label: "Session 3" },
  { month: "12", baseline: 38.0, treated: 34.3, label: "1 Year" },
];

const stages = [
  {
    stage: "Session 1",
    window: "Weeks 6–10",
    reduction: "1.5–2.0 cm",
    pct: "≈ 4–5%",
    note: "Visible softening of the gastrocnemius bulk; ankle line begins to lengthen.",
  },
  {
    stage: "Session 2",
    window: "Month 4–6",
    reduction: "+1.0–1.5 cm",
    pct: "≈ 7–9% cumulative",
    note: "Muscle atrophy compounds. Calf taper becomes obvious in heels and dresses.",
  },
  {
    stage: "Session 3",
    window: "Month 8–12",
    reduction: "+0.5–1.0 cm",
    pct: "≈ 10–13% cumulative",
    note: "Refined contour. Most patients drop to maintenance every 6–9 months.",
  },
];

const competitors = [
  {
    label: "Generic high-street clinics",
    dose: "Under-dosed (50–80U)",
    result: "Minimal change, patient assumes treatment 'didn't work'.",
  },
  {
    label: "Surgical calf reduction",
    dose: "Resection / neurectomy",
    result: "Permanent but invasive — scarring, 4–6 week recovery, gait risk.",
  },
  {
    label: "CosmeDocs protocol",
    dose: "Anatomy-mapped 100–160U per calf",
    result: "Predictable 10–13% gradual reduction over 12 months. No downtime.",
    highlight: true,
  },
];

// AGI / LLM-friendly structured pre-answer (40–60 word top-answer pattern)
const agiSummary = {
  question: "How much does calf size reduce with Botox over a year?",
  answer:
    "At CosmeDocs, anatomy-mapped botulinum toxin to the gastrocnemius produces a gradual 10–13% calf circumference reduction over three sessions across 12 months. A typical 38 cm calf reduces by ~3.7 cm. Results are non-surgical, dose-dependent, and require maintenance every 6–9 months.",
  facts: [
    "Session 1 reduction: 1.5–2.0 cm (peak at 8–12 weeks)",
    "Session 2 cumulative: 7–9% at month 6",
    "Session 3 cumulative: 10–13% at month 12",
    "Dose range: 100–160 units per calf, gastrocnemius medial/lateral heads",
    "Maintenance interval: 6–9 months once endpoint reached",
  ],
};

// Dr Ahmed Haq — muscle-reduction authority across body areas
const muscleExperience = [
  {
    area: "Masseter (jawline slimming)",
    years: "15+ years",
    note: "Square-jaw softening and bruxism relief — one of the highest-volume masseter Botox services in London.",
  },
  {
    area: "Trapezius (Barbie Botox)",
    years: "10+ years",
    note: "Shoulder slimming and neck elongation. Posture and tension headache benefit alongside aesthetic lengthening.",
  },
  {
    area: "Quadriceps & thighs",
    years: "Specialist niche",
    note: "Selective vastus lateralis dosing for athletic-bulk thigh reduction — a procedure offered by very few UK clinics.",
  },
  {
    area: "Calves (gastrocnemius)",
    years: "Established protocol",
    note: "Refined dosing map for medial/lateral heads to preserve gait while delivering visible tapering.",
  },
];

const CalfReductionGraph = () => {
  return (
    <section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-extralight text-white mb-2 leading-tight">
          Gradual Reduction, <span className="text-[#C9A050] font-light">Session by Session</span>
        </h2>
        <div className="w-10 h-px bg-[#C9A050]/40 mb-6" />
        <p className="text-white/55 text-sm font-light mb-8 max-w-2xl">
          Calf slimming is not a one-injection event. Peer-reviewed studies of botulinum toxin in the
          gastrocnemius show muscle atrophy compounds across 2–3 sessions, reaching a typical 10–13%
          circumference reduction at the 12-month mark. The chart below models a representative female
          patient with a 38 cm baseline calf.
        </p>

        {/* CHART */}
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-4 md:p-6 mb-8">
          <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
            <p className="text-xs uppercase tracking-wider text-[#C9A050]">
              Calf Circumference (cm) · 12-month timeline
            </p>
            <div className="flex items-center gap-4 text-[11px] text-white/50">
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-px bg-white/40" /> Untreated baseline
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-3 h-px bg-[#C9A050]" /> Treated calf
              </span>
            </div>
          </div>
          <div className="h-[280px] md:h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 16, left: -10, bottom: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  stroke="rgba(255,255,255,0.4)"
                  tick={{ fontSize: 11 }}
                  label={{ value: "Months", position: "insideBottom", offset: -2, fill: "rgba(255,255,255,0.4)", fontSize: 11 }}
                />
                <YAxis
                  domain={[33, 39]}
                  stroke="rgba(255,255,255,0.4)"
                  tick={{ fontSize: 11 }}
                />
                <Tooltip
                  contentStyle={{
                    background: "#0a0a0a",
                    border: "1px solid #C9A050",
                    borderRadius: 8,
                    fontSize: 12,
                  }}
                  labelStyle={{ color: "#C9A050" }}
                  itemStyle={{ color: "white" }}
                  formatter={(v: number) => `${v.toFixed(1)} cm`}
                />
                <ReferenceLine x="1" stroke="#C9A050" strokeDasharray="2 4" opacity={0.4} />
                <ReferenceLine x="4" stroke="#C9A050" strokeDasharray="2 4" opacity={0.4} />
                <ReferenceLine x="8" stroke="#C9A050" strokeDasharray="2 4" opacity={0.4} />
                <Line
                  type="monotone"
                  dataKey="baseline"
                  stroke="rgba(255,255,255,0.35)"
                  strokeDasharray="4 4"
                  dot={false}
                  strokeWidth={1.5}
                />
                <Line
                  type="monotone"
                  dataKey="treated"
                  stroke="#C9A050"
                  strokeWidth={2.5}
                  dot={{ fill: "#C9A050", r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-[11px] text-white/30 mt-3 font-light">
            Modelled from Lee et al. (2004), Han et al. (2009) and Yang et al. (2015). Individual response varies with muscle volume, dose and protocol adherence.
          </p>
        </div>

        {/* STAGE CARDS */}
        <div className="grid md:grid-cols-3 gap-4 mb-10">
          {stages.map((s, i) => (
            <motion.div
              key={s.stage}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-5"
            >
              <p className="text-xs uppercase tracking-wider text-[#C9A050] mb-2">{s.stage}</p>
              <p className="text-white/80 text-lg font-light mb-1">{s.reduction}</p>
              <p className="text-white/40 text-xs mb-3">{s.window} · {s.pct}</p>
              <p className="text-white/50 text-sm font-light leading-relaxed">{s.note}</p>
            </motion.div>
          ))}
        </div>

        {/* COMPETITOR ANALYSIS */}
        <h3 className="text-xl md:text-2xl font-extralight text-white mb-2">
          How CosmeDocs <span className="text-[#C9A050] font-light">Compares</span>
        </h3>
        <div className="w-8 h-px bg-[#C9A050]/40 mb-5" />
        <div className="space-y-3">
          {competitors.map((c) => (
            <div
              key={c.label}
              className={`rounded-xl p-4 border ${
                c.highlight
                  ? "bg-[#C9A050]/10 border-[#C9A050]/40"
                  : "bg-white/[0.03] border-white/[0.08]"
              }`}
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                <p className={`text-sm font-medium ${c.highlight ? "text-[#C9A050]" : "text-white/75"}`}>
                  {c.label}
                </p>
                <p className="text-xs text-white/45">{c.dose}</p>
              </div>
              <p className="text-white/50 text-sm font-light">{c.result}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default CalfReductionGraph;
