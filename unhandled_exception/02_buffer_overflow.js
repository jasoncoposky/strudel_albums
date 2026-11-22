// ============================================================================
// "0x02 // BUFFER_OVERFLOW" — Burning Chrome (William Gibson)
// Album: UNHANDLED EXCEPTION (Track 02 | Camelot 12A)
// Full ~3:31 Story Arc (118 bars @ 134 BPM, C# minor / C# Phrygian)
// ============================================================================
// Act I   (0:00–0:36): Dial-Up Handshake (8) -> Deck Launch (8) -> Riser (4)
// Act II  (0:36–1:35): Icebreaker Drop (1) -> Orbital Run (16) -> Vault (16)
// Act III (1:35–2:20): Chrome Void (8) -> Icebreaker Shred (12)
//                      -> Final Build (4) -> Ultimate Drop + Pitch Bend (1)
// Act IV  (2:20–3:31): Burn Chrome Double-Climax (16) -> Disconnect Outro (24)
// ============================================================================
setcps(134 / 60 / 4);

// --- ACT I: DIAL-UP HANDSHAKE & DECK LAUNCH (20 bars) -----------------------

// Shared carrier-wave & orbital foundation for Scene 1a & 1b
const dialUpBase = stack(
  // High-frequency carrier-wave static shimmer
  s("hh*16").hpf(6800).lpf(11500).gain(sine.range(0.08, 0.18).slow(4)).pan(sine.range(0.15, 0.85).slow(2)),

  // Throbbing FM bass "carrier wave" running straight through the handshake
  note("<[c#1 c#2 c#1 c#1 c#2 c#1 d1 c#1] [c#1 c#2 c#1 c#1 e1 c#1 d1 c#1] [a0 a1 a0 a0 b0 a0 c#1 a0] [g#0 g#1 g#0 g#0 d1 g#0 c#1 g#0]>")
    .s("sawtooth")
    .fm(1.8)
    .fmh(1.5)
    .hpf(95)
    .lpf(sine.range(480, 1550).fast(2))
    .lpenv(3.2)
    .lpdecay(0.14)
    .lpq(11)
    .decay(0.18)
    .sustain(0.32)
    .distort(0.64)
    .room(0.45)
    .gain(0.52),

  // Icy C# minor Cyber-Reese drone locked in from bar 1
  note("<[c#1,c#2] [c#1,c#2] [a0,a1] [g#0,g#1]>")
    .s("supersaw")
    .lpf("<360 500 660 860>")
    .lpq(5.8)
    .distort(0.60)
    .attack(0.08)
    .sustain(0.94)
    .room(0.80)
    .gain(0.60),

  // Pure mono sub
  note("<c#1 c#1 a0 g#0>").s("sine").gain(0.52),

  // Ominous orbital brass foreshadowing Chrome's perimeter
  note("<[c#3,g#3] [c#3,g#3] [a2,e3] [g#2,d3]>")
    .s("supersaw")
    .struct("x ~ ~ ~ ~ ~ ~ ~")
    .hpf(360)
    .lpf("<620 820 1080 1380>")
    .lpq(4.8)
    .distort(0.52)
    .attack(0.06)
    .decay(0.55)
    .sustain(0.25)
    .room(0.88)
    .delay(0.48)
    .delaytime(0.336)
    .gain(0.26)
);

// Scene 1a (4 bars): Cold Zurich-orbital modem handshake (1 pass only) over the bass carrier wave
const dialUp1 = stack(
  dialUpBase,
  s("<[bd ~ ~ ~] [bd ~ ~ ~] [bd ~ bd ~] [bd ~ bd bd]>").lpf(1100).distort(0.40).room(0.55).gain(0.82),

  // Crisp rhythmic dial-up / handshake FM data packets (clears out once Scene 1b ignites)
  note("<[c#5 g#5 c#6 g#5 ~ ~ d6 c#6] [~ ~ c#6 g#5 e5 ~ ~ ~] [a5 e6 a5 e5 ~ ~ b5 a5] [~ ~ g#5 c6 d#6 c6 g#5 ~]>")
    .s("sine")
    .fm(4.5)
    .fmh(3)
    .hpf(950)
    .decay(0.14)
    .sustain(0.01)
    .pan(sine.range(0.15, 0.85).fast(2))
    .room(0.85)
    .delay(0.50)
    .delaytime(0.224)
    .gain(0.24)
);

