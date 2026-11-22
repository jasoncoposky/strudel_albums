// ============================================================================
// "0x08 // UNHANDLED_EXCEPTION" — Ghost in the Shell (Masamune Shirow / Kawai)
// Album: UNHANDLED EXCEPTION (Track 08 — Finale | Camelot 7A)
// Full ~3:48 Story Arc (114 bars @ 120 BPM, D minor -> D Dorian / Open Fifths)
// ============================================================================
// Act I   (0:00–0:40): Shell Dive (8) -> Neon Canal (8) -> Tank Riser (4)
// Act II  (0:40–1:38): Ghost Drop (1) -> Museum Battle (16) -> Spider Tank (12)
// Act III (1:38–2:28): Project 2501 Link (8) -> Neural Barrier Shred (12)
//                      -> Final Build (4) -> Ultimate Drop + Pitch Bend (1)
// Act IV  (2:28–3:48): Ghost Merge Climax (16) -> Unbound Vast Net Tail (24)
// ============================================================================
setcps(120 / 60 / 4);

// --- ACT I: SHELL DIVE & NEON CANAL (20 bars) -------------------------------

// Scene 1a (4 bars): Kenji Kawai ceremonial FM bells & hypnotic taiko/tom pulse
const shellDive1 = stack(
  // Ceremonial hypnotic tom & metallic chime pulse
  s("mt ~ ~ [~ lt] ~ ~ lt ~").lpf(1600).room(0.88).gain(0.76),
  s("<[metal:2 ~ ~ ~] ~ [metal:0 ~ ~ ~] ~>").hpf(1100).room(0.95).delay(0.55).delaytime(0.375).gain(0.24),

  // Kenji Kawai-inspired ceremonial FM bell harmonies (stark open fifths & fourths)
  note("<[d4,a4] [e4,b4] [g4,d5] [a4,e5]>")
    .s("sine")
    .fm(2.8)
    .fmh(1.5)
    .hpf(500)
    .attack(0.04)
    .decay(0.85)
    .sustain(0.15)
    .release(0.90)
    .room(0.95)
    .delay(0.52)
    .delaytime(0.375)
    .gain(0.24),

  // Tectonic D1 Cyber-Reese rising from the deep bay
  note("<[d1,d2] [d1,d2] [c1,c2] [a0,a1]>")
    .s("supersaw")
    .lpf("<200 290 400 540>")
    .lpq(5.5)
    .distort(0.50)
    .attack(0.45)
    .sustain(0.94)
    .room(0.88)
    .gain(0.60),

  note("<d1 d1 c1 a0>").s("sine").gain(0.50)
);

// Scene 1b (4 bars): Motoko surfaces in the neon canal — deep kick & Dorian bass enter
const shellDive2 = stack(
  shellDive1,
  s("bd ~ ~ bd ~ ~ bd ~").lpf(1300).distort(0.42).room(0.60).gain(0.90),
  s("<[~ ~ cp ~] [~ ~ [sd:2,cp] ~] [~ ~ [sd:2,cp] ~] [~ ~ [sd:2,cp] [mt lt]]> ")
    .lpf(3600).distort(0.32).room(0.80).gain(0.80),

  note("<[d1 d1 d2 d1 e1 d1 c1 d1] [c1 c1 c2 c1 d1 c1 a0 c1] [g0 g0 g1 g0 a0 g0 f0 g0] [a0 a0 a1 a0 b0 c1 b0 a0]>")
    .fast(2)
    .s("sawtooth")
    .lpf("<340 500 720 1000>")
    .lpenv(3.6)
    .lpdecay(0.14)
    .lpq(13)
    .decay(0.13)
    .sustain(0.04)
    .distort(0.54)
    .gain(0.50)
);

