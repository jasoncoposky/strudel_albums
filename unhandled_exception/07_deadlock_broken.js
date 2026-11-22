// ============================================================================
// "0x07 // DEADLOCK_BROKEN" — Neuromancer (William Gibson)
// Album: UNHANDLED EXCEPTION (Track 07 | Camelot 6A)
// Full ~3:35 Story Arc (122 bars @ 136 BPM, G minor / G Harmonic Minor)
// ============================================================================
// Act I   (0:00–0:42): Chiba Decking (8) -> Kuang Launch (12) -> Riser (4)
// Act II  (0:42–1:41): Turing Drop (1) -> Villa Straylight (16) -> Kuang Run (16)
// Act III (1:41–2:25): Flatline Void (8) -> Kuang Shred (12)
//                      -> Final Build (4) -> Ultimate Drop + Pitch Bend (1)
// Act IV  (2:25–3:35): AI Merge Double-Climax (16) -> Open Matrix Outro (24)
// ============================================================================
setcps(136 / 60 / 4);

// DUAL AI POLYMETER MOTIFS:
// Wintermute (5-step cold clinical FM bell) vs Neuromancer (7-step warm saw)
// They phase against each other in Acts I-III, then lock in unison in Act IV!
const wintermute5 = "g5 bb5 d6 f#6 d6";
const neuromancer7 = "g4 a4 bb4 d5 eb5 d5 bb4";

// --- ACT I: CHIBA DECKING & KUANG LAUNCH (24 bars) --------------------------

// Scene 1a (4 bars): Jacking into the Ono-Sendai Cyberspace 7 — Wintermute awakens
const chibaDeck1 = stack(
  s("hh*16").hpf(6800).lpf(11500).gain(sine.range(0.05, 0.14).slow(4)).pan(sine.range(0.15, 0.85).slow(2)),
  s("<~ ~ [bd ~ ~ ~] [bd ~ ~ bd]>").lpf(1050).distort(0.38).room(0.6).gain(0.84),

  // Wintermute: 5-step cold clinical FM bell polymeter
  note(wintermute5)
    .fast(2)
    .s("sine")
    .fm(3.8)
    .fmh(3)
    .hpf(900)
    .decay(0.16)
    .sustain(0.01)
    .pan(0.25)
    .room(0.88)
    .delay(0.50)
    .delaytime(0.331)
    .gain(0.20),

  // G minor Cyber-Reese waking up
  note("<[g0,g1] [g0,g1] [eb0,eb1] [d0,d1]>")
    .s("supersaw")
    .lpf("<220 320 440 580>")
    .lpq(5.6)
    .distort(0.54)
    .attack(0.38)
    .sustain(0.94)
    .room(0.84)
    .gain(0.60),

  note("<g0 g0 eb0 d0>").s("sine").gain(0.48),

  // Ominous Villa Straylight brass foreshadowing
  note("<[g2,d3] [g2,d3] [eb2,bb2] [d2,a2]>")
    .s("supersaw")
    .struct("x ~ ~ ~ ~ ~ ~ ~")
    .hpf(350)
    .lpf("<550 760 1000 1300>")
    .lpq(4.5)
    .distort(0.48)
    .attack(0.06)
    .decay(0.50)
    .sustain(0.24)
    .room(0.88)
    .delay(0.46)
    .delaytime(0.331)
    .gain(0.25)
);

// Scene 1b (4 bars): Neuromancer's 7-step warm saw enters — Dual AI Polymeter begins!
const chibaDeck2 = stack(
  chibaDeck1,
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1350).distort(0.45).room(0.52).gain(0.92),
  s("<[~ ~ cp ~] [~ ~ [sd:2,cp] ~] [~ ~ [sd:2,cp] ~] [~ ~ [sd:2,cp] [mt lt]]> ")
    .lpf(3800).distort(0.32).room(0.74).gain(0.82),

  // Neuromancer: 7-step warm melancholic sawtooth phasing against Wintermute's 5-step!
  note(neuromancer7)
    .fast(2)
    .s("sawtooth")
    .hpf(420)
    .lpf("<650 900 1200 1600>")
    .lpq(5)
    .distort(0.42)
    .decay(0.18)
    .sustain(0.06)
    .pan(0.75)
    .room(0.82)
    .delay(0.45)
    .delaytime(0.221)
    .gain(0.20)
);

