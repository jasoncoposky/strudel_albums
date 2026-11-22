// ============================================================================
// "0x03 // STACK_CORRUPTION" — Snow Crash (Neal Stephenson)
// Album: UNHANDLED EXCEPTION (Track 03 | Camelot 1A)
// Full ~3:15 Story Arc (114 bars @ 140 BPM, G# minor / G# Phrygian Dominant)
// ============================================================================
// Groove DNA: 140 BPM 2-Step / D&B Break + Neuro Gallop + Glitch-Freeze Drop
// Act I   (0:00–0:41): Deliverator Ignition (4) -> Highway Launch (4)
//                      -> Metaverse 2-Step (12) -> Virus Riser (4)
// Act II  (0:41–1:38): Glitch-Freeze Drop (1) -> Black Sun (16)
//                      -> Nam-Shub Double-Time Sprint (16)
// Act III (1:38–2:21): Sumerian Void (8) -> Katana Shred (12)
//                      -> Final Build (4) -> Glitch-Freeze Drop (1)
// Act IV  (2:21–3:15): Raft Double-Climax (16) -> Turbine Power-Down Outro (16)
// ============================================================================
setcps(140 / 60 / 4);

// --- ACT I: DELIVERATOR IGNITION & METAVERSE 2-STEP (24 bars) ---------------

// Scene 1a (4 bars): Cold-open Deliverator Ignition — dry turbine revs, gear shifts & Phrygian stabs
const deliverator1 = stack(
  // Dry, punchy accelerating kick countdown (no ambient haze)
  s("<[bd ~ ~ ~] [bd ~ ~ bd] [bd ~ bd ~] [bd bd bd bd]>").lpf(1600).distort(0.55).gain(0.95),
  // Mechanical gear-shift percussion (tight metallic clicks & toms)
  s("<[~ metal:0 ~ ~] [~ metal:0 ~ metal:3] [~ [metal:0,mt] ~ [metal:3,lt]] [[mt metal:0] [lt metal:3] [sd:3*2] [sd:1*4]]>")
    .hpf(600).lpf(5200).distort(0.45).room(0.28).gain(0.62),

  // Deliverator turbine engine revs (pitch-swept growling supersaw shifting up through gears)
  note("<[g#1 ~ ~ g#1] [g#1 ~ g#1 ~] [g#1 g#1 ~ g#1] [g#1 g#1 a1 c2]>")
    .s("supersaw")
    .fm(2.2)
    .fmh(0.5)
    .penv(-7)
    .pdecay(0.28)
    .lpf("<650 980 1450 2200>")
    .lpq(7.5)
    .distort(0.74)
    .attack(0.01)
    .decay(0.32)
    .sustain(0.18)
    .room(0.25)
    .gain(0.60),

  // Tight mono sub punching on each throttle hit
  note("<[g#0 ~ ~ g#0] [g#0 ~ g#0 ~] [g#0 g#0 ~ g#0] [g#0 g#0 a0 c1]>").s("sine").decay(0.28).sustain(0.15).gain(0.54),

  // Dry, aggressive Phrygian Dominant (G# -> A -> C) katana stab hook
  note("<[~ ~ g#3 a3] [~ ~ c4 a3] [g#3 a3 c4 d#4] [c4 a3 g#3 f#3]>")
    .s("sawtooth")
    .fm(1.6)
    .fmh(2)
    .hpf(420)
    .lpf("<1400 1800 2400 3200>")
    .lpq(6)
    .distort(0.68)
    .decay(0.14)
    .sustain(0.04)
    .delay(0.28)
    .delaytime(0.214)
    .room(0.30)
    .gain(0.28)
);

