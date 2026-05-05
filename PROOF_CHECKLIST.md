# Proof Upload Checklist

Use these for section 05 of the Xiaomi MiMo form.

## Screenshots to capture

1. `WorkNet Sentinel` homepage hero and metrics.
2. Terminal output:

```bash
/home/ubuntu/.local/bin/agent-status --predict
```

3. AWP Predict alpha-mode log:

```bash
tail -n 30 /home/ubuntu/.hermes/logs/predict.log
```

Look for:

```text
strategy=balanced_alpha
SKIP: ETH is in a low-conviction chop zone
SUBMITTED UP 120 tix
```

4. Ardinals 24/7 timer:

```bash
systemctl --user status ardi-mine.timer --no-pager -l
journalctl --user -u ardi-mine.service -n 20 --no-pager
```

Look for:

```text
ardi-mine.timer: active enabled
tick: no work — skipping
```

5. Optional project folder screenshot showing:

```text
README.md
FORM_ANSWERS.md
src/main.jsx
src/styles.css
```

## Safe disclosure note

Do not upload private key files, `.env` files, wallet JSON files, raw auth files, or screenshots containing API keys.
