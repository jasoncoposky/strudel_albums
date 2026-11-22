// ============================================================================
// "0x04 // DANGLING_POINTER" — Altered Carbon (Richard K. Morgan)
// Album: UNHANDLED EXCEPTION (Track 04 | Camelot 2A)
// Full ~3:47 Story Arc (106 bars @ 112 BPM, Eb minor / Eb Dorian-Aeolian)
// ============================================================================
// Act I   (0:00–0:43): Cortical Spin-Up (8) -> Bay City (8) -> Riser (4)
// Act II  (0:43–1:45): Sleeve Drop (1) -> Combat Sleeve (16) -> Meth Tower (12)
// Act III (1:45–2:38): Head in the Clouds Void (8) -> Envoy Shred (12)
//                      -> Final Build (4) -> Ultimate Drop + Pitch Bend (1)
// Act IV  (2:38–3:47): Envoy Double-Climax (16) -> Stack Shutdown Outro (16)
// ============================================================================
setcps(112 / 60 / 4);

// THE CORTICAL STACK MOTIF — Identical 8-note melody carried across Acts I–IV
// while its synth patch, FM ratio, distortion & drums mutate ("resleeving")
const stackMotif = "eb4 gb4 f4 db4 eb4 bb3 db4 c4";

// --- ACT I: CORTICAL SPIN-UP & BAY CITY (20 bars) ---------------------------

// Scene 1a (4 bars): Cold cortical storage — crystal FM Stack Motif & dark Eb1 Reese
const spinUp1 = stack(
  // Subtle Bay City rain/neon static
  s("hh*16").hpf(6800).lpf(11000).gain(sine.range(0.05, 0.14).slow(4)).pan(sine.range(0.15, 0.85).slow(3)),
  s("<~ ~ [bd ~ ~ ~] [bd ~ ~ bd]>").lpf(950).distort(0.38).room(0.65).gain(0.84),

  // Sleeve #1 (Digital Storage): Cold, clinical crystal FM Stack Motif
  note(stackMotif)
    .s("sine")
    .fm(2.5)
    .fmh(3)
    .hpf(650)
    .decay(0.32)
    .sustain(0.04)
    .pan(sine.range(0.25, 0.75))
    .room(0.92)
    .delay(0.55)
    .delaytime(0.402)
    .gain(0.22),

  // Crushing low Eb Cyber-Reese waking up
  note("<[eb1,eb2] [eb1,eb2] [b0,b1] [bb0,bb1]>")
    .s("supersaw")
    .lpf("<220 320 440 580>")
    .lpq(5.8)
    .distort(0.56)
    .attack(0.40)
    .sustain(0.94)
    .room(0.84)
    .gain(0.62),

  note("<eb1 eb1 b0 bb0>").s("sine").gain(0.50),

  // Ominous noir brass foreshadowing Bay City
  note("<[eb3,bb3] [eb3,bb3] [b2,gb3] [bb2,f3]>")
    .s("supersaw")
    .struct("x ~ ~ ~ ~ ~ ~ ~")
    .hpf(350)
    .lpf("<520 720 960 1240>")
    .lpq(4.5)
    .distort(0.50)
    .attack(0.08)
    .decay(0.55)
    .sustain(0.25)
    .room(0.90)
    .delay(0.48)
    .delaytime(0.402)
    .gain(0.26)
);

// Scene 1b (4 bars): Decanting into flesh — heavy mid-tempo stomp & muted 303 ignite
const spinUp2 = stack(
  spinUp1,
  s("bd ~ ~ bd ~ ~ bd ~").lpf(1350).distort(0.48).room(0.55).gain(0.92),
  s("<[~ ~ cp ~] [~ ~ [sd:2,cp] ~] [~ ~ [sd:2,cp] ~] [~ ~ [sd:2,cp] [mt lt]]> ")
    .lpf(3600).distort(0.35).room(0.78).gain(0.82),
  s("~ metal:1 ~ [~ metal:4] ~ ~ metal:2 ~")
    .hpf(1050).lpf(4200).distort(0.42).room(0.70).delay(0.38).delaytime(0.268).gain(0.28),

  // Heavy mid-tempo Eb Dorian acid bass ramping up
  note("<[eb1 eb1 eb2 eb1 f1 eb1 db1 eb1] [eb1 eb1 eb2 eb1 gb1 f1 db1 eb1] [b0 b0 b1 b0 db1 b0 bb0 b0] [bb0 bb0 bb1 bb0 c1 bb0 ab0 bb0]>")
    .fast(2)
    .s("sawtooth")
    .lpf("<360 540 760 1050>")
    .lpenv(3.6)
    .lpdecay(0.14)
    .lpq(13)
    .decay(0.14)
    .sustain(0.05)
    .distort(0.58)
    .gain(0.52)
);

