// ============================================================================
// "0x05 // TTL_EXPIRED" — Blade Runner (Ridley Scott / Vangelis Noir)
// Album: UNHANDLED EXCEPTION (Track 05 | Camelot 4A)
// Full ~3:41 Story Arc (92 bars @ 100 BPM, F minor / Lydian Dbmaj7 swells)
// ============================================================================
// Act I   (0:00–0:48): LA Rain & CS-80 Swells (8) -> Voight-Kampff (8) -> Riser (4)
// Act II  (0:48–1:48): Noir Drop (1) -> Off-World Memories (16) -> Tyrell Climb (8)
// Act III (1:48–2:38): Tears in Rain Void (8) -> CS-80 Lament Solo (8)
//                      -> Final Build (4) -> Ultimate Drop + Pitch Bend (1)
// Act IV  (2:38–3:41): Rooftop Rain Double-Climax (16) -> TTL Heartbeat Outro (10)
// ============================================================================
setcps(100 / 60 / 4);

// --- ACT I: LA RAIN & VOIGHT-KAMPFF (20 bars) -------------------------------

// Scene 1a (4 bars): Rain-drenched 2019 Los Angeles — Vangelis CS-80 brass swells
const laRain1 = stack(
  // Synthesized LA neon rain shimmer
  s("hh*16").hpf(6500).lpf(11000).gain(sine.range(0.06, 0.16).slow(4)).pan(sine.range(0.1, 0.9).slow(3)),

  // Lush detuned Vangelis CS-80 brass swells (Fm -> Dbmaj7 Lydian lift -> Eb -> Cm7)
  note("<[f3,ab3,c4] [db3,f3,ab3,c4] [eb3,g3,bb3] [c3,eb3,g3,bb3]>")
    .s("supersaw")
    .hpf(350)
    .lpf(sine.range(480, 1550).slow(4))
    .lpq(3.5)
    .distort(0.32)
    .attack(0.60)
    .sustain(0.90)
    .release(0.95)
    .vib(3)
    .vibmod(0.14)
    .room(0.95)
    .delay(0.50)
    .delaytime(0.450)
    .gain(0.28),

  // Deep warm F1 noir Cyber-Reese
  note("<[f1,f2] [db1,db2] [eb1,eb2] [c1,c2]>")
    .s("supersaw")
    .lpf("<200 280 360 460>")
    .lpq(5)
    .distort(0.44)
    .attack(0.55)
    .sustain(0.95)
    .room(0.88)
    .gain(0.56),

  note("<f1 db1 eb1 c1>").s("sine").gain(0.48)
);

// Scene 1b (4 bars): Voight-Kampff heartbeat & distant electric piano chimes
const laRain2 = stack(
  laRain1,
  s("bd ~ ~ ~ ~ bd ~ ~").lpf(900).distort(0.30).room(0.75).gain(0.84),
  s("<~ [~ ~ cp ~] ~ [~ ~ [sd:2,cp] ~]>").lpf(2400).room(0.95).delay(0.52).delaytime(0.450).gain(0.48),

  // Haunted noir glass chimes
  note("<[c5 ~ ~ ~ g5 ~ ~ ~] [f5 ~ ~ ~ c5 ~ ~ ~] [bb4 ~ ~ ~ g5 ~ ~ ~] [eb5 ~ ~ ~ c5 ~ ~ ~]>")
    .s("sine")
    .fm(2.2)
    .fmh(2)
    .hpf(800)
    .decay(0.55)
    .sustain(0.03)
    .pan(sine.range(0.2, 0.8))
    .room(0.95)
    .delay(0.60)
    .delaytime(0.450)
    .gain(0.20)
);