// Scene 2 (8 bars): Neon Canal Pursuit — Hypnotic 120 BPM Dorian breakbeat + ceremonial bells
const neonCanal = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1500).distort(0.48).gain(0.96),
  s("~ ~ [sd:2,cp] ~ ~ ~ [sd:2,cp] [~ sd:3]").lpf(4200).distort(0.36).room(0.72).gain(0.86),
  s("hh*16").hpf(5000).gain("<0.12 0.34 0.18 0.44>*4").pan(sine.range(0.2, 0.8)),
  s("mt ~ ~ [~ lt] ~ ~ [lt mt] ~").lpf(1800).room(0.75).gain(0.55),

  // D Dorian TB-303 acid line
  note("<[d1 d1 d2 d1 e1 d2 c1 d1] [c1 c1 c2 c1 d1 c2 a0 c1] [g0 g0 g1 g0 a0 g1 f0 g0] [a0 a0 a1 a0 b0 c1 b0 a0]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(260, 1100).slow(8))
    .lpenv(4.6)
    .lpdecay(0.14)
    .lpq(16)
    .decay(0.12)
    .sustain(0.04)
    .distort(0.60)
    .gain(0.54),

  note("<[d1,d2] [c1,c2] [g0,g1] [a0,a1]>")
    .s("supersaw")
    .lpf(sine.range(220, 660).slow(8))
    .lpq(5.8)
    .distort(0.56)
    .attack(0.35)
    .sustain(0.94)
    .room(0.80)
    .gain(0.60),

  note("<d1 c1 g0 a0>").s("sine").gain(0.52),

  // Ceremonial FM bell open-fifth motif riding above the groove
  note("<[d4,a4] [e4,b4] [g4,d5] [a4,e5]>")
    .s("sine")
    .fm(3.0)
    .fmh(3)
    .hpf(600)
    .decay(0.55)
    .sustain(0.08)
    .pan(sine.range(0.25, 0.75))
    .room(0.90)
    .delay(0.48)
    .delaytime(0.375)
    .gain(0.22)
);

// Scene 3 (4 bars): Spider Tank Riser
const tankRiser = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1550).distort(0.50).gain(0.96),
  s("<[~ ~ sd:2 ~] [~ sd:2 ~ sd:2] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [sd:2*4 [mt lt]]]>")
    .distort(0.44).room(0.80).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.15 0.28 0.40 0.52>"),

  note("<d1 c1 g0 a0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 900 1600 2600>")
    .lpenv(5.0)
    .lpdecay(0.13)
    .lpq(17)
    .decay(0.11)
    .sustain(0.03)
    .distort(0.66)
    .gain(0.56),

  note("<[d1,d2] [c1,c2] [g0,g1] [a0,a1]>")
    .s("supersaw")
    .lpf("<350 620 960 1380>")
    .lpq(6)
    .distort(0.66)
    .attack(0.20)
    .sustain(0.95)
    .room(0.80)
    .gain(0.65),

  note("<d1 c1 g0 a0>").s("sine").gain(0.52)
);

// --- ACT II: MUSEUM TANK BATTLE (29 bars) -----------------------------------

// Signature 1-bar Ghost Drop + D1 -> D2 Rising Octave Swell!
const ghostDrop = stack(
  s("bd ~ ~ ~").distort(0.70).lpf(1000).room(0.65).gain(1.0),
  s("cp ~ ~ ~").lpf(2800).distort(0.36).room(0.95).gain(0.72),

  note("d2")
    .s("sine")
    .penv(-24)
    .pdecay(1.4)
    .decay(1.85)
    .sustain(0.2)
    .distort(0.35)
    .gain(0.95),

  note("[d1,d2]")
    .s("supersaw")
    .lpf(sine.range(180, 980).slow(1))
    .lpq(7)
    .distort(0.78)
    .attack(0.01)
    .decay(1.65)
    .sustain(0.35)
    .room(0.90)
    .gain(0.78),

  note("[d3,a3,d4,e4]")
    .s("supersaw")
    .hpf(350)
    .lpf(1650)
    .distort(0.50)
    .attack(0.02)
    .decay(1.55)
    .sustain(0.18)
    .room(0.95)
    .gain(0.30),

  note("~ ~ d2 ~")
    .s("supersaw")
    .penv(-12)
    .pdecay(0.95)
    .lpf(sine.range(250, 2800).fast(1))
    .lpq(7.5)
    .distort(0.70)
    .attack(0.26)
    .decay(0.78)
    .sustain(0.30)
    .room(0.82)
    .gain(0.64)
);

