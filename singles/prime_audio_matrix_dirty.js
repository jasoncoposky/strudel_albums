// ============================================================================
// "PRIME AUDIO MATRIX" — The Matrix Lobby Battle x Meat Beat Manifesto
// Full ~3:31 Story Arc (110 bars @ 125 BPM, C minor / C Dorian)
// ============================================================================
// Act I   (0:00–0:38): Lobby Walk-In (8) -> Guns Out (8) -> Freeze Riser (4)
// Act II  (0:38–1:41): Bass Drop (1) -> Lobby Gunfight (16) -> Wall-Run (16)
// Act III (1:41–2:31): Bullet Time Void (8) -> Combat Shred Solo (12)
//                      -> Elevator Build (4) -> Ultimate Drop + Pitch Bend (1)
// Act IV  (2:31–3:31): Rooftop Double-Climax (16) -> Chopper Escape Outro (15)
// ============================================================================
setcps(125 / 60 / 4);

// --- ACT I: THE METAL DETECTOR ----------------------------------------------

// Scene 1a (4 bars): Walking through the marble lobby — cool dub-funk tension
const lobbyWalk1 = stack(
  s("bd ~ ~ ~ ~ ~ [bd ~] ~").lpf(1100).distort(0.32).room(0.55).gain(0.88),
  s("hh*8").hpf(5000).gain("<0.12 0.25 0.14 0.30>*2").pan(sine.range(0.3, 0.7)),

  // Rubbery dub-funk bassline muted in the marble hall
  note("<[c1 ~ c1 c2 ~ eb1 f1 g1] [c1 ~ c1 bb1 ~ g1 f1 eb1] [f1 ~ f1 f2 ~ eb1 c1 eb1] [g1 ~ g1 bb1 ~ g1 f1 eb1]>")
    .fast(2)
    .s("sawtooth")
    .lpf("<260 340 440 560>")
    .lpenv(2.6)
    .lpdecay(0.14)
    .lpq(9)
    .decay(0.15)
    .sustain(0.06)
    .distort(0.42)
    .gain(0.56),

  note("<[c1,c2] [c1,c2] [f0,f1] [g0,g1]>")
    .s("supersaw")
    .lpf("<180 240 310 400>")
    .lpq(5)
    .distort(0.48)
    .attack(0.4)
    .sustain(0.92)
    .room(0.8)
    .gain(0.54),

  note("<c1 c1 f0 g0>").s("sine").gain(0.5),

  // Distant dub-echo Cm7 brass stabs
  note("<[c3,eb3,g3,bb3] ~ [f3,ab3,c4,eb4] ~>")
    .s("supersaw")
    .struct("~ [~ x] ~ ~ ~ ~ ~ ~")
    .hpf(350)
    .lpf(1500)
    .distort(0.4)
    .decay(0.25)
    .sustain(0.04)
    .room(0.9)
    .delay(0.62)
    .delaytime(0.36)
    .gain(0.26)
);

// Scene 1b (4 bars): "Please remove any metallic items..." — snare & breakbeat enter
const lobbyWalk2 = stack(
  s("bd ~ ~ bd ~ ~ [bd ~] [~ bd]").lpf(1450).distort(0.38).gain(0.95),
  s("~ ~ sd:1 ~ ~ [~ sd:3] sd:1 ~").lpf(4200).distort(0.25).room(0.5).gain(0.82),
  s("hh*16").hpf(4800).gain("<0.12 0.30 0.18 0.38>*4").pan(sine.range(0.3, 0.7)),

  note("<[c1 ~ c1 c2 ~ eb1 f1 g1] [c1 ~ c1 bb1 ~ g1 f1 eb1] [f1 ~ f1 f2 ~ eb1 c1 eb1] [g1 ~ g1 bb1 ~ g1 f1 eb1]>")
    .fast(2)
    .s("sawtooth")
    .lpf("<550 720 920 1150>")
    .lpenv(3.4)
    .lpdecay(0.15)
    .lpq(10)
    .decay(0.16)
    .sustain(0.07)
    .distort(0.48)
    .gain(0.60),

  note("<[c1,c2] [c1,c2] [f0,f1] [g0,g1]>")
    .s("supersaw")
    .lpf("<350 420 500 600>")
    .lpq(5)
    .distort(0.5)
    .attack(0.35)
    .sustain(0.92)
    .room(0.75)
    .gain(0.54),

  note("<c1 c1 f0 g0>").s("sine").gain(0.52),

  note("<[c3,eb3,g3,bb3] ~ [f3,ab3,c4,eb4] [g3,bb3,d4,f4]>")
    .s("supersaw")
    .struct("~ [~ x] ~ ~ ~ ~ [x ~] ~")
    .hpf(350)
    .lpf(1900)
    .distort(0.44)
    .decay(0.22)
    .sustain(0.05)
    .room(0.82)
    .delay(0.58)
    .delaytime(0.36)
    .gain(0.28)
);

