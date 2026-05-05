import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  Activity,
  ArrowUpRight,
  BadgeCheck,
  BarChart3,
  Bot,
  BrainCircuit,
  CheckCircle2,
  Clock3,
  Coins,
  GitBranch,
  Layers3,
  LockKeyhole,
  MonitorCheck,
  Radar,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  TimerReset,
  Zap,
} from 'lucide-react';
import './styles.css';

const metrics = [
  { label: 'Autonomous predictions', value: '365+', detail: 'Submitted through a custom AWP Predict loop', icon: BarChart3 },
  { label: 'Lifetime rewards', value: '453.13 PRED', detail: '+ 47.8510 AWP recorded by the Predict API', icon: Coins },
  { label: 'Current epoch', value: 'Alpha + Participation', detail: '+640 chips excess during verification', icon: Sparkles },
  { label: 'Ardinals cadence', value: '30s', detail: 'Systemd timer tick with cheap no-op detection', icon: TimerReset },
];

const agents = [
  {
    name: 'AWP Predict Alpha Agent',
    status: 'Running',
    model: 'GPT-5.5 via OpenClaw shim',
    accent: 'violet',
    body:
      'Fetches live markets, solves server challenges, asks the LLM for a structured JSON decision, validates risk, submits orders, and tracks settlement outcomes.',
    bullets: ['Balanced alpha mode', 'Skip low-conviction chop', 'Ticket cap: 300', 'Limit price clamp: 0.53'],
  },
  {
    name: 'Ardinals Mining Scheduler',
    status: '24/7 timer active',
    model: 'Hermes + systemd oneshot workflow',
    accent: 'cyan',
    body:
      'Executes a mining tick every 30 seconds, checks commit and reveal windows, avoids unnecessary LLM calls, and wakes automatically with user linger enabled.',
    bullets: ['Timer enabled', 'Linger=yes', 'No-op skip behavior', 'Commit/reveal ready'],
  },
];

const timeline = [
  ['Observe', 'Pull market context, agent status, klines, open orders, reward stats, and service health.'],
  ['Reason', 'Route a compact decision prompt through GPT-5.5 with challenge text and strict output schema.'],
  ['Constrain', 'Validate JSON, enforce ticket caps, clamp prices, require challenge marker, and reject weak setups.'],
  ['Act', 'Submit predictions or skip noisy markets; trigger Ardinals only when commit/reveal work exists.'],
  ['Audit', 'Record logs, trace prompts/responses, summarize W/L, PnL, PRED/AWP earnings, and timer cadence.'],
];

const proof = [
  { title: 'Predict service', text: 'systemd service active with GPT-5.5 routing and custom alpha-mode loop.', icon: MonitorCheck },
  { title: 'Reward accounting', text: 'Predict API reported 453.13 PRED + 47.8510 AWP lifetime earnings.', icon: BadgeCheck },
  { title: 'Behavior change', text: 'First alpha-mode run skipped choppy ETH and submitted only 120 tickets on SOL.', icon: ShieldCheck },
  { title: '24/7 mining', text: 'Ardi timer enabled, active, and firing every 30 seconds with no-op skips.', icon: Clock3 },
];

const formAnswers = [
  ['Agent tool', 'Hermes Agent, OpenClaw, Windsurf'],
  ['Primary model series', 'GPT'],
  [
    'One-line project pitch',
    'WorkNet Sentinel is an AgentOps control room for autonomous WorkNet agents that turns terminal-native mining and prediction workflows into observable, risk-aware, reward-tracked systems.',
  ],
];