// Scene 2 (8 bars): Bay City Grit — Crushing 112 BPM Gesaffelstein darksynth stomp
const bayCity = stack(
  s("bd*4").lpf(1450).distort(0.55).gain(0.98),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(3800).distort(0.42).room(0.78).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.14 0.34 0.20 0.46>*4").pan(sine.range(0.25, 0.75)),
  s("~ metal:0 ~ [~ metal:3] ~ ~ metal:1 ~")
    .hpf(1050).lpf(4400).distort(0.46).room(0.62).delay(0.35).delaytime(0.268).gain(0.30),

  // Crushing mid-tempo Eb Dorian/Aeolian acid bass
  note("<[eb1 eb1 eb2 eb1 f1 eb2 db1 eb1] [db1 db1 db2 db1 eb1 db2 c1 db1] [b0 b0 b1 b0 db1 b1 bb0 b0] [bb0 bb0 bb1 bb0 c1 db1 c1 bb0]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.4)
    .fmh(0.5)
    .lpf(sine.range(280, 1100).slow(8))
    .lpenv(4.6)
    .lpdecay(0.15)
    .lpq(15)
    .decay(0.14)
    .sustain(0.05)
    .distort(0.64)
    .gain(0.56),

  note("<[eb1,eb2] [db1,db2] [b0,b1] [bb0,bb1]>")
    .s("supersaw")
    .lpf(sine.range(220, 680).slow(8))
    .lpq(5.8)
    .distort(0.60)
    .attack(0.35)
    .sustain(0.94)
    .room(0.78)
    .gain(0.60),

  note("<eb1 db1 b0 bb0>").s("sine").gain(0.52),

  // Sleeve #2 (Bay City Street): Stack Motif resleeved into gritty VHS analog saw
  note(stackMotif)
    .s("sawtooth")
    .fm(1.0)
    .fmh(1)
    .hpf(400)
    .lpf(sine.range(900, 2200).slow(4))
    .lpq(6)
    .distort(0.60)
    .decay(0.28)
    .sustain(0.18)
    .vib(4)
    .vibmod(0.16)
    .room(0.80)
    .delay(0.45)
    .delaytime(0.402)
    .gain(0.26)
);

// Scene 3 (4 bars): Combat Sleeve Riser — Escalating industrial stomp into the Drop
const sleeveRiser = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1550).distort(0.52).gain(0.98),
  s("<[~ ~ sd:2 ~] [~ sd:2 ~ sd:2] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [sd:2*4 [mt lt]]]>")
    .distort(0.45).room(0.80).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.15 0.28 0.40 0.52>"),

  note("<eb1 db1 b0 bb0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 900 1600 2600>")
    .lpenv(5.0)
    .lpdecay(0.13)
    .lpq(17)
    .decay(0.12)
    .sustain(0.04)
    .distort(0.68)
    .gain(0.58),

  note("<[eb1,eb2] [db1,db2] [b0,b1] [bb0,bb1]>")
    .s("supersaw")
    .lpf("<350 620 960 1400>")
    .lpq(6)
    .distort(0.68)
    .attack(0.20)
    .sustain(0.95)
    .room(0.78)
    .gain(0.65),

  note("<eb1 db1 b0 bb0>").s("sine").gain(0.52)
);

// --- ACT II: COMBAT SLEEVE & METH TOWER (29 bars) ---------------------------