// Scene 2 (8 bars): "Holy shit." — Trench coat opens, FILTHY 303 acid & dub sirens
const gunsOut = stack(
  s("bd ~ ~ bd ~ ~ [bd ~] [~ bd]").lpf(1650).distort(0.68).gain(1.0),
  s("~ ~ sd:1 ~ ~ [~ sd:3] sd:1 [~ sd:3]").lpf(4600).distort(0.55).room(0.48).gain(0.9),
  s("hh*16").hpf(4600).distort(0.35).gain("<0.14 0.36 0.22 0.46 0.16 0.38 0.25 0.52>*2").pan(sine.range(0.3, 0.7)),
  s("~ [~ cp] ~ ~ [~ metal:1] ~ ~ [~ cp]")
    .hpf(1100).distort(0.55).room(0.58).delay(0.35).delaytime(0.24).gain(0.32),

  // Filthy FM-growling dub-funk bassline
  note("<[c1 ~ c1 c2 ~ eb1 f1 g1] [c1 ~ c1 bb1 ~ g1 f1 eb1] [f1 ~ f1 f2 ~ eb1 c1 eb1] [g1 ~ g1 bb1 ~ g1 f1 eb1]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.8)
    .fmh(0.5)
    .lpf(sine.range(360, 1250).slow(4))
    .lpenv(3.8)
    .lpdecay(0.15)
    .lpq(13)
    .decay(0.16)
    .sustain(0.08)
    .distort(0.74)
    .gain(0.64),

  // Snarling blown-out sustained dub-Reese
  note("<[c1,c2] [c1,c2] [f0,f1] [g0,g1]>")
    .s("supersaw")
    .fm(1.2)
    .fmh(0.5)
    .lpf(sine.range(200, 620).slow(8))
    .lpq(6.5)
    .distort(0.74)
    .attack(0.35)
    .sustain(0.92)
    .room(0.72)
    .gain(0.58),

  note("<c1 c1 f0 g0>").s("sine").gain(0.54),

  // Screaming overdriven TB-303 acid squelch
  note("<[c3 ~ eb3 c3 ~ g3 ~ bb3] [c3 ~ f3 eb3 ~ c4 ~ g3] [f3 ~ g3 f3 ~ c4 ~ eb4] [g3 ~ bb3 g3 ~ f3 ~ eb3]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(300, 1750).slow(4))
    .lpenv(5.5)
    .lpdecay(0.12)
    .lpq(19)
    .decay(0.1)
    .sustain(0.02)
    .distort(0.78)
    .delay(0.4)
    .delaytime(0.24)
    .pan(sine.range(0.2, 0.8))
    .gain(0.28),

  // Barking overdriven Cm7 brass stabs
  note("<[c3,eb3,g3,bb3] ~ [f3,ab3,c4,eb4] [g3,bb3,d4,f4]>")
    .s("supersaw")
    .fm(1.0)
    .fmh(1)
    .struct("~ [~ x] ~ ~ ~ ~ [x ~] ~")
    .hpf(350)
    .lpf(2400)
    .lpq(5.5)
    .distort(0.74)
    .decay(0.22)
    .sustain(0.05)
    .room(0.8)
    .delay(0.58)
    .delaytime(0.36)
    .gain(0.32),

  // Jack Dangers gritty sci-fi dub siren FX
  note("<[c5 ~ ~ ~ ~ ~ ~ ~] ~ [g5 ~ ~ ~ ~ ~ ~ ~] [~ ~ ~ ~ eb5 ~ ~ ~]>")
    .s("sine")
    .fm(3.2)
    .fmh(2)
    .penv(12)
    .pdecay(0.45)
    .decay(0.5)
    .sustain(0.02)
    .distort(0.45)
    .room(0.9)
    .delay(0.62)
    .delaytime(0.36)
    .pan(sine.range(0.1, 0.9).fast(2))
    .gain(0.24)
);

// Scene 3 (4 bars): "FREEZE!" — Escalating snare & screaming 303 riser
const freezeRiser = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1500).distort(0.45).gain(0.96),
  s("<[~ ~ sd:1 ~] [~ sd:1 ~ sd:1] [~ [sd:1,cp] ~ [sd:1,cp]] [sd:1*4 [sd:1*4 [mt lt]]]>")
    .distort(0.38).room(0.75).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.15 0.28 0.40 0.52>"),

  note("<c1 eb1 f1 g1>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 900 1600 2600>")
    .lpenv(5.0)
    .lpdecay(0.12)
    .lpq(17)
    .decay(0.1)
    .sustain(0.03)
    .distort(0.62)
    .gain(0.56),

  note("<[c1,c2] [eb1,eb2] [f0,f1] [g0,g1]>")
    .s("supersaw")
    .lpf("<350 600 950 1400>")
    .lpq(6)
    .distort(0.65)
    .attack(0.2)
    .sustain(0.95)
    .room(0.75)
    .gain(0.64),

  note("<c1 eb1 f0 g0>").s("sine").gain(0.52)
);