// Scene 4a (8 bars): Museum Battle Part 1 — Heavy Dorian breakbeat + ceremonial percussion
const museumBattle1 = stack(
  neonCanal,
  s("~ metal:1 ~ [~ metal:4] ~ ~ metal:2 ~")
    .hpf(1050).lpf(4600).distort(0.50).room(0.65).delay(0.35).delaytime(0.250).gain(0.32),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.42).room(0.76).gain(0.82),

  // Bubbling Dorian 303 counter-line
  note("<[d3 d4 ~ e3 d3 f3 ~ a3] [c3 c4 ~ d3 c3 e3 ~ g3] [g2 g3 ~ a2 g2 b2 ~ d3] [a2 a3 ~ b2 a2 c3 ~ e3]>")
    .fast(2)
    .s("sawtooth")
    .hpf(360)
    .lpf(sine.range(380, 1850).slow(4))
    .lpenv(4.8)
    .lpdecay(0.12)
    .lpq(18)
    .decay(0.10)
    .sustain(0.02)
    .distort(0.60)
    .delay(0.36)
    .delaytime(0.250)
    .pan(sine.range(0.2, 0.8))
    .gain(0.24)
);

// Scene 4b (8 bars): Museum Battle Part 2 — Chugging fifth power chords slam in!
const museumBattle2 = stack(
  museumBattle1,
  note("<[d3,a3] [c3,g3] [g2,d3] [a2,e3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2300)
    .lpq(4.5)
    .distort(0.76)
    .decay(0.16)
    .sustain(0.08)
    .room(0.65)
    .gain(0.28)
);

// Scene 5 (12 bars): Spider Tank — Crushing 120 BPM 4-on-the-floor industrial stomp
const spiderTank = stack(
  s("bd*4").lpf(1550).distort(0.64).gain(1.0),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(4200).distort(0.50).room(0.74).gain(0.90),
  s("hh*16").hpf(4800).gain("<0.16 0.38 0.22 0.50>*4").pan(sine.range(0.2, 0.8)),
  s("[~ metal:2] ~ [~ metal:4] [~ metal:0]")
    .hpf(950).lpf(4400).distort(0.58).room(0.64).delay(0.34).delaytime(0.250).gain(0.34),
  s("<~ ~ ~ [~ ~ sd:2*2 [mt lt lt lt]]>").distort(0.46).room(0.76).gain(0.84),

  note("<[d1 d2 eb1 d1]*2 [d1 d2 c1 d1]*2 [g0 g1 a0 g0]*2 [a0 a1 b0 a0]*2>")
    .fast(2)
    .s("sawtooth")
    .fm(1.5)
    .fmh(0.5)
    .lpf(sine.range(240, 1350).slow(4))
    .lpenv(5.4)
    .lpdecay(0.13)
    .lpq(18)
    .decay(0.11)
    .sustain(0.03)
    .distort(0.74)
    .gain(0.56),

  note("<[d1,d2] [d1,d2] [g0,g1] [a0,a1]>")
    .s("supersaw")
    .lpf(sine.range(220, 740).slow(6))
    .lpq(6)
    .distort(0.68)
    .attack(0.32)
    .sustain(0.94)
    .room(0.76)
    .gain(0.64),

  note("<d1 d1 g0 a0>").s("sine").gain(0.52),

  // Snarling Dorian/minor combat synth riff
  note("<[d4 ~ f4 ~ e4 ~ d4 ~] [c4 ~ ~ ~ a3 ~ ~ ~] [g3 ~ a3 ~ b3 ~ d4 ~] [e4 ~ ~ ~ a3 ~ b3 c4]>")
    .s("supersaw")
    .fm(1.7)
    .fmh(2)
    .hpf(380)
    .lpf(2400)
    .lpq(6.5)
    .distort(0.74)
    .attack(0.02)
    .decay(0.28)
    .sustain(0.30)
    .vib(5)
    .vibmod(0.22)
    .room(0.78)
    .delay(0.42)
    .delaytime(0.375)
    .gain(0.28)
);

// --- ACT III: PROJECT 2501 LINK & NEURAL BARRIER SHRED (25 bars) ------------

// Scene 6 (8 bars): Project 2501 Neural Link (Gm -> F -> C -> A Dorian void)
const puppetMasterVoid = stack(
  s("bd ~ ~ ~").lpf(850).distort(0.30).room(0.88).gain(0.76),
  s("~ ~ cp ~").lpf(2000).room(0.95).delay(0.58).delaytime(0.375).gain(0.36),

  note("<[g0,g1] [f0,f1] [c1,c2] [a0,a1]>")
    .s("supersaw")
    .lpf(sine.range(200, 760).slow(8))
    .lpq(5.8)
    .distort(0.60)
    .attack(0.45)
    .sustain(0.96)
    .release(0.85)
    .room(0.90)
    .gain(0.70),

  note("<g0 f0 c1 a0>").s("sine").gain(0.54),

  // Ceremonial Kenji Kawai open-fifth choir/bell resonance
  note("<[g3,d4,a4] [f3,c4,g4] [c4,g4,d5] [a3,e4,b4]>")
    .s("sine")
    .fm(2.6)
    .fmh(1.5)
    .hpf(420)
    .attack(0.30)
    .decay(0.80)
    .sustain(0.45)
    .release(0.95)
    .room(0.96)
    .delay(0.56)
    .delaytime(0.375)
    .gain(0.25),

  // Distant cavernous 303 whisper
  note("<[g2 ~ bb2 g2 ~ d3 ~ bb2] [f2 ~ a2 f2 ~ c3 ~ a2] [c2 ~ e2 c2 ~ g2 ~ e2] [a1 ~ c2 a1 ~ e2 ~ c2]>")
    .fast(2)
    .s("sawtooth")
    .hpf(350)
    .lpf(sine.range(240, 920).slow(8))
    .lpenv(3.6)
    .lpdecay(0.13)
    .lpq(16)
    .decay(0.11)
    .sustain(0.02)
    .distort(0.44)
    .room(0.92)
    .delay(0.58)
    .delaytime(0.375)
    .gain(0.18)
);

// Dedicated backing bed for the 12-bar Neural Barrier Shred Solo
const soloBacking = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1600).distort(0.60).gain(0.98),
  s("~ ~ [sd:2,cp] ~ ~ ~ [sd:2,cp] [~ sd:3]").lpf(4400).distort(0.48).room(0.72).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.15 0.38 0.22 0.50>*4"),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.44).room(0.76).gain(0.82),

  note("<d1 c1 g0 a0>")
    .struct("x*16")
    .s("sawtooth")
    .fm(1.5)
    .fmh(0.5)
    .lpf(1550)
    .lpenv(4.6)
    .lpdecay(0.13)
    .lpq(17)
    .decay(0.11)
    .sustain(0.03)
    .distort(0.70)
    .gain(0.54),

  note("<[d1,d2] [c1,c2] [g0,g1] [a0,a1]>")
    .s("supersaw")
    .lpf(sine.range(260, 860).slow(4))
    .lpq(6)
    .distort(0.68)
    .attack(0.25)
    .sustain(0.95)
    .room(0.76)
    .gain(0.65),

  note("<d1 c1 g0 a0>").s("sine").gain(0.52),

  note("<[d3,a3] [c3,g3] [g2,d3] [a2,e3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2300)
    .distort(0.78)
    .decay(0.15)
    .sustain(0.08)
    .room(0.64)
    .gain(0.26)
);