// Signature 1-bar Cortical Drop + Eb1 -> Eb2 Rising Octave Swell!
const stackDrop = stack(
  s("bd ~ ~ ~").distort(0.72).lpf(1000).room(0.65).gain(1.0),
  s("cp ~ ~ ~").lpf(2800).distort(0.38).room(0.95).gain(0.74),

  // 2-octave plunging sub-bass drop
  note("eb2")
    .s("sine")
    .penv(-24)
    .pdecay(1.45)
    .decay(1.9)
    .sustain(0.2)
    .distort(0.38)
    .gain(0.95),

  // Monstrous overdriven Eb1 Reese roar
  note("[eb1,eb2]")
    .s("supersaw")
    .lpf(sine.range(180, 1000).slow(1))
    .lpq(7)
    .distort(0.78)
    .attack(0.01)
    .decay(1.7)
    .sustain(0.35)
    .room(0.90)
    .gain(0.78),

  // Dark Eb minor impact chord ring-out
  note("[eb3,gb3,bb3,eb4]")
    .s("supersaw")
    .hpf(350)
    .lpf(1600)
    .distort(0.52)
    .attack(0.02)
    .decay(1.6)
    .sustain(0.15)
    .room(0.95)
    .gain(0.30),

  // Signature beats 3-4 rising octave swell (Eb1 -> Eb2!)
  note("~ ~ eb2 ~")
    .s("supersaw")
    .penv(-12)
    .pdecay(1.0)
    .lpf(sine.range(250, 2800).fast(1))
    .lpq(7.5)
    .distort(0.72)
    .attack(0.28)
    .decay(0.82)
    .sustain(0.3)
    .room(0.82)
    .gain(0.64)
);

// Scene 4a (8 bars): Combat Sleeve Part 1 — Crushing mid-tempo Gesaffelstein weight
const combatSleeve1 = stack(
  s("bd ~ [~ bd] ~ bd ~ [~ bd] ~").lpf(1550).distort(0.65).gain(1.0),
  s("~ ~ [sd:2,cp] ~ ~ ~ [sd:2,cp] [~ sd:3]").lpf(4200).distort(0.52).room(0.74).gain(0.90),
  s("hh*16").hpf(4800).distort(0.30).gain("<0.14 0.36 0.20 0.48>*4").pan(sine.range(0.2, 0.8)),
  s("~ metal:1 ~ [~ metal:4] ~ ~ metal:2 ~")
    .hpf(1050).lpf(4600).distort(0.55).room(0.62).delay(0.36).delaytime(0.268).gain(0.32),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.45).room(0.78).gain(0.84),

  // Heavy FM-growling Eb Dorian acid bassline
  note("<[eb1 eb1 eb2 eb1 f1 eb2 db1 eb1] [db1 db1 db2 db1 eb1 db2 c1 db1] [b0 b0 b1 b0 db1 b1 bb0 b0] [bb0 bb0 bb1 bb0 c1 db1 c1 bb0]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.7)
    .fmh(0.5)
    .lpf(sine.range(280, 1300).slow(4))
    .lpenv(5.2)
    .lpdecay(0.14)
    .lpq(17)
    .decay(0.13)
    .sustain(0.04)
    .distort(0.74)
    .gain(0.58),

  // Blown-out sustained Cyber-Reese
  note("<[eb1,eb2] [db1,db2] [b0,b1] [bb0,bb1]>")
    .s("supersaw")
    .fm(1.2)
    .fmh(0.5)
    .lpf(sine.range(220, 760).slow(8))
    .lpq(6.2)
    .distort(0.72)
    .attack(0.32)
    .sustain(0.94)
    .room(0.76)
    .gain(0.64),

  note("<eb1 db1 b0 bb0>").s("sine").gain(0.54),

  // Sleeve #3 (Combat Sleeve): Stack Motif resleeved into snarling overdriven supersaw!
  note(stackMotif)
    .s("supersaw")
    .fm(1.8)
    .fmh(1)
    .hpf(380)
    .lpf(2400)
    .lpq(7)
    .distort(0.76)
    .attack(0.015)
    .decay(0.28)
    .sustain(0.26)
    .vib(5)
    .vibmod(0.22)
    .room(0.78)
    .delay(0.42)
    .delaytime(0.402)
    .gain(0.29)
);