// Scene 2 (12 bars): Kuang Grade Mark Eleven Launch — Full 136 BPM cyberspace velocity
const kuangLaunch = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1550).distort(0.48).gain(0.96),
  s("~ ~ sd:1 ~ ~ ~ sd:2 [~ sd:3]").lpf(4500).distort(0.38).room(0.58).gain(0.86),
  s("hh*16").hpf(5200).gain("<0.14 0.36 0.20 0.48>*4").pan(sine.range(0.2, 0.8)),
  s("~ metal:0 ~ [~ metal:3] ~ ~ metal:1 ~")
    .hpf(1100).lpf(4800).distort(0.44).room(0.54).delay(0.34).delaytime(0.221).gain(0.28),

  // G harmonic minor TB-303 acid propulsion
  note("<[g0 g0 g1 g0 a0 g1 f#0 g0] [eb0 eb0 eb1 eb0 f0 eb1 d0 eb0] [f0 f0 f1 f0 g0 f1 eb0 f0] [d0 d0 d1 d0 eb0 d1 f#0 d0]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(260, 1100).slow(4))
    .lpenv(4.8)
    .lpdecay(0.12)
    .lpq(17)
    .decay(0.11)
    .sustain(0.03)
    .distort(0.62)
    .gain(0.54),

  note("<[g0,g1] [eb0,eb1] [f0,f1] [d0,d1]>")
    .s("supersaw")
    .lpf(sine.range(220, 680).slow(8))
    .lpq(5.8)
    .distort(0.58)
    .attack(0.32)
    .sustain(0.92)
    .room(0.75)
    .gain(0.60),

  note("<g0 eb0 f0 d0>").s("sine").gain(0.50),

  // Dual AI Polymeter: Wintermute (left, 5-step) vs Neuromancer (right, 7-step)
  note(wintermute5)
    .fast(2)
    .s("sine")
    .fm(3.8)
    .fmh(3)
    .hpf(900)
    .decay(0.15)
    .sustain(0.01)
    .pan(0.22)
    .room(0.84)
    .delay(0.46)
    .delaytime(0.331)
    .gain(0.20),

  note(neuromancer7)
    .fast(2)
    .s("sawtooth")
    .hpf(420)
    .lpf(sine.range(900, 2200).slow(6))
    .lpq(5.5)
    .distort(0.46)
    .decay(0.16)
    .sustain(0.05)
    .pan(0.78)
    .room(0.80)
    .delay(0.42)
    .delaytime(0.221)
    .gain(0.20)
);

// Scene 3 (4 bars): Turing Lock Riser
const turingRiser = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1600).distort(0.50).gain(0.96),
  s("<[~ ~ sd:1 ~] [~ sd:1 ~ sd:1] [~ [sd:1,cp] ~ [sd:1,cp]] [sd:1*4 [sd:1*4 [mt lt]]]>")
    .distort(0.44).room(0.76).gain(0.88),
  s("hh*16").hpf(5000).gain("<0.15 0.28 0.40 0.52>"),

  note("<g0 eb0 f0 d0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 920 1650 2600>")
    .lpenv(5.2)
    .lpdecay(0.11)
    .lpq(18)
    .decay(0.10)
    .sustain(0.03)
    .distort(0.66)
    .gain(0.56),

  note("<[g0,g1] [eb0,eb1] [f0,f1] [d0,d1]>")
    .s("supersaw")
    .lpf("<350 620 960 1400>")
    .lpq(6)
    .distort(0.66)
    .attack(0.20)
    .sustain(0.95)
    .room(0.75)
    .gain(0.64),

  note("<g0 eb0 f0 d0>").s("sine").gain(0.52)
);

// --- ACT II: VILLA STRAYLIGHT & KUANG RUN (33 bars) -------------------------

