# WorkNet Sentinel

A polished application demo for the Xiaomi MiMo agent application form.

WorkNet Sentinel is an autonomous AgentOps dashboard that turns terminal-native WorkNet agents into an auditable control room. It showcases two real workflows:

- AWP Predict alpha-mode agent: prediction loop, skip/submit policy, ticket sizing, reward accounting, and PRED/AWP epoch status.
- Ardinals 24/7 mining agent: systemd timer orchestration, commit/reveal window checks, no-op skip behavior, and operational health.

## Why this project fits the form

The form asks what has been built with agents or AI-driven workflows. This project demonstrates a working agent stack, not just a chat wrapper:

- Long-running autonomous loops
- Tool-using LLM decisions
- Risk policy enforcement
- Systemd orchestration
- Reward and settlement tracking
- Human-readable proof artifacts

## Run locally

```bash
npm install
npm run dev
```

Then open the printed local URL.

## Build

```bash
npm run build
```

## Proof notes

All displayed operational numbers are intentionally safe and sanitized. The app does not include private keys, API keys, seed phrases, or raw wallet files.

See `FORM_ANSWERS.md` for copy-paste application answers.

_Last updated by anddri66._
