// ============================================================================
// "NEVER DEAL WITH A DRAGON" — Shadowrun (1990/1995 Cyberpunk)
// Full ~3:45 Story Arc (122 bars @ 130 BPM, F# minor / F# Phrygian)
// ============================================================================
// Act I   (0:00–0:44): Seattle Rain (8) -> Alley Meet (8) -> Jack In (8)
// Act II  (0:44–1:45): Tripwire (4) -> Drop (1) -> Sprawl Chase (8)
//                      -> Corp-Sec Assault (8) -> Arcology Corridor (12)
// Act III (1:45–2:32): Astral Void / Dragon's Shadow (8) -> Black ICE Shred (12)
//                      -> Final Build (4) -> Ultimate Bass Drop + Pitch Bend (1)
// Act IV  (2:32–3:45): Rooftop Escape Double-Climax (16) -> Fade Into Rain (24)
// ============================================================================
setcps(130 / 60 / 4);

// --- ACT I: SEATTLE RAIN & THE ALLEY MEET -----------------------------------

// Scene 1a (4 bars): Waiting in the rain-soaked Seattle alley, 2:14 AM
const seattleRain1 = stack(
  // Cold Seattle rain shimmer
  s("hh*16").hpf(6500).lpf(11000).gain(sine.range(0.05, 0.14).slow(4)).pan(sine.range(0.1, 0.9).slow(3)),

  // Lone icy sustained F#1 cyber-Reese drone
  note("<[f#1,f#2] [f#1,f#2] [d1,d2] [c#1,c#2]>")
    .s("supersaw")
    .lpf("<160 220 280 350>")
    .lpq(5)
    .distort(0.48)
    .attack(0.55)
    .sustain(0.95)
    .room(0.9)
    .gain(0.58),

  note("<f#1 f#1 d1 c#1>").s("sine").gain(0.45),

  // Sparse astral/neon puddle chimes
  note("<[f#5 ~ ~ ~ c#6 ~ ~ ~] [~ ~ a5 ~ ~ ~ ~ ~] [d5 ~ ~ ~ a5 ~ ~ ~] [~ ~ g#5 ~ ~ ~ ~ ~]>")
    .s("sine")
    .fm(3.2)
    .fmh(3)
    .hpf(900)
    .decay(0.45)
    .sustain(0.02)
    .pan(sine.range(0.2, 0.8))
    .room(0.95)
    .delay(0.6)
    .delaytime(0.346)
    .gain(0.18)
);

// Scene 1b (4 bars): Footsteps approach — heartbeat kick & metallic drip
const seattleRain2 = stack(
  seattleRain1,
  s("bd ~ ~ ~").lpf(900).distort(0.3).room(0.75).gain(0.78),
  s("<~ [~ ~ metal:1 ~] ~ [~ ~ metal:4 ~]>")
    .hpf(1100).lpf(4000).room(0.9).delay(0.5).delaytime(0.346).gain(0.28)
);

