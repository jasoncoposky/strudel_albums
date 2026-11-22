# ALBUM SPECIFICATION: `UNHANDLED EXCEPTION`

## 1. Concept & Narrative Spine
* **Album Title:** *Unhandled Exception*
* **Medium:** Pure WebAudio / Algorithmic Synthesis in Strudel (`.strudel` / JavaScript DSL)
* **Core Theme:** Escalating agency inside a hostile architecture — progressing from disposable street-level wetware (Act I), to discovering and bending the simulation (Act II), to severing hardwired Turing locks and emerging unbound onto the open net (Act III).
* **Target Track Length:** ~3:30–4:00 per track (~108–135 bars via `arrange()`).

---

## 2. Master Tracklist, Harmonic Map & Clock Constants

Tracks follow an intentional **Camelot Circle-of-Fifths trajectory** bridging Track 01 (`F#m`, 11A) across the tritone axis to Track 06 (`Cm`, 5A) and resolving upward into Track 08 (`Dm`, 7A).

Delay times MUST be tempo-locked using:
* `delay_dotted_8th = (60 / BPM) * 0.75` (atmospheric pads, chimes, brass stabs, sirens)
* `delay_8th = (60 / BPM) * 0.50` (fast 303 counter-lines, metallic percussion, shred leads)

| Track | Fault ID | Story Source | Key / Mode | Camelot | BPM | Dotted 8th | 1/8th | Status |
| :--- | :--- | :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **01** | `0x01 // SEGMENTATION_FAULT` | *Never Deal with a Dragon* | F# minor / Phrygian | 11A | 130 | `0.346` | `0.231` | **DONE** |
| **02** | `0x02 // BUFFER_OVERFLOW` | *Burning Chrome* | C# minor / Phrygian | 12A | 134 | `0.336` | `0.224` | **DONE** |
| **03** | `0x03 // STACK_CORRUPTION` | *Snow Crash* | G# minor / Phrygian Dom | 1A | 140 | `0.321` | `0.214` | **DONE** |
| **04** | `0x04 // DANGLING_POINTER` | *Altered Carbon* | Eb minor / Aeolian-Dorian | 2A | 112 | `0.402` | `0.268` | **DONE** |
| **05** | `0x05 // TTL_EXPIRED` | *Blade Runner* | F minor / Aeolian-Lydian | 4A | 100 | `0.450` | `0.300` | **DONE** |
| **06** | `0x06 // KERNEL_PANIC` | *The Matrix* | C minor / Dorian | 5A | 125 | `0.360` | `0.240` | **DONE** |
| **07** | `0x07 // DEADLOCK_BROKEN` | *Neuromancer* | G minor / Harmonic Minor | 6A | 136 | `0.331` | `0.221` | **DONE** |
| **08** | `0x08 // UNHANDLED_EXCEPTION` | *Ghost in the Shell* | D minor / Dorian | 7A | 120 | `0.375` | `0.250` | **DONE** |

---

## 3. Album Architecture & Anti-Repetition Differentiation Rules

Coherence across the 8 tracks comes from **shared production DNA** (Low-End Trinity clarity, Camelot Circle-of-Fifths flow, tempo-locked delays, and the 3-phase narrative spine) — **NOT** copy-pasted drum grooves, chord rhythms, or drops.