// Scene 1b (4 bars): Handshake locked — Russian military icebreaker ignites over the carrier wave
const dialUp2 = stack(
  dialUpBase,
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1350).distort(0.45).room(0.52).gain(0.92),
  s("<[~ ~ cp ~] [~ ~ [sd:2,cp] ~] [~ ~ [sd:2,cp] ~] [~ ~ [sd:2,cp] [mt lt]]> ")
    .lpf(3800).distort(0.32).room(0.75).gain(0.80),
  s("~ metal:1 ~ [~ metal:4] ~ ~ metal:2 ~")
    .hpf(1100).lpf(4400).distort(0.40).room(0.70).delay(0.38).delaytime(0.224).gain(0.30),

  // Russian military icebreaker sub-octave square/sawtooth pulse driving hard into deckLaunch
  note("<[c#1 ~ c#1 d1 ~ c#1 b0 c#1] [c#1 ~ c#1 e1 ~ d1 c#1 b0] [a0 ~ a0 b0 ~ c#1 b0 a0] [g#0 ~ g#0 c1 ~ g#0 d1 c#1]>")
    .fast(2)
    .s("square")
    .fm(1.4)
    .fmh(0.5)
    .lpf("<420 620 880 1250>")
    .lpenv(3.8)
    .lpdecay(0.12)
    .lpq(13)
    .decay(0.12)
    .sustain(0.04)
    .distort(0.62)
    .gain(0.54)
);

// Scene 2 (8 bars): Deck Launch — electro-breakbeat locks in, 303 acid & Chrome chimes open
const deckLaunch = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1500).distort(0.45).gain(0.95),
  s("~ ~ sd:1 ~ ~ ~ sd:2 [~ sd:3]").lpf(4400).distort(0.34).room(0.58).gain(0.84),
  s("hh*16").hpf(5200).gain("<0.12 0.34 0.18 0.46>*4").pan(sine.range(0.2, 0.8)),
  s("~ metal:0 ~ [~ metal:3] ~ ~ metal:1 ~")
    .hpf(1100).lpf(4800).distort(0.42).room(0.52).delay(0.32).delaytime(0.224).gain(0.28),

  // Liquid C# Phrygian TB-303 acid line
  note("<[c#1 c#1 c#2 c#1 d1 c#2 b0 c#1] [a0 a0 a1 a0 b0 a1 g#0 a0] [b0 b0 b1 b0 c#1 b1 a0 b0] [g#0 g#0 g#1 g#0 d1 c#1 b0 g#0]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(240, 920).slow(8))
    .lpenv(4.6)
    .lpdecay(0.13)
    .lpq(16)
    .decay(0.12)
    .sustain(0.03)
    .distort(0.58)
    .gain(0.54),

  // Cyber-Reese mid-bass
  note("<[c#1,c#2] [a0,a1] [b0,b1] [g#0,g#1]>")
    .s("supersaw")
    .lpf(sine.range(220, 620).slow(8))
    .lpq(5.5)
    .distort(0.56)
    .attack(0.35)
    .sustain(0.92)
    .room(0.75)
    .gain(0.58),

  note("<c#1 a0 b0 g#0>").s("sine").gain(0.50),

  // Shimmering Chrome orbital defense chimes (high-register fmh(3))
  note("<[c#5 ~ e5 ~ g#5 ~ d5 ~] [a4 ~ c#5 ~ e5 ~ b4 ~] [b4 ~ d#5 ~ f#5 ~ c#5 ~] [g#4 ~ c5 ~ d#5 ~ d5 ~]>")
    .s("sine")
    .fm(3.6)
    .fmh(3)
    .hpf(850)
    .decay(0.18)
    .sustain(0.02)
    .pan(sine.range(0.15, 0.85).fast(2))
    .room(0.82)
    .delay(0.48)
    .delaytime(0.336)
    .gain(0.22),

  // Cold orbital brass stabs
  note("<[c#3,g#3] [a2,e3] [b2,f#3] [g#2,d3]>")
    .s("supersaw")
    .struct("x ~ ~ [~ x] ~ ~ ~ ~")
    .hpf(360)
    .lpf(1750)
    .lpq(5)
    .distort(0.56)
    .attack(0.03)
    .decay(0.36)
    .sustain(0.22)
    .room(0.82)
    .delay(0.42)
    .delaytime(0.336)
    .gain(0.26)
);