// Scene 2 (8 bars): The Alley Meet — tense half-time breakbeat & muted 303
const alleyMeet = stack(
  s("bd ~ ~ ~ ~ bd ~ ~").lpf(1200).distort(0.38).room(0.5).gain(0.9),
  s("~ ~ sd:2 ~ ~ ~ ~ [~ cp]").lpf(3200).distort(0.25).room(0.75).gain(0.76),
  s("hh*8").hpf(5200).gain("<0.12 0.26 0.14 0.32>*2").pan(sine.range(0.25, 0.75)),

  // Cold 303 acid bassline creeping up from the shadows (true TB-303 lpenv squelch)
  note("<[f#1 f#1 f#2 f#1 g1 f#1 e1 f#1] [d1 d1 d2 d1 e1 d1 c#1 d1] [e1 e1 e2 e1 f#1 e1 d1 e1] [c#1 c#1 c#2 c#1 d1 c#1 g1 c#1]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(180, 520).slow(8))
    .lpenv(3.5)
    .lpdecay(0.13)
    .lpq(15)
    .decay(0.12)
    .sustain(0.03)
    .distort(0.55)
    .gain(0.48),

  note("<[f#1,f#2] [d1,d2] [e1,e2] [c#1,c#2]>")
    .s("supersaw")
    .lpf(sine.range(200, 480).slow(8))
    .lpq(5.5)
    .distort(0.52)
    .attack(0.4)
    .sustain(0.92)
    .room(0.8)
    .gain(0.58),

  note("<f#1 d1 e1 c#1>").s("sine").gain(0.48),

  // Paranoid dark synth-brass stabs
  note("<[f#3,c#4] [d3,a3] [e3,b3] [c#3,g3]>")
    .s("supersaw")
    .struct("x ~ ~ ~ ~ ~ ~ ~")
    .lpf(1300)
    .lpq(4.5)
    .distort(0.52)
    .attack(0.05)
    .decay(0.45)
    .sustain(0.2)
    .room(0.88)
    .delay(0.45)
    .delaytime(0.346)
    .gain(0.25)
);

// Scene 3 (8 bars): Jacking into the Matrix — VR data chimes accelerate
const jackIn = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1450).distort(0.42).gain(0.95),
  s("~ ~ sd:2 ~ ~ ~ sd:2 [~ sd:1]").lpf(4000).distort(0.32).room(0.68).gain(0.84),
  s("hh*16").hpf(5200).gain("<0.12 0.34 0.18 0.46>*4").pan(sine.range(0.2, 0.8)),

  // Liquid TB-303 acid bass opening up as Dodger decks in
  note("<[f#1 f#1 f#2 f#1 g1 f#2 e1 f#1] [d1 d1 d2 d1 e1 d2 c#1 d1] [e1 e1 e2 e1 f#1 e2 d1 e1] [c#1 c#1 c#2 c#1 d1 c#2 g1 c#1]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(240, 820).slow(8))
    .lpenv(4.8)
    .lpdecay(0.14)
    .lpq(16)
    .decay(0.12)
    .sustain(0.03)
    .distort(0.6)
    .gain(0.52),

  // Bubbling high-register 303 acid counter-squelch
  note("<[f#3 ~ g3 f#3 ~ a3 ~ c#4] [d3 ~ e3 d3 ~ f#3 ~ a3] [e3 ~ f#3 e3 ~ g#3 ~ b3] [c#3 ~ g3 f3 ~ c#4 ~ g3]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(380, 1400).slow(4))
    .lpenv(4.2)
    .lpdecay(0.11)
    .lpq(17)
    .decay(0.1)
    .sustain(0.02)
    .distort(0.5)
    .delay(0.35)
    .delaytime(0.23)
    .pan(sine.range(0.25, 0.75))
    .gain(0.24),

  note("<[f#1,f#2] [d1,d2] [e1,e2] [c#1,c#2]>")
    .s("supersaw")
    .lpf(sine.range(240, 620).slow(8))
    .lpq(5.5)
    .distort(0.55)
    .attack(0.35)
    .sustain(0.92)
    .room(0.75)
    .gain(0.58),

  note("<f#1 d1 e1 c#1>").s("sine").gain(0.5),

  // Glassy 1995 Matrix VR FM data pulses
  note("<[f#5 ~ a5 ~ c#6 ~ g5 ~] [d5 ~ f#5 ~ a5 ~ e5 ~] [e5 ~ g#5 ~ b5 ~ f#5 ~] [c#5 ~ f5 ~ g#5 ~ g5 ~]>")
    .s("sine")
    .fm(3.5)
    .fmh(3)
    .hpf(800)
    .decay(0.18)
    .sustain(0.02)
    .pan(sine.range(0.15, 0.85).fast(2))
    .room(0.8)
    .delay(0.5)
    .delaytime(0.346)
    .gain(0.22),

  note("<[f#3,c#4] [d3,a3] [e3,b3] [c#3,g3]>")
    .s("supersaw")
    .struct("x ~ ~ [~ x] ~ ~ ~ ~")
    .lpf(1650)
    .lpq(5)
    .distort(0.58)
    .attack(0.04)
    .decay(0.4)
    .sustain(0.25)
    .room(0.85)
    .delay(0.4)
    .delaytime(0.346)
    .gain(0.27)
);

// --- ACT II: RENRAKU ARCOLOGY RUN -------------------------------------------

// Scene 4a (4 bars): Tripwire Alert — escalating snare & 303 riser
const tripwire = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1500).distort(0.45).gain(0.95),
  s("<[~ ~ sd:2 ~] [~ sd:2 ~ sd:2] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [sd:2*4 [mt lt]]]>")
    .distort(0.4).room(0.78).gain(0.85),
  s("hh*16").hpf(5000).gain("<0.15 0.25 0.35 0.5>"),

  note("<f#1 d1 e1 c#1>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<550 950 1500 2400>")
    .lpq(12)
    .decay(0.1)
    .sustain(0.04)
    .distort(0.6)
    .gain(0.54),

  note("<[f#1,f#2] [d1,d2] [e1,e2] [c#1,c#2]>")
    .s("supersaw")
    .lpf("<350 550 820 1200>")
    .lpq(6)
    .distort(0.62)
    .attack(0.2)
    .sustain(0.95)
    .room(0.75)
    .gain(0.62),

  note("<f#1 d1 e1 c#1>").s("sine").gain(0.5)
);