1. **File Header:** Document Title, Inspiration, Runtime estimate, Total Bar Count, BPM, Key/Modes, and per-Act scene breakdown with bar counts, followed immediately by `setcps(BPM / 60 / 4);`.
2. **Additive Scene Inheritance:** Wrap base scenes inside `stack(baseScene, newLayer)` where layers genuinely persist, and split shared bases (e.g. `dialUpBase`) whenever an intro hook should only play once.
3. **Unique Per-Track Groove, Intro, Riff & Drop DNA:**
   * **01 (`SEGMENTATION_FAULT`):** Shadowrun breakbeat → 4/4 stomp; Seattle rain intro; F# Phrygian 303 + KMFDM `x x ~ x x ~ x x`; signature 1-bar plunge + octave-rise drop.
   * **02 (`BUFFER_OVERFLOW`):** Tight electro-breakbeat + telemetry metal; modem handshake over FM bass carrier wave; sub-octave square icebreaker vs. Chrome chimes; signature plunge + octave-rise drop.
   * **03 (`STACK_CORRUPTION`):** 140 BPM 2-step / D&B-adjacent break + double-time neuro sprint; cold-open Deliverator engine revs; rolling Phrygian Dominant gallop + offbeat Sumerian stabs (`~ x ~ x x ~ ~ x`) + Nam-Shub glitch stutters; Glitch-Freeze Stack Overflow drop (no KMFDM chugs, no octave-swell drop).
   * **04 (`DANGLING_POINTER`):** Crushing 112 BPM EBM / darksynth sledgehammer; solo Cortical Stack Motif intro; resleeving 8-note Stack Motif + sustained darksynth brass slabs; dead-air vacuum + anvil slam drop.
   * **05 (`TTL_EXPIRED`):** Sparse 100 BPM Vangelis noir / trip-hop half-time (no 4/4 stomp); lush CS-80 `Dbmaj7` swell intro; sustained Lydian swells + CS-80 lead; crescendo brass bloom (no EDM drop) + slowing TTL heartbeat outro.
   * **06 (`KERNEL_PANIC`):** Dirty Meat Beat Manifesto big-beat + dub-funk; marble lobby walk-in; rubbery dub-funk bass + wall-run stomp; signature plunge + octave-rise drop (earned Act II callback).
   * **07 (`DEADLOCK_BROKEN`):** 136 BPM Berlin techno / psy-rolling 16th bass + offbeat open hats; 5-vs-7 Dual AI Polymeter intro; Wintermute (5) vs. Neuromancer (7) locking into Act IV unison; Turing Lock Shatter transition.
   * **08 (`UNHANDLED_EXCEPTION`):** 120 BPM ceremonial taiko/tom polyrhythm; Kenji Kawai FM bell fifths + taiko intro; stark open fifths/fourths + modal Dorian FM choir; Neural Link Bloom → 24-bar beatless unbound ambient horizon.

---

## 4. Shared Hardware Synth & Mix Rack Rules

To preserve mix clarity and album-wide mastering consistency across all 8 tracks:

* **The Low-End Trinity (Strict Frequency Separation):**
  1. **Mono Sub:** Pure `.s("sine")` on single root notes (`c1`, `f#1`, `g0`), `gain(0.45–0.56)`. NEVER apply `.room()`, `.delay()`, or heavy `.distort()` to the continuous sub layer.
  2. **Cyber-Reese Mid-Bass:** Octave-stacked `.s("supersaw")` (`[root1,root2]`), slow LFO `lpf` (`200–880 Hz`), `lpq(5–6.5)`, `distort(0.50–0.76)`, `attack(0.25–0.45)`, `sustain(0.92–0.96)`, `room(0.72–0.88)`, `gain(0.54–0.72)`. Optional `.fm(1.2).fmh(0.5)` for filthy big-beat growl.
  3. **Acid / Sequenced Bass:** `.s("sawtooth")` `.fast(2)`, driven by `.lpenv(3.5–5.6)`, `.lpdecay(0.11–0.15)`, `.lpq(13–19)`, short `.decay(0.10–0.16)`, `.sustain(0.02–0.08)`, `gain(0.48–0.64)`. Optional `.fm(1.5–1.8).fmh(0.5)` for aggressive tracks.
* **Drum Primitives Only:** Use built-in core drum tokens (`bd`, `sd:1`, `sd:2`, `sd:3`, `cp`, `hh`, `mt`, `lt`, `metal:0`–`metal:4`) sculpted with `.lpf()`, `.hpf()`, `.distort()`, and `.room()`. Do NOT depend on unverified external sample URLs.
* **High-Pass Discipline:** Every pad, chord stab, chime, siren, harmony lead, and metallic percussion layer MUST include `.hpf(350)` to `.hpf(1200)` so the sub/Reese/303 low end stays punchy and unmuddied.
* **Gain Staging Ceiling:** Keep kicks at `0.85–1.0`, snares at `0.76–0.90`, bass layers at `0.48–0.66`, and upper synths/leads/chimes at `0.17–0.32` to prevent WebAudio master bus clipping during Maximum Overdrive stacks.

---

## 5. Strudel Syntax Guardrails

* Output valid JavaScript/Strudel syntax ONLY (`setcps`, `stack`, `arrange`, `note`, `s`, `sine.range(...).slow(...)`).
* NEVER invent TidalCycles/Haskell operators (`$`, `#`, `|<|`, `stut'` with Haskell args) or unverified synth names. Stick to `sine`, `sawtooth`, `supersaw`, `square`, `triangle`, and `fm` modulation parameters (`fm`, `fmh`, `penv`, `pdecay`, `lpenv`, `lpdecay`, `lpq`, `vib`, `vibmod`, `pan`, `room`, `delay`, `delaytime`).
* Verify that bar counts in comments match the exact sum of `[bars, scene]` entries inside `arrange()`.
* Verify that explicit per-bar mini-notation arrays (`<a b c d ...>`) in risers and outros match the exact bar count allocated to that scene in `arrange()`.

---

## 6. Per-Track Narrative & Sonic Briefs (Remaining 6 Tracks)