// Scene 4b (8 bars): Combat Sleeve Part 2 — KMFDM fifth power chords slam in!
const combatSleeve2 = stack(
  combatSleeve1,
  note("<[eb3,bb3] [db3,ab3] [b2,gb3] [bb2,f3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2250)
    .lpq(4.5)
    .distort(0.78)
    .decay(0.18)
    .sustain(0.10)
    .room(0.65)
    .gain(0.28)
);

// Scene 5 (12 bars): Ascent to the Meth Tower — Relentless 112 BPM 4-on-the-floor stomp
const methTower = stack(
  s("bd*4").lpf(1550).distort(0.66).gain(1.0),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(4000).distort(0.52).room(0.76).gain(0.90),
  s("hh*16").hpf(4800).gain("<0.16 0.38 0.22 0.50>*4").pan(sine.range(0.25, 0.75)),
  s("[~ metal:2] ~ [~ metal:4] [~ metal:0]")
    .hpf(950).lpf(4400).distort(0.60).room(0.66).delay(0.35).delaytime(0.268).gain(0.34),
  s("<~ ~ ~ [~ ~ sd:2*2 [mt lt lt lt]]>").distort(0.48).room(0.76).gain(0.84),

  // Heavy Eb Dorian/Phrygian stomping acid bass
  note("<[eb1 eb2 e1 eb1]*2 [eb1 eb2 db1 eb1]*2 [b0 b1 db1 b0]*2 [bb0 bb1 c1 bb0]*2>")
    .fast(2)
    .s("sawtooth")
    .fm(1.5)
    .fmh(0.5)
    .lpf(sine.range(240, 1350).slow(4))
    .lpenv(5.4)
    .lpdecay(0.14)
    .lpq(18)
    .decay(0.12)
    .sustain(0.04)
    .distort(0.76)
    .gain(0.58),

  note("<[eb1,eb2] [eb1,eb2] [b0,b1] [bb0,bb1]>")
    .s("supersaw")
    .lpf(sine.range(220, 740).slow(6))
    .lpq(6)
    .distort(0.70)
    .attack(0.32)
    .sustain(0.94)
    .room(0.76)
    .gain(0.64),

  note("<eb1 eb1 b0 bb0>").s("sine").gain(0.54),

  // Stack Motif resleeved into dark, pulsing low-octave industrial synth
  note(stackMotif)
    .s("square")
    .fm(1.4)
    .fmh(2)
    .hpf(380)
    .lpf(2100)
    .lpq(6.5)
    .distort(0.74)
    .decay(0.24)
    .sustain(0.22)
    .room(0.78)
    .delay(0.42)
    .delaytime(0.402)
    .gain(0.26)
);

// --- ACT III: HEAD IN THE CLOUDS VOID & ENVOY SHRED (25 bars) ---------------

// Scene 6 (8 bars): Methuselah Clouds Void (B -> Bb -> Ab -> Bb off-tonic)
const methVoid = stack(
  s("bd ~ ~ ~").lpf(850).distort(0.34).room(0.88).gain(0.78),
  s("~ ~ cp ~").lpf(2000).room(0.95).delay(0.60).delaytime(0.402).gain(0.38),

  // Tectonic 0-octave Reese floating above the clouds (B0 -> Bb0 -> Ab0 -> Bb0)
  note("<[b0,b1] [bb0,bb1] [ab0,ab1] [bb0,bb1]>")
    .s("supersaw")
    .lpf(sine.range(200, 760).slow(8))
    .lpq(6)
    .distort(0.62)
    .attack(0.45)
    .sustain(0.96)
    .release(0.85)
    .room(0.90)
    .gain(0.72),

  note("<b0 bb0 ab0 bb0>").s("sine").gain(0.56),

  // Sleeve #4 (Methuselah Clouds): Stack Motif stretched slow(2) on ethereal dark brass
  note(stackMotif)
    .slow(2)
    .s("supersaw")
    .hpf(380)
    .lpf(sine.range(600, 1750).slow(8))
    .lpq(4.5)
    .distort(0.44)
    .attack(0.30)
    .decay(0.60)
    .sustain(0.55)
    .vib(3.5)
    .vibmod(0.18)
    .room(0.95)
    .delay(0.58)
    .delaytime(0.402)
    .gain(0.27),

  // Distant cavernous 303 whisper
  note("<[b1 ~ eb2 b1 ~ gb2 ~ eb2] [bb1 ~ d2 bb1 ~ f2 ~ d2] [ab1 ~ b1 ab1 ~ eb2 ~ b1] [bb1 ~ d2 bb1 ~ f2 ~ ab2]>")
    .fast(2)
    .s("sawtooth")
    .hpf(350)
    .lpf(sine.range(240, 920).slow(8))
    .lpenv(3.8)
    .lpdecay(0.13)
    .lpq(16)
    .decay(0.11)
    .sustain(0.02)
    .distort(0.48)
    .room(0.92)
    .delay(0.58)
    .delaytime(0.402)
    .gain(0.19)
);

// Dedicated backing bed for the 12-bar Envoy Combat Shred Solo
const soloBacking = stack(
  s("bd ~ [~ bd] ~ bd ~ [~ bd] ~").lpf(1600).distort(0.64).gain(1.0),
  s("~ ~ [sd:2,cp] ~ ~ ~ [sd:2,cp] [~ sd:3]").lpf(4400).distort(0.50).room(0.74).gain(0.90),
  s("hh*16").hpf(4800).gain("<0.15 0.38 0.22 0.50>*4"),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.46).room(0.76).gain(0.84),

  note("<eb1 db1 b0 bb0>")
    .struct("x*16")
    .s("sawtooth")
    .fm(1.6)
    .fmh(0.5)
    .lpf(1550)
    .lpenv(4.6)
    .lpdecay(0.13)
    .lpq(17)
    .decay(0.11)
    .sustain(0.03)
    .distort(0.72)
    .gain(0.56),

  note("<[eb1,eb2] [db1,db2] [b0,b1] [bb0,bb1]>")
    .s("supersaw")
    .lpf(sine.range(260, 860).slow(4))
    .lpq(6)
    .distort(0.70)
    .attack(0.25)
    .sustain(0.95)
    .room(0.76)
    .gain(0.66),

  note("<eb1 db1 b0 bb0>").s("sine").gain(0.54),

  note("<[eb3,bb3] [db3,ab3] [b2,gb3] [bb2,f3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2300)
    .distort(0.78)
    .decay(0.16)
    .sustain(0.08)
    .room(0.64)
    .gain(0.28)
);

// Scene 7a (4 bars): Envoy Shred 1 — Octave 4 Eb harmonic minor/Dorian assault
const shred1 = stack(
  soloBacking,
  note("<[eb4 gb4 f4 eb4 d4 eb4 gb4 bb4] [db4 f4 ab4 db5 ab4 gb4 f4 db4] [b3 eb4 gb4 b4 gb4 f4 eb4 b3] [bb3 d4 f4 bb4 ab4 gb4 f4 d4]>")
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
    .decay(0.16)
    .sustain(0.22)
    .vib(6)
    .vibmod(0.22)
    .room(0.74)
    .delay(0.36)
    .delaytime(0.268)
    .gain(0.30)
);

// Scene 7b (4 bars): Envoy Shred 2 — Octave 5 blistering runs
const shred2 = stack(
  soloBacking,
  note("<[eb5 ~ gb5 f5 eb5 db5 bb4 eb5] [f5 db5 ab4 db5 f5 gb5 f5 db5] [gb5 eb5 b4 eb5 gb5 ab5 gb5 eb5] [bb5 ab5 gb5 f5 eb5 d5 bb4 d5]>")
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
    .decay(0.15)
    .sustain(0.24)
    .vib(6.5)
    .vibmod(0.26)
    .room(0.76)
    .delay(0.40)
    .delaytime(0.268)
    .gain(0.31)
);

// Scene 7c (4 bars): Envoy Shred Climax — Octave 6 Head in the Clouds Reckoning!
const shredClimax = stack(
  soloBacking,
  note("<[eb5 gb5 bb5 eb6 bb5 gb5 f5 eb5] [db6 b5 bb5 ab5 f5 ab5 db6 b5] [b5 bb5 ab5 gb5 eb5 gb5 b5 bb5] [bb5 ab5 gb5 f5 bb5 ab5 gb5 f5]>")
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
    .decay(0.14)
    .sustain(0.26)
    .vib(7)
    .vibmod(0.28)
    .room(0.80)
    .delay(0.42)
    .delaytime(0.268)
    .gain(0.30)
);

// Scene 8 (4 bars): Final Build over Void progression (B -> Bb -> Ab -> Bb)
const finalBuild = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1550).distort(0.50).gain(0.98),
  s("<[~ ~ sd:2 ~] [~ sd:2 ~ sd:2] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [sd:2*4 [mt lt]]]>")
    .distort(0.45).room(0.82).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.15 0.28 0.40 0.52>"),

  note("<b0 bb0 ab0 bb0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 900 1600 2600>")
    .lpenv(5.2)
    .lpdecay(0.13)
    .lpq(18)
    .decay(0.11)
    .sustain(0.03)
    .distort(0.68)
    .gain(0.56),

  note("<[b0,b1] [bb0,bb1] [ab0,ab1] [bb0,bb1]>")
    .s("supersaw")
    .lpf("<350 620 960 1400>")
    .lpq(6.5)
    .distort(0.70)
    .attack(0.20)
    .sustain(0.95)
    .room(0.80)
    .gain(0.66),

  note("<b0 bb0 ab0 bb0>").s("sine").gain(0.54),

  note("<[b4 ~ eb5 ~ gb5 ~ eb5 ~] [bb4 ~ d5 ~ f5 ~ d5 ~] [ab4 ~ b4 ~ eb5 ~ b4 ~] [bb4 ~ d5 ~ f5 ~ bb5 ~]>")
    .s("supersaw")
    .fm(1.5)
    .fmh(2)
    .hpf(380)
    .lpf(2600)
    .lpq(6.5)
    .distort(0.74)
    .attack(0.02)
    .decay(0.28)
    .sustain(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.82)
    .delay(0.45)
    .delaytime(0.402)
    .gain(0.28)
);