// Signature 1-bar Cyberpunk Bass Drop + F#1 -> F#2 Octave Pitch Bend!
const bassDrop = stack(
  s("bd ~ ~ ~").distort(0.65).lpf(1000).room(0.6).gain(1.0),
  s("cp ~ ~ ~").lpf(2800).distort(0.35).room(0.95).gain(0.7),

  // 2-octave plunging sub-bass drop
  note("f#2")
    .s("sine")
    .penv(-24)
    .pdecay(1.3)
    .decay(1.7)
    .sustain(0.2)
    .distort(0.35)
    .gain(0.95),

  // Monstrous overdriven F#1 Reese roar
  note("[f#1,f#2]")
    .s("supersaw")
    .lpf(sine.range(180, 980).slow(1))
    .lpq(7)
    .distort(0.78)
    .attack(0.01)
    .decay(1.5)
    .sustain(0.35)
    .room(0.9)
    .gain(0.78),

  // Cold F# minor impact chord ring-out
  note("[f#3,a3,c#4,f#4]")
    .s("supersaw")
    .lpf(1500)
    .distort(0.5)
    .attack(0.02)
    .decay(1.4)
    .sustain(0.15)
    .room(0.95)
    .gain(0.3),

  // Rising octave pitch bend on beats 3-4 (F#1 -> F#2 right into the chase!)
  note("~ ~ f#2 ~")
    .s("supersaw")
    .penv(-12)
    .pdecay(0.88)
    .lpf(sine.range(250, 2800).fast(1))
    .lpq(7.5)
    .distort(0.7)
    .attack(0.25)
    .decay(0.7)
    .sustain(0.3)
    .room(0.8)
    .gain(0.64)
);