// Scene 2 (8 bars): Voight-Kampff Interrogation — Slow-burning 100 BPM noir breakbeat
const voightKampff = stack(
  s("bd ~ ~ bd ~ ~ bd ~").lpf(1250).distort(0.40).room(0.60).gain(0.92),
  s("~ ~ [sd:2,cp] ~ ~ ~ [sd:2,cp] ~").lpf(3400).distort(0.28).room(0.86).gain(0.80),
  s("hh*16").hpf(5400).gain("<0.10 0.24 0.14 0.32>*4").pan(sine.range(0.2, 0.8)),

  // Slow pulsing F minor / Lydian acid bassline
  note("<[f1 ~ f1 f2 ~ ab1 g1 f1] [db1 ~ db1 db2 ~ f1 eb1 db1] [eb1 ~ eb1 eb2 ~ g1 f1 eb1] [c1 ~ c1 c2 ~ eb1 d1 c1]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(240, 880).slow(8))
    .lpenv(3.8)
    .lpdecay(0.15)
    .lpq(14)
    .decay(0.15)
    .sustain(0.05)
    .distort(0.50)
    .gain(0.50),

  note("<[f1,f2] [db1,db2] [eb1,eb2] [c1,c2]>")
    .s("supersaw")
    .lpf(sine.range(220, 620).slow(8))
    .lpq(5.2)
    .distort(0.50)
    .attack(0.45)
    .sustain(0.94)
    .room(0.86)
    .gain(0.60),

  note("<f1 db1 eb1 c1>").s("sine").gain(0.50),

  // Vangelis CS-80 brass swells continuing over the beat
  note("<[f3,ab3,c4] [db3,f3,ab3,c4] [eb3,g3,bb3] [c3,eb3,g3,bb3]>")
    .s("supersaw")
    .hpf(350)
    .lpf(sine.range(520, 1700).slow(8))
    .lpq(3.5)
    .distort(0.36)
    .attack(0.60)
    .sustain(0.88)
    .release(0.90)
    .vib(3)
    .vibmod(0.16)
    .room(0.94)
    .delay(0.50)
    .delaytime(0.450)
    .gain(0.26)
);

// Scene 3 (4 bars): Memory Implant Riser
const memoryRiser = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1400).distort(0.45).gain(0.94),
  s("<[~ ~ sd:2 ~] [~ sd:2 ~ sd:2] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [sd:2*4 [mt lt]]]>")
    .distort(0.38).room(0.85).gain(0.84),
  s("hh*16").hpf(5000).gain("<0.12 0.24 0.36 0.48>"),

  note("<f1 db1 eb1 c1>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<420 850 1500 2400>")
    .lpenv(4.8)
    .lpdecay(0.14)
    .lpq(16)
    .decay(0.12)
    .sustain(0.04)
    .distort(0.58)
    .gain(0.54),

  note("<[f1,f2] [db1,db2] [eb1,eb2] [c1,c2]>")
    .s("supersaw")
    .lpf("<320 560 880 1280>")
    .lpq(6)
    .distort(0.60)
    .attack(0.25)
    .sustain(0.95)
    .room(0.85)
    .gain(0.64),

  note("<f1 db1 eb1 c1>").s("sine").gain(0.52)
);

// --- ACT II: OFF-WORLD MEMORIES & TYRELL CLIMB (25 bars) --------------------

// Signature 1-bar Noir Sub Drop + F1 -> F2 Rising Octave Swell!
const noirDrop = stack(
  s("bd ~ ~ ~").distort(0.62).lpf(950).room(0.75).gain(1.0),
  s("cp ~ ~ ~").lpf(2600).distort(0.30).room(0.96).gain(0.70),

  note("f2")
    .s("sine")
    .penv(-24)
    .pdecay(1.6)
    .decay(2.1)
    .sustain(0.2)
    .distort(0.32)
    .gain(0.95),

  note("[f1,f2]")
    .s("supersaw")
    .lpf(sine.range(180, 920).slow(1))
    .lpq(6.5)
    .distort(0.74)
    .attack(0.01)
    .decay(1.9)
    .sustain(0.35)
    .room(0.92)
    .gain(0.76),

  note("[f3,ab3,c4,f4]")
    .s("supersaw")
    .hpf(350)
    .lpf(1600)
    .distort(0.45)
    .attack(0.03)
    .decay(1.8)
    .sustain(0.18)
    .room(0.96)
    .gain(0.30),

  note("~ ~ f2 ~")
    .s("supersaw")
    .penv(-12)
    .pdecay(1.1)
    .lpf(sine.range(240, 2600).fast(1))
    .lpq(7)
    .distort(0.68)
    .attack(0.32)
    .decay(0.90)
    .sustain(0.30)
    .room(0.88)
    .gain(0.62)
);