// Signature 1-bar Turing Lock Drop + G1 -> G2 Rising Octave Swell!
const turingDrop = stack(
  s("bd ~ ~ ~").distort(0.70).lpf(1000).room(0.62).gain(1.0),
  s("cp ~ ~ ~").lpf(2800).distort(0.38).room(0.95).gain(0.72),

  note("g2")
    .s("sine")
    .penv(-24)
    .pdecay(1.3)
    .decay(1.7)
    .sustain(0.2)
    .distort(0.35)
    .gain(0.95),

  note("[g0,g1]")
    .s("supersaw")
    .lpf(sine.range(180, 980).slow(1))
    .lpq(7)
    .distort(0.78)
    .attack(0.01)
    .decay(1.5)
    .sustain(0.35)
    .room(0.90)
    .gain(0.78),

  note("[g2,bb2,d3,g3]")
    .s("supersaw")
    .hpf(350)
    .lpf(1600)
    .distort(0.52)
    .attack(0.02)
    .decay(1.4)
    .sustain(0.15)
    .room(0.95)
    .gain(0.30),

  note("~ ~ g2 ~")
    .s("supersaw")
    .penv(-12)
    .pdecay(0.84)
    .lpf(sine.range(250, 2800).fast(1))
    .lpq(7.5)
    .distort(0.72)
    .attack(0.22)
    .decay(0.66)
    .sustain(0.3)
    .room(0.80)
    .gain(0.64)
);

// Scene 4a (8 bars): Villa Straylight Part 1 — Full 136 BPM breakbeat + Dual AI Polymeter
const straylight1 = stack(
  kuangLaunch,
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.40).room(0.72).gain(0.82),

  // Screaming high-register 303 counter-line
  note("<[g3 g4 ~ f#3 g3 bb3 ~ d4] [eb3 eb4 ~ f3 eb3 g3 ~ bb3] [f3 f4 ~ g3 f3 a3 ~ c4] [d3 d4 ~ eb3 d3 f#3 ~ a3]>")
    .fast(2)
    .s("sawtooth")
    .hpf(360)
    .lpf(sine.range(380, 1900).slow(4))
    .lpenv(4.8)
    .lpdecay(0.11)
    .lpq(18)
    .decay(0.10)
    .sustain(0.02)
    .distort(0.62)
    .delay(0.36)
    .delaytime(0.221)
    .pan(sine.range(0.2, 0.8))
    .gain(0.24)
);