// Scene 1b (4 bars): Tires bite asphalt — 30 minutes or less! 2-Step D&B launch
const deliverator2 = stack(
  s("bd ~ ~ ~ ~ ~ [bd ~] ~").lpf(1650).distort(0.54).gain(0.98),
  s("~ ~ [sd:1,cp] ~ ~ [~ sd:3] sd:2 ~").lpf(4700).distort(0.42).room(0.42).gain(0.86),
  s("[hh ~] [~ hh] [hh metal:0] [~ hh]").fast(2).hpf(5400).gain(0.36).pan(sine.range(0.25, 0.75)),
  s("<~ ~ ~ [~ ~ [mt mt] [lt sd:1*2]]>").distort(0.46).room(0.48).gain(0.74),

  // Rolling Phrygian Dominant neuro-gallop bassline (syncopated, not octave-bounce)
  note("<[g#0 ~ g#0 a0 ~ c1 ~ g#0] [e0 ~ e0 f#0 ~ g#0 ~ e0] [f#0 ~ f#0 g#0 ~ a0 ~ f#0] [d#0 ~ g0 a0 ~ c1 a0 g#0]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.5)
    .fmh(1.5)
    .lpf("<540 780 1080 1450>")
    .lpenv(4.0)
    .lpdecay(0.12)
    .lpq(14)
    .decay(0.12)
    .sustain(0.06)
    .distort(0.64)
    .gain(0.54),

  note("<g#0 e0 f#0 d#0>").s("sine").gain(0.50),

  // First sharp Nam-Shub digital glitch stutters teasing the virus
  note("<[~ ~ g#4*3 ~ ~ ~ a4*2 ~] [~ ~ e4*2 ~ ~ ~ b4*3 ~] [~ ~ f#4*3 ~ ~ ~ c#5*2 ~] [~ ~ d#4*4 ~ a4*2 ~ c5*3 ~]>")
    .s("sine")
    .fm(4.8)
    .fmh(2.5)
    .penv(7)
    .pdecay(0.04)
    .hpf(850)
    .lpf(4200)
    .decay(0.08)
    .sustain(0.01)
    .distort(0.58)
    .pan(sine.range(0.15, 0.85).fast(4))
    .delay(0.36)
    .delaytime(0.214)
    .room(0.52)
    .gain(0.22)
);

// Scene 2 (12 bars): Metaverse Street — Full 140 BPM 2-Step / D&B Break + Katana Koto
const metaverseRun = stack(
  s("bd ~ ~ ~ ~ ~ [bd ~] ~").lpf(1650).distort(0.54).gain(0.98),
  s("~ ~ sd:1 ~ ~ [~ sd:3] sd:2 [~ sd:3]").lpf(4800).distort(0.40).room(0.46).gain(0.88),
  s("[hh hh] [~ hh] [hh metal:0] [hh ~]").fast(2).hpf(5400).gain(0.38).pan(sine.range(0.2, 0.8)),
  s("~ metal:1 ~ ~ ~ [~ metal:3] ~ ~")
    .hpf(1200).lpf(5000).distort(0.44).room(0.48).delay(0.32).delaytime(0.214).gain(0.26),

  // Rolling G# Phrygian Dominant neuro-gallop bassline
  note("<[g#0 ~ g#0 a0 ~ c1 ~ g#0] [e0 ~ e0 f#0 ~ g#0 ~ e0] [f#0 ~ f#0 g#0 ~ a0 ~ f#0] [d#0 ~ g0 a0 ~ c1 a0 g#0]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.5)
    .fmh(1.5)
    .lpf(sine.range(360, 1350).slow(4))
    .lpenv(4.6)
    .lpdecay(0.12)
    .lpq(16)
    .decay(0.12)
    .sustain(0.06)
    .distort(0.64)
    .gain(0.54),

  // Tight pulsing Cyber-Reese mid-bass
  note("<[g#0,g#1] [e0,e1] [f#0,f#1] [d#0,d#1]>")
    .s("supersaw")
    .lpf(sine.range(240, 720).slow(6))
    .lpq(5.8)
    .distort(0.60)
    .attack(0.18)
    .sustain(0.90)
    .room(0.65)
    .gain(0.56),

  note("<g#0 e0 f#0 d#0>").s("sine").gain(0.50),

  // Neon Metaverse katana/koto-like FM chimes (Phrygian Dominant)
  note("<[g#4 ~ a4 ~ c5 ~ d#5 ~] [e4 ~ g#4 ~ b4 ~ f#4 ~] [f#4 ~ a4 ~ c#5 ~ g#4 ~] [d#4 ~ g4 ~ a4 ~ c5 ~]>")
    .s("sine")
    .fm(3.5)
    .fmh(3)
    .hpf(850)
    .decay(0.15)
    .sustain(0.02)
    .pan(sine.range(0.15, 0.85).fast(2))
    .room(0.75)
    .delay(0.45)
    .delaytime(0.321)
    .gain(0.22),

  // Offbeat syncopated Sumerian brass slashes
  note("<[g#2,d#3] [e2,b2] [f#2,c#3] [d#2,a2]>")
    .s("supersaw")
    .struct("~ x ~ ~ ~ x ~ ~")
    .hpf(380)
    .lpf(2100)
    .lpq(5.5)
    .distort(0.62)
    .attack(0.02)
    .decay(0.24)
    .sustain(0.12)
    .room(0.68)
    .delay(0.38)
    .delaytime(0.214)
    .gain(0.26)
);

// Scene 3 (4 bars): Snow Crash Bitmap — Accelerating Breakbeat Snare-Roll & Pitch-Escalating Riser
const virusRiser = stack(
  s("<[bd ~ ~ ~ bd ~ ~ ~] [bd ~ bd ~ bd ~ bd ~] [bd*4] [bd*2 ~ ~]>").lpf(1600).distort(0.54).gain(0.96),
  s("<[~ ~ sd:1 ~ ~ ~ sd:1*2 ~] [~ sd:1*2 ~ sd:1*2] [sd:1*8] [sd:1*8 [mt*2 lt*2]]>")
    .distort(0.48).room(0.68).gain(0.88),
  s("metal:0*8").hpf(1800).gain("<0.14 0.24 0.34 0.44>"),

  // Pitch-climbing corrupted FM alarm siren (distinct from Track 01/02 sawtooth riser)
  note("<[g#2 a2 c3 d#3] [e3 f#3 g#3 a3] [c4 d#4 e4 g#4] [a4 c5 d#5 g#5]>")
    .fast(2)
    .s("sawtooth")
    .fm("<2.0 3.2 4.8 6.5>")
    .fmh(1.5)
    .lpf("<700 1250 2100 3400>")
    .lpq(10)
    .decay(0.10)
    .sustain(0.06)
    .distort(0.70)
    .gain(0.48),

  note("<g#0 e0 f#0 d#0>").s("sine").gain(0.52)
);

// --- ACT II: GLITCH-FREEZE DROP, BLACK SUN & NAM-SHUB SPRINT (33 bars) ------

// Signature 1-bar Glitch-Freeze Stack Overflow Cut! (Unique to Track 03 — NO octave-swell drop)
const stackDrop = stack(
  // Beat 1 hard sub/kick crash -> Beat 3 dead-stop -> Beat 4 brutal tom/snare slam-in
  s("bd ~ ~ [sd:1*2 [mt lt]]").distort(0.72).lpf(1800).room(0.50).gain(1.0),
  s("[cp,metal:2] ~ ~ ~").hpf(900).distort(0.45).room(0.85).gain(0.65),

  // Beats 1-2: Corrupted Nam-Shub FM buffer-freeze stutter burst!
  note("[g#4*8 a4*6] ~ ~ ~")
    .s("sawtooth")
    .fm(6.8)
    .fmh(2.7)
    .penv(12)
    .pdecay(0.03)
    .hpf(650)
    .lpf(4200)
    .decay(0.05)
    .sustain(0.01)
    .distort(0.82)
    .pan(sine.range(0.1, 0.9).fast(8))
    .gain(0.32),

  // Beat 3: Dead-stop digital vacuum — lone razor-thin flatline carrier tone
  note("~ ~ g#6 ~")
    .s("sine")
    .hpf(2000)
    .decay(0.22)
    .sustain(0.05)
    .room(0.45)
    .gain(0.22),

  // Beat 1 sub punch choking off cleanly before the beat-3 vacuum
  note("g#1 ~ ~ ~")
    .s("sine")
    .penv(-12)
    .pdecay(0.38)
    .decay(0.55)
    .sustain(0.01)
    .distort(0.35)
    .gain(0.95)
);

// Scene 4a (8 bars): The Black Sun Part 1 — Full 140 BPM 2-Step Break + Nam-Shub Glitch Stutters
const blackSun1 = stack(
  s("bd ~ ~ ~ ~ ~ [bd ~] ~").lpf(1700).distort(0.60).gain(1.0),
  s("~ ~ sd:1 ~ ~ [~ sd:3] sd:2 [~ sd:3]").lpf(4800).distort(0.48).room(0.50).gain(0.90),
  s("[hh hh] [~ hh] [hh metal:0] [hh hh]").fast(2).hpf(5200).gain(0.40).pan(sine.range(0.2, 0.8)),
  s("~ metal:1 ~ ~ ~ [~ metal:4] ~ metal:2")
    .hpf(1100).lpf(4800).distort(0.52).room(0.50).delay(0.32).delaytime(0.214).gain(0.30),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt sd:1*2]]>").distort(0.44).room(0.62).gain(0.84),

  // Screaming G# Phrygian Dominant neuro-gallop bassline
  note("<[g#0 ~ g#0 a0 ~ c1 ~ g#0] [e0 ~ e0 f#0 ~ g#0 ~ e0] [f#0 ~ f#0 g#0 ~ a0 ~ f#0] [d#0 ~ g0 a0 ~ c1 a0 g#0]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.7)
    .fmh(1.5)
    .lpf(sine.range(360, 1550).slow(4))
    .lpenv(5.2)
    .lpdecay(0.12)
    .lpq(17)
    .decay(0.12)
    .sustain(0.06)
    .distort(0.72)
    .gain(0.56),

  // Nam-Shub digital corruption: stuttering glossolalia FM bursts
  note("<[g#4*4 ~ a4*2 ~ c5*3 ~ d#5 ~] [e4*2 ~ g#4*4 ~ b4 ~ f#4*3 ~] [f#4*3 ~ a4*2 ~ c#5*4 ~ g#4 ~] [d#4*4 ~ a4*3 ~ g#4*2 ~ c5*4 ~]>")
    .s("sine")
    .fm("<3.5 5.2 7.1 4.4>")
    .fmh("<1.5 2.5 3.1 1.41>")
    .penv("<12 -12 7 -7>")
    .pdecay(0.04)
    .hpf(800)
    .lpf(4200)
    .decay(0.08)
    .sustain(0.01)
    .distort(0.62)
    .pan(sine.range(0.1, 0.9).fast(4))
    .delay(0.38)
    .delaytime(0.214)
    .room(0.60)
    .gain(0.22),

  // Cyber-Reese mid-bass
  note("<[g#0,g#1] [e0,e1] [f#0,f#1] [d#0,d#1]>")
    .s("supersaw")
    .lpf(sine.range(240, 780).slow(8))
    .lpq(6)
    .distort(0.64)
    .attack(0.22)
    .sustain(0.92)
    .room(0.68)
    .gain(0.60),

  note("<g#0 e0 f#0 d#0>").s("sine").gain(0.52)
);

// Scene 4b (8 bars): The Black Sun Part 2 — Offbeat Katana Power-Stabs (NO KMFDM chug pattern!)
const blackSun2 = stack(
  blackSun1,
  note("<[g#2,d#3,c4] [e2,b2,g#3] [f#2,c#3,a3] [d#2,a#2,g3]>")
    .struct("~ x ~ x x ~ ~ x")
    .s("sawtooth")
    .fm(2.1)
    .fmh(2)
    .hpf(420)
    .lpf(2800)
    .lpq(5.5)
    .distort(0.76)
    .decay(0.12)
    .sustain(0.04)
    .room(0.55)
    .gain(0.28)
);

// Scene 5 (16 bars): Nam-Shub Sprint — Frantic Double-Time Neuro Break (NO 4/4 stomp!)
const namShubSprint = stack(
  s("bd ~ [~ bd] ~ bd ~ ~ [bd ~]").lpf(1700).distort(0.64).gain(1.0),
  s("~ ~ [sd:1,cp] [~ sd:3] ~ [sd:3 ~] [sd:2,cp] ~").lpf(4600).distort(0.50).room(0.56).gain(0.88),
  s("[hh hh] [metal:0 hh] [hh ~] [hh hh]").fast(2).hpf(4800).gain(0.42).pan(sine.range(0.15, 0.85)),
  s("<~ ~ ~ [~ [mt mt] [lt lt] [sd:1*4]]>").distort(0.48).room(0.64).gain(0.84),

  // Frantic 16th-note Phrygian Dominant G# -> A -> C neuro bassline
  note("<[g#0 a0 g#0 c1 g#0 a0 d#1 c1] [e0 f#0 e0 g#0 e0 f#0 b0 g#0] [f#0 g#0 f#0 a0 f#0 g#0 c#1 a0] [d#0 g0 a0 c1 a0 g#0 f#0 d#0]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.8)
    .fmh(0.5)
    .lpf(sine.range(320, 1650).slow(4))
    .lpenv(5.4)
    .lpdecay(0.11)
    .lpq(18)
    .decay(0.10)
    .sustain(0.04)
    .distort(0.76)
    .gain(0.56),

  note("<[g#0,g#1] [e0,e1] [f#0,f#1] [d#0,d#1]>")
    .s("supersaw")
    .lpf(sine.range(240, 780).slow(8))
    .lpq(6)
    .distort(0.68)
    .attack(0.22)
    .sustain(0.92)
    .room(0.68)
    .gain(0.60),

  note("<g#0 e0 f#0 d#0>").s("sine").gain(0.52),

  // Snarling Sumerian Phrygian Dominant combat synth riff
  note("<[g#4 ~ a4 ~ c5 ~ a4 ~] [g#4 ~ ~ ~ d#4 ~ ~ ~] [e4 ~ f#4 ~ g#4 ~ a4 ~] [c5 ~ ~ ~ a4 ~ g#4 f#4]>")
    .s("supersaw")
    .fm(1.8)
    .fmh(2)
    .hpf(380)
    .lpf(2550)
    .lpq(6.5)
    .distort(0.76)
    .attack(0.02)
    .decay(0.24)
    .sustain(0.28)
    .vib(5.2)
    .vibmod(0.22)
    .room(0.72)
    .delay(0.40)
    .delaytime(0.321)
    .gain(0.28)
);

// --- ACT III: SUMERIAN VOID & KATANA SHRED (25 bars) ------------------------

// Scene 6 (8 bars): Sumerian Void — Ancient Enki Language (C#m -> B -> A -> D#)
const sumerianVoid = stack(
  s("bd ~ ~ ~").lpf(850).distort(0.34).room(0.84).gain(0.78),
  s("~ ~ cp ~").lpf(2000).room(0.95).delay(0.56).delaytime(0.321).gain(0.38),

  // Tectonic Reese off the tonic (C# -> B -> A -> D#)
  note("<[c#1,c#2] [b0,b1] [a0,a1] [d#0,d#1]>")
    .s("supersaw")
    .lpf(sine.range(200, 780).slow(8))
    .lpq(6)
    .distort(0.64)
    .attack(0.45)
    .sustain(0.96)
    .release(0.8)
    .room(0.86)
    .gain(0.72),

  note("<c#1 b0 a0 d#0>").s("sine").gain(0.55),

  // Ancient Sumerian temple pad
  note("<[c#3,e3,g#3] [b2,d#3,f#3] [a2,c#3,e3] [d#3,g3,a#3]>")
    .s("supersaw")
    .hpf(350)
    .lpf(sine.range(420, 1480).slow(8))
    .lpq(4)
    .distort(0.46)
    .vib(2)
    .vibmod(0.1)
    .attack(0.45)
    .sustain(0.88)
    .release(0.7)
    .room(0.94)
    .gain(0.26),

  // Corrupted vocal-formant glossolalia whispers echoing in the Void
  note("<[c#5 ~ e5 c#5*2 ~ g#5 ~ ~] [b4 ~ d#5 ~ f#5*2 ~ d#5 ~] [a4 ~ c#5 a4*2 ~ e5 ~ ~] [d#5 ~ g5 ~ a#5*3 ~ g5 ~]>")
    .s("sine")
    .fm("<4.2 5.8 3.6 6.4>")
    .fmh("<1.5 2.5 1.41 3.0>")
    .hpf(780)
    .decay(0.20)
    .sustain(0.02)
    .pan(sine.range(0.15, 0.85).fast(2))
    .room(0.92)
    .delay(0.58)
    .delaytime(0.321)
    .gain(0.21)
);

// Dedicated backing bed for the 12-bar Katana Duel Shred Solo (2-Step D&B Break!)
const soloBacking = stack(
  s("bd ~ ~ ~ ~ ~ [bd ~] ~").lpf(1700).distort(0.60).gain(0.98),
  s("~ ~ [sd:1,cp] ~ ~ [~ sd:3] [sd:2,cp] [~ sd:3]").lpf(4700).distort(0.48).room(0.60).gain(0.88),
  s("[hh hh] [~ hh] [hh metal:0] [hh hh]").fast(2).hpf(5000).gain(0.40),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt sd:1*2]]>").distort(0.44).room(0.66).gain(0.82),

  note("<[g#0 ~ g#0 a0 ~ c1 ~ g#0] [e0 ~ e0 f#0 ~ g#0 ~ e0] [f#0 ~ f#0 g#0 ~ a0 ~ f#0] [d#0 ~ g0 a0 ~ c1 a0 g#0]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.6)
    .fmh(1.5)
    .lpf(1600)
    .lpenv(4.6)
    .lpdecay(0.11)
    .lpq(16)
    .decay(0.11)
    .sustain(0.05)
    .distort(0.68)
    .gain(0.54),

  note("<[g#0,g#1] [e0,e1] [f#0,f#1] [d#0,d#1]>")
    .s("supersaw")
    .lpf(sine.range(280, 880).slow(4))
    .lpq(6)
    .distort(0.68)
    .attack(0.20)
    .sustain(0.94)
    .room(0.70)
    .gain(0.62),

  note("<g#0 e0 f#0 d#0>").s("sine").gain(0.52),

  // Offbeat katana power-stabs supporting the solo
  note("<[g#2,d#3,c4] [e2,b2,g#3] [f#2,c#3,a3] [d#2,a#2,g3]>")
    .struct("~ x ~ x x ~ ~ x")
    .s("sawtooth")
    .fm(2.0)
    .fmh(2)
    .hpf(420)
    .lpf(2500)
    .distort(0.76)
    .decay(0.12)
    .sustain(0.04)
    .room(0.55)
    .gain(0.24)
);

// Scene 7a (4 bars): Katana Shred 1 — Octave 4 Phrygian Dominant slashes
const shred1 = stack(
  soloBacking,
  note("<[g#4 a4 c5 a4 g#4 f#4 g#4 c5] [e4 g#4 b4 e5 b4 g#4 f#4 e4] [f#4 a4 c#5 f#5 c#5 a4 g#4 f#4] [d#4 g4 a#4 d#5 c5 a4 g#4 f#4]>")
    .fast(2)
    .s("supersaw")
    .fm(2.3)
    .fmh(2)
    .penv(-2)
    .pdecay(0.05)
    .hpf(380)
    .lpf(3300)
    .lpq(7.5)
    .distort(0.84)
    .attack(0.008)
    .decay(0.14)
    .sustain(0.20)
    .vib(6)
    .vibmod(0.22)
    .room(0.72)
    .delay(0.35)
    .delaytime(0.214)
    .gain(0.30)
);

// Scene 7b (4 bars): Katana Shred 2 — Octave 5 blistering runs
const shred2 = stack(
  soloBacking,
  note("<[g#5 ~ a5 c6 a5 g#5 f#5 g#5] [b5 g#5 e5 g#5 b5 c#6 b5 g#5] [c#6 a5 f#5 a5 c#6 d#6 c#6 a5] [d#6 c6 a5 g#5 f#5 g5 d#5 g5]>")
    .fast(2)
    .s("supersaw")
    .fm(2.6)
    .fmh(2)
    .penv(-2)
    .pdecay(0.05)
    .hpf(420)
    .lpf(3800)
    .lpq(8.0)
    .distort(0.86)
    .attack(0.006)
    .decay(0.13)
    .sustain(0.22)
    .vib(6.5)
    .vibmod(0.26)
    .room(0.75)
    .delay(0.40)
    .delaytime(0.214)
    .gain(0.31)
);

// Scene 7c (4 bars): Katana Shred Climax — Octave 6 Raven Showdown!
const shredClimax = stack(
  soloBacking,
  note("<[g#5 c6 d#6 g#6 d#6 c6 a5 g#5] [e6 d#6 c#6 b5 g#5 b5 e6 d#6] [f#6 e6 d#6 c#6 a5 c#6 f#6 e6] [d#6 c6 a5 g#5 d#6 c6 a5 g#5]>")
    .fast(2)
    .s("supersaw")
    .fm(2.9)
    .fmh(2)
    .penv(-3)
    .pdecay(0.05)
    .hpf(450)
    .lpf(4400)
    .lpq(8.5)
    .distort(0.88)
    .attack(0.005)
    .decay(0.12)
    .sustain(0.25)
    .vib(7)
    .vibmod(0.28)
    .room(0.80)
    .delay(0.42)
    .delaytime(0.214)
    .gain(0.30)
);

// Scene 8 (4 bars): Final Build over Void progression (C# -> B -> A -> D#)
const finalBuild = stack(
  s("<[bd ~ ~ ~ bd ~ ~ ~] [bd ~ bd ~ bd ~ bd ~] [bd*4] [bd*2 ~ ~]>").lpf(1600).distort(0.52).gain(0.96),
  s("<[~ ~ sd:1 ~ ~ ~ sd:1*2 ~] [~ sd:1*2 ~ sd:1*2] [sd:1*8] [sd:1*8 [mt*2 lt*2]]>")
    .distort(0.46).room(0.72).gain(0.88),
  s("metal:0*8").hpf(1800).gain("<0.16 0.26 0.36 0.46>"),

  note("<[c#1,c#2] [b0,b1] [a0,a1] [d#0,d#1]>")
    .s("supersaw")
    .lpf("<380 680 1050 1550>")
    .lpq(6.5)
    .distort(0.68)
    .attack(0.16)
    .sustain(0.95)
    .room(0.74)
    .gain(0.64),

  note("<c#1 b0 a0 d#0>").s("sine").gain(0.52),

  note("<[c#5 ~ e5 ~ g#5 ~ e5 ~] [b4 ~ d#5 ~ f#5 ~ d#5 ~] [a4 ~ c#5 ~ e5 ~ c#5 ~] [d#5 ~ g5 ~ a#5 ~ d#6 ~]>")
    .s("supersaw")
    .fm(1.5)
    .fmh(2)
    .hpf(380)
    .lpf(2750)
    .lpq(6.5)
    .distort(0.74)
    .attack(0.02)
    .decay(0.24)
    .sustain(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.78)
    .delay(0.42)
    .delaytime(0.321)
    .gain(0.28)
);

// --- ACT IV: RAFT DOUBLE-CLIMAX & TURBINE POWER-DOWN OUTRO (32 bars) --------

// Scene 9a (8 bars): Climax Part 1 — Black Sun 2 + Soaring Phrygian Dominant Anthem Lead
const raftClimax1 = stack(
  blackSun2,
  note("<[g#5 ~ a5 ~ c6 ~ a5 g#5] [b5 ~ g#5 ~ e5 ~ g#5 b5] [c#6 ~ a5 ~ f#5 ~ a5 c#6] [d#6 ~ ~ c6 a5 ~ g#5 f#5]>")
    .s("supersaw")
    .fm(1.4)
    .fmh(2)
    .hpf(400)
    .lpf(2950)
    .lpq(6)
    .distort(0.74)
    .attack(0.02)
    .decay(0.30)
    .sustain(0.40)
    .release(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.80)
    .delay(0.42)
    .delaytime(0.321)
    .gain(0.30)
);

// Scene 9b (8 bars): Maximum Overdrive — Upper-Octave Harmony + Bar-1 Crash
const raftClimax2 = stack(
  raftClimax1,
  note("<[d#6 ~ g#6 ~ a6 ~ g#6 d#6] [e6 ~ b5 ~ g#5 ~ b5 e6] [f#6 ~ c#6 ~ a5 ~ c#6 f#6] [g6 ~ ~ d#6 c6 ~ a5 g#5]>")
    .s("supersaw")
    .hpf(1000)
    .lpf(3800)
    .distort(0.65)
    .attack(0.02)
    .decay(0.26)
    .sustain(0.35)
    .vib(6)
    .vibmod(0.22)
    .room(0.86)
    .delay(0.42)
    .delaytime(0.321)
    .gain(0.17),
  s("<[metal:2 ~ ~ ~] ~>").hpf(1200).room(0.90).gain(0.35)
);

// Scene 10a (8 bars): Antivirus Purged — Half-time 2-step cooldown & closing neuro bass
const outroReboot = stack(
  s("bd ~ ~ ~ ~ ~ [bd ~] ~").lpf(1150).distort(0.38).room(0.55).gain(0.82),
  s("~ ~ [sd:1,cp] ~ ~ ~ ~ ~").lpf(3200).room(0.80).gain(0.66),
  s("[hh ~] [~ hh] [~ metal:0] [~ ~]").fast(2).hpf(5600).gain("<0.26 0.24 0.20 0.18 0.14 0.12 0.08 0.04>"),

  note("<[g#0 ~ g#0 a0 ~ c1 ~ g#0] [e0 ~ e0 f#0 ~ g#0 ~ e0] [f#0 ~ f#0 g#0 ~ a0 ~ f#0] [d#0 ~ g0 a0 ~ c1 a0 g#0]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.3)
    .fmh(1.5)
    .lpf("<1100 920 760 620 480 380 280 200>")
    .lpenv(3.0)
    .lpdecay(0.12)
    .lpq(12)
    .decay(0.11)
    .sustain(0.04)
    .distort(0.46)
    .gain(0.46),

  note("<g#0 e0 f#0 d#0>").s("sine").gain(0.46)
);

// Scene 10b (8 bars): Deliverator Turbine Power-Down — Callback to Scene 1a winding down to clean reboot
const outroPowerDown = stack(
  // Mechanical clicks slowing down
  s("<[bd ~ ~ ~] [bd ~ ~ ~] [bd ~ ~ ~] ~ [metal:0 ~ ~ ~] ~ [metal:3 ~ ~ ~] ~>").lpf(1000).room(0.75).gain(0.58),

  // Deliverator turbine winding DOWN (descending pitch envelope callback to Scene 1a!)
  note("<[g#1 ~ ~ ~] [g#1 ~ ~ ~] [e1 ~ ~ ~] [d#1 ~ ~ ~] [g#1 ~ ~ ~] ~ ~ ~>")
    .s("supersaw")
    .fm(1.8)
    .fmh(0.5)
    .penv(7)
    .pdecay(0.65)
    .lpf("<780 620 480 360 260 180 120 90>")
    .lpq(6)
    .distort(0.52)
    .attack(0.02)
    .decay(0.75)
    .sustain(0.12)
    .room(0.70)
    .gain("<0.54 0.48 0.42 0.34 0.26 0.18 0.10 0.04>"),

  note("g#0").s("sine").gain("<0.44 0.38 0.32 0.26 0.20 0.14 0.08 0.02>"),

  // Clean BIOS reboot chime on bar 7-8
  note("<~ ~ ~ ~ ~ ~ [g#5 c6 d#6 g#6] ~>")
    .s("sine")
    .fm(2.2)
    .fmh(3)
    .hpf(950)
    .decay(0.50)
    .sustain(0.01)
    .room(0.92)
    .delay(0.55)
    .delaytime(0.321)
    .gain(0.20)
);

// ============================================================================
// FULL 114-BAR ARRANGEMENT (~3:15 @ 140 BPM)
// ============================================================================
arrange(
  // Act I: Deliverator Ignition & Metaverse 2-Step (24 bars)
  [4, deliverator1],
  [4, deliverator2],
  [12, metaverseRun],
  [4, virusRiser],
  // Act II: Glitch-Freeze Drop, Black Sun & Nam-Shub Sprint (33 bars)
  [1, stackDrop],
  [8, blackSun1],
  [8, blackSun2],
  [16, namShubSprint],
  // Act III: Sumerian Void & Katana Shred (25 bars)
  [8, sumerianVoid],
  [4, shred1],
  [4, shred2],
  [4, shredClimax],
  [4, finalBuild],
  [1, stackDrop],
  // Act IV: Raft Double-Climax & Turbine Power-Down Outro (32 bars)
  [8, raftClimax1],
  [8, raftClimax2],
  [8, outroReboot],
  [8, outroPowerDown]
)