// Scene 4a (8 bars): Off-World Memories Part 1 — Cinematic 100 BPM noir pulse + CS-80 lead
const offWorld1 = stack(
  voightKampff,
  s("~ metal:1 ~ ~ ~ [~ metal:3] ~ ~")
    .hpf(1000).lpf(4200).distort(0.40).room(0.78).delay(0.40).delaytime(0.300).gain(0.28),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.35).room(0.84).gain(0.78),

  // Soaring Vangelis CS-80 melancholic lead
  note("<[c5 ~ ~ g4 ~ ~ ab4 ~] [g4 ~ ~ f4 ~ ~ c4 ~] [bb4 ~ ~ g4 ~ ~ eb4 ~] [g4 ~ ~ ~ f4 ~ eb4 ~]>")
    .s("supersaw")
    .hpf(380)
    .lpf(sine.range(1200, 2400).slow(4))
    .lpq(4.5)
    .distort(0.45)
    .attack(0.12)
    .decay(0.50)
    .sustain(0.55)
    .release(0.65)
    .vib(3.5)
    .vibmod(0.22)
    .room(0.92)
    .delay(0.55)
    .delaytime(0.450)
    .gain(0.28)
);

// Scene 4b (8 bars): Off-World Memories Part 2 — Dark industrial fifth chords swell in
const offWorld2 = stack(
  offWorld1,
  note("<[f3,c4] [db3,ab3] [eb3,bb3] [c3,g3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2100)
    .lpq(4)
    .distort(0.68)
    .decay(0.20)
    .sustain(0.10)
    .room(0.75)
    .gain(0.25)
);

// Scene 5 (8 bars): Tyrell Pyramid Climb — Slow, monumental 4-on-the-floor stomp
const tyrellClimb = stack(
  s("bd*4").lpf(1400).distort(0.58).gain(0.98),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(3600).distort(0.46).room(0.85).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.14 0.34 0.18 0.44>*4").pan(sine.range(0.2, 0.8)),
  s("[~ metal:2] ~ [~ metal:4] [~ metal:0]")
    .hpf(950).lpf(4200).distort(0.50).room(0.74).delay(0.38).delaytime(0.300).gain(0.32),

  note("<[f1 f2 gb1 f1]*2 [db1 db2 eb1 db1]*2 [eb1 eb2 f1 eb1]*2 [c1 c2 db1 c1]*2>")
    .fast(2)
    .s("sawtooth")
    .fm(1.4)
    .fmh(0.5)
    .lpf(sine.range(240, 1200).slow(4))
    .lpenv(4.8)
    .lpdecay(0.15)
    .lpq(16)
    .decay(0.13)
    .sustain(0.04)
    .distort(0.68)
    .gain(0.54),

  note("<[f1,f2] [db1,db2] [eb1,eb2] [c1,c2]>")
    .s("supersaw")
    .lpf(sine.range(220, 720).slow(4))
    .lpq(6)
    .distort(0.64)
    .attack(0.35)
    .sustain(0.94)
    .room(0.84)
    .gain(0.62),

  note("<f1 db1 eb1 c1>").s("sine").gain(0.52)
);

// --- ACT III: TEARS IN RAIN VOID & CS-80 LAMENT (21 bars) -------------------

// Scene 6 (8 bars): Tears in Rain Void — Lush Lydian Dbmaj7 -> Eb -> Fm -> Cm7
const tearsVoid = stack(
  s("hh*16").hpf(6500).lpf(11000).gain(sine.range(0.06, 0.16).slow(4)).pan(sine.range(0.1, 0.9).slow(3)),
  s("bd ~ ~ ~").lpf(800).distort(0.28).room(0.90).gain(0.74),
  s("~ ~ cp ~").lpf(1900).room(0.96).delay(0.62).delaytime(0.450).gain(0.34),

  // Tectonic sustained Reese (Db -> Eb -> F -> C)
  note("<[db1,db2] [eb1,eb2] [f0,f1] [c1,c2]>")
    .s("supersaw")
    .lpf(sine.range(200, 740).slow(8))
    .lpq(5.5)
    .distort(0.54)
    .attack(0.55)
    .sustain(0.96)
    .release(1.0)
    .room(0.92)
    .gain(0.68),

  note("<db1 eb1 f0 c1>").s("sine").gain(0.54),

  // Vangelis Lydian Dbmaj7 brass cathedral
  note("<[db3,f3,ab3,c4,g4] [eb3,g3,bb3,f4] [f3,ab3,c4,g4] [c3,eb3,g3,bb3]>")
    .s("supersaw")
    .hpf(360)
    .lpf(sine.range(480, 1800).slow(8))
    .lpq(3.5)
    .distort(0.34)
    .attack(0.65)
    .sustain(0.90)
    .release(1.1)
    .vib(3)
    .vibmod(0.18)
    .room(0.96)
    .delay(0.55)
    .delaytime(0.450)
    .gain(0.28),

  // Distant 303 raindrop whisper
  note("<[db2 ~ f2 db2 ~ ab2 ~ c3] [eb2 ~ g2 eb2 ~ bb2 ~ g2] [f2 ~ ab2 f2 ~ c3 ~ ab2] [c2 ~ eb2 c2 ~ g2 ~ eb2]>")
    .fast(2)
    .s("sawtooth")
    .hpf(350)
    .lpf(sine.range(240, 880).slow(8))
    .lpenv(3.5)
    .lpdecay(0.14)
    .lpq(15)
    .decay(0.12)
    .sustain(0.02)
    .distort(0.42)
    .room(0.94)
    .delay(0.60)
    .delaytime(0.450)
    .gain(0.18)
);

// Backing for the 8-bar CS-80 Noir Lament Solo
const noirSoloBacking = stack(
  s("bd ~ ~ bd ~ ~ bd ~").lpf(1450).distort(0.52).gain(0.96),
  s("~ ~ [sd:2,cp] ~ ~ ~ [sd:2,cp] ~").lpf(3800).distort(0.40).room(0.86).gain(0.86),
  s("hh*16").hpf(5000).gain("<0.14 0.34 0.18 0.46>*4"),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.38).room(0.82).gain(0.80),

  note("<f1 db1 eb1 c1>")
    .struct("x*16")
    .s("sawtooth")
    .lpf(1300)
    .lpenv(4.2)
    .lpdecay(0.14)
    .lpq(15)
    .decay(0.12)
    .sustain(0.04)
    .distort(0.60)
    .gain(0.52),

  note("<[f1,f2] [db1,db2] [eb1,eb2] [c1,c2]>")
    .s("supersaw")
    .lpf(sine.range(260, 820).slow(4))
    .lpq(5.8)
    .distort(0.62)
    .attack(0.30)
    .sustain(0.95)
    .room(0.84)
    .gain(0.64),

  note("<f1 db1 eb1 c1>").s("sine").gain(0.52)
);