// --- ACT IV: ENVOY DOUBLE-CLIMAX & STACK SHUTDOWN OUTRO (32 bars) -----------

// Scene 9a (8 bars): Climax Part 1 — Combat Sleeve 2 + Soaring Octave-5 Anthem Lead
const envoyClimax1 = stack(
  combatSleeve2,
  note("<[eb5 ~ gb5 ~ bb5 ~ ab5 gb5] [f5 ~ db5 ~ ab4 ~ db5 f5] [gb5 ~ eb5 ~ b4 ~ eb5 gb5] [bb5 ~ ~ ab5 gb5 ~ f5 d5]>")
    .s("supersaw")
    .fm(1.4)
    .fmh(2)
    .hpf(400)
    .lpf(2800)
    .lpq(6)
    .distort(0.74)
    .attack(0.02)
    .decay(0.34)
    .sustain(0.40)
    .release(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.84)
    .delay(0.45)
    .delaytime(0.402)
    .gain(0.30)
);

// Scene 9b (8 bars): Maximum Overdrive — Upper-Octave Harmony + Bar-1 Crash
const envoyClimax2 = stack(
  envoyClimax1,
  note("<[bb5 ~ eb6 ~ gb6 ~ f6 eb6] [ab5 ~ f6 ~ db6 ~ f6 ab6] [b5 ~ gb6 ~ eb6 ~ gb6 b6] [f6 ~ ~ eb6 d6 ~ bb5 f5]>")
    .s("supersaw")
    .hpf(1000)
    .lpf(3800)
    .distort(0.65)
    .attack(0.02)
    .decay(0.30)
    .sustain(0.35)
    .vib(6)
    .vibmod(0.22)
    .room(0.88)
    .delay(0.45)
    .delaytime(0.402)
    .gain(0.17),
  s("<[metal:2 ~ ~ ~] ~>").hpf(1200).room(0.90).gain(0.35)
);