// Scene 3 (4 bars): Icebreaker Riser — slamming into Chrome's outer perimeter
const icebreakerRiser = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1550).distort(0.48).gain(0.96),
  s("<[~ ~ sd:1 ~] [~ sd:1 ~ sd:1] [~ [sd:1,cp] ~ [sd:1,cp]] [sd:1*4 [sd:1*4 [mt lt]]]>")
    .distort(0.42).room(0.76).gain(0.86),
  s("hh*16").hpf(5000).gain("<0.15 0.28 0.40 0.52>"),

  note("<c#1 a0 b0 g#0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 900 1600 2600>")
    .lpenv(5.0)
    .lpdecay(0.12)
    .lpq(17)
    .decay(0.1)
    .sustain(0.03)
    .distort(0.64)
    .gain(0.56),

  note("<[c#1,c#2] [a0,a1] [b0,b1] [g#0,g#1]>")
    .s("supersaw")
    .lpf("<350 600 950 1350>")
    .lpq(6)
    .distort(0.64)
    .attack(0.2)
    .sustain(0.95)
    .room(0.75)
    .gain(0.64),

  note("<c#1 a0 b0 g#0>").s("sine").gain(0.52)
);

// --- ACT II: ORBITAL ICEBREAKER RUN (33 bars) -------------------------------

// Signature 1-bar Icebreaker Drop + C#1 -> C#2 Rising Octave Swell!
const iceDrop = stack(
  s("bd ~ ~ ~").distort(0.68).lpf(1000).room(0.62).gain(1.0),
  s("cp ~ ~ ~").lpf(2800).distort(0.35).room(0.95).gain(0.72),

  // 2-octave plunging sub-bass drop
  note("c#2")
    .s("sine")
    .penv(-24)
    .pdecay(1.3)
    .decay(1.7)
    .sustain(0.2)
    .distort(0.35)
    .gain(0.95),

  // Overdriven C#1 Reese roar
  note("[c#1,c#2]")
    .s("supersaw")
    .lpf(sine.range(180, 980).slow(1))
    .lpq(7)
    .distort(0.78)
    .attack(0.01)
    .decay(1.5)
    .sustain(0.35)
    .room(0.9)
    .gain(0.78),

  // C# minor impact chord ring-out
  note("[c#3,e3,g#3,c#4]")
    .s("supersaw")
    .hpf(350)
    .lpf(1550)
    .distort(0.5)
    .attack(0.02)
    .decay(1.4)
    .sustain(0.15)
    .room(0.95)
    .gain(0.30),

  // Signature beats 3-4 rising octave swell (C#1 -> C#2!)
  note("~ ~ c#2 ~")
    .s("supersaw")
    .penv(-12)
    .pdecay(0.86)
    .lpf(sine.range(250, 2800).fast(1))
    .lpq(7.5)
    .distort(0.70)
    .attack(0.25)
    .decay(0.68)
    .sustain(0.3)
    .room(0.8)
    .gain(0.64)
);