// Scene 7a (4 bars): CS-80 Lament Solo Part 1 — Emotional, bending noir lead
const cs80Solo1 = stack(
  noirSoloBacking,
  note("<[c5 ~ ab4 g4 f4 ~ c5 ~] [f5 ~ eb5 db5 c5 ~ ab4 ~] [g5 ~ f5 eb5 bb4 ~ eb5 ~] [c5 ~ ~ d5 eb5 ~ g5 ~]>")
    .s("supersaw")
    .fm(1.6)
    .fmh(2)
    .penv(-2)
    .pdecay(0.08)
    .hpf(380)
    .lpf(3100)
    .lpq(6)
    .distort(0.68)
    .attack(0.06)
    .decay(0.40)
    .sustain(0.45)
    .vib(4.5)
    .vibmod(0.26)
    .room(0.92)
    .delay(0.52)
    .delaytime(0.450)
    .gain(0.30)
);

// Scene 7b (4 bars): CS-80 Lament Solo Part 2 — Soaring upper-octave peak
const cs80Solo2 = stack(
  noirSoloBacking,
  note("<[f5 ~ g5 ab5 c6 ~ ab5 g5] [f5 ~ eb5 db5 c5 ~ f5 ab5] [g5 ~ bb5 c6 eb6 ~ bb5 g5] [c6 ~ ~ bb5 ab5 ~ g5 e5]>")
    .s("supersaw")
    .fm(2.0)
    .fmh(2)
    .penv(-2)
    .pdecay(0.07)
    .hpf(420)
    .lpf(3800)
    .lpq(7)
    .distort(0.76)
    .attack(0.04)
    .decay(0.36)
    .sustain(0.48)
    .vib(5.2)
    .vibmod(0.28)
    .room(0.92)
    .delay(0.55)
    .delaytime(0.450)
    .gain(0.31)
);