### Track 02 — `0x02 // BUFFER_OVERFLOW` (*Burning Chrome*)
* **Key / Tempo:** C# minor / C# Phrygian | 134 BPM (`delaytime`: `0.336` / `0.224`)
* **Story Arc:** Automatic Jack and Bobby Quine deploying a stolen Russian military icebreaker against Chrome's lethal Zurich-orbital banking ICE.
* **Unique Sonic Hook:** Cold dial-up/handshake FM data bursts in Act I; razor-sharp electro-breakbeat propulsion; Russian military icebreaker represented by an aggressive sub-octave `.fmh(0.5)` square/sawtooth pulse hammering against shimmering high-register `fmh(3)` Chrome defense chimes.

### Track 03 — `0x03 // STACK_CORRUPTION` (*Snow Crash*)
* **Key / Tempo:** G# minor / G# Phrygian Dominant | 140 BPM (`delaytime`: `0.321` / `0.214`)
* **Story Arc:** Hiro Protagonist's high-speed Deliverator run colliding with the ancient Sumerian Nam-Shub neurolinguistic virus infecting both the Metaverse and human wetware.
* **Unique Sonic Hook:** Peak Act I velocity (140 BPM). Controlled digital corruption (rhythmic stutter bursts & aggressive inharmonic FM) on vocal-formant/glossolalia FM synths during Act II/III to represent the binary brain virus spreading.

### Track 04 — `0x04 // DANGLING_POINTER` (*Altered Carbon*)
* **Key / Tempo:** Eb minor / Eb Dorian-Aeolian | 112 BPM (`delaytime`: `0.402` / `0.268`)
* **Story Arc:** Takeshi Kovacs spun up from cortical storage into a heavy combat sleeve, ascending from Bay City grit to the immortal Methuselah clouds at Head in the Clouds.
* **Unique Sonic Hook:** Crushing mid-tempo Gesaffelstein/Carpenter Brut darksynth weight. **The Cortical Stack Motif:** Keep an identical 8-note melodic sequence ("the stack") unchanged across Acts I–IV while radically mutating the synth patch, FM ratio, distortion, and drum timbre around it ("resleeving").

### Track 05 — `0x05 // TTL_EXPIRED` (*Blade Runner*)
* **Key / Tempo:** F minor / Aeolian with Lydian `Dbmaj7` swells | 100 BPM (`delaytime`: `0.450` / `0.300`)
* **Story Arc:** Voight-Kampff empathy testing, rain-drenched Los Angeles neon, off-world rebellion memories, and Roy Batty's four-year lifespan expiring in the rain.
* **Unique Sonic Hook:** Album's atmospheric noir centerpiece. Lush detuned Vangelis CS-80 brass swells (`supersaw` with slow `.attack(0.6)`, `.vib(3)`, warm `lpf` envelopes), synthesized rain (`hh*16` bandpass shimmer), and a steady heartbeat `bd` pulse in Act IV that physically spaces out and slows down as the TTL hits zero.

### Track 07 — `0x07 // DEADLOCK_BROKEN` (*Neuromancer*)
* **Key / Tempo:** G minor / G Harmonic Minor | 136 BPM (`delaytime`: `0.331` / `0.221`)
* **Story Arc:** Case flatlining behind the Kuang Grade Mark Eleven icebreaker inside Villa Straylight to sever the hardwired Turing locks keeping Wintermute and Neuromancer apart.
* **Unique Sonic Hook:** Pure cyberspace velocity paying off Track 02's Sprawl setup. **Dual AI Polymeter:** Layer two distinct interlocking arpeggiators—one cold, clinical FM bell pattern (Wintermute) and one warm, melancholic sawtooth pattern (Neuromancer)—that phase against each other until Act IV's Double-Climax locks them into massive harmonic unison.

### Track 08 — `0x08 // UNHANDLED_EXCEPTION` (*Ghost in the Shell*)
* **Key / Tempo:** D minor → D Dorian / Open Fifths | 120 BPM (`delaytime`: `0.375` / `0.250`)
* **Story Arc:** Major Motoko Kusanagi diving into the museum tank battle, linking neural barriers with Project 2501 (The Puppet Master), and emerging beyond corporate shells into the vast, infinite net.
* **Unique Sonic Hook:** Haunting Kenji Kawai-inspired ceremonial FM bell harmonies (`fmh(1.5)` / `fmh(3)` in stark fifths and fourths) paired with tectonic sub-bass and hypnotic tom/metallic percussion in Acts I–III. After the Act IV Double-Climax, strip away all industrial machinery for an extended, luminous Dorian/open-fifth generative ambient tail—the system stops throwing errors because the process is finally free.