// Scene 4b (8 bars): Villa Straylight Part 2 — KMFDM fifth power chords slam in!
const straylight2 = stack(
  straylight1,
  note("<[g2,d3] [eb2,bb2] [f2,c3] [d2,a2]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2350)
    .lpq(4.5)
    .distort(0.76)
    .decay(0.15)
    .sustain(0.08)
    .room(0.62)
    .gain(0.28)
);

// Scene 5 (16 bars): Kuang Corridor — 136 BPM 4-on-the-floor industrial stomp
const kuangCorridor = stack(
  s("bd*4").lpf(1600).distort(0.62).gain(1.0),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(4200).distort(0.48).room(0.68).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.16 0.38 0.22 0.50>*4").pan(sine.range(0.2, 0.8)),
  s("[~ metal:2] ~ [~ metal:4] [~ metal:0]")
    .hpf(1000).lpf(4500).distort(0.55).room(0.60).delay(0.32).delaytime(0.221).gain(0.34),
  s("<~ ~ ~ [~ ~ sd:1*2 [mt lt lt lt]]>").distort(0.44).room(0.72).gain(0.82),

  note("<[g0 g1 ab0 g0]*2 [g0 g1 f#0 g0]*2 [eb0 eb1 f0 eb0]*2 [d0 d1 eb0 d0]*2>")
    .fast(2)
    .s("sawtooth")
    .fm(1.6)
    .fmh(0.5)
    .lpf(sine.range(240, 1400).slow(4))
    .lpenv(5.4)
    .lpdecay(0.12)
    .lpq(18)
    .decay(0.10)
    .sustain(0.03)
    .distort(0.74)
    .gain(0.56),

  note("<[g0,g1] [g0,g1] [eb0,eb1] [d0,d1]>")
    .s("supersaw")
    .lpf(sine.range(220, 740).slow(8))
    .lpq(6)
    .distort(0.68)
    .attack(0.30)
    .sustain(0.92)
    .room(0.75)
    .gain(0.62),

  note("<g0 g0 eb0 d0>").s("sine").gain(0.52),

  // Snarling harmonic-minor combat synth riff
  note("<[g4 ~ f#4 ~ g4 ~ bb4 ~] [a4 ~ ~ ~ d4 ~ ~ ~] [eb4 ~ f4 ~ g4 ~ a4 ~] [f#4 ~ ~ ~ d4 ~ a4 ~]>")
    .s("supersaw")
    .fm(1.8)
    .fmh(2)
    .hpf(380)
    .lpf(2450)
    .lpq(6.5)
    .distort(0.76)
    .attack(0.02)
    .decay(0.26)
    .sustain(0.30)
    .vib(5.2)
    .vibmod(0.22)
    .room(0.76)
    .delay(0.42)
    .delaytime(0.331)
    .gain(0.28)
);

// --- ACT III: FLATLINE VOID & KUANG SHRED (25 bars) -------------------------

// Scene 6 (8 bars): Flatline Beach Void (Cm -> Bb -> Ab -> D off-tonic)
const flatlineVoid = stack(
  s("bd ~ ~ ~").lpf(850).distort(0.32).room(0.86).gain(0.76),
  s("~ ~ cp ~").lpf(2000).room(0.95).delay(0.56).delaytime(0.331).gain(0.38),

  // Tectonic Reese (C -> Bb -> Ab -> D)
  note("<[c1,c2] [bb0,bb1] [ab0,ab1] [d0,d1]>")
    .s("supersaw")
    .lpf(sine.range(200, 780).slow(8))
    .lpq(6)
    .distort(0.64)
    .attack(0.45)
    .sustain(0.96)
    .release(0.8)
    .room(0.88)
    .gain(0.72),

  note("<c1 bb0 ab0 d0>").s("sine").gain(0.55),

  // Dual AI Polymeter suspended in the flatline void
  note(wintermute5)
    .s("sine")
    .fm(3.2)
    .fmh(3)
    .hpf(850)
    .decay(0.28)
    .sustain(0.02)
    .pan(0.20)
    .room(0.94)
    .delay(0.58)
    .delaytime(0.331)
    .gain(0.21),

  note(neuromancer7)
    .s("sawtooth")
    .hpf(400)
    .lpf(sine.range(500, 1400).slow(8))
    .lpq(4.5)
    .distort(0.40)
    .decay(0.32)
    .sustain(0.10)
    .pan(0.80)
    .room(0.92)
    .delay(0.56)
    .delaytime(0.331)
    .gain(0.21),

  // Distant cavernous 303 whisper
  note("<[c2 ~ eb2 c2 ~ g2 ~ eb2] [bb1 ~ d2 bb1 ~ f2 ~ d2] [ab1 ~ c2 ab1 ~ eb2 ~ c2] [d2 ~ f#2 d2 ~ a2 ~ f#2]>")
    .fast(2)
    .s("sawtooth")
    .hpf(350)
    .lpf(sine.range(260, 950).slow(8))
    .lpenv(3.8)
    .lpdecay(0.12)
    .lpq(16)
    .decay(0.10)
    .sustain(0.02)
    .distort(0.46)
    .room(0.92)
    .delay(0.58)
    .delaytime(0.331)
    .gain(0.19)
);

// Dedicated backing bed for the 12-bar Kuang Mark XI Shred Solo
const soloBacking = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1650).distort(0.58).gain(0.98),
  s("~ ~ [sd:1,cp] ~ ~ ~ [sd:2,cp] [~ sd:3]").lpf(4500).distort(0.46).room(0.70).gain(0.88),
  s("hh*16").hpf(5000).gain("<0.15 0.38 0.20 0.52>*4"),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.42).room(0.74).gain(0.82),

  note("<g0 eb0 f0 d0>")
    .struct("x*16")
    .s("sawtooth")
    .fm(1.6)
    .fmh(0.5)
    .lpf(1600)
    .lpenv(4.6)
    .lpdecay(0.11)
    .lpq(17)
    .decay(0.10)
    .sustain(0.03)
    .distort(0.68)
    .gain(0.54),

  note("<[g0,g1] [eb0,eb1] [f0,f1] [d0,d1]>")
    .s("supersaw")
    .lpf(sine.range(280, 880).slow(4))
    .lpq(6)
    .distort(0.68)
    .attack(0.25)
    .sustain(0.95)
    .room(0.75)
    .gain(0.65),

  note("<g0 eb0 f0 d0>").s("sine").gain(0.52),

  note("<[g2,d3] [eb2,bb2] [f2,c3] [d2,a2]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2300)
    .distort(0.78)
    .decay(0.14)
    .sustain(0.08)
    .room(0.62)
    .gain(0.26)
);