// Scene 8 (4 bars): Final Build over Lydian progression (Db -> Eb -> F -> C)
const finalBuild = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1450).distort(0.46).gain(0.96),
  s("<[~ ~ sd:2 ~] [~ sd:2 ~ sd:2] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [sd:2*4 [mt lt]]]>")
    .distort(0.40).room(0.86).gain(0.86),
  s("hh*16").hpf(5000).gain("<0.14 0.26 0.38 0.50>"),

  note("<db1 eb1 f1 c1>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<420 860 1550 2500>")
    .lpenv(5.0)
    .lpdecay(0.14)
    .lpq(17)
    .decay(0.12)
    .sustain(0.04)
    .distort(0.62)
    .gain(0.54),

  note("<[db1,db2] [eb1,eb2] [f0,f1] [c1,c2]>")
    .s("supersaw")
    .lpf("<340 580 900 1320>")
    .lpq(6)
    .distort(0.64)
    .attack(0.25)
    .sustain(0.95)
    .room(0.86)
    .gain(0.66),

  note("<db1 eb1 f0 c1>").s("sine").gain(0.52)
);

// --- ACT IV: ROOFTOP RAIN CLIMAX & TTL HEARTBEAT EXPIRATION (26 bars) -------

// Scene 9a (8 bars): Rooftop Rain Climax Part 1 — Full noir weight + Anthem Lead
const rooftopRain1 = stack(
  offWorld2,
  note("<[f5 ~ ab5 ~ c6 ~ bb5 ab5] [ab5 ~ f5 ~ db5 ~ f5 ab5] [bb5 ~ g5 ~ eb5 ~ g5 bb5] [c6 ~ ~ bb5 ab5 ~ g5 e5]>")
    .s("supersaw")
    .fm(1.4)
    .fmh(2)
    .hpf(400)
    .lpf(2800)
    .lpq(5.5)
    .distort(0.68)
    .attack(0.05)
    .decay(0.38)
    .sustain(0.45)
    .release(0.50)
    .vib(4.5)
    .vibmod(0.24)
    .room(0.90)
    .delay(0.52)
    .delaytime(0.450)
    .gain(0.30)
);

// Scene 9b (8 bars): Rooftop Rain Climax Part 2 — Octave-6 Harmony + Bar-1 Crash
const rooftopRain2 = stack(
  rooftopRain1,
  note("<[c6 ~ f6 ~ ab6 ~ g6 f6] [f6 ~ db6 ~ ab5 ~ db6 f6] [g6 ~ eb6 ~ bb5 ~ eb6 g6] [g6 ~ ~ f6 e6 ~ c6 g5]>")
    .s("supersaw")
    .hpf(1000)
    .lpf(3600)
    .distort(0.58)
    .attack(0.05)
    .decay(0.34)
    .sustain(0.40)
    .vib(5)
    .vibmod(0.22)
    .room(0.92)
    .delay(0.52)
    .delaytime(0.450)
    .gain(0.17),
  s("<[metal:2 ~ ~ ~] ~>").hpf(1200).room(0.92).gain(0.32)
);