// Scene 4a (8 bars): Orbital Run Part 1 — Full electro-breakbeat + Russian Icebreaker + 303
const orbitalRun1 = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1600).distort(0.55).gain(1.0),
  s("~ ~ sd:1 ~ ~ ~ sd:2 [~ sd:3]").lpf(4500).distort(0.42).room(0.60).gain(0.88),
  s("hh*16").hpf(5200).gain("<0.14 0.36 0.20 0.48>*4").pan(sine.range(0.2, 0.8)),
  s("~ metal:1 ~ [~ metal:4] ~ ~ metal:2 ~")
    .hpf(1100).lpf(4800).distort(0.48).room(0.55).delay(0.32).delaytime(0.224).gain(0.30),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.38).room(0.72).gain(0.80),

  // Aggressive Russian military icebreaker sub-octave square/sawtooth pulse
  note("<[c#1 c#1 c#2 c#1 d1 c#2 b0 c#1] [a0 a0 a1 a0 b0 a1 g#0 a0] [b0 b0 b1 b0 c#1 b1 a0 b0] [g#0 g#0 g#1 g#0 d1 c#1 b0 g#0]>")
    .fast(2)
    .s("sawtooth")
    .fm(1.6)
    .fmh(0.5)
    .lpf(sine.range(260, 1200).slow(4))
    .lpenv(5.2)
    .lpdecay(0.13)
    .lpq(17)
    .decay(0.12)
    .sustain(0.03)
    .distort(0.68)
    .gain(0.56),

  // High-register bubbling 303 counter-acid
  note("<[c#3 c#4 ~ d3 c#3 e3 ~ g#3] [a2 a3 ~ b2 a2 c#3 ~ e3] [b2 b3 ~ c#3 b2 d#3 ~ f#3] [g#2 g#3 ~ d3 c3 g#3 ~ d3]>")
    .fast(2)
    .s("sawtooth")
    .hpf(350)
    .lpf(sine.range(380, 1850).slow(4))
    .lpenv(4.8)
    .lpdecay(0.11)
    .lpq(18)
    .decay(0.10)
    .sustain(0.02)
    .distort(0.60)
    .delay(0.36)
    .delaytime(0.224)
    .pan(sine.range(0.2, 0.8))
    .gain(0.26),

  // Cyber-Reese mid-bass
  note("<[c#1,c#2] [a0,a1] [b0,b1] [g#0,g#1]>")
    .s("supersaw")
    .lpf(sine.range(240, 760).slow(8))
    .lpq(6)
    .distort(0.62)
    .attack(0.32)
    .sustain(0.92)
    .room(0.75)
    .gain(0.62),

  note("<c#1 a0 b0 g#0>").s("sine").gain(0.52),

  // Shimmering Chrome orbital defense chimes hammering against the icebreaker
  note("<[c#5 ~ e5 ~ g#5 ~ d5 ~] [a4 ~ c#5 ~ e5 ~ b4 ~] [b4 ~ d#5 ~ f#5 ~ c#5 ~] [g#4 ~ c5 ~ d#5 ~ d5 ~]>")
    .s("sine")
    .fm(3.8)
    .fmh(3)
    .hpf(850)
    .decay(0.18)
    .sustain(0.02)
    .pan(sine.range(0.15, 0.85).fast(2))
    .room(0.82)
    .delay(0.48)
    .delaytime(0.336)
    .gain(0.22)
);