// --- ACT II: THE MARBLE PILLAR GUNFIGHT -------------------------------------

// Signature 1-bar Matrix Bass Drop + C1 -> C2 Octave Pitch Bend!
const lobbyDrop = stack(
  s("bd ~ ~ ~").distort(0.68).lpf(1000).room(0.65).gain(1.0),
  s("cp ~ ~ ~").lpf(2800).distort(0.35).room(0.95).gain(0.72),

  // 2-octave plunging sub-bass drop
  note("c2")
    .s("sine")
    .penv(-24)
    .pdecay(1.35)
    .decay(1.75)
    .sustain(0.2)
    .distort(0.38)
    .gain(0.95),

  // Massive overdriven C1 dub-Reese roar
  note("[c1,c2]")
    .s("supersaw")
    .lpf(sine.range(180, 1000).slow(1))
    .lpq(7)
    .distort(0.78)
    .attack(0.01)
    .decay(1.55)
    .sustain(0.35)
    .room(0.9)
    .gain(0.78),

  // Marble-shattering Cm7 brass impact
  note("[c3,eb3,g3,bb3]")
    .s("supersaw")
    .lpf(1600)
    .distort(0.5)
    .attack(0.02)
    .decay(1.4)
    .sustain(0.15)
    .room(0.95)
    .gain(0.32),

  // Rising pitch-bend swell on beats 3-4 (C1 -> bends UP into C2 for the gunfight!)
  note("~ ~ c2 ~")
    .s("supersaw")
    .penv(-12)
    .pdecay(0.92)
    .lpf(sine.range(260, 2800).fast(1))
    .lpq(7.5)
    .distort(0.7)
    .attack(0.25)
    .decay(0.72)
    .sustain(0.3)
    .room(0.8)
    .gain(0.64)
);

// Scene 4a (8 bars): Lobby Gunfight Part 1 — Full-throttle Meat Beat Manifesto groove
const lobbyGunfight1 = stack(
  gunsOut,
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.32).room(0.7).gain(0.8)
);