// Scene 10a (6 bars): TTL Countdown — Heartbeat kick physically spaces out as life expires
const ttlCountdown = stack(
  s("hh*16").hpf(6500).lpf(11000).gain(sine.range(0.07, 0.16).slow(4)).pan(sine.range(0.1, 0.9).slow(3)),

  // Heartbeat physically slowing & spacing out until flatline on bar 6
  s("<[bd ~ bd ~] [bd ~ ~ bd] [bd ~ ~ ~] [bd ~ ~ ~] [~ ~ bd ~] ~>")
    .lpf("<1050 920 820 740 650 600>")
    .distort(0.30)
    .room(0.88)
    .gain("<0.86 0.80 0.72 0.62 0.50 0.0>"),

  // CS-80 Lydian brass gently closing down
  note("<[f3,ab3,c4] [db3,f3,ab3,c4] [eb3,g3,bb3] [c3,eb3,g3,bb3] [db3,f3,ab3,c4] [f3,c4]>")
    .s("supersaw")
    .hpf(350)
    .lpf("<1300 1050 850 680 520 380>")
    .distort(0.30)
    .attack(0.65)
    .sustain(0.90)
    .release(1.2)
    .vib(3)
    .vibmod(0.16)
    .room(0.96)
    .delay(0.58)
    .delaytime(0.450)
    .gain("<0.26 0.24 0.22 0.19 0.16 0.12>"),

  note("<[f1,f2] [db1,db2] [eb1,eb2] [c1,c2] [db1,db2] [f1,f2]>")
    .s("supersaw")
    .lpf("<480 400 330 270 220 180>")
    .lpq(5)
    .distort(0.46)
    .attack(0.55)
    .sustain(0.95)
    .room(0.92)
    .gain("<0.58 0.54 0.48 0.42 0.36 0.28>"),

  note("<f1 db1 eb1 c1 db1 f1>").s("sine").gain("<0.48 0.44 0.38 0.32 0.26 0.20>")
);

// Scene 10b (4 bars): Time to Die — Only LA rain & final F1 drone dissolving
const rainSilence = stack(
  s("hh*16").hpf(6600).lpf(11000).gain("<0.14 0.11 0.07 0.03>").pan(sine.range(0.1, 0.9).slow(3)),

  note("[f1,f2]")
    .s("supersaw")
    .lpf("<160 135 110 85>")
    .lpq(4)
    .distort(0.35)
    .attack(0.6)
    .sustain(0.95)
    .release(1.6)
    .room(0.98)
    .gain("<0.24 0.18 0.11 0.04>"),

  note("f1").s("sine").gain("<0.18 0.13 0.08 0.02>")
);

// ============================================================================
// FULL 92-BAR ARRANGEMENT (~3:41 @ 100 BPM)
// ============================================================================
arrange(
  // Act I: LA Rain & Voight-Kampff (20 bars)
  [4, laRain1],
  [4, laRain2],
  [8, voightKampff],
  [4, memoryRiser],
  // Act II: Off-World Memories & Tyrell Climb (25 bars)
  [1, noirDrop],
  [8, offWorld1],
  [8, offWorld2],
  [8, tyrellClimb],
  // Act III: Tears in Rain Void & CS-80 Lament (21 bars)
  [8, tearsVoid],
  [4, cs80Solo1],
  [4, cs80Solo2],
  [4, finalBuild],
  [1, noirDrop],
  // Act IV: Rooftop Rain Climax & TTL Heartbeat Expiration (26 bars)
  [8, rooftopRain1],
  [8, rooftopRain2],
  [6, ttlCountdown],
  [4, rainSilence]
)