// Scene 7a (4 bars): Kuang Shred 1 — Octave 4 G harmonic minor attack
const shred1 = stack(
  soloBacking,
  note("<[g4 bb4 a4 g4 f#4 g4 bb4 d5] [eb5 d5 c5 bb4 g4 bb4 c5 eb5] [f5 eb5 d5 c5 a4 c5 d5 f5] [d5 c5 bb4 a4 f#4 a4 c5 d5]>")
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
    .delaytime(0.221)
    .gain(0.30)
);

// Scene 7b (4 bars): Kuang Shred 2 — Octave 5 blistering runs
const shred2 = stack(
  soloBacking,
  note("<[g5 ~ bb5 a5 g5 f5 d5 g5] [bb5 g5 eb5 g5 bb5 c6 bb5 g5] [c6 a5 f5 a5 c6 d6 c6 a5] [d6 c6 bb5 a5 g5 f#5 d5 f#5]>")
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
    .delaytime(0.221)
    .gain(0.31)
);

// Scene 7c (4 bars): Kuang Shred Climax — Octave 6 Turing Lock Shattered!
const shredClimax = stack(
  soloBacking,
  note("<[g5 bb5 d6 g6 d6 bb5 a5 g5] [eb6 d6 c6 bb5 g5 bb5 eb6 d6] [f6 eb6 d6 c6 a5 c6 f6 eb6] [d6 c6 bb5 a5 d6 c6 bb5 a5]>")
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
    .delaytime(0.221)
    .gain(0.30)
);

// Scene 8 (4 bars): Final Build over Void progression (C -> Bb -> Ab -> D)
const finalBuild = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1600).distort(0.48).gain(0.96),
  s("<[~ ~ sd:1 ~] [~ sd:1 ~ sd:1] [~ [sd:1,cp] ~ [sd:1,cp]] [sd:1*4 [sd:1*4 [mt lt]]]>")
    .distort(0.44).room(0.80).gain(0.88),
  s("hh*16").hpf(5000).gain("<0.15 0.28 0.40 0.52>"),

  note("<c1 bb0 ab0 d0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 900 1600 2600>")
    .lpenv(5.2)
    .lpdecay(0.11)
    .lpq(18)
    .decay(0.10)
    .sustain(0.03)
    .distort(0.66)
    .gain(0.56),

  note("<[c1,c2] [bb0,bb1] [ab0,ab1] [d0,d1]>")
    .s("supersaw")
    .lpf("<350 620 960 1400>")
    .lpq(6.5)
    .distort(0.68)
    .attack(0.20)
    .sustain(0.95)
    .room(0.78)
    .gain(0.66),

  note("<c1 bb0 ab0 d0>").s("sine").gain(0.52),

  note("<[c5 ~ eb5 ~ g5 ~ eb5 ~] [bb4 ~ d5 ~ f5 ~ d5 ~] [ab4 ~ c5 ~ eb5 ~ c5 ~] [d5 ~ f#5 ~ a5 ~ d6 ~]>")
    .s("supersaw")
    .fm(1.5)
    .fmh(2)
    .hpf(380)
    .lpf(2650)
    .lpq(6.5)
    .distort(0.74)
    .attack(0.02)
    .decay(0.24)
    .sustain(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.80)
    .delay(0.45)
    .delaytime(0.331)
    .gain(0.28)
);