// Scene 4b (8 bars): Lobby Gunfight Part 2 — Heavy Propellerheads/KMFDM power chords slam in!
const lobbyGunfight2 = stack(
  lobbyGunfight1,
  note("<[c3,g3] [c3,g3] [f3,c4] [g3,d4]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2400)
    .lpq(4.5)
    .distort(0.76)
    .decay(0.16)
    .sustain(0.08)
    .room(0.6)
    .gain(0.28)
);

// Scene 5 (16 bars): Wall-Run & Cartwheel — Relentless FILTHY 4-on-the-floor + breakbeat!
const cartwheelRun = stack(
  s("bd*4").lpf(1600).distort(0.72).gain(1.0),
  s("~ [sd:1,cp] ~ [sd:1,cp]").lpf(4400).distort(0.58).room(0.65).gain(0.9),
  s("hh*16").hpf(4800).distort(0.35).gain("<0.16 0.40 0.22 0.52>*4").pan(sine.range(0.2, 0.8)),
  s("[~ metal:2] ~ [~ metal:4] [~ metal:1]")
    .hpf(950).lpf(4600).distort(0.65).room(0.6).delay(0.3).delaytime(0.24).gain(0.36),
  s("<~ ~ ~ [~ ~ sd:1*2 [mt lt lt lt]]>").distort(0.55).room(0.7).gain(0.84),

  // Screaming C Dorian/Phrygian 303 acid drive
  note("<[c1 c2 db1 c1]*2 [c1 c2 bb1 c1]*2 [f1 f2 eb1 f1]*2 [g1 g2 f1 eb1]*2>")
    .fast(2)
    .s("sawtooth")
    .fm(1.5)
    .fmh(0.5)
    .lpf(sine.range(240, 1450).slow(4))
    .lpenv(5.6)
    .lpdecay(0.13)
    .lpq(19)
    .decay(0.11)
    .sustain(0.03)
    .distort(0.82)
    .gain(0.58),

  note("<[c1,c2] [c1,c2] [f0,f1] [g0,g1]>")
    .s("supersaw")
    .fm(1.2)
    .fmh(0.5)
    .lpf(sine.range(220, 760).slow(8))
    .lpq(6.5)
    .distort(0.76)
    .attack(0.3)
    .sustain(0.92)
    .room(0.75)
    .gain(0.62),

  note("<c1 c1 f0 g0>").s("sine").gain(0.54),

  // Snarling overdriven combat synth riff
  note("<[c4 ~ eb4 ~ f4 ~ g4 ~] [bb4 ~ g4 ~ f4 ~ eb4 ~] [f4 ~ g4 ~ ab4 ~ g4 ~] [g4 ~ ~ ~ f4 ~ eb4 d4]>")
    .s("supersaw")
    .fm(2.2)
    .fmh(2)
    .lpf(2600)
    .lpq(7)
    .distort(0.84)
    .attack(0.02)
    .decay(0.28)
    .sustain(0.32)
    .vib(5)
    .vibmod(0.24)
    .room(0.75)
    .delay(0.42)
    .delaytime(0.36)
    .gain(0.30)
);

// --- ACT III: BULLET TIME ---------------------------------------------------

// Scene 6 (8 bars): Bullet Time Void — Time slows down (Ab -> G -> Fm -> G)
const bulletTimeVoid = stack(
  s("bd ~ ~ ~").lpf(800).distort(0.3).room(0.85).gain(0.78),
  s("~ ~ cp ~").lpf(2000).room(0.95).delay(0.6).delaytime(0.36).gain(0.38),

  // Massive hypnotic dub-Reese bass bending through slow-motion space
  note("<[ab0,ab1] [g0,g1] [f0,f1] [g0,g1]>")
    .s("supersaw")
    .lpf(sine.range(200, 780).slow(8))
    .lpq(6)
    .distort(0.62)
    .attack(0.45)
    .sustain(0.96)
    .release(0.8)
    .room(0.88)
    .gain(0.72),

  note("<ab0 g0 f0 g0>").s("sine").gain(0.56),

  // Rippling bullet-time pitch-bending FM echoes
  note("<[ab4 ~ ~ ~ eb5 ~ ~ ~] [g4 ~ ~ ~ d5 ~ ~ ~] [f4 ~ ~ ~ c5 ~ ~ ~] [g4 ~ ~ ~ b4 ~ ~ ~]>")
    .s("sine")
    .fm(3.2)
    .fmh(2)
    .penv(-7)
    .pdecay(0.55)
    .decay(0.65)
    .sustain(0.02)
    .pan(sine.range(0.1, 0.9).fast(2))
    .room(0.95)
    .delay(0.68)
    .delaytime(0.36)
    .gain(0.24),

  // Distant cavernous 303 acid whisper bubbling in bullet-time
  note("<[ab2 ~ c3 ab2 ~ eb3 ~ c3] [g2 ~ b2 g2 ~ d3 ~ b2] [f2 ~ ab2 f2 ~ c3 ~ ab2] [g2 ~ b2 g2 ~ d3 ~ f3]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(240, 950).slow(8))
    .lpenv(4.0)
    .lpdecay(0.12)
    .lpq(17)
    .decay(0.1)
    .sustain(0.02)
    .distort(0.48)
    .room(0.92)
    .delay(0.6)
    .delaytime(0.36)
    .gain(0.20)
);

// Backing bed for the 12-bar Bullet-Time Combat Shred Solo
const battleSoloBacking = stack(
  s("bd ~ ~ bd ~ ~ [bd ~] [~ bd]").lpf(1650).distort(0.70).gain(1.0),
  s("~ ~ [sd:1,cp] ~ ~ [~ sd:3] [sd:1,cp] [~ sd:3]").lpf(4600).distort(0.55).room(0.65).gain(0.9),
  s("hh*16").hpf(4600).distort(0.35).gain("<0.15 0.38 0.22 0.52>*4"),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.55).room(0.72).gain(0.84),

  note("<[c1 c2]*4 [eb1 eb2]*4 [f1 f2]*4 [g1 g2]*4>")
    .fast(2)
    .s("sawtooth")
    .fm(1.6)
    .fmh(0.5)
    .lpf(1500)
    .lpenv(4.8)
    .lpdecay(0.12)
    .lpq(17)
    .decay(0.1)
    .sustain(0.03)
    .distort(0.78)
    .gain(0.56),

  note("<[c1,c2] [eb1,eb2] [f0,f1] [g0,g1]>")
    .s("supersaw")
    .fm(1.2)
    .fmh(0.5)
    .lpf(sine.range(260, 880).slow(4))
    .lpq(6.5)
    .distort(0.76)
    .attack(0.25)
    .sustain(0.95)
    .room(0.72)
    .gain(0.66),

  note("<c1 eb1 f0 g0>").s("sine").gain(0.54),

  note("<[c3,g3] [eb3,bb3] [f3,c4] [g3,d4]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2300)
    .distort(0.84)
    .decay(0.15)
    .sustain(0.08)
    .room(0.6)
    .gain(0.28)
);

// Scene 7a (4 bars): Combat Shred Part 1 — Ferocious C harmonic minor / Dorian attack
const bulletShred1 = stack(
  battleSoloBacking,
  note("<[c4 eb4 d4 c4 b3 c4 eb4 g4] [eb4 f4 g4 bb4 g4 f4 eb4 g4] [f4 g4 ab4 c5 ab4 g4 f4 ab4] [g4 f4 eb4 d4 b3 d4 f4 g4]>")
    .fast(2)
    .s("supersaw")
    .fm(2.3)
    .fmh(2)
    .penv(-2)
    .pdecay(0.05)
    .lpf(3400)
    .lpq(7.5)
    .distort(0.84)
    .attack(0.008)
    .decay(0.15)
    .sustain(0.2)
    .vib(6)
    .vibmod(0.22)
    .room(0.72)
    .delay(0.35)
    .delaytime(0.24)
    .gain(0.30)
);

// Scene 7b (4 bars): Combat Shred Part 2 — Upper-register blistering acid-guitar runs
const bulletShred2 = stack(
  battleSoloBacking,
  note("<[c5 ~ eb5 d5 c5 bb4 g4 c5] [eb5 c5 g4 c5 eb5 f5 eb5 c5] [f5 d5 ab4 d5 f5 g5 f5 d5] [g5 f5 eb5 d5 c5 b4 g4 b4]>")
    .fast(2)
    .s("supersaw")
    .fm(2.6)
    .fmh(2)
    .penv(-2)
    .pdecay(0.05)
    .lpf(3800)
    .lpq(8)
    .distort(0.86)
    .attack(0.006)
    .decay(0.14)
    .sustain(0.22)
    .vib(6.5)
    .vibmod(0.26)
    .room(0.75)
    .delay(0.4)
    .delaytime(0.24)
    .gain(0.31)
);

// Scene 7c (4 bars): Combat Shred Climax — Full Matrix Overload!
const bulletShredClimax = stack(
  battleSoloBacking,
  note("<[c5 eb5 g5 c6 g5 eb5 d5 c5] [eb6 d6 c6 bb5 g5 bb5 eb6 d6] [f6 eb6 d6 c6 ab5 c6 f6 eb6] [g5 f5 eb5 d5 g5 f5 eb5 d5]>")
    .fast(2)
    .s("supersaw")
    .fm(2.9)
    .fmh(2)
    .penv(-3)
    .pdecay(0.05)
    .lpf(4400)
    .lpq(8.5)
    .distort(0.88)
    .attack(0.005)
    .decay(0.13)
    .sustain(0.25)
    .vib(7)
    .vibmod(0.28)
    .room(0.8)
    .delay(0.42)
    .delaytime(0.24)
    .gain(0.30)
);

// Scene 8 (4 bars): Blowing the Elevator Cable — Ultimate Build into Bass Drop
const elevatorBuild = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1500).distort(0.44).gain(0.96),
  s("<[~ ~ sd:1 ~] [~ sd:1 ~ sd:1] [~ [sd:1,cp] ~ [sd:1,cp]] [sd:1*4 [sd:1*4 [mt lt]]]>")
    .distort(0.42).room(0.8).gain(0.88),
  s("hh*16").hpf(5000).gain("<0.15 0.28 0.42 0.54>"),

  note("<ab0 g0 f0 g0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<420 880 1600 2800>")
    .lpenv(5.2)
    .lpdecay(0.12)
    .lpq(18)
    .decay(0.1)
    .sustain(0.03)
    .distort(0.65)
    .gain(0.56),

  note("<[ab0,ab1] [g0,g1] [f0,f1] [g0,g1]>")
    .s("supersaw")
    .lpf("<350 620 960 1400>")
    .lpq(6.5)
    .distort(0.68)
    .attack(0.2)
    .sustain(0.95)
    .room(0.78)
    .gain(0.66),

  note("<ab0 g0 f0 g0>").s("sine").gain(0.54),

  note("<[ab4 ~ c5 ~ eb5 ~ c5 ~] [g4 ~ b4 ~ d5 ~ b4 ~] [f4 ~ ab4 ~ c5 ~ ab4 ~] [g4 ~ b4 ~ d5 ~ g5 ~]>")
    .s("supersaw")
    .fm(1.5)
    .fmh(2)
    .lpf(2600)
    .lpq(6.5)
    .distort(0.74)
    .attack(0.02)
    .decay(0.26)
    .sustain(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.8)
    .delay(0.45)
    .delaytime(0.36)
    .gain(0.28)
);