// Scene 5a (8 bars): Street Chase — Full 1995 Cyberpunk Breakbeat + 303 + VR Chimes
const sprawlChase = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1550).distort(0.48).gain(0.98),
  s("~ ~ sd:2 ~ ~ ~ sd:2 [~ sd:1]").lpf(4200).distort(0.38).room(0.68).gain(0.88),
  s("hh*16").hpf(5200).gain("<0.14 0.36 0.2 0.48>*4").pan(sine.range(0.2, 0.8)),
  s("~ metal:1 ~ [~ metal:4] ~ ~ metal:2 ~")
    .hpf(1100).lpf(4800).distort(0.42).room(0.55).delay(0.3).delaytime(0.23).gain(0.30),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.35).room(0.75).gain(0.78),

  // Screaming TB-303 acid chase bassline
  note("<[f#1 f#1 f#2 f#1 g1 f#2 e1 f#1] [d1 d1 d2 d1 e1 d2 c#1 d1] [e1 e1 e2 e1 f#1 e2 d1 e1] [c#1 c#1 c#2 c#1 d1 c#2 g1 c#1]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(260, 1100).slow(4))
    .lpenv(5.2)
    .lpdecay(0.14)
    .lpq(17)
    .decay(0.12)
    .sustain(0.03)
    .distort(0.64)
    .gain(0.54),

  // Liquid TB-303 acid lead squelch weaving through the chase
  note("<[f#3 f#4 ~ g3 f#3 a3 ~ c#4] [d3 d4 ~ e3 d3 f#3 ~ a3] [e3 e4 ~ f#3 e3 g#3 ~ b3] [c#3 c#4 ~ g3 f3 c#4 ~ g3]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(360, 1800).slow(4))
    .lpenv(4.8)
    .lpdecay(0.11)
    .lpq(18)
    .decay(0.1)
    .sustain(0.02)
    .distort(0.58)
    .delay(0.38)
    .delaytime(0.23)
    .room(0.55)
    .gain(0.26),

  note("<[f#1,f#2] [d1,d2] [e1,e2] [c#1,c#2]>")
    .s("supersaw")
    .lpf(sine.range(240, 740).slow(8))
    .lpq(6)
    .distort(0.58)
    .attack(0.35)
    .sustain(0.92)
    .room(0.75)
    .gain(0.62),

  note("<f#1 d1 e1 c#1>").s("sine").gain(0.5),

  note("<[f#5 ~ a5 ~ c#6 ~ g5 ~] [d5 ~ f#5 ~ a5 ~ e5 ~] [e5 ~ g#5 ~ b5 ~ f#5 ~] [c#5 ~ f5 ~ g#5 ~ g5 ~]>")
    .s("sine")
    .fm(3.5)
    .fmh(3)
    .hpf(800)
    .decay(0.18)
    .sustain(0.02)
    .pan(sine.range(0.15, 0.85).fast(2))
    .room(0.8)
    .delay(0.5)
    .delaytime(0.346)
    .gain(0.22),

  note("<[f#3,c#4] [d3,a3] [e3,b3] [c#3,g3]>")
    .s("supersaw")
    .struct("x ~ ~ [~ x] ~ ~ ~ ~")
    .lpf(1850)
    .lpq(5.5)
    .distort(0.62)
    .attack(0.03)
    .decay(0.38)
    .sustain(0.25)
    .room(0.85)
    .delay(0.4)
    .delaytime(0.346)
    .gain(0.28)
);

// Scene 5b (8 bars): Corp-Sec Assault — KMFDM chugging power chords slam in!
const corpSecAssault = stack(
  sprawlChase,
  note("<[f#3,c#4] [d3,a3] [e3,b3] [c#3,g#3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(400)
    .lpf(2300)
    .lpq(4.5)
    .distort(0.75)
    .decay(0.16)
    .sustain(0.08)
    .room(0.62)
    .gain(0.27)
);

// Scene 6 (12 bars): Arcology Corridor — Front Line Assembly 4-on-the-floor industrial stomp
const arcologyCorridor = stack(
  s("bd*4").lpf(1500).distort(0.52).gain(0.98),
  s("~ [sd:2,cp] ~ [sd:2,cp]").lpf(3800).distort(0.4).room(0.72).gain(0.86),
  s("hh*8").hpf(4600).gain("<0.18 0.4 0.22 0.46>*2"),
  s("[~ metal:2] ~ [~ metal:4] [~ metal:0]")
    .hpf(950).lpf(4200).distort(0.48).room(0.65).delay(0.3).delaytime(0.23).gain(0.34),

  // Menacing F# Phrygian 303 acid stomp (F# -> G half-step dread)
  note("<[f#1 f#2 g1 f#1]*2 [f#1 f#2 e1 f#1]*2 [d1 d2 e1 d1]*2 [c#1 c#2 g1 c#1]*2>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(240, 1050).slow(6))
    .lpenv(5.0)
    .lpdecay(0.13)
    .lpq(17)
    .decay(0.11)
    .sustain(0.03)
    .distort(0.68)
    .gain(0.56),

  note("<[f#1,f#2] [f#1,f#2] [d1,d2] [c#1,c#2]>")
    .s("supersaw")
    .lpf(sine.range(220, 680).slow(6))
    .lpq(6)
    .distort(0.64)
    .attack(0.35)
    .sustain(0.92)
    .room(0.75)
    .gain(0.62),

  note("<f#1 f#1 d1 c#1>").s("sine").gain(0.52),

  // Snarling paranoid Phrygian lead riff
  note("<[f#4 ~ g4 ~ f#4 ~ e4 ~] [f#4 ~ ~ ~ c#4 ~ ~ ~] [d4 ~ e4 ~ f#4 ~ g4 ~] [f4 ~ ~ ~ c#4 ~ g4 ~]>")
    .s("supersaw")
    .fm(1.6)
    .fmh(2)
    .lpf(2200)
    .lpq(6.5)
    .distort(0.72)
    .attack(0.02)
    .decay(0.28)
    .sustain(0.32)
    .vib(5)
    .vibmod(0.22)
    .room(0.78)
    .delay(0.42)
    .delaytime(0.346)
    .gain(0.28)
);

// --- ACT III: THE ASTRAL PLANE & THE DRAGON'S SHADOW ------------------------

// Scene 7 (8 bars): Lofwyr's Shadow / Astral Void (Bm -> A -> G -> C#)
// Tectonic sustained Reese bass + haunting Orbital/astral FM chimes
const astralVoid = stack(
  s("bd ~ ~ ~").lpf(850).distort(0.32).room(0.82).gain(0.76),
  s("~ ~ cp ~").lpf(2000).room(0.95).delay(0.55).delaytime(0.346).gain(0.38),

  // Tectonic, dragon-sized sustained Moog/Reese bass (Bm -> A -> G -> C#)
  note("<[b0,b1] [a0,a1] [g0,g1] [c#1,c#2]>")
    .s("supersaw")
    .lpf(sine.range(200, 760).slow(8))
    .lpq(6)
    .distort(0.64)
    .attack(0.45)
    .sustain(0.96)
    .release(0.8)
    .room(0.85)
    .gain(0.72),

  note("<b0 a0 g0 c#1>").s("sine").gain(0.55),

  // Ancient mystical astral pad
  note("<[b2,d3,f#3] [a2,c#3,e3] [g2,b2,d3] [c#3,f3,g#3]>")
    .s("supersaw")
    .lpf(sine.range(420, 1450).slow(8))
    .lpq(4)
    .distort(0.44)
    .vib(2)
    .vibmod(0.1)
    .attack(0.45)
    .sustain(0.88)
    .release(0.7)
    .room(0.95)
    .gain(0.28),

  // Shimmering Orbital-style interlocking astral FM bells
  note("<[b4 d5 f#5 b5 f#5 d5 b4 f#5] [a4 c#5 e5 a5 e5 c#5 a4 e5] [g4 b4 d5 g5 d5 b4 g4 d5] [c#5 f5 g#5 c#6 g#5 f5 c#5 g#5]>")
    .s("sine")
    .fm(3.0)
    .fmh(2)
    .hpf(700)
    .decay(0.25)
    .sustain(0.03)
    .pan(sine.range(0.15, 0.85).fast(2))
    .room(0.9)
    .delay(0.55)
    .delaytime(0.346)
    .gain(0.22),

  // Distant cavernous 303 acid whisper bubbling inside the Astral Plane
  note("<[b2 ~ d3 b2 ~ f#3 ~ d3] [a2 ~ c#3 a2 ~ e3 ~ c#3] [g2 ~ b2 g2 ~ d3 ~ b2] [c#3 ~ f3 c#3 ~ g#3 ~ f3]>")
    .fast(2)
    .s("sawtooth")
    .lpf(sine.range(260, 950).slow(8))
    .lpenv(3.8)
    .lpdecay(0.12)
    .lpq(16)
    .decay(0.1)
    .sustain(0.02)
    .distort(0.45)
    .room(0.92)
    .delay(0.6)
    .delaytime(0.346)
    .gain(0.18)
);

// Backing bed for the 12-bar Black ICE Ferocious Cyber-Shred Solo
const iceSoloBacking = stack(
  s("bd ~ [~ bd] ~ ~ bd ~ ~").lpf(1600).distort(0.5).gain(0.98),
  s("~ ~ [sd:2,cp] ~ ~ ~ [sd:2,cp] [~ sd:1]").lpf(4200).distort(0.4).room(0.78).gain(0.88),
  s("hh*16").hpf(5000).gain("<0.15 0.38 0.2 0.5>*4"),
  s("<~ ~ ~ [~ ~ [mt mt] [lt lt lt lt]]>").distort(0.35).room(0.75).gain(0.82),

  note("<f#1 d1 e1 c#1>")
    .struct("x*16")
    .s("sawtooth")
    .lpf(1650)
    .lpq(9)
    .decay(0.1)
    .sustain(0.04)
    .distort(0.6)
    .gain(0.52),

  note("<[f#1,f#2] [d1,d2] [e1,e2] [c#1,c#2]>")
    .s("supersaw")
    .lpf(sine.range(280, 860).slow(4))
    .lpq(6)
    .distort(0.66)
    .attack(0.25)
    .sustain(0.95)
    .room(0.75)
    .gain(0.65),

  note("<f#1 d1 e1 c#1>").s("sine").gain(0.52),

  note("<[f#3,c#4] [d3,a3] [e3,b3] [c#3,g#3]>")
    .struct("x x ~ x x ~ x x")
    .s("supersaw")
    .hpf(400)
    .lpf(2200)
    .distort(0.76)
    .decay(0.15)
    .sustain(0.08)
    .room(0.62)
    .gain(0.26)
);

// Scene 8a (4 bars): Black ICE Shred Part 1 — snarling F# harmonic minor riffs
const iceShred1 = stack(
  iceSoloBacking,
  note("<[f#4 a4 g#4 f#4 f4 f#4 a4 c#5] [d5 c#5 b4 a4 f#4 a4 b4 d5] [e5 d5 c#5 b4 g#4 b4 c#5 e5] [c#5 b4 a4 g#4 f4 g#4 b4 c#5]>")
    .fast(2)
    .s("supersaw")
    .fm(2.3)
    .fmh(2)
    .penv(-2)
    .pdecay(0.05)
    .lpf(3300)
    .lpq(7.5)
    .distort(0.84)
    .attack(0.008)
    .decay(0.15)
    .sustain(0.2)
    .vib(6)
    .vibmod(0.22)
    .room(0.72)
    .delay(0.35)
    .delaytime(0.23)
    .gain(0.30)
);

// Scene 8b (4 bars): Black ICE Shred Part 2 — blistering upper-register runs
const iceShred2 = stack(
  iceSoloBacking,
  note("<[f#5 ~ a5 g#5 f#5 e5 c#5 f#5] [a5 f#5 d5 f#5 a5 b5 a5 f#5] [b5 g#5 e5 g#5 b5 c#6 b5 g#5] [c#6 b5 a5 g#5 f#5 f5 c#5 f5]>")
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
    .delaytime(0.23)
    .gain(0.31)
);

// Scene 8c (4 bars): Black ICE Shred Climax — full neural overload!
const iceShredClimax = stack(
  iceSoloBacking,
  note("<[f#5 a5 c#6 f#6 c#6 a5 g#5 f#5] [d6 c#6 b5 a5 f#5 a5 d6 c#6] [e6 d6 c#6 b5 g#5 b5 e6 d6] [c#6 b5 a5 g#5 c#6 b5 a5 g#5]>")
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
    .delaytime(0.23)
    .gain(0.30)
);

// Scene 9 (4 bars): Firewall Breached — Final Build into Ultimate Bass Drop
const finalBuild = stack(
  s("<[bd ~ bd ~] [bd*4] [bd*4] [bd*4]>").lpf(1500).distort(0.42).gain(0.95),
  s("<[~ ~ sd:2 ~] [~ sd:2 ~ sd:2] [~ [sd:2,cp] ~ [sd:2,cp]] [sd:2*4 [sd:2*4 [mt lt]]]>")
    .distort(0.4).room(0.82).gain(0.86),
  s("hh*16").hpf(5000).gain("<0.15 0.28 0.4 0.52>"),

  note("<b0 a0 g0 c#1>")
    .struct("x*16")
    .s("sawtooth")
    .lpf("<450 850 1500 2600>")
    .lpq(12)
    .decay(0.1)
    .sustain(0.04)
    .distort(0.6)
    .gain(0.56),

  note("<[b0,b1] [a0,a1] [g0,g1] [c#1,c#2]>")
    .s("supersaw")
    .lpf("<350 600 900 1350>")
    .lpq(6.5)
    .distort(0.68)
    .attack(0.2)
    .sustain(0.95)
    .room(0.78)
    .gain(0.66),

  note("<b0 a0 g0 c#1>").s("sine").gain(0.52),

  note("<[b4 ~ d5 ~ f#5 ~ d5 ~] [a4 ~ c#5 ~ e5 ~ c#5 ~] [g4 ~ b4 ~ d5 ~ b4 ~] [c#5 ~ f5 ~ g#5 ~ c#6 ~]>")
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
    .delaytime(0.346)
    .gain(0.28)
);

// --- ACT IV: ROOFTOP ESCAPE & FADE INTO THE SEATTLE RAIN --------------------

// Scene 10a (8 bars): Rooftop Escape Climax — Breakbeat + KMFDM chords + Anthem Lead
const rooftopClimax = stack(
  corpSecAssault,
  note("<[f#5 ~ a5 ~ c#6 ~ b5 a5] [a5 ~ f#5 ~ d5 ~ f#5 a5] [b5 ~ g#5 ~ e5 ~ g#5 b5] [c#6 ~ ~ b5 a5 ~ g#5 f5]>")
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
    .delaytime(0.346)
    .gain(0.30)
);

// Scene 10b (8 bars): Maximum Overdrive — High-octave astral harmony + crashing metal
const rooftopOverdrive = stack(
  rooftopClimax,
  note("<[c#6 ~ f#6 ~ a6 ~ g#6 f#6] [f#6 ~ d6 ~ a5 ~ d6 f#6] [g#6 ~ e6 ~ b5 ~ e6 g#6] [g#6 ~ ~ f#6 f6 ~ c#6 g#5]>")
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
    .delaytime(0.346)
    .gain(0.17),
  s("<[metal:2 ~ ~ ~] ~>").hpf(1200).room(0.9).gain(0.34)
);

// Scene 11a (8 bars): Cooling Down — Breakbeat steps down to half-time, power chords fade
const escapeStepDown = stack(
  s("bd ~ ~ ~ ~ bd ~ ~").lpf(1100).distort(0.35).room(0.65).gain(0.85),
  s("~ ~ [sd:2,cp] ~ ~ ~ ~ ~").lpf(2800).room(0.9).gain(0.68),
  s("hh*8").hpf(5500).gain("<0.1 0.22 0.12 0.26>*2").pan(sine.range(0.2, 0.8)),

  note("<[f#1 f#1 f#2 f#1 g1 f#1 e1 f#1] [d1 d1 d2 d1 e1 d1 c#1 d1] [e1 e1 e2 e1 f#1 e1 d1 e1] [c#1 c#1 c#2 c#1 d1 c#1 g1 c#1]>")
    .fast(2)
    .s("sawtooth")
    .lpf("<1100 900 720 560 440 360 300 240>")
    .lpq(9)
    .decay(0.11)
    .sustain(0.04)
    .distort(0.45)
    .gain(0.42),

  note("<[f#1,f#2] [d1,d2] [e1,e2] [c#1,c#2]>")
    .s("supersaw")
    .lpf("<620 540 460 380 320 280 240 200>")
    .lpq(5.5)
    .distort(0.55)
    .attack(0.4)
    .sustain(0.92)
    .room(0.85)
    .gain(0.60),

  note("<f#1 d1 e1 c#1>").s("sine").gain(0.48)
);

// Scene 11b (8 bars): Back in the Seattle Rain — Drums vanish, dripping chimes return
const rainReturn = stack(
  s("hh*16").hpf(6500).lpf(11000).gain(sine.range(0.06, 0.15).slow(4)).pan(sine.range(0.1, 0.9).slow(3)),
  s("<[bd ~ ~ ~] ~ [bd ~ ~ ~] ~>").lpf(850).room(0.88).gain(0.62),

  note("<[f#1,f#2] [d1,d2] [e1,e2] [c#1,c#2]>")
    .s("supersaw")
    .lpf("<340 300 260 220 200 180 160 140>")
    .lpq(5)
    .distort(0.48)
    .attack(0.5)
    .sustain(0.95)
    .release(1.0)
    .room(0.92)
    .gain(0.56),

  note("<f#1 d1 e1 c#1>").s("sine").gain(0.45),

  note("<[f#5 ~ ~ ~ c#6 ~ ~ ~] [~ ~ a5 ~ ~ ~ ~ ~] [e5 ~ ~ ~ b5 ~ ~ ~] [~ ~ g#5 ~ ~ ~ ~ ~]>")
    .s("sine")
    .fm(3.2)
    .fmh(3)
    .hpf(900)
    .decay(0.45)
    .sustain(0.02)
    .pan(sine.range(0.2, 0.8))
    .room(0.95)
    .delay(0.65)
    .delaytime(0.346)
    .gain(0.20)
);

// Scene 11c (8 bars): Fade into the Rain — lone F#1 drone & neon rain dissolve
const fadeToRain = stack(
  s("hh*16").hpf(6800).lpf(11500).gain("<0.13 0.12 0.11 0.10 0.09 0.08 0.06 0.04>").pan(sine.range(0.1, 0.9).slow(3)),

  note("[f#1,f#2]")
    .s("supersaw")
    .lpf("<180 160 140 125 110 100 90 80>")
    .lpq(4)
    .distort(0.4)
    .attack(0.55)
    .sustain(0.95)
    .release(1.4)
    .room(0.98)
    .gain("<0.50 0.44 0.38 0.32 0.25 0.18 0.11 0.05>"),

  note("f#1").s("sine").gain("<0.40 0.35 0.28 0.22 0.16 0.11 0.06 0.02>"),

  note("<[f#5 ~ ~ ~ ~ ~ ~ ~] ~ [c#6 ~ ~ ~ ~ ~ ~ ~] ~ [a5 ~ ~ ~ ~ ~ ~ ~] ~ ~ ~>")
    .s("sine")
    .fm(3.0)
    .fmh(3)
    .hpf(900)
    .decay(0.6)
    .sustain(0.01)
    .room(0.98)
    .delay(0.7)
    .delaytime(0.346)
    .gain(0.16)
);

// ============================================================================
// FULL 122-BAR ARRANGEMENT (~3:45 @ 130 BPM)
// ============================================================================
arrange(
  // Act I: Seattle Rain & The Alley Meet (24 bars)
  [4, seattleRain1],
  [4, seattleRain2],
  [8, alleyMeet],
  [8, jackIn],
  // Act II: Renraku Arcology Run (33 bars)
  [4, tripwire],
  [1, bassDrop],
  [8, sprawlChase],
  [8, corpSecAssault],
  [12, arcologyCorridor],
  // Act III: The Astral Plane & The Dragon's Shadow (25 bars)
  [8, astralVoid],
  [4, iceShred1],
  [4, iceShred2],
  [4, iceShredClimax],
  [4, finalBuild],
  [1, bassDrop],
  // Act IV: Rooftop Escape & Fade Into the Seattle Rain (40 bars)
  [8, rooftopClimax],
  [8, rooftopOverdrive],
  [8, escapeStepDown],
  [8, rainReturn],
  [8, fadeToRain]
)