// Scene 4b (8 bars): Orbital Run Part 2 — KMFDM fifth power chords slam in!
const orbitalRun2 = stack(
  orbitalRun1,
  note("<[c#3,g#3] [a2,e3] [b2,f#3] [g#2,d#3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2300)
    .lpq(4.5)
    .distort(0.75)
    .decay(0.16)
    .sustain(0.08)
    .room(0.62)
    .gain(0.28)
);

// Scene 5 (16 bars): Zurich Banking Vault — Relentless 4-on-the-floor industrial stomp
const zurichVault = stack(
  s("bd*4").lpf(1550).distort(0.58).gain(0.98),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(4000).distort(0.45).room(0.70).gain(0.88),
  s("hh*16").hpf(4800).gain("<0.16 0.38 0.22 0.48>*4").pan(sine.range(0.25, 0.75)),
  s("[~ metal:2] ~ [~ metal:4] [~ metal:0]")
    .hpf(1000).lpf(4400).distort(0.52).room(0.62).delay(0.32).delaytime(0.224).gain(0.34),
  s("<~ ~ ~ [~ ~ sd:1*2 [mt lt lt lt]]>").distort(0.42).room(0.72).gain(0.80),

  // Hammering C# Phrygian icebreaker bass (C# -> D half-step dread)
  note("<[c#1 c#2 d1 c#1]*2 [c#1 c#2 b0 c#1]*2 [a0 a1 b0 a0]*2 [g#0 g#1 d1 c#1]*2>")
    .fast(2)
    .s("sawtooth")
    .fm(1.5)
    .fmh(0.5)
    .lpf(sine.range(240, 1300).slow(4))
    .lpenv(5.4)
    .lpdecay(0.13)
    .lpq(18)
    .decay(0.11)
    .sustain(0.03)
    .distort(0.72)
    .gain(0.56),

  note("<[c#1,c#2] [c#1,c#2] [a0,a1] [g#0,g#1]>")
    .s("supersaw")
    .lpf(sine.range(220, 720).slow(8))
    .lpq(6)
    .distort(0.66)
    .attack(0.32)
    .sustain(0.92)
    .room(0.75)
    .gain(0.62),

  note("<c#1 c#1 a0 g#0>").s("sine").gain(0.52),

  // Snarling Phrygian combat synth riff
  note("<[c#4 ~ d4 ~ c#4 ~ b3 ~] [c#4 ~ ~ ~ g#3 ~ ~ ~] [a3 ~ b3 ~ c#4 ~ d4 ~] [c4 ~ ~ ~ g#3 ~ d4 ~]>")
    .s("supersaw")
    .fm(1.7)
    .fmh(2)
    .hpf(360)
    .lpf(2300)
    .lpq(6.5)
    .distort(0.74)
    .attack(0.02)
    .decay(0.28)
    .sustain(0.32)
    .vib(5)
    .vibmod(0.22)
    .room(0.76)
    .delay(0.42)
    .delaytime(0.336)
    .gain(0.28)
);

// --- ACT III: CHROME VOID & ICEBREAKER SHRED (25 bars) ----------------------

// Scene 6 (8 bars): Chrome's Black ICE Void (F#m -> E -> D -> G#)
const chromeVoid = stack(
  s("bd ~ ~ ~").lpf(850).distort(0.32).room(0.84).gain(0.78),
  s("~ ~ cp ~").lpf(2000).room(0.95).delay(0.56).delaytime(0.336).gain(0.38),

  // Tectonic 0-octave Cyber-Reese off the tonic (F#0 -> E0 -> D0 -> G#0)
  note("<[f#0,f#1] [e0,e1] [d0,d1] [g#0,g#1]>")
    .s("supersaw")
    .lpf(sine.range(200, 780).slow(8))
    .lpq(6)
    .distort(0.64)
    .attack(0.45)
    .sustain(0.96)
    .release(0.8)
    .room(0.86)
    .gain(0.72),

  note("<f#0 e0 d0 g#0>").s("sine").gain(0.55),

  // Orbital cold pad
  note("<[f#2,a2,c#3] [e2,g#2,b2] [d2,f#2,a2] [g#2,c3,d#3]>")
    .s("supersaw")
    .hpf(350)
    .lpf(sine.range(420, 1450).slow(8))
    .lpq(4)
    .distort(0.44)
    .vib(2)
    .vibmod(0.1)
    .attack(0.45)
    .sustain(0.88)
    .release(0.7)
    .room(0.94)
    .gain(0.26),

  // Shimmering high-register Chrome defense chimes floating in zero-G
  note("<[f#4 a4 c#5 f#5 c#5 a4 f#4 c#5] [e4 g#4 b4 e5 b4 g#4 e4 b4] [d4 f#4 a4 d5 a4 f#4 d4 a4] [g#4 c5 d#5 g#5 d#5 c5 g#4 d#5]>")
    .s("sine")
    .fm(3.2)
    .fmh(3)
    .hpf(750)
    .decay(0.24)
    .sustain(0.03)
    .pan(sine.range(0.15, 0.85).fast(2))
    .room(0.9)
    .delay(0.55)
    .delaytime(0.336)
    .gain(0.22),

  // Distant cavernous 303 whisper
  note("<[f#2 ~ a2 f#2 ~ c#3 ~ a2] [e2 ~ g#2 e2 ~ b2 ~ g#2] [d2 ~ f#2 d2 ~ a2 ~ f#2] [g#2 ~ c3 g#2 ~ d#3 ~ c3]>")
    .fast(2)
    .s("sawtooth")
    .hpf(350)
    .lpf(sine.range(260, 960).slow(8))
    .lpenv(3.8)
    .lpdecay(0.12)
    .lpq(16)
    .decay(0.10)
    .sustain(0.02)
    .distort(0.46)
    .room(0.92)
    .delay(0.58)
    .delaytime(0.336)
    .gain(0.19)
);

// Dedicated backing bed for the 12-bar Icebreaker Shred Solo
const soloBacking = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1600).distort(0.55).gain(0.98),
  s("~ ~ [sd:1,cp] ~ ~ ~ [sd:2,cp] [~ sd:3]").lpf(4400).distort(0.42).room(0.72).gain(0.88),
  s("hh*16").hpf(5000).gain("<0.15 0.38 0.20 0.50>*4"),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.38).room(0.75).gain(0.82),

  note("<c#1 a0 b0 g#0>")
    .struct("x*16")
    .s("sawtooth")
    .fm(1.5)
    .fmh(0.5)
    .lpf(1550)
    .lpenv(4.4)
    .lpdecay(0.12)
    .lpq(16)
    .decay(0.10)
    .sustain(0.03)
    .distort(0.66)
    .gain(0.54),

  note("<[c#1,c#2] [a0,a1] [b0,b1] [g#0,g#1]>")
    .s("supersaw")
    .lpf(sine.range(280, 860).slow(4))
    .lpq(6)
    .distort(0.66)
    .attack(0.25)
    .sustain(0.95)
    .room(0.75)
    .gain(0.65),

  note("<c#1 a0 b0 g#0>").s("sine").gain(0.52),

  note("<[c#3,g#3] [a2,e3] [b2,f#3] [g#2,d#3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(380)
    .lpf(2250)
    .distort(0.76)
    .decay(0.15)
    .sustain(0.08)
    .room(0.62)
    .gain(0.26)
);