// Scene 10a (8 bars): Desleeving — Half-time step down, closing 303 & Reese filters
const outroStepDown = stack(
  s("bd ~ ~ ~ ~ bd ~ ~").lpf(1100).distort(0.38).room(0.68).gain(0.84),
  s("~ ~ [sd:2,cp] ~ ~ ~ ~ ~").lpf(2800).room(0.90).gain(0.68),
  s("hh*8").hpf(5400).gain("<0.12 0.24 0.14 0.28>*2").pan(sine.range(0.25, 0.75)),

  note("<[eb1 eb1 eb2 eb1 f1 eb2 db1 eb1] [db1 db1 db2 db1 eb1 db2 c1 db1] [b0 b0 b1 b0 db1 b1 bb0 b0] [bb0 bb0 bb1 bb0 c1 db1 c1 bb0]>")
    .fast(2)
    .s("sawtooth")
    .lpf("<900 760 620 500 400 320 260 200>")
    .lpenv(3.2)
    .lpdecay(0.14)
    .lpq(13)
    .decay(0.13)
    .sustain(0.04)
    .distort(0.48)
    .gain(0.44),

  note("<[eb1,eb2] [db1,db2] [b0,b1] [bb0,bb1]>")
    .s("supersaw")
    .lpf("<600 520 440 370 310 260 220 180>")
    .lpq(5.5)
    .distort(0.54)
    .attack(0.40)
    .sustain(0.92)
    .room(0.86)
    .gain(0.58),

  note("<eb1 db1 b0 bb0>").s("sine").gain(0.48)
);