// --- ACT IV: ROOFTOP BULLET-DODGE & CHOPPER ESCAPE --------------------------

// Scene 9a (8 bars): Rooftop Dodge Climax — Full Big-Beat + Power Chords + Anthem Lead
const rooftopDodge = stack(
  lobbyGunfight2,
  note("<[c5 ~ eb5 ~ g5 ~ f5 eb5] [eb5 ~ c5 ~ g4 ~ c5 eb5] [f5 ~ d5 ~ ab4 ~ c5 f5] [g5 ~ ~ f5 eb5 ~ d5 b4]>")
    .s("supersaw")
    .fm(1.4)
    .fmh(2)
    .lpf(2800)
    .lpq(6)
    .distort(0.74)
    .attack(0.02)
    .decay(0.32)
    .sustain(0.4)
    .release(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.82)
    .delay(0.45)
    .delaytime(0.36)
    .gain(0.30)
);

// Scene 9b (8 bars): Maximum Overdrive — High-octave harmony + crashing metal + sirens
const rooftopOverdrive = stack(
  rooftopDodge,
  note("<[g5 ~ c6 ~ eb6 ~ d6 c6] [c6 ~ g5 ~ eb5 ~ g5 c6] [c6 ~ ab5 ~ f5 ~ ab5 c6] [d6 ~ ~ c6 b5 ~ g5 d5]>")
    .s("supersaw")
    .hpf(950)
    .lpf(3800)
    .distort(0.65)
    .attack(0.02)
    .decay(0.28)
    .sustain(0.35)
    .vib(6)
    .vibmod(0.22)
    .room(0.88)
    .delay(0.45)
    .delaytime(0.36)
    .gain(0.17),
  s("<[metal:2 ~ ~ ~] ~>").hpf(1200).room(0.9).gain(0.36)
);