// --- ACT IV: AI MERGE DOUBLE-CLIMAX & OPEN MATRIX OUTRO (40 bars) -----------

// Scene 9a (8 bars): AI Merge Climax Part 1 — Wintermute + Neuromancer LOCK IN UNISON!
const mergeClimax1 = stack(
  straylight2,
  // Unified Wintermute + Neuromancer Anthem Lead (locked 8-step harmonic unison!)
  note("<[g5 ~ bb5 ~ d6 ~ c6 bb5] [bb5 ~ g5 ~ eb5 ~ g5 bb5] [c6 ~ a5 ~ f5 ~ a5 c6] [d6 ~ ~ c6 bb5 ~ a5 f#5]>")
    .s("supersaw")
    .fm(1.4)
    .fmh(2)
    .hpf(400)
    .lpf(2850)
    .lpq(6)
    .distort(0.74)
    .attack(0.02)
    .decay(0.30)
    .sustain(0.40)
    .release(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.82)
    .delay(0.45)
    .delaytime(0.331)
    .gain(0.30),
  // FM Bell doubling the exact same anthem line — the two AIs are now ONE!
  note("<[g5 ~ bb5 ~ d6 ~ c6 bb5] [bb5 ~ g5 ~ eb5 ~ g5 bb5] [c6 ~ a5 ~ f5 ~ a5 c6] [d6 ~ ~ c6 bb5 ~ a5 f#5]>")
    .s("sine")
    .fm(3.2)
    .fmh(3)
    .hpf(900)
    .decay(0.24)
    .sustain(0.04)
    .room(0.88)
    .delay(0.45)
    .delaytime(0.331)
    .gain(0.18)
);

// Scene 9b (8 bars): Maximum Overdrive — Upper-Octave Harmony + Bar-1 Crash
const mergeClimax2 = stack(
  mergeClimax1,
  note("<[d6 ~ g6 ~ bb6 ~ a6 g6] [g6 ~ eb6 ~ bb5 ~ eb6 g6] [a6 ~ f6 ~ c6 ~ f6 a6] [a6 ~ ~ g6 f#6 ~ d6 a5]>")
    .s("supersaw")
    .hpf(1000)
    .lpf(3800)
    .distort(0.65)
    .attack(0.02)
    .decay(0.26)
    .sustain(0.35)
    .vib(6)
    .vibmod(0.22)
    .room(0.88)
    .delay(0.45)
    .delaytime(0.331)
    .gain(0.17),
  s("<[metal:2 ~ ~ ~] ~>").hpf(1200).room(0.90).gain(0.35)
);

// Scene 10a (8 bars): Step Down — Matrix stabilizes into the new entity
const outroStepDown = stack(
  s("bd ~ ~ ~ ~ bd ~ ~").lpf(1100).distort(0.36).room(0.65).gain(0.84),
  s("~ ~ [sd:1,cp] ~ ~ ~ ~ ~").lpf(3000).room(0.88).gain(0.68),
  s("hh*8").hpf(5500).gain("<0.12 0.24 0.14 0.28>*2").pan(sine.range(0.25, 0.75)),

  note("<[g0 g0 g1 g0 a0 g1 f#0 g0] [eb0 eb0 eb1 eb0 f0 eb1 d0 eb0] [f0 f0 f1 f0 g0 f1 eb0 f0] [d0 d0 d1 d0 eb0 d1 f#0 d0]>")
    .fast(2)
    .s("sawtooth")
    .lpf("<900 760 620 500 400 320 260 200>")
    .lpenv(3.2)
    .lpdecay(0.12)
    .lpq(13)
    .decay(0.11)
    .sustain(0.04)
    .distort(0.48)
    .gain(0.44),

  note("<[g0,g1] [eb0,eb1] [f0,f1] [d0,d1]>")
    .s("supersaw")
    .lpf("<600 520 440 370 310 260 220 180>")
    .lpq(5.5)
    .distort(0.54)
    .attack(0.40)
    .sustain(0.92)
    .room(0.85)
    .gain(0.58),

  note("<g0 eb0 f0 d0>").s("sine").gain(0.48)
);

