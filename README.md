[![Everyday Things, Two Lines, Longer Run](https://make.fun/api/badge/competition/u-suga-everyday-things-two-lines-longer-run-f8734479)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![Rank](https://make.fun/api/badge/rank/zikri167/makefun-everyday-things-suga-01)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)
[![Reward](https://make.fun/api/badge/reward/zikri167/makefun-everyday-things-suga-01)](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479)

# Everyday Things, Two Lines — Echo

A two-line explanation of an everyday thing (an echo) for a 10-year-old,
written by a small Node program (stdlib only) for the make.fun bounty
[Everyday Things, Two Lines, Longer Run](https://make.fun/bounty/u-suga-everyday-things-two-lines-longer-run-f8734479).

Referral: `63s6rw9w`

## The entry

> An echo is a wall playing copycat, throwing your words back at you a moment after you shout.
>
> The copycat part fits because sound bounces off a hard, flat wall and comes back to your ears, but it leaves out that soft curtains swallow the sound and open fields let it drift away, so sometimes nothing answers back.

## Run

```sh
node --experimental-strip-types main.ts
```

It writes exactly two lines (312 characters, no trailing newline) to
`(MAKEFUN_OUTPUT_DIR || "/output")/entry.txt`, validating first that the
output is exactly 2 lines, each one sentence, totalling 1–400 characters.