// Scene 10a (8 bars): Chopper Escape — Cool swaggering half-time dub-funk cool-down
const chopperEscape = stack(
  s("bd ~ ~ ~ ~ bd ~ ~").lpf(1100).distort(0.35).room(0.65).gain(0.85),
  s("~ ~ [sd:1,cp] ~ ~ ~ ~ ~").lpf(3000).room(0.88).gain(0.7),
  s("hh*8").hpf(5200).gain("<0.12 0.24 0.14 0.28>*2").pan(sine.range(0.25, 0.75)),

  note("<[c1 ~ c1 c2 ~ eb1 f1 g1] [c1 ~ c1 bb1 ~ g1 f1 eb1] [f1 ~ f1 f2 ~ eb1 c1 eb1] [g1 ~ g1 bb1 ~ g1 f1 eb1]>")
    .fast(2)
    .s("sawtooth")
    .lpf("<900 760 620 500 400 320 260 200>")
    .lpenv(3.2)
    .lpdecay(0.14)
    .lpq(13)
    .decay(0.14)
    .sustain(0.05)
    .distort(0.46)
    .gain(0.46),

  note("<[c1,c2] [c1,c2] [f0,f1] [g0,g1]>")
    .s("supersaw")
    .lpf("<580 500 420 350 290 240 200 170>")
    .lpq(5.5)
    .distort(0.52)
    .attack(0.4)
    .sustain(0.92)
    .room(0.85)
    .gain(0.58),

  note("<c1 c1 f0 g0>").s("sine").gain(0.48),

  note("<[c3,eb3,g3,bb3] ~ [f3,ab3,c4,eb4] ~>")
    .s("supersaw")
    .struct("~ [~ x] ~ ~ ~ ~ ~ ~")
    .hpf(350)
    .lpf(1600)
    .distort(0.42)
    .decay(0.25)
    .sustain(0.04)
    .room(0.9)
    .delay(0.65)
    .delaytime(0.36)
    .gain(0.26)
);

