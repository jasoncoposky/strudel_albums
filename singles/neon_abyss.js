// ============================================================================
// "NEON ABYSS" — Full 3-Minute Darksynth Track (~3:07, 95 bars @ 122 BPM, Dm)
// ============================================================================
// Act I   (0:00–0:39): Intro (8) -> Verse 1 (8) -> Pre-Chorus (4)
// Act II  (0:39–1:19): Chorus 1 (8) -> Verse 2 Shift (8) -> Transition (4)
// Act III (1:19–2:11): Deep Breakdown (8) -> Ferocious Shred Solo (12)
//                      -> Final Build (4) -> Bass Drop + Octave Pitch Bend (1)
// Act IV  (2:11–3:07): Final Double-Chorus (16) -> Cinematic Outro (12)
// ============================================================================
setcps(122 / 60 / 4);

// --- ACT I: RAIN ON CHROME --------------------------------------------------

// Intro Part 1 (4 bars): Pure dark atmosphere — sustained Moog/Reese + VHS pad
const introDark = stack(
  s("bd ~ ~ ~").lpf(900).distort(0.3).room(0.75).gain(0.75),
  s("<~ [~ ~ cp ~] ~ [~ ~ cp ~]>").lpf(2200).room(0.95).delay(0.5).delaytime(0.369).gain(0.38),

  note("<[d1,d2] [d1,d2] [bb0,bb1] [a0,a1]>")
    .s("supersaw")
    .lpf("<180 240 320 420>")
    .lpq(5.5)
    .distort(0.55)
    .attack(0.5)
    .sustain(0.95)
    .room(0.8)
    .gain(0.62),

  note("<d1 d1 bb0 a0>").s("sine").gain(0.5),

  note("<[d3,f3,a3] [d3,f3,a3] [bb2,d3,f3] [a2,c#3,e3]>")
    .s("supersaw")
    .lpf("<320 440 580 750>")
    .lpq(4)
    .distort(0.45)
    .vib(1.5)
    .vibmod(0.08)
    .attack(0.4)
    .sustain(0.85)
    .room(0.92)
    .gain(0.25)
);

// Intro Part 2 (4 bars): Engine ignites — rolling 16th bass & snare enter
const introIgnite = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1300).distort(0.35).gain(0.9),
  s("<~ [~ ~ cp ~] [~ [sd:2,cp] ~ [sd:2,cp]] [~ [sd:2,cp] ~ [sd:2 [mt lt]]]>")
    .lpf(3600).distort(0.25).room(0.8).gain(0.82),
  s("hh*8").hpf(4500).gain("<0.12 0.22 0.32 0.42>"),

  note("<d1 c1 bb0 a0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<380 650 1000 1400>")
    .lpq(6)
    .decay(0.11)
    .sustain(0.05)
    .distort(0.45)
    .gain(0.54),

  note("<[d1,d2] [c1,c2] [bb0,bb1] [a0,a1]>")
    .s("supersaw")
    .lpf("<380 480 580 700>")
    .lpq(5.5)
    .distort(0.58)
    .attack(0.35)
    .sustain(0.92)
    .room(0.75)
    .gain(0.60),

  note("<d1 c1 bb0 a0>").s("sine").gain(0.5),

  note("<[d3,f3,a3] [c3,e3,g3] [bb2,d3,f3] [a2,c#3,e3]>")
    .s("supersaw")
    .lpf("<650 850 1050 1300>")
    .lpq(4)
    .distort(0.48)
    .vib(1.5)
    .vibmod(0.08)
    .attack(0.25)
    .sustain(0.8)
    .room(0.85)
    .gain(0.25)
);