// Scene 7a (4 bars): Neural Barrier Shred 1 — Octave 4 D Dorian/minor attack
const shred1 = stack(
  soloBacking,
  note("<[d4 f4 e4 d4 c4 d4 f4 a4] [c4 e4 g4 c5 g4 f4 e4 c4] [g3 b3 d4 g4 d4 c4 b3 g3] [a3 c4 e4 a4 g4 f4 e4 c4]>")
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
    .decay(0.15)
    .sustain(0.20)
    .vib(6)
    .vibmod(0.22)
    .room(0.74)
    .delay(0.36)
    .delaytime(0.250)
    .gain(0.30)
);

// Scene 7b (4 bars): Neural Barrier Shred 2 — Octave 5 blistering runs
const shred2 = stack(
  soloBacking,
  note("<[d5 ~ f5 e5 d5 c5 a4 d5] [e5 c5 g4 c5 e5 f5 e5 c5] [g5 d5 b4 d5 g5 a5 g5 d5] [a5 g5 f5 e5 d5 c5 a4 c5]>")
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
    .decay(0.14)
    .sustain(0.22)
    .vib(6.5)
    .vibmod(0.26)
    .room(0.76)
    .delay(0.40)
    .delaytime(0.250)
    .gain(0.31)
);

// Scene 7c (4 bars): Neural Barrier Shred Climax — Octave 6 Shell Broken!
const shredClimax = stack(
  soloBacking,
  note("<[d5 f5 a5 d6 a5 f5 e5 d5] [c6 b5 a5 g5 e5 g5 c6 b5] [g5 a5 b5 d6 b5 a5 g5 d5] [a5 g5 f5 e5 a5 g5 f5 e5]>")
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
    .decay(0.13)
    .sustain(0.25)
    .vib(7)
    .vibmod(0.28)
    .room(0.80)
    .delay(0.42)
    .delaytime(0.250)
    .gain(0.30)
);

