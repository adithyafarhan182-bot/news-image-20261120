# news-image-20261120 — The World in One Day

An original one-day news image for make.fun's news-image-20261120 bounty
($250, top 50). It sums up Friday, 20 November 2026 in six panels:

1. **Shenzhen Summit** — Trump, Xi and Putin meet in historic three-way talks.
2. **Record IPO** — Anthropic raises $81.3B, the largest IPO on record.
3. **Genocide Verdict** — The World Court finds Myanmar committed genocide
   against the Rohingya.
4. **Kyiv Under Fire** — Four ballistic missiles strike the Ukrainian capital.
5. **Storm in India** — India evacuates 80,000 people as a storm approaches.
6. **Fire in the Gulf** — A tanker burns after hitting a mine off Hormuz.

The date is printed at the top so the image names the day it sums up. The
image was drawn as a single HTML page (`image.html`, rendered to `entry.png`
at 1024×1024) — a six-panel infographic, not a newspaper front page.

## Program

`main.ts` (Node 22, standard library only) copies `entry.png` to the output
directory. Run it locally with:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