// Verse 1 (8 bars): Stomping Darksynth Groove (Dm -> C -> Bb -> A)
const verse1 = stack(
  s("bd*4").lpf(1400).distort(0.35).gain(0.95),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(3800).distort(0.25).room(0.8).gain(0.85),
  s("hh*8").hpf(4500).gain("<0.2 0.4 0.25 0.45>*2"),
  s("<~ ~ ~ [~ ~ ~ [mt lt lt lt]]>").distort(0.25).room(0.75).gain(0.75),

  note("<d1 c1 bb0 a0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf(sine.range(550, 1450).slow(8))
    .lpq(6)
    .decay(0.11)
    .sustain(0.05)
    .distort(0.45)
    .gain(0.54),

  note("<[d1,d2] [c1,c2] [bb0,bb1] [a0,a1]>")
    .s("supersaw")
    .lpf(sine.range(220, 680).slow(8))
    .lpq(5.5)
    .distort(0.58)
    .attack(0.4)
    .sustain(0.92)
    .release(0.65)
    .room(0.7)
    .gain(0.60),

  note("<d1 c1 bb0 a0>").s("sine").gain(0.5),

  note("<[d3,f3,a3] [c3,e3,g3] [bb2,d3,f3] [a2,c#3,e3]>")
    .s("supersaw")
    .lpf(sine.range(420, 1250).slow(8))
    .lpq(4)
    .distort(0.48)
    .vib(1.5)
    .vibmod(0.08)
    .attack(0.25)
    .sustain(0.8)
    .release(0.5)
    .room(0.85)
    .gain(0.24),

  note("<[d4 ~ ~ f4 ~ ~ e4 ~] [c4 ~ ~ ~ ~ ~ g4 ~] [f4 ~ ~ d4 ~ ~ bb3 ~] [a3 ~ ~ ~ c#4 ~ e4 ~]>")
    .s("supersaw")
    .fm(1.2)
    .fmh(2)
    .lpf(2100)
    .lpq(6)
    .distort(0.68)
    .attack(0.02)
    .decay(0.32)
    .sustain(0.35)
    .release(0.35)
    .vib(5)
    .vibmod(0.22)
    .room(0.75)
    .delay(0.45)
    .delaytime(0.369)
    .gain(0.28)
);

// Pre-Chorus (4 bars): Tightening tension (Gm -> F -> Eb -> A)
const preChorus = stack(
  s("bd*4").lpf(1500).distort(0.4).gain(0.95),
  s("<[~ [sd:2,cp] ~ [sd:2,cp]] [~ [sd:2,cp] ~ [sd:2,cp]] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [mt lt lt lt]]> ")
    .distort(0.35).room(0.8).gain(0.85),
  s("hh*16").hpf(4800).gain("<0.15 0.25 0.35 0.48>"),

  note("<g0 f0 eb0 a0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<700 1050 1500 2100>")
    .lpq(7)
    .decay(0.11)
    .sustain(0.05)
    .distort(0.52)
    .gain(0.56),

  note("<[g0,g1] [f0,f1] [eb0,eb1] [a0,a1]>")
    .s("supersaw")
    .lpf("<350 520 750 1050>")
    .lpq(6)
    .distort(0.62)
    .attack(0.25)
    .sustain(0.95)
    .room(0.75)
    .gain(0.64),

  note("<g0 f0 eb0 a0>").s("sine").gain(0.52),

  note("<[g2,bb2,d3] [f2,a2,c3] [eb2,g2,bb2] [a2,c#3,e3]>")
    .s("supersaw")
    .lpf("<700 1050 1450 2000>")
    .lpq(4)
    .distort(0.5)
    .attack(0.2)
    .sustain(0.85)
    .room(0.85)
    .gain(0.26)
);

// --- ACT II: FIRST COLLISION ------------------------------------------------

// Chorus 1 (8 bars): Full-Throttle Carpenter Brut Payoff (Dm -> Bb -> C -> A)
const chorus1 = stack(
  s("bd*4").lpf(1600).distort(0.45).gain(1.0),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(4200).distort(0.35).room(0.85).gain(0.9),
  s("hh*16").hpf(4800).gain("<0.15 0.35 0.2 0.5>*4").pan(sine.range(0.3, 0.7)),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.35).room(0.8).gain(0.82),

  note("<[d1 d2]*4 [bb0 bb1]*4 [c1 c2]*4 [a0 a1]*4>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(750, 1900).slow(4))
    .lpq(6)
    .decay(0.1)
    .sustain(0.05)
    .distort(0.52)
    .gain(0.52),

  note("<[d1,d2] [bb0,bb1] [c1,c2] [a0,a1]>")
    .s("supersaw")
    .lpf(sine.range(260, 820).slow(8))
    .lpq(6)
    .distort(0.62)
    .attack(0.3)
    .sustain(0.95)
    .release(0.6)
    .room(0.75)
    .gain(0.65),

  note("<d1 bb0 c1 a0>").s("sine").gain(0.52),

  note("<[d3,a3] [bb2,f3] [c3,g3] [a2,e3]>")
    .struct("x x ~ x x ~ x ~")
    .s("supersaw")
    .hpf(380)
    .lpf(2200)
    .lpq(4)
    .distort(0.72)
    .decay(0.18)
    .sustain(0.1)
    .room(0.65)
    .gain(0.28),

  note("<[d5 ~ f5 ~ a5 ~ g5 f5] [f5 ~ d5 ~ bb4 ~ d5 f5] [g5 ~ e5 ~ c5 ~ e5 g5] [a5 ~ ~ g5 f5 ~ e5 c#5]>")
    .s("supersaw")
    .fm(1.4)
    .fmh(2)
    .lpf(2600)
    .lpq(6)
    .distort(0.72)
    .attack(0.02)
    .decay(0.32)
    .sustain(0.4)
    .release(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.8)
    .delay(0.45)
    .delaytime(0.369)
    .gain(0.30)
);

// Verse 2 Part 1 (4 bars): The Shift — Lead drops out, syncopated bass/metal groove
const verse2Shift = stack(
  s("bd*4").lpf(1400).distort(0.4).gain(0.95),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(3600).distort(0.3).room(0.8).gain(0.85),
  s("hh*8").hpf(4500).gain("<0.2 0.4 0.25 0.45>*2"),
  s("~ metal:1 ~ ~ ~ [~ metal:3] ~ ~")
    .hpf(900).lpf(3400).distort(0.45).room(0.65).delay(0.3).delaytime(0.245).gain(0.3),

  // Syncopated pumping bass riff
  note("<[d1 ~ d1 d2 d1 ~ f1 e1] [c1 ~ c1 c2 c1 ~ e1 g1] [bb0 ~ bb0 bb1 bb0 ~ d1 f1] [a0 ~ a0 a1 c#2 ~ e1 g1]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(600, 1600).slow(4))
    .lpq(7)
    .decay(0.12)
    .sustain(0.05)
    .distort(0.52)
    .gain(0.58),

  note("<[d1,d2] [c1,c2] [bb0,bb1] [a0,a1]>")
    .s("supersaw")
    .lpf(sine.range(240, 720).slow(4))
    .lpq(5.5)
    .distort(0.6)
    .attack(0.35)
    .sustain(0.92)
    .room(0.7)
    .gain(0.62),

  note("<d1 c1 bb0 a0>").s("sine").gain(0.5)
);

// Verse 2 Part 2 (4 bars): Snarling lead returns with darker octave tension
const verse2Return = stack(
  verse2Shift,
  note("<[d4 ~ f4 e4 d4 ~ a3 ~] [c4 ~ e4 d4 c4 ~ g4 ~] [bb4 ~ a4 g4 f4 ~ d4 ~] [e4 ~ ~ c#4 e4 ~ g4 a4]>")
    .s("supersaw")
    .fm(1.4)
    .fmh(2)
    .lpf(2300)
    .lpq(6.5)
    .distort(0.72)
    .attack(0.02)
    .decay(0.3)
    .sustain(0.35)
    .vib(5)
    .vibmod(0.22)
    .room(0.75)
    .delay(0.45)
    .delaytime(0.369)
    .gain(0.29)
);

// Transition Down (4 bars): Energy pulls back into the Abyss
const transitionDown = stack(
  s("<[bd*4] [bd ~ bd ~] [bd ~ ~ ~] ~>").lpf(1100).distort(0.35).room(0.7).gain(0.85),
  s("<[~ cp ~ cp] [~ ~ cp ~] [~ ~ cp ~] ~>").lpf(2400).room(0.95).delay(0.5).delaytime(0.369).gain(0.5),

  note("<[d1,d2] [c1,c2] [bb0,bb1] [a0,a1]>")
    .s("supersaw")
    .lpf("<700 520 380 260>")
    .lpq(6)
    .distort(0.6)
    .attack(0.35)
    .sustain(0.95)
    .room(0.85)
    .gain(0.64),

  note("<d1 c1 bb0 a0>").s("sine").gain(0.5),

  note("<[d3,f3,a3] [c3,e3,g3] [bb2,d3,f3] [a2,c#3,e3]>")
    .s("supersaw")
    .lpf("<1100 850 620 450>")
    .distort(0.45)
    .vib(1.8)
    .vibmod(0.1)
    .attack(0.3)
    .sustain(0.85)
    .room(0.92)
    .gain(0.26)
);

// --- ACT III: THE ABYSS & THE DUEL ------------------------------------------

// Deep Breakdown Part 1 (4 bars): Pure sustained Moog/Reese + cavernous pad
const breakdownVoid = stack(
  s("bd ~ ~ ~").lpf(900).distort(0.3).room(0.75).gain(0.75),
  s("~ ~ cp ~").lpf(2000).room(0.95).delay(0.55).delaytime(0.369).gain(0.4),

  note("<[g0,g1] [f0,f1] [eb0,eb1] [a0,a1]>")
    .s("supersaw")
    .lpf(sine.range(220, 720).slow(4))
    .lpq(6)
    .distort(0.62)
    .attack(0.4)
    .sustain(0.95)
    .release(0.7)
    .room(0.8)
    .gain(0.70),

  note("<g0 f0 eb0 a0>").s("sine").gain(0.54),

  note("<[g2,bb2,d3] [f2,a2,c3] [eb2,g2,bb2] [a2,c#3,e3]>")
    .s("supersaw")
    .lpf(sine.range(450, 1400).slow(4))
    .lpq(4)
    .distort(0.45)
    .vib(2)
    .vibmod(0.1)
    .attack(0.4)
    .sustain(0.85)
    .release(0.6)
    .room(0.92)
    .gain(0.28)
);

// Deep Breakdown Part 2 (4 bars): Mournful echoing counter-melody enters
const breakdownMelody = stack(
  breakdownVoid,
  note("<[bb4 ~ ~ ~ a4 ~ g4 ~] [a4 ~ ~ ~ ~ ~ f4 ~] [g4 ~ ~ ~ f4 ~ eb4 ~] [e4 ~ ~ ~ ~ ~ c#4 ~]>")
    .s("supersaw")
    .fm(1.1)
    .fmh(2)
    .lpf(1800)
    .lpq(5)
    .distort(0.55)
    .attack(0.08)
    .decay(0.4)
    .sustain(0.45)
    .release(0.5)
    .vib(5.5)
    .vibmod(0.25)
    .room(0.9)
    .delay(0.55)
    .delaytime(0.369)
    .gain(0.26)
);

// Backing bed for the 12-bar Ferocious Shred Solo (Dm -> Bb -> C -> A)
const soloBacking = stack(
  s("bd*4").lpf(1600).distort(0.48).gain(0.98),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(4200).distort(0.38).room(0.82).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.15 0.38 0.2 0.5>*4"),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.35).room(0.75).gain(0.8),

  note("<d1 bb0 c1 a0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf(1500)
    .lpq(6)
    .decay(0.1)
    .sustain(0.05)
    .distort(0.55)
    .gain(0.52),

  note("<[d1,d2] [bb0,bb1] [c1,c2] [a0,a1]>")
    .s("supersaw")
    .lpf(sine.range(280, 820).slow(4))
    .lpq(6)
    .distort(0.65)
    .attack(0.25)
    .sustain(0.95)
    .room(0.72)
    .gain(0.64),

  note("<d1 bb0 c1 a0>").s("sine").gain(0.52),

  // Chugging heavy metal power chords
  note("<[d3,a3] [bb2,f3] [c3,g3] [a2,e3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2100)
    .distort(0.76)
    .decay(0.15)
    .sustain(0.08)
    .room(0.6)
    .gain(0.26)
);

// Shred Solo Part 1 (4 bars): Snarling mid-register harmonic-minor attack
const shredSolo1 = stack(
  soloBacking,
  note("<[d4 f4 e4 d4 c#4 d4 f4 a4] [bb4 a4 g4 f4 d4 f4 g4 bb4] [c5 bb4 a4 g4 e4 g4 a4 c5] [a4 g4 f4 e4 c#4 e4 g4 a4]>")
    .fast(2)
    .s("supersaw")
    .fm(2.2)
    .fmh(2)
    .penv(-2)
    .pdecay(0.06)
    .lpf(3200)
    .lpq(7)
    .distort(0.82)
    .attack(0.008)
    .decay(0.16)
    .sustain(0.2)
    .vib(6)
    .vibmod(0.22)
    .room(0.7)
    .delay(0.35)
    .delaytime(0.245)
    .gain(0.30)
);

// Shred Solo Part 2 (4 bars): Screaming upper-register call & response runs
const shredSolo2 = stack(
  soloBacking,
  note("<[d5 ~ f5 e5 d5 c5 a4 d5] [f5 d5 bb4 d5 f5 g5 f5 d5] [g5 e5 c5 e5 g5 a5 g5 e5] [a5 g5 f5 e5 d5 c#5 a4 c#5]>")
    .fast(2)
    .s("supersaw")
    .fm(2.5)
    .fmh(2)
    .penv(-2)
    .pdecay(0.05)
    .lpf(3600)
    .lpq(7.5)
    .distort(0.85)
    .attack(0.006)
    .decay(0.15)
    .sustain(0.22)
    .vib(6.5)
    .vibmod(0.26)
    .room(0.75)
    .delay(0.4)
    .delaytime(0.245)
    .gain(0.31)
);

// Shred Solo Part 3 (4 bars): Full Carpenter Brut shred climax -> A5 peak!
const shredSoloClimax = stack(
  soloBacking,
  note("<[d5 f5 a5 d6 a5 f5 e5 d5] [bb5 a5 g5 f5 d5 f5 bb5 a5] [c6 bb5 a5 g5 e5 g5 c6 bb5] [a5 g5 f5 e5 a5 g5 f5 e5]>")
    .fast(2)
    .s("supersaw")
    .fm(2.8)
    .fmh(2)
    .penv(-3)
    .pdecay(0.05)
    .lpf(4200)
    .lpq(8)
    .distort(0.88)
    .attack(0.005)
    .decay(0.14)
    .sustain(0.25)
    .vib(7)
    .vibmod(0.28)
    .room(0.78)
    .delay(0.42)
    .delaytime(0.245)
    .gain(0.30)
);

// Final Build (4 bars): Rising tension into the signature Bass Drop
const buildB = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1400).distort(0.35).gain(0.92),
  s("<[~ ~ sd:2 ~] [~ sd:2 ~ sd:2] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [sd:2*4 [mt lt]]]>")
    .distort(0.35).room(0.8).gain(0.82),
  s("hh*8").hpf(4500).gain("<0.15 0.25 0.35 0.48>"),

  note("<g0 f0 eb0 a0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<400 750 1300 2200>")
    .lpq(7)
    .decay(0.11)
    .sustain(0.05)
    .distort(0.52)
    .gain(0.56),

  note("<[g0,g1] [f0,f1] [eb0,eb1] [a0,a1]>")
    .s("supersaw")
    .lpf("<350 550 800 1200>")
    .lpq(6)
    .distort(0.65)
    .attack(0.25)
    .sustain(0.95)
    .room(0.75)
    .gain(0.65),

  note("<g0 f0 eb0 a0>").s("sine").gain(0.52),

  note("<[g2,bb2,d3] [f2,a2,c3] [eb2,g2,bb2] [a2,c#3,e3]>")
    .s("supersaw")
    .lpf("<600 950 1400 2100>")
    .lpq(4)
    .distort(0.5)
    .vib(2)
    .vibmod(0.1)
    .attack(0.2)
    .sustain(0.85)
    .room(0.88)
    .gain(0.27),

  note("<[bb4 ~ g4 ~ d5 ~ bb4 ~] [a4 ~ f4 ~ c5 ~ a4 ~] [g4 ~ eb4 ~ bb4 ~ g4 ~] [a4 ~ c#5 ~ e5 ~ a5 ~]>")
    .s("supersaw")
    .fm(1.3)
    .fmh(2)
    .lpf(2300)
    .lpq(6)
    .distort(0.7)
    .attack(0.02)
    .decay(0.28)
    .sustain(0.35)
    .vib(5)
    .vibmod(0.22)
    .room(0.8)
    .delay(0.45)
    .delaytime(0.369)
    .gain(0.28)
);

// Signature Bass Drop + Octave Pitch Bend (1 bar)
const bassDrop = stack(
  s("bd ~ ~ ~").distort(0.65).lpf(1000).room(0.6).gain(1.0),
  s("cp ~ ~ ~").lpf(2800).distort(0.3).room(0.95).gain(0.7),

  note("d2")
    .s("sine")
    .penv(-24)
    .pdecay(1.4)
    .decay(1.8)
    .sustain(0.2)
    .distort(0.35)
    .gain(0.95),

  note("[d1,d2]")
    .s("supersaw")
    .lpf(sine.range(180, 950).slow(1))
    .lpq(7)
    .distort(0.78)
    .attack(0.01)
    .decay(1.6)
    .sustain(0.35)
    .room(0.9)
    .gain(0.78),

  note("[d3,f3,a3,d4]")
    .s("supersaw")
    .lpf(1400)
    .distort(0.5)
    .attack(0.02)
    .decay(1.5)
    .sustain(0.15)
    .room(0.95)
    .gain(0.32),

  // Rising pitch-bend swell (D1 -> bends UP an octave into D2 for the Final Chorus!)
  note("~ ~ d2 ~")
    .s("supersaw")
    .penv(-12)
    .pdecay(0.95)
    .lpf(sine.range(250, 2600).fast(1))
    .lpq(7)
    .distort(0.68)
    .attack(0.3)
    .decay(0.75)
    .sustain(0.3)
    .room(0.8)
    .gain(0.62)
);

// --- ACT IV: OVERDRIVE & FADE TO BLACK --------------------------------------

// Final-Lap Overdrive Chorus (8 bars): Chorus 1 + screaming harmony octave + extra toms
const chorusOverdrive = stack(
  chorus1,
  // High-octave counter-harmony doubling the anthem peak
  note("<[a5 ~ d6 ~ f6 ~ e6 d6] [d6 ~ bb5 ~ f5 ~ bb5 d6] [e6 ~ c6 ~ g5 ~ c6 e6] [e6 ~ ~ d6 c#6 ~ a5 e5]>")
    .s("supersaw")
    .hpf(900)
    .lpf(3600)
    .distort(0.65)
    .attack(0.02)
    .decay(0.3)
    .sustain(0.35)
    .vib(6)
    .vibmod(0.22)
    .room(0.85)
    .delay(0.45)
    .delaytime(0.369)
    .gain(0.18),
  // Extra crashing metallic accent on beat 1 every 2 bars
  s("<[metal:2 ~ ~ ~] ~>").hpf(1200).room(0.9).gain(0.35)
);

// Outro Part 1 (4 bars): Step down to half-time stomp
const outroStepDown = stack(
  s("bd ~ bd ~").lpf(1100).distort(0.35).room(0.6).gain(0.88),
  s("~ ~ [sd:2,cp] ~").lpf(3000).room(0.9).gain(0.72),

  note("<[d1,d2] [bb0,bb1] [c1,c2] [a0,a1]>")
    .s("supersaw")
    .lpf("<720 600 480 380>")
    .lpq(5.5)
    .distort(0.58)
    .attack(0.35)
    .sustain(0.92)
    .room(0.8)
    .gain(0.64),

  note("<d1 bb0 c1 a0>").s("sine").gain(0.5),

  note("<[d3,f3,a3] [bb2,d3,f3] [c3,e3,g3] [a2,c#3,e3]>")
    .s("supersaw")
    .lpf("<1100 900 720 560>")
    .distort(0.45)
    .vib(1.8)
    .vibmod(0.1)
    .attack(0.3)
    .sustain(0.85)
    .room(0.9)
    .gain(0.25)
);

// Outro Part 2 (4 bars): Drums vanish, echoing final lead motif
const outroEcho = stack(
  s("<[bd ~ ~ ~] [bd ~ ~ ~] ~ ~>").lpf(900).room(0.85).gain(0.7),

  note("<[d1,d2] [bb0,bb1] [a0,a1] [d1,d2]>")
    .s("supersaw")
    .lpf("<420 340 260 200>")
    .lpq(5)
    .distort(0.52)
    .attack(0.45)
    .sustain(0.95)
    .release(0.9)
    .room(0.88)
    .gain(0.60),

  note("<d1 bb0 a0 d1>").s("sine").gain(0.48),

  note("<[d3,f3,a3] [bb2,d3,f3] [a2,c#3,e3] [d3,f3,a3]>")
    .s("supersaw")
    .lpf("<620 480 360 260>")
    .distort(0.4)
    .vib(2)
    .vibmod(0.1)
    .attack(0.4)
    .sustain(0.85)
    .release(0.9)
    .room(0.95)
    .gain(0.22),

  note("<[d5 ~ ~ a4 ~ ~ ~ ~] [f4 ~ ~ ~ ~ ~ ~ ~] [e4 ~ ~ ~ c#4 ~ ~ ~] [d4 ~ ~ ~ ~ ~ ~ ~]>")
    .s("supersaw")
    .lpf(1400)
    .distort(0.48)
    .attack(0.05)
    .decay(0.5)
    .sustain(0.3)
    .release(0.8)
    .vib(4.5)
    .vibmod(0.2)
    .room(0.95)
    .delay(0.6)
    .delaytime(0.369)
    .gain(0.24)
);

// Outro Part 3 (4 bars): Fade to black — lone D1 Reese drone closing into darkness
const outroFade = stack(
  note("[d1,d2]")
    .s("supersaw")
    .lpf("<220 170 130 100>")
    .lpq(4)
    .distort(0.45)
    .attack(0.5)
    .sustain(0.95)
    .release(1.2)
    .room(0.95)
    .gain("<0.55 0.42 0.28 0.14>"),

  note("d1").s("sine").gain("<0.45 0.35 0.22 0.10>"),

  note("[d3,a3]")
    .s("supersaw")
    .lpf("<280 220 170 120>")
    .attack(0.5)
    .sustain(0.9)
    .release(1.2)
    .room(0.98)
    .gain("<0.18 0.13 0.08 0.04>")
);

// ============================================================================
// FULL 95-BAR ARRANGEMENT (~3:07 @ 122 BPM)
// ============================================================================
arrange(
  // Act I: Rain on Chrome (20 bars)
  [4, introDark],
  [4, introIgnite],
  [8, verse1],
  [4, preChorus],
  // Act II: First Collision (20 bars)
  [8, chorus1],
  [4, verse2Shift],
  [4, verse2Return],
  [4, transitionDown],
  // Act III: The Abyss & The Duel (25 bars)
  [4, breakdownVoid],
  [4, breakdownMelody],
  [4, shredSolo1],
  [4, shredSolo2],
  [4, shredSoloClimax],
  [4, buildB],
  [1, bassDrop],
  // Act IV: Overdrive & Fade to Black (28 bars)
  [8, chorus1],
  [8, chorusOverdrive],
  [4, outroStepDown],
  [4, outroEcho],
  [4, outroFade]
)