// Scene 8 (4 bars): Final Build over Void progression (G -> F -> C -> A)
const finalBuild = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1550).distort(0.48).gain(0.96),
  s("<[~ ~ sd:2 ~] [~ sd:2 ~ sd:2] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [sd:2*4 [mt lt]]]>")
    .distort(0.44).room(0.82).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.15 0.28 0.40 0.52>"),

  note("<g0 f0 c1 a0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 900 1600 2600>")
    .lpenv(5.2)
    .lpdecay(0.12)
    .lpq(18)
    .decay(0.10)
    .sustain(0.03)
    .distort(0.66)
    .gain(0.56),

  note("<[g0,g1] [f0,f1] [c1,c2] [a0,a1]>")
    .s("supersaw")
    .lpf("<350 620 960 1380>")
    .lpq(6.5)
    .distort(0.68)
    .attack(0.20)
    .sustain(0.95)
    .room(0.80)
    .gain(0.66),

  note("<g0 f0 c1 a0>").s("sine").gain(0.52),

  note("<[g4 ~ b4 ~ d5 ~ b4 ~] [f4 ~ a4 ~ c5 ~ a4 ~] [c5 ~ e5 ~ g5 ~ e5 ~] [a4 ~ c5 ~ e5 ~ a5 ~]>")
    .s("supersaw")
    .fm(1.5)
    .fmh(2)
    .hpf(380)
    .lpf(2600)
    .lpq(6.5)
    .distort(0.74)
    .attack(0.02)
    .decay(0.26)
    .sustain(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.82)
    .delay(0.45)
    .delaytime(0.375)
    .gain(0.28)
);

// --- ACT IV: GHOST MERGE CLIMAX & UNBOUND VAST NET TAIL (40 bars) -----------

// Scene 9a (8 bars): Ghost Merge Climax Part 1 — Museum Battle 2 + Soaring Dorian Anthem
const mergeClimax1 = stack(
  museumBattle2,
  note("<[d5 ~ f5 ~ a5 ~ g5 f5] [e5 ~ c5 ~ g4 ~ c5 e5] [g5 ~ d5 ~ b4 ~ d5 g5] [a5 ~ ~ g5 f5 ~ e5 d5]>")
    .s("supersaw")
    .fm(1.4)
    .fmh(2)
    .hpf(400)
    .lpf(2850)
    .lpq(6)
    .distort(0.72)
    .attack(0.02)
    .decay(0.32)
    .sustain(0.40)
    .release(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.84)
    .delay(0.45)
    .delaytime(0.375)
    .gain(0.30)
);

// Scene 9b (8 bars): Maximum Overdrive — Upper-Octave Harmony + Ceremonial Crash
const mergeClimax2 = stack(
  mergeClimax1,
  note("<[a5 ~ d6 ~ f6 ~ e6 d6] [c6 ~ g5 ~ e5 ~ g5 c6] [d6 ~ b5 ~ g5 ~ b5 d6] [e6 ~ ~ d6 c6 ~ a5 e5]>")
    .s("supersaw")
    .hpf(1000)
    .lpf(3800)
    .distort(0.62)
    .attack(0.02)
    .decay(0.28)
    .sustain(0.35)
    .vib(6)
    .vibmod(0.22)
    .room(0.90)
    .delay(0.45)
    .delaytime(0.375)
    .gain(0.17),
  s("<[metal:2 ~ ~ ~] ~>").hpf(1200).room(0.92).gain(0.35)
);

// Scene 10a (8 bars): Unbound Tail Part 1 — ALL industrial machinery stripped away!
// Luminous D Dorian open-fifth generative ambient horizon
const unboundTail1 = stack(
  // Warm breathing D Dorian open-fifth pads (zero distortion, pure luminous clarity)
  note("<[d3,a3,e4,b4] [c3,g3,d4,a4] [g3,d4,a4,e5] [d3,a3,e4,a4]>")
    .s("supersaw")
    .hpf(350)
    .lpf(sine.range(700, 1900).slow(8))
    .lpq(2.5)
    .attack(0.80)
    .sustain(0.92)
    .release(1.4)
    .vib(2.2)
    .vibmod(0.10)
    .room(0.96)
    .delay(0.55)
    .delaytime(0.375)
    .gain(0.26),

  // Ceremonial Kenji Kawai open-fifth bells ringing freely across stereo
  note("<[d5 ~ a5 ~ e6 ~ a5 ~] [c5 ~ g5 ~ d6 ~ g5 ~] [g5 ~ d6 ~ a5 ~ e6 ~] [a5 ~ e6 ~ d6 ~ a5 ~]>")
    .s("sine")
    .fm(2.2)
    .fmh(1.5)
    .hpf(600)
    .decay(0.75)
    .sustain(0.06)
    .pan(sine.range(0.15, 0.85).slow(2))
    .room(0.96)
    .delay(0.62)
    .delaytime(0.375)
    .gain(0.22),

  // Gentle warm sub foundation (no distortion, no drums)
  note("<d1 c1 g0 d1>").s("sine").gain(0.42)
);