// Scene 7a (4 bars): Shred 1 — Octave 4 C# harmonic minor attack
const shred1 = stack(
  soloBacking,
  note("<[c#4 e4 d#4 c#4 c4 c#4 e4 g#4] [a4 g#4 f#4 e4 c#4 e4 f#4 a4] [b4 a4 g#4 f#4 d#4 f#4 g#4 b4] [g#4 f#4 e4 d#4 c4 d#4 f#4 g#4]>")
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
    .room(0.72)
    .delay(0.35)
    .delaytime(0.224)
    .gain(0.30)
);

// Scene 7b (4 bars): Shred 2 — Octave 5 blistering runs
const shred2 = stack(
  soloBacking,
  note("<[c#5 ~ e5 d#5 c#5 b4 g#4 c#5] [e5 c#5 a4 c#5 e5 f#5 e5 c#5] [f#5 d#5 b4 d#5 f#5 g#5 f#5 d#5] [g#5 f#5 e5 d#5 c#5 c5 g#4 c5]>")
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
    .room(0.75)
    .delay(0.40)
    .delaytime(0.224)
    .gain(0.31)
);

// Scene 7c (4 bars): Shred Climax — Octave 6 Chrome ICE Meltdown!
const shredClimax = stack(
  soloBacking,
  note("<[c#5 e5 g#5 c#6 g#5 e5 d#5 c#5] [a5 g#5 f#5 e5 c#5 e5 a5 g#5] [b5 a5 g#5 f#5 d#5 f#5 b5 a5] [g#5 f#5 e5 d#5 g#5 f#5 e5 d#5]>")
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
    .delaytime(0.224)
    .gain(0.30)
);