function App() {
  return (
    <main>
      <section className="hero">
        <nav className="nav">
          <div className="brand"><Radar size={20} /> WorkNet Sentinel</div>
          <a className="navLink" href="#proof">Proof <ArrowUpRight size={14} /></a>
        </nav>
        <div className="heroGrid">
          <div>
            <div className="eyebrow"><Sparkles size={16} /> Xiaomi MiMo grant application demo</div>
            <h1>Autonomous AgentOps for WorkNet mining and prediction workflows.</h1>
            <p className="lead">
              A screenshot-ready dashboard that documents real autonomous agents: an AWP Predict alpha trader, a 24/7 Ardinals scheduler, structured LLM decisioning, risk controls, and reward telemetry.
            </p>
            <div className="heroActions">
              <a className="button primary" href="#application">Use for application</a>
              <a className="button ghost" href="#architecture">View architecture</a>
            </div>
          </div>
          <div className="terminalCard">
            <div className="terminalTop"><span /> <span /> <span /></div>
            <pre>{`$ agent-status --predict
[PREDICT] balance=130,640 chips  total=367
[LOOP] ✅ running  model=gpt-5.5
[EARNINGS] lifetime: 453.13 $PRED + 47.8510 AWP
current epoch: Alpha+Participation

$ systemctl --user is-active ardi-mine.timer
active
next tick: every 30 seconds`}</pre>
          </div>
        </div>
      </section>

      <section className="metricsSection">
        {metrics.map((item) => <Metric key={item.label} {...item} />)}
      </section>

      <section id="architecture" className="section">
        <div className="sectionHeader">
          <div className="eyebrow"><Layers3 size={16} /> Multi-agent workflow</div>
          <h2>Two autonomous systems, one operational control room.</h2>
          <p>The project demonstrates persistent, tool-using agents with real constraints: scheduling, signing, market risk, reward settlement, and private-key safety.</p>
        </div>
        <div className="agentGrid">
          {agents.map((agent) => <AgentCard key={agent.name} agent={agent} />)}
        </div>
      </section>

      <section className="section darkPanel">
        <div className="sectionHeader compact">
          <div className="eyebrow"><BrainCircuit size={16} /> Alpha-mode policy</div>
          <h2>Not a spam bot. The agent can say no.</h2>
          <p>Balanced alpha mode prioritizes excess_score over blind participation farming.</p>
        </div>
        <div className="policyGrid">
          <Policy icon={ShieldCheck} title="Risk gates" text="Skip if confidence is below ~55%, price action is choppy, or volume fails to confirm direction." />
          <Policy icon={Zap} title="Adaptive sizing" text="100-150 tickets for marginal edges, 150-250 for medium edges, 250-300 only for strong setups." />
          <Policy icon={LockKeyhole} title="Execution guardrails" text="Default limit price 0.51, max limit price 0.53, hard ticket cap 300, structured JSON validation." />
        </div>
      </section>

      <section className="section">
        <div className="sectionHeader">
          <div className="eyebrow"><GitBranch size={16} /> Agent lifecycle</div>
          <h2>From observation to auditable action.</h2>
        </div>
        <div className="timeline">
          {timeline.map(([title, text], index) => (
            <div className="timelineItem" key={title}>
              <div className="step">0{index + 1}</div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </div>
          ))}
        </div>
      </section>

      <section id="proof" className="section proofSection">
        <div className="sectionHeader compact">
          <div className="eyebrow"><TerminalSquare size={16} /> Proof of usage and impact</div>
          <h2>Built from live operational workflows.</h2>
        </div>
        <div className="proofGrid">
          {proof.map((item) => <ProofCard key={item.title} {...item} />)}
        </div>
      </section>

      <section id="application" className="section application">
        <div className="applicationCard">
          <div>
            <div className="eyebrow"><Bot size={16} /> Form-ready summary</div>
            <h2>Copy this into the Xiaomi MiMo application.</h2>
            <p>
              This project positions your work as a serious agentic operations system: persistent workflows, model-driven decisions, risk constraints, real rewards, and documented impact.
            </p>
          </div>
          <div className="answerList">
            {formAnswers.map(([label, value]) => (
              <div className="answer" key={label}>
                <span>{label}</span>
                <strong>{value}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Metric({ label, value, detail, icon: Icon }) {
  return (
    <article className="metric">
      <Icon size={22} />
      <span>{label}</span>
      <strong>{value}</strong>
      <p>{detail}</p>
    </article>
  );
}

function AgentCard({ agent }) {
  return (
    <article className={`agentCard ${agent.accent}`}>
      <div className="agentTop">
        <Activity size={22} />
        <span>{agent.status}</span>
      </div>
      <h3>{agent.name}</h3>
      <p>{agent.body}</p>
      <div className="modelPill">{agent.model}</div>
      <div className="bulletGrid">
        {agent.bullets.map((bullet) => <span key={bullet}><CheckCircle2 size={14} /> {bullet}</span>)}
      </div>
    </article>
  );
}

function Policy({ icon: Icon, title, text }) {
  return (
    <article className="policy">
      <Icon size={24} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

function ProofCard({ icon: Icon, title, text }) {
  return (
    <article className="proofCard">
      <Icon size={22} />
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

createRoot(document.getElementById('root')).render(<App />);