// Scene 10b (8 bars): Alpha Centauri Signal — Drums vanish, unified chimes drift
const outroMatrixDrift = stack(
  s("hh*16").hpf(6800).lpf(11500).gain(sine.range(0.05, 0.13).slow(4)).pan(sine.range(0.15, 0.85).slow(2)),
  s("<[bd ~ ~ ~] ~ [bd ~ ~ ~] ~ [bd ~ ~ ~] ~ ~ ~>").lpf(850).room(0.90).gain(0.60),

  note("<[g0,g1] [eb0,eb1] [f0,f1] [d0,d1]>")
    .s("supersaw")
    .lpf("<320 280 245 215 190 165 145 130>")
    .lpq(5)
    .distort(0.46)
    .attack(0.50)
    .sustain(0.95)
    .release(1.0)
    .room(0.92)
    .gain(0.54),

  note("<g0 eb0 f0 d0>").s("sine").gain(0.44),

  note(wintermute5)
    .s("sine")
    .fm(3.2)
    .fmh(3)
    .hpf(900)
    .decay(0.32)
    .sustain(0.02)
    .pan(sine.range(0.2, 0.8))
    .room(0.95)
    .delay(0.62)
    .delaytime(0.331)
    .gain(0.18)
);

// Scene 10c (8 bars): Open Matrix Fade — Lone G0 Reese & signal fade to silence
const outroFade = stack(
  s("hh*16").hpf(7000).lpf(11800).gain("<0.12 0.11 0.10 0.09 0.08 0.06 0.04 0.02>").pan(sine.range(0.15, 0.85).slow(2)),

  note("[g0,g1]")
    .s("supersaw")
    .lpf("<180 160 140 125 110 100 90 80>")
    .lpq(4.5)
    .distort(0.40)
    .attack(0.55)
    .sustain(0.95)
    .release(1.4)
    .room(0.98)
    .gain("<0.50 0.44 0.38 0.31 0.24 0.17 0.10 0.04>"),

  note("g0").s("sine").gain("<0.42 0.36 0.29 0.22 0.16 0.11 0.06 0.02>"),

  note("<[g5 ~ ~ ~ ~ ~ ~ ~] ~ [d6 ~ ~ ~ ~ ~ ~ ~] ~ [g6 ~ ~ ~ ~ ~ ~ ~] ~ ~ ~>")
    .s("sine")
    .fm(3.0)
    .fmh(3)
    .hpf(900)
    .decay(0.55)
    .sustain(0.01)
    .room(0.98)
    .delay(0.68)
    .delaytime(0.331)
    .gain(0.15)
);

// ============================================================================
// FULL 122-BAR ARRANGEMENT (~3:35 @ 136 BPM)
// ============================================================================
arrange(
  // Act I: Chiba Decking & Kuang Launch (24 bars)
  [4, chibaDeck1],
  [4, chibaDeck2],
  [12, kuangLaunch],
  [4, turingRiser],
  // Act II: Villa Straylight & Kuang Run (33 bars)
  [1, turingDrop],
  [8, straylight1],
  [8, straylight2],
  [16, kuangCorridor],
  // Act III: Flatline Void & Kuang Shred (25 bars)
  [8, flatlineVoid],
  [4, shred1],
  [4, shred2],
  [4, shredClimax],
  [4, finalBuild],
  [1, turingDrop],
  // Act IV: AI Merge Double-Climax & Open Matrix Outro (40 bars)
  [8, mergeClimax1],
  [8, mergeClimax2],
  [8, outroStepDown],
  [8, outroMatrixDrift],
  [8, outroFade]
)