// Scene 10b (8 bars): Unbound Tail Part 2 — Drifting into the vast, infinite net
const unboundTail2 = stack(
  note("<[d3,a3,e4,b4] [g3,d4,a4,e5] [d3,a3,e4,b4] [a3,e4,b4,e5]>")
    .s("supersaw")
    .hpf(380)
    .lpf("<1500 1350 1200 1050 920 800 700 600>")
    .lpq(2)
    .attack(0.90)
    .sustain(0.92)
    .release(1.6)
    .vib(2)
    .vibmod(0.08)
    .room(0.98)
    .delay(0.60)
    .delaytime(0.375)
    .gain("<0.25 0.24 0.22 0.20 0.18 0.16 0.14 0.12>"),

  note("<[d5 ~ ~ a5 ~ ~ e6 ~] [~ g5 ~ ~ d6 ~ ~ ~] [a5 ~ ~ e6 ~ ~ ~ ~] [~ d6 ~ ~ a5 ~ ~ ~]>")
    .s("sine")
    .fm(2.0)
    .fmh(1.5)
    .hpf(650)
    .decay(0.90)
    .sustain(0.05)
    .pan(sine.range(0.1, 0.9).slow(3))
    .room(0.98)
    .delay(0.68)
    .delaytime(0.375)
    .gain(0.20),

  note("<d1 g0 d1 a0>").s("sine").gain("<0.40 0.36 0.32 0.28 0.24 0.20 0.16 0.12>")
);

// Scene 10c (8 bars): Process Unbound — Final open D5 fifth dissolving into light
const vastInfiniteNet = stack(
  note("[d3,a3,e4]")
    .s("supersaw")
    .hpf(380)
    .lpf("<550 480 420 360 310 260 220 180>")
    .attack(1.0)
    .sustain(0.95)
    .release(2.0)
    .room(0.98)
    .gain("<0.14 0.12 0.10 0.08 0.07 0.05 0.03 0.01>"),

  note("<[d5 ~ ~ ~ a5 ~ ~ ~] ~ [e6 ~ ~ ~ ~ ~ ~ ~] ~ [d6 ~ ~ ~ ~ ~ ~ ~] ~ ~ ~>")
    .s("sine")
    .fm(1.8)
    .fmh(1.5)
    .hpf(650)
    .decay(1.2)
    .sustain(0.02)
    .room(0.98)
    .delay(0.75)
    .delaytime(0.375)
    .gain("<0.18 0.16 0.14 0.12 0.10 0.08 0.05 0.02>"),

  note("d1").s("sine").gain("<0.12 0.10 0.08 0.06 0.05 0.03 0.02 0.01>")
);

// ============================================================================
// FULL 114-BAR ARRANGEMENT (~3:48 @ 120 BPM)
// ============================================================================
arrange(
  // Act I: Shell Dive & Neon Canal (20 bars)
  [4, shellDive1],
  [4, shellDive2],
  [8, neonCanal],
  [4, tankRiser],
  // Act II: Museum Tank Battle (29 bars)
  [1, ghostDrop],
  [8, museumBattle1],
  [8, museumBattle2],
  [12, spiderTank],
  // Act III: Project 2501 Link & Neural Barrier Shred (25 bars)
  [8, puppetMasterVoid],
  [4, shred1],
  [4, shred2],
  [4, shredClimax],
  [4, finalBuild],
  [1, ghostDrop],
  // Act IV: Ghost Merge Climax & Unbound Vast Net Tail (40 bars)
  [8, mergeClimax1],
  [8, mergeClimax2],
  [8, unboundTail1],
  [8, unboundTail2],
  [8, vastInfiniteNet]
)