// Scene 8 (4 bars): Final Build over Void progression (F# -> E -> D -> G#)
const finalBuild = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1550).distort(0.46).gain(0.96),
  s("<[~ ~ sd:1 ~] [~ sd:1 ~ sd:1] [~ [sd:1,cp] ~ [sd:1,cp]] [sd:1*4 [sd:1*4 [mt lt]]]>")
    .distort(0.42).room(0.80).gain(0.88),
  s("hh*16").hpf(5000).gain("<0.15 0.28 0.40 0.52>"),

  note("<f#0 e0 d0 g#0>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 880 1550 2600>")
    .lpenv(5.2)
    .lpdecay(0.12)
    .lpq(18)
    .decay(0.10)
    .sustain(0.03)
    .distort(0.64)
    .gain(0.56),

  note("<[f#0,f#1] [e0,e1] [d0,d1] [g#0,g#1]>")
    .s("supersaw")
    .lpf("<350 600 920 1380>")
    .lpq(6.5)
    .distort(0.68)
    .attack(0.20)
    .sustain(0.95)
    .room(0.78)
    .gain(0.66),

  note("<f#0 e0 d0 g#0>").s("sine").gain(0.52),

  note("<[f#4 ~ a4 ~ c#5 ~ a4 ~] [e4 ~ g#4 ~ b4 ~ g#4 ~] [d4 ~ f#4 ~ a4 ~ f#4 ~] [g#4 ~ c5 ~ d#5 ~ g#5 ~]>")
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
    .room(0.80)
    .delay(0.45)
    .delaytime(0.336)
    .gain(0.28)
);

// --- ACT IV: BURNING CHROME DOUBLE-CLIMAX & DISCONNECT OUTRO (40 bars) ------

// Scene 9a (8 bars): Climax Part 1 — Orbital Run 2 + Soaring Anthem Lead
const burnClimax1 = stack(
  orbitalRun2,
  note("<[c#5 ~ e5 ~ g#5 ~ f#5 e5] [e5 ~ c#5 ~ a4 ~ c#5 e5] [f#5 ~ d#5 ~ b4 ~ d#5 f#5] [g#5 ~ ~ f#5 e5 ~ d#5 c5]>")
    .s("supersaw")
    .fm(1.4)
    .fmh(2)
    .hpf(400)
    .lpf(2800)
    .lpq(6)
    .distort(0.74)
    .attack(0.02)
    .decay(0.32)
    .sustain(0.40)
    .release(0.35)
    .vib(5.5)
    .vibmod(0.24)
    .room(0.82)
    .delay(0.45)
    .delaytime(0.336)
    .gain(0.30)
);

// Scene 9b (8 bars): Maximum Overdrive — Upper-Octave Harmony + Bar-1 Crash
const burnClimax2 = stack(
  burnClimax1,
  note("<[g#5 ~ c#6 ~ e6 ~ d#6 c#6] [c#6 ~ a5 ~ e5 ~ a5 c#6] [d#6 ~ b5 ~ f#5 ~ b5 d#6] [d#6 ~ ~ c#6 c6 ~ g#5 d#5]>")
    .s("supersaw")
    .hpf(1000)
    .lpf(3800)
    .distort(0.65)
    .attack(0.02)
    .decay(0.28)
    .sustain(0.35)
    .vib(6)
    .vibmod(0.22)
    .room(0.88)
    .delay(0.45)
    .delaytime(0.336)
    .gain(0.17),
  s("<[metal:2 ~ ~ ~] ~>").hpf(1200).room(0.90).gain(0.35)
);

// Scene 10a (8 bars): Jacking Out — Step down to half-time, closing 303 & Reese filters
const outroStepDown = stack(
  s("bd ~ ~ ~ ~ bd ~ ~").lpf(1100).distort(0.35).room(0.65).gain(0.84),
  s("~ ~ [sd:1,cp] ~ ~ ~ ~ ~").lpf(3000).room(0.88).gain(0.68),
  s("hh*8").hpf(5500).gain("<0.12 0.24 0.14 0.28>*2").pan(sine.range(0.25, 0.75)),

  note("<[c#1 c#1 c#2 c#1 d1 c#2 b0 c#1] [a0 a0 a1 a0 b0 a1 g#0 a0] [b0 b0 b1 b0 c#1 b1 a0 b0] [g#0 g#0 g#1 g#0 d1 c#1 b0 g#0]>")
    .fast(2)
    .s("sawtooth")
    .lpf("<900 760 620 500 400 320 260 200>")
    .lpenv(3.2)
    .lpdecay(0.13)
    .lpq(13)
    .decay(0.12)
    .sustain(0.04)
    .distort(0.48)
    .gain(0.44),

  note("<[c#1,c#2] [a0,a1] [b0,b1] [g#0,g#1]>")
    .s("supersaw")
    .lpf("<600 520 440 370 310 260 220 180>")
    .lpq(5.5)
    .distort(0.54)
    .attack(0.40)
    .sustain(0.92)
    .room(0.85)
    .gain(0.58),

  note("<c#1 a0 b0 g#0>").s("sine").gain(0.48)
);