// Scene 10b (8 bars): Cortical Stack Shutdown — Returns to crystal Act I motif & fades out
const outroFade = stack(
  s("hh*16").hpf(6800).lpf(11000).gain("<0.12 0.11 0.10 0.09 0.08 0.06 0.04 0.02>").pan(sine.range(0.15, 0.85).slow(3)),
  s("<[bd ~ ~ ~] ~ [bd ~ ~ ~] ~ ~ ~ ~ ~>").lpf(800).room(0.92).gain(0.60),

  // Sleeve #5 (Back to Cold Storage): Stack Motif returns to pure crystal FM & fades
  note(stackMotif)
    .s("sine")
    .fm(2.5)
    .fmh(3)
    .hpf(650)
    .decay(0.36)
    .sustain(0.02)
    .pan(sine.range(0.25, 0.75))
    .room(0.96)
    .delay(0.64)
    .delaytime(0.402)
    .gain("<0.22 0.20 0.18 0.16 0.13 0.10 0.07 0.04>"),

  note("[eb1,eb2]")
    .s("supersaw")
    .lpf("<200 175 155 135 120 105 92 80>")
    .lpq(4.5)
    .distort(0.40)
    .attack(0.55)
    .sustain(0.95)
    .release(1.4)
    .room(0.98)
    .gain("<0.50 0.44 0.38 0.31 0.24 0.17 0.10 0.04>"),

  note("eb1").s("sine").gain("<0.42 0.36 0.29 0.22 0.16 0.11 0.06 0.02>")
);

// ============================================================================
// FULL 106-BAR ARRANGEMENT (~3:47 @ 112 BPM)
// ============================================================================
arrange(
  // Act I: Cortical Spin-Up & Bay City (20 bars)
  [4, spinUp1],
  [4, spinUp2],
  [8, bayCity],
  [4, sleeveRiser],
  // Act II: Combat Sleeve & Meth Tower (29 bars)
  [1, stackDrop],
  [8, combatSleeve1],
  [8, combatSleeve2],
  [12, methTower],
  // Act III: Head in the Clouds Void & Envoy Shred (25 bars)
  [8, methVoid],
  [4, shred1],
  [4, shred2],
  [4, shredClimax],
  [4, finalBuild],
  [1, stackDrop],
  // Act IV: Envoy Double-Climax & Stack Shutdown Outro (32 bars)
  [8, envoyClimax1],
  [8, envoyClimax2],
  [8, outroStepDown],
  [8, outroFade]
)
