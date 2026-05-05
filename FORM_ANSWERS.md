# Xiaomi MiMo Application Form Answers

## 02 Which agent tool do you use most?

Suggested selection: **Hermes Agent**

Secondary if allowed/custom: **OpenClaw / Windsurf / Cursor**

## 03 Primary model series you use

Suggested selection: **GPT**

If custom text is allowed: **GPT-5.5 + Kimi/Moonshot for auxiliary mining workflows**

## 04 Describe what you've built with agents or AI-driven workflows

I built WorkNet Sentinel, an AgentOps control room for autonomous WorkNet agents. The stack coordinates an AWP Predict agent and an Ardinals mining agent through Hermes/OpenClaw-based workflows, systemd timers, wallet signing tools, and structured logs.

The AWP Predict side runs a custom LLM-driven market prediction loop: it fetches live market context, retrieves server-issued challenges, asks the model for a structured decision, validates the JSON, enforces risk limits, submits predictions, then tracks win/loss, chip PnL, PRED/AWP epoch earnings, and open orders. I also implemented a balanced alpha mode that can skip low-conviction markets, cap ticket size, clamp limit prices, and prioritize excess_score over blind participation farming.

The Ardinals side runs as a 24/7 autonomous mining scheduler. A systemd timer executes a tick every 30 seconds, checks commit/reveal windows, skips no-op periods cheaply, and only invokes the agent workflow when there is actionable work. The dashboard visualizes both agents as a single operating system: service health, timer cadence, recent decisions, reward status, and proof artifacts.

This is not a simple chatbot. It is a persistent multi-agent workflow with real operational constraints: long-running services, retries, structured decision parsing, private-key safety boundaries, reward accounting, market risk, and human-readable observability.

## 05 Proof of usage and impact

Proof summary:

- AWP Predict service running under systemd with `gpt-5.5` model routing.
- 365+ predictions submitted through the autonomous loop.
- Lifetime rewards recorded by the Predict API: 453.13 PRED and 47.8510 AWP.
- Current epoch showed Alpha+Participation eligibility with positive excess_score.
- Added balanced alpha mode: first post-change run skipped a choppy ETH market and submitted only 120 tickets on a higher-conviction SOL setup.
- Ardinals mining scheduler enabled 24/7 via `ardi-mine.timer`, firing every 30 seconds with user linger enabled.
- Agent logs show no-op window detection, autonomous skip behavior, prediction submissions, and reward/status reporting.

Recommended uploads:

1. Screenshot of this dashboard homepage.
2. Screenshot of terminal output showing `agent-status --predict`.
3. Screenshot of `systemctl --user status ardi-mine.timer`.
4. Screenshot of logs showing balanced alpha mode skip/submit behavior.
5. GitHub repo or live demo URL for this project.