// Scene 10b (7 bars): Dissolve into Green Code — lone C1 dub-Reese & final dub siren
const matrixFade = stack(
  s("<[bd ~ ~ ~] ~ [bd ~ ~ ~] ~ ~ ~ ~>").lpf(800).room(0.9).gain(0.6),

  note("[c1,c2]")
    .s("supersaw")
    .lpf("<200 175 150 130 115 100 85>")
    .lpq(4.5)
    .distort(0.42)
    .attack(0.5)
    .sustain(0.95)
    .release(1.4)
    .room(0.98)
    .gain("<0.54 0.46 0.38 0.30 0.22 0.14 0.06>"),

  note("c1").s("sine").gain("<0.44 0.36 0.28 0.20 0.14 0.08 0.03>"),

  // Final echoing dub siren disappearing into the Matrix
  note("<[c5 ~ ~ ~ ~ ~ ~ ~] ~ ~ [g5 ~ ~ ~ ~ ~ ~ ~] ~ ~ ~>")
    .s("sine")
    .fm(2.5)
    .fmh(2)
    .penv(12)
    .pdecay(0.55)
    .decay(0.65)
    .sustain(0.01)
    .room(0.98)
    .delay(0.72)
    .delaytime(0.36)
    .gain(0.18)
);

// ============================================================================
// FULL 110-BAR ARRANGEMENT (~3:31 @ 125 BPM)
// ============================================================================
arrange(
  // Act I: The Metal Detector (20 bars)
  [4, lobbyWalk1],
  [4, lobbyWalk2],
  [8, gunsOut],
  [4, freezeRiser],
  // Act II: The Marble Pillar Gunfight (33 bars)
  [1, lobbyDrop],
  [8, lobbyGunfight1],
  [8, lobbyGunfight2],
  [16, cartwheelRun],
  // Act III: Bullet Time (25 bars)
  [8, bulletTimeVoid],
  [4, bulletShred1],
  [4, bulletShred2],
  [4, bulletShredClimax],
  [4, elevatorBuild],
  [1, lobbyDrop],
  // Act IV: Rooftop Bullet-Dodge & Chopper Escape (31 bars)
  [8, rooftopDodge],
  [8, rooftopOverdrive],
  [8, chopperEscape],
  [7, matrixFade]
)