// Scene 10b (8 bars): Carrier Lost — Drums vanish, dial-up chimes & static return
const outroDialDown = stack(
  s("hh*16").hpf(7000).lpf(11500).gain(sine.range(0.05, 0.13).slow(4)).pan(sine.range(0.15, 0.85).slow(2)),
  s("<[bd ~ ~ ~] ~ [bd ~ ~ ~] ~ [bd ~ ~ ~] ~ ~ ~>").lpf(850).room(0.9).gain(0.60),

  note("<[c#1,c#2] [a0,a1] [b0,b1] [g#0,g#1]>")
    .s("supersaw")
    .lpf("<320 280 245 215 190 165 145 130>")
    .lpq(5)
    .distort(0.46)
    .attack(0.50)
    .sustain(0.95)
    .release(1.0)
    .room(0.92)
    .gain(0.54),

  note("<c#1 a0 b0 g#0>").s("sine").gain(0.44),

  note("<[c#5 g#5 c#6 ~ ~ ~ ~ ~] [~ ~ d6 c#6 ~ ~ ~ ~] [a5 e6 a5 ~ ~ ~ ~ ~] [~ ~ g#5 c6 g#5 ~ ~ ~]>")
    .s("sine")
    .fm(4.2)
    .fmh(3)
    .hpf(950)
    .decay(0.22)
    .sustain(0.01)
    .pan(sine.range(0.15, 0.85))
    .room(0.95)
    .delay(0.62)
    .delaytime(0.336)
    .gain(0.19)
);

// Scene 10c (8 bars): Signal Terminated — Lone C#1 drone & carrier hiss fade to silence
const outroFade = stack(
  s("hh*16").hpf(7200).lpf(11800).gain("<0.12 0.11 0.10 0.09 0.08 0.06 0.04 0.02>").pan(sine.range(0.15, 0.85).slow(2)),

  note("[c#1,c#2]")
    .s("supersaw")
    .lpf("<180 160 140 125 110 100 90 80>")
    .lpq(4.5)
    .distort(0.40)
    .attack(0.55)
    .sustain(0.95)
    .release(1.4)
    .room(0.98)
    .gain("<0.50 0.44 0.38 0.31 0.24 0.17 0.10 0.04>"),

  note("c#1").s("sine").gain("<0.42 0.36 0.29 0.22 0.16 0.11 0.06 0.02>"),

  note("<[c#5 ~ ~ ~ ~ ~ ~ ~] ~ [g#5 ~ ~ ~ ~ ~ ~ ~] ~ [c#6 ~ ~ ~ ~ ~ ~ ~] ~ ~ ~>")
    .s("sine")
    .fm(3.8)
    .fmh(3)
    .hpf(950)
    .decay(0.55)
    .sustain(0.01)
    .room(0.98)
    .delay(0.68)
    .delaytime(0.336)
    .gain(0.15)
);

// ============================================================================
// FULL 118-BAR ARRANGEMENT (~3:31 @ 134 BPM)
// ============================================================================
arrange(
  // Act I: Dial-Up Handshake & Deck Launch (20 bars)
  [4, dialUp1],
  [4, dialUp2],
  [8, deckLaunch],
  [4, icebreakerRiser],
  // Act II: Orbital Icebreaker Run (33 bars)
  [1, iceDrop],
  [8, orbitalRun1],
  [8, orbitalRun2],
  [16, zurichVault],
  // Act III: Chrome Void & Icebreaker Shred (25 bars)
  [8, chromeVoid],
  [4, shred1],
  [4, shred2],
  [4, shredClimax],
  [4, finalBuild],
  [1, iceDrop],
  // Act IV: Burning Chrome Double-Climax & Disconnect Outro (40 bars)
  [8, burnClimax1],
  [8, burnClimax2],
  [8, outroStepDown],
  [8, outroDialDown],
  [8, outroFade]
)
