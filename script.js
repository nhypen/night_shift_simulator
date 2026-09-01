const canvas =
  document.getElementById(
    "gameCanvas"
  );

const ctx =
  canvas.getContext(
    "2d"
  );

ctx.imageSmoothingEnabled =
  false;


// ==================================================
// UI
// ==================================================

const ui = {

  day:
    document.getElementById(
      "dayLabel"
    ),

  clock:
    document.getElementById(
      "clockLabel"
    ),

  money:
    document.getElementById(
      "moneyLabel"
    ),

  mistakes:
    document.getElementById(
      "mistakesLabel"
    ),

  streak:
    document.getElementById(
      "streakLabel"
    ),

  status:
    document.getElementById(
      "statusText"
    ),

  customerNumber:
    document.getElementById(
      "customerNumber"
    ),

  customerTotal:
    document.getElementById(
      "customerTotal"
    ),

  orderText:
    document.getElementById(
      "orderText"
    ),

  timerText:
    document.getElementById(
      "timerText"
    ),

  timerFill:
    document.getElementById(
      "timerFill"
    ),

  shiftFill:
    document.getElementById(
      "shiftFill"
    ),

  productGrid:
    document.getElementById(
      "productGrid"
    ),

  basket:
    document.getElementById(
      "basket"
    ),

  clearBtn:
    document.getElementById(
      "clearBtn"
    ),

  serveBtn:
    document.getElementById(
      "serveBtn"
    ),

  musicBtn:
    document.getElementById(
      "musicBtn"
    ),

  sfxBtn:
    document.getElementById(
      "sfxBtn"
    ),

  startOverlay:
    document.getElementById(
      "startOverlay"
    ),

  dayOverlay:
    document.getElementById(
      "dayOverlay"
    ),

  gameOverOverlay:
    document.getElementById(
      "gameOverOverlay"
    ),

  startBtn:
    document.getElementById(
      "startBtn"
    ),

  nextDayBtn:
    document.getElementById(
      "nextDayBtn"
    ),

  restartBtn:
    document.getElementById(
      "restartBtn"
    ),

  daySummary:
    document.getElementById(
      "daySummary"
    ),

  gameOverSummary:
    document.getElementById(
      "gameOverSummary"
    ),

  toast:
    document.getElementById(
      "toast"
    )

};


// ==================================================
// 24 PRODUKTY
// ==================================================

const PRODUCTS = [

  {
    id: "water",
    name: "Woda",
    price: 4,
    kind: "bottle",
    colors: [
      "#5cd8ff",
      "#e7fbff",
      "#2d6d9c"
    ]
  },

  {
    id: "sparkling",
    name: "Gazowana",
    price: 5,
    kind: "bottle",
    colors: [
      "#7fe3ff",
      "#dffaff",
      "#237c91"
    ]
  },

  {
    id: "cola",
    name: "Cola",
    price: 7,
    kind: "can",
    colors: [
      "#e53d4f",
      "#ffffff",
      "#7b1625"
    ]
  },

  {
    id: "orange",
    name: "Oranżada",
    price: 6,
    kind: "can",
    colors: [
      "#ff9b3f",
      "#fff2a6",
      "#b34f1d"
    ]
  },

  {
    id: "energy",
    name: "Energetyk",
    price: 9,
    kind: "can",
    colors: [
      "#20262f",
      "#9cff57",
      "#0a0d11"
    ]
  },

  {
    id: "coffee",
    name: "Kawa",
    price: 8,
    kind: "cup",
    colors: [
      "#f5f0df",
      "#9a5c36",
      "#3c2318"
    ]
  },

  {
    id: "tea",
    name: "Herbata",
    price: 7,
    kind: "cup",
    colors: [
      "#eadfbf",
      "#d07339",
      "#6d3920"
    ]
  },

  {
    id: "chips",
    name: "Chipsy",
    price: 7,
    kind: "bag",
    colors: [
      "#f0c44f",
      "#da503c",
      "#8c2b26"
    ]
  },

  {
    id: "nachos",
    name: "Nachosy",
    price: 8,
    kind: "bag",
    colors: [
      "#ff9b45",
      "#6a3ad6",
      "#3e237e"
    ]
  },

  {
    id: "nuts",
    name: "Orzeszki",
    price: 7,
    kind: "bag",
    colors: [
      "#c8925a",
      "#f0d39b",
      "#6d4229"
    ]
  },

  {
    id: "chocolate",
    name: "Czekolada",
    price: 6,
    kind: "bar",
    colors: [
      "#6b3a22",
      "#d6b060",
      "#2f1a11"
    ]
  },

  {
    id: "gum",
    name: "Guma",
    price: 4,
    kind: "bar",
    colors: [
      "#ff7fc6",
      "#fff1f8",
      "#8c2d69"
    ]
  },

  {
    id: "protein",
    name: "Baton",
    price: 8,
    kind: "bar",
    colors: [
      "#35465c",
      "#f4c750",
      "#18202b"
    ]
  },

  {
    id: "sandwich",
    name: "Kanapka",
    price: 12,
    kind: "sandwich",
    colors: [
      "#e7c581",
      "#7ac06d",
      "#c45342"
    ]
  },

  {
    id: "hotdog",
    name: "Hot-dog",
    price: 13,
    kind: "hotdog",
    colors: [
      "#e2af6d",
      "#c84c42",
      "#f0cf55"
    ]
  },

  {
    id: "donut",
    name: "Donut",
    price: 6,
    kind: "donut",
    colors: [
      "#d99a61",
      "#ff83ae",
      "#873e59"
    ]
  },

  {
    id: "muffin",
    name: "Muffin",
    price: 7,
    kind: "muffin",
    colors: [
      "#b9754e",
      "#6e3f2c",
      "#f4d5a2"
    ]
  },

  {
    id: "milk",
    name: "Mleko",
    price: 5,
    kind: "carton",
    colors: [
      "#f4f8ff",
      "#6bb7ff",
      "#2f5e8d"
    ]
  },

  {
    id: "juice",
    name: "Sok",
    price: 6,
    kind: "carton",
    colors: [
      "#ff9b3f",
      "#ffef72",
      "#b84328"
    ]
  },

  {
    id: "yogurt",
    name: "Jogurt",
    price: 6,
    kind: "cup2",
    colors: [
      "#f9f5ff",
      "#c981ff",
      "#6f3b91"
    ]
  },

  {
    id: "noodles",
    name: "Ramen",
    price: 10,
    kind: "bowl",
    colors: [
      "#e65343",
      "#f6d17b",
      "#8f291f"
    ]
  },

  {
    id: "soup",
    name: "Zupka",
    price: 9,
    kind: "bowl",
    colors: [
      "#4d9d65",
      "#f6d17b",
      "#245534"
    ]
  },

  {
    id: "cookies",
    name: "Ciastka",
    price: 7,
    kind: "box",
    colors: [
      "#cf8051",
      "#f4d49b",
      "#6f3d28"
    ]
  },

  {
    id: "cereal",
    name: "Płatki",
    price: 11,
    kind: "box",
    colors: [
      "#6bb6ff",
      "#fff3a1",
      "#2f6394"
    ]
  }

];


// ==================================================
// KLIENCI
// ==================================================

const CUSTOMER_PALETTES = [

  [
    "#f0c7a6",
    "#4b2f22",
    "#4f74c8",
    "#24345b"
  ],

  [
    "#c68d68",
    "#15151a",
    "#b94f63",
    "#642938"
  ],

  [
    "#f5d2b8",
    "#8a5d3f",
    "#4b9e75",
    "#24583f"
  ],

  [
    "#9f6a4d",
    "#272128",
    "#d88f3e",
    "#76491f"
  ],

  [
    "#e6b592",
    "#d8c8a9",
    "#8268c9",
    "#45366d"
  ],

  [
    "#d9a47d",
    "#372522",
    "#4aa0a8",
    "#24535a"
  ]

];


function freshState() {

  return {

    day: 1,

    money: 0,

    mistakes: 0,

    streak: 0,

    currentCustomer: 0,

    customersPerDay: 7,

    order: [],

    basket: [],

    timeLeft: 0,

    maxTime: 0,

    phase: "idle",

    playing: false,

    correctThisDay: 0

  };

}


let state =
  freshState();


let lastTime =
  0;


let customer =
  null;


let toastTimeout =
  null;


let nextCustomerTimeout =
  null;


// ==================================================
// AUDIO
// ==================================================

let audioCtx =
  null;


let masterGain =
  null;


let musicGain =
  null;


let sfxGain =
  null;


let musicEnabled =
  true;


let sfxEnabled =
  true;


let musicTimer =
  null;


let musicStep =
  0;


// inicjalizacja Web Audio API

function initAudio() {

  if (
    audioCtx
  ) {

    if (
      audioCtx.state ===
      "suspended"
    ) {

      audioCtx.resume();

    }

    return;

  }


  const AudioContext =
    window.AudioContext ||
    window.webkitAudioContext;


  if (
    !AudioContext
  ) {

    return;

  }


  audioCtx =
    new AudioContext();


  masterGain =
    audioCtx.createGain();


  musicGain =
    audioCtx.createGain();


  sfxGain =
    audioCtx.createGain();


  masterGain.gain.value =
    0.72;


  musicGain.gain.value =
    musicEnabled
      ? 0.12
      : 0;


  sfxGain.gain.value =
    sfxEnabled
      ? 0.28
      : 0;


  musicGain.connect(
    masterGain
  );


  sfxGain.connect(
    masterGain
  );


  masterGain.connect(
    audioCtx.destination
  );

}


// pojedynczy dźwięk

function tone({

  freq = 440,

  duration = 0.08,

  type = "square",

  volume = 0.15,

  when = 0,

  destination = "sfx"

}) {

  if (
    !audioCtx
  ) {

    return;

  }


  const gainTarget =
    destination === "music"
      ? musicGain
      : sfxGain;


  if (
    !gainTarget
  ) {

    return;

  }


  const oscillator =
    audioCtx.createOscillator();


  const gain =
    audioCtx.createGain();


  const start =
    audioCtx.currentTime +
    when;


  const end =
    start +
    duration;


  oscillator.type =
    type;


  oscillator.frequency.setValueAtTime(
    freq,
    start
  );


  gain.gain.setValueAtTime(
    0.0001,
    start
  );


  gain.gain.exponentialRampToValueAtTime(
    Math.max(
      0.0001,
      volume
    ),
    start + 0.008
  );


  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    end
  );


  oscillator.connect(
    gain
  );


  gain.connect(
    gainTarget
  );


  oscillator.start(
    start
  );


  oscillator.stop(
    end + 0.02
  );

}


// ==================================================
// SFX
// ==================================================

function playSfx(
  name
) {

  if (
    !sfxEnabled
  ) {

    return;

  }


  initAudio();


  switch (
    name
  ) {


    case "click":

      tone({
        freq: 620,
        duration: 0.035,
        volume: 0.09
      });

      tone({
        freq: 820,
        duration: 0.025,
        volume: 0.06,
        when: 0.025
      });

      break;


    case "remove":

      tone({
        freq: 380,
        duration: 0.06,
        volume: 0.08
      });

      break;


    case "clear":

      tone({
        freq: 280,
        duration: 0.055,
        volume: 0.08
      });

      tone({
        freq: 220,
        duration: 0.06,
        volume: 0.07,
        when: 0.045
      });

      break;


    case "door":

      tone({
        freq: 880,
        duration: 0.08,
        volume: 0.11,
        type: "sine"
      });

      tone({
        freq: 1175,
        duration: 0.12,
        volume: 0.08,
        type: "sine",
        when: 0.08
      });

      break;


    case "success":

      tone({
        freq: 523.25,
        duration: 0.08,
        volume: 0.12
      });

      tone({
        freq: 659.25,
        duration: 0.08,
        volume: 0.12,
        when: 0.07
      });

      tone({
        freq: 783.99,
        duration: 0.13,
        volume: 0.13,
        when: 0.14
      });

      break;


    case "error":

      tone({
        freq: 220,
        duration: 0.11,
        volume: 0.13,
        type: "sawtooth"
      });

      tone({
        freq: 165,
        duration: 0.15,
        volume: 0.12,
        type: "sawtooth",
        when: 0.09
      });

      break;


    case "timeout":

      tone({
        freq: 350,
        duration: 0.08,
        volume: 0.10
      });

      tone({
        freq: 300,
        duration: 0.08,
        volume: 0.10,
        when: 0.10
      });

      tone({
        freq: 250,
        duration: 0.16,
        volume: 0.12,
        when: 0.20
      });

      break;


    case "serve":

      tone({
        freq: 500,
        duration: 0.04,
        volume: 0.08
      });

      break;


    case "day":

      [
        392,
        523.25,
        659.25,
        783.99
      ].forEach(
        (
          frequency,
          index
        ) => {

          tone({

            freq:
              frequency,

            duration:
              0.13,

            volume:
              0.11,

            when:
              index *
              0.09

          });

        }
      );

      break;

  }

}


// ==================================================
// MUZYKA
// ==================================================

const MUSIC_NOTES = [

  220,
  261.63,
  329.63,
  293.66,

  220,
  261.63,
  349.23,
  329.63,

  196,
  246.94,
  293.66,
  261.63,

  174.61,
  220,
  261.63,
  196

];


const BASS_NOTES = [

  110,

  110,

  98,

  98,

  87.31,

  87.31,

  98,

  98

];


function startMusic() {

  initAudio();

  stopMusic();


  if (
    !musicEnabled ||
    !audioCtx
  ) {

    return;

  }


  musicStep =
    0;


  const beatMs =
    360;


  const tick =
    () => {


      if (
        !musicEnabled ||
        !audioCtx
      ) {

        return;

      }


      const note =
        MUSIC_NOTES[
          musicStep %
          MUSIC_NOTES.length
        ];


      const bass =
        BASS_NOTES[
          Math.floor(
            musicStep /
            2
          ) %
          BASS_NOTES.length
        ];


      tone({

        freq:
          note,

        duration:
          0.13,

        type:
          "square",

        volume:
          0.055,

        destination:
          "music"

      });


      if (
        musicStep %
        2 ===
        0
      ) {

        tone({

          freq:
            bass,

          duration:
            0.22,

          type:
            "triangle",

          volume:
            0.05,

          destination:
            "music"

        });

      }


      if (
        musicStep %
        4 ===
        2
      ) {

        tone({

          freq:
            note *
            2,

          duration:
            0.04,

          volume:
            0.025,

          destination:
            "music",

          when:
            0.17

        });

      }


      musicStep++;


      musicTimer =
        setTimeout(
          tick,
          beatMs
        );

    };


  tick();

}


function stopMusic() {

  clearTimeout(
    musicTimer
  );


  musicTimer =
    null;

}


function toggleMusic() {

  initAudio();


  musicEnabled =
    !musicEnabled;


  ui.musicBtn.textContent =
    `♫ MUZYKA: ${musicEnabled ? "ON" : "OFF"}`;


  if (
    musicGain
  ) {

    musicGain.gain.setTargetAtTime(

      musicEnabled
        ? 0.12
        : 0,

      audioCtx.currentTime,

      0.03

    );

  }


  if (
    musicEnabled &&
    state.playing
  ) {

    startMusic();

  }

  else {

    stopMusic();

  }

}


function toggleSfx() {

  initAudio();


  sfxEnabled =
    !sfxEnabled;


  ui.sfxBtn.textContent =
    `SFX: ${sfxEnabled ? "ON" : "OFF"}`;


  if (
    sfxGain
  ) {

    sfxGain.gain.setTargetAtTime(

      sfxEnabled
        ? 0.28
        : 0,

      audioCtx.currentTime,

      0.03

    );

  }


  if (
    sfxEnabled
  ) {

    playSfx(
      "click"
    );

  }

}


// ==================================================
// PIXEL RECTANGLE
// ==================================================

function pxRect(

  targetCtx,

  x,

  y,

  width,

  height,

  color

) {

  targetCtx.fillStyle =
    color;


  targetCtx.fillRect(

    Math.round(
      x
    ),

    Math.round(
      y
    ),

    Math.round(
      width
    ),

    Math.round(
      height
    )

  );

}


// ==================================================
// PIXELOWE PRODUKTY
// ==================================================

function drawProduct(

  targetCtx,

  product,

  x,

  y,

  scale = 4

) {

  const colors =
    product.colors;


  const outline =
    "#161922";


  const rect =
    (
      gx,
      gy,
      gw,
      gh,
      color
    ) => {

      pxRect(

        targetCtx,

        x +
        gx *
        scale,

        y +
        gy *
        scale,

        gw *
        scale,

        gh *
        scale,

        color

      );

    };


  switch (
    product.kind
  ) {


    case "bottle":

      rect(
        6,
        1,
        4,
        2,
        outline
      );

      rect(
        7,
        0,
        2,
        1,
        colors[1]
      );

      rect(
        4,
        3,
        8,
        11,
        outline
      );

      rect(
        5,
        4,
        6,
        9,
        colors[0]
      );

      rect(
        5,
        7,
        6,
        3,
        colors[1]
      );

      rect(
        6,
        8,
        4,
        1,
        colors[2]
      );

      break;


    case "can":

      rect(
        4,
        2,
        8,
        12,
        outline
      );

      rect(
        5,
        3,
        6,
        10,
        colors[0]
      );

      rect(
        5,
        4,
        6,
        1,
        colors[1]
      );

      rect(
        6,
        7,
        4,
        3,
        colors[1]
      );

      rect(
        7,
        8,
        2,
        1,
        colors[2]
      );

      break;


    case "cup":

      rect(
        4,
        4,
        8,
        10,
        outline
      );

      rect(
        5,
        5,
        6,
        8,
        colors[0]
      );

      rect(
        6,
        4,
        4,
        1,
        colors[2]
      );

      rect(
        6,
        6,
        4,
        4,
        colors[1]
      );

      rect(
        12,
        6,
        2,
        5,
        outline
      );

      rect(
        12,
        7,
        1,
        3,
        colors[0]
      );

      break;


    case "cup2":

      rect(
        4,
        5,
        8,
        8,
        outline
      );

      rect(
        5,
        6,
        6,
        6,
        colors[0]
      );

      rect(
        4,
        4,
        8,
        2,
        colors[1]
      );

      rect(
        6,
        8,
        4,
        2,
        colors[1]
      );

      rect(
        7,
        9,
        2,
        1,
        colors[2]
      );

      break;


    case "bag":

      rect(
        3,
        2,
        10,
        12,
        outline
      );

      rect(
        4,
        3,
        8,
        10,
        colors[0]
      );

      rect(
        5,
        4,
        6,
        2,
        colors[1]
      );

      rect(
        5,
        8,
        6,
        3,
        colors[1]
      );

      rect(
        6,
        9,
        4,
        1,
        colors[2]
      );

      break;


    case "bar":

      rect(
        2,
        5,
        12,
        7,
        outline
      );

      rect(
        3,
        6,
        10,
        5,
        colors[0]
      );

      rect(
        4,
        7,
        8,
        1,
        colors[1]
      );

      rect(
        5,
        9,
        2,
        2,
        colors[2]
      );

      rect(
        8,
        9,
        2,
        2,
        colors[2]
      );

      break;


    case "sandwich":

      rect(
        2,
        4,
        12,
        9,
        outline
      );

      rect(
        3,
        5,
        10,
        3,
        colors[0]
      );

      rect(
        4,
        8,
        8,
        2,
        colors[1]
      );

      rect(
        4,
        10,
        8,
        1,
        colors[2]
      );

      rect(
        3,
        11,
        10,
        1,
        colors[0]
      );

      break;


    case "hotdog":

      rect(
        2,
        6,
        12,
        6,
        outline
      );

      rect(
        3,
        7,
        10,
        4,
        colors[0]
      );

      rect(
        4,
        7,
        8,
        2,
        colors[1]
      );

      rect(
        5,
        6,
        6,
        1,
        colors[2]
      );

      rect(
        5,
        10,
        6,
        1,
        colors[2]
      );

      break;


    case "donut":

      rect(
        3,
        4,
        10,
        9,
        outline
      );

      rect(
        4,
        3,
        8,
        11,
        outline
      );

      rect(
        4,
        5,
        8,
        7,
        colors[0]
      );

      rect(
        5,
        4,
        6,
        3,
        colors[1]
      );

      rect(
        7,
        7,
        2,
        3,
        outline
      );

      rect(
        6,
        5,
        1,
        1,
        "#fff0a9"
      );

      rect(
        10,
        6,
        1,
        1,
        "#8cf0ff"
      );

      break;


    case "muffin":

      rect(
        4,
        4,
        8,
        5,
        colors[2]
      );

      rect(
        3,
        6,
        10,
        4,
        colors[1]
      );

      rect(
        5,
        9,
        6,
        5,
        outline
      );

      rect(
        6,
        10,
        4,
        3,
        colors[0]
      );

      break;


    case "carton":

      rect(
        4,
        3,
        8,
        11,
        outline
      );

      rect(
        5,
        4,
        6,
        9,
        colors[0]
      );

      rect(
        5,
        6,
        6,
        3,
        colors[1]
      );

      rect(
        7,
        1,
        4,
        3,
        outline
      );

      rect(
        8,
        2,
        2,
        2,
        colors[2]
      );

      rect(
        6,
        9,
        4,
        2,
        colors[2]
      );

      break;


    case "bowl":

      rect(
        3,
        6,
        10,
        7,
        outline
      );

      rect(
        4,
        7,
        8,
        5,
        colors[0]
      );

      rect(
        5,
        6,
        6,
        2,
        colors[1]
      );

      rect(
        6,
        9,
        4,
        2,
        colors[1]
      );

      rect(
        7,
        4,
        1,
        3,
        "#d8eef8"
      );

      rect(
        10,
        3,
        1,
        4,
        "#d8eef8"
      );

      break;


    case "box":

      rect(
        3,
        3,
        10,
        11,
        outline
      );

      rect(
        4,
        4,
        8,
        9,
        colors[0]
      );

      rect(
        5,
        5,
        6,
        2,
        colors[1]
      );

      rect(
        5,
        9,
        6,
        3,
        colors[1]
      );

      rect(
        6,
        10,
        2,
        1,
        colors[2]
      );

      rect(
        9,
        10,
        1,
        1,
        colors[2]
      );

      break;

  }

}


// ==================================================
// PRODUKTY UI
// ==================================================

function buildProducts() {

  ui.productGrid.innerHTML =
    "";


  PRODUCTS.forEach(
    product => {


      const button =
        document.createElement(
          "button"
        );


      button.className =
        "product-card";


      button.dataset.id =
        product.id;


      const art =
        document.createElement(
          "canvas"
        );


      art.width =
        64;


      art.height =
        64;


      art.className =
        "product-canvas";


      const artContext =
        art.getContext(
          "2d"
        );


      artContext.imageSmoothingEnabled =
        false;


      drawProduct(

        artContext,

        product,

        1,

        1,

        3.8

      );


      const name =
        document.createElement(
          "span"
        );


      name.className =
        "product-name";


      name.textContent =
        product.name.toUpperCase();


      const price =
        document.createElement(
          "span"
        );


      price.className =
        "product-price";


      price.textContent =
        `${product.price} zł`;


      button.append(
        art,
        name,
        price
      );


      button.addEventListener(

        "click",

        () =>
          addToBasket(
            product.id
          )

      );


      ui.productGrid.appendChild(
        button
      );

    }
  );

}


function setProductsEnabled(
  enabled
) {

  document
    .querySelectorAll(
      ".product-card"
    )
    .forEach(
      button => {

        button.disabled =
          !enabled;

      }
    );


  ui.serveBtn.disabled =
    !enabled;

}


// ==================================================
// KOSZYK
// ==================================================

function addToBasket(
  id
) {

  if (
    state.phase !==
    "ordering"
  ) {

    return;

  }


  state.basket.push(
    id
  );


  playSfx(
    "click"
  );


  renderBasket();

}


function renderBasket() {

  ui.basket.innerHTML =
    "";


  if (
    !state.basket.length
  ) {

    ui.basket.innerHTML = `
      <p class="empty-basket">
        Koszyk jest pusty
      </p>
    `;

    return;

  }


  state.basket.forEach(
    (
      id,
      index
    ) => {


      const product =
        PRODUCTS.find(
          item =>
            item.id === id
        );


      const row =
        document.createElement(
          "div"
        );


      row.className =
        "basket-row";


      const mini =
        document.createElement(
          "canvas"
        );


      mini.width =
        42;


      mini.height =
        42;


      mini.className =
        "basket-thumb";


      const miniContext =
        mini.getContext(
          "2d"
        );


      miniContext.imageSmoothingEnabled =
        false;


      drawProduct(

        miniContext,

        product,

        0,

        0,

        2.5

      );


      const name =
        document.createElement(
          "span"
        );


      name.className =
        "name";


      name.textContent =
        product.name;


      const remove =
        document.createElement(
          "button"
        );


      remove.className =
        "remove-btn";


      remove.textContent =
        "X";


      remove.addEventListener(

        "click",

        () => {


          state.basket.splice(
            index,
            1
          );


          playSfx(
            "remove"
          );


          renderBasket();

        }

      );


      row.append(
        mini,
        name,
        remove
      );


      ui.basket.appendChild(
        row
      );

    }
  );

}


// ==================================================
// RANDOM
// ==================================================

function randomInt(
  minimum,
  maximum
) {

  return Math.floor(

    Math.random() *

    (
      maximum -
      minimum +
      1
    )

  ) + minimum;

}


function shuffled(
  array
) {

  return [
    ...array
  ].sort(
    () =>
      Math.random() -
      0.5
  );

}


// ==================================================
// KLIENT
// ==================================================

function createCustomer() {

  customer = {

    x:
      -90,

    y:
      348,

    targetX:
      670,

    speed:
      95 +
      state.day *
      5,

    palette:

      CUSTOMER_PALETTES[
        randomInt(
          0,
          CUSTOMER_PALETTES.length -
          1
        )
      ],

    walk:
      0

  };

}


// ==================================================
// ZAMÓWIENIE
// ==================================================

function generateOrder() {

  const minimumItems =
    Math.min(

      1 +
      Math.floor(
        (
          state.day -
          1
        ) /
        2
      ),

      4

    );


  const maximumItems =
    Math.min(

      3 +
      Math.floor(
        (
          state.day -
          1
        ) /
        2
      ),

      7

    );


  const count =
    randomInt(
      minimumItems,
      maximumItems
    );


  state.order =
    shuffled(
      PRODUCTS
    )
      .slice(
        0,
        count
      )
      .map(
        product =>
          product.id
      );


  state.basket =
    [];


  renderBasket();

}


// ==================================================
// NOWY KLIENT
// ==================================================

function beginCustomer() {

  clearTimeout(
    nextCustomerTimeout
  );


  if (
    state.currentCustomer >=
    state.customersPerDay
  ) {

    completeDay();

    return;

  }


  state.currentCustomer++;


  state.phase =
    "entering";


  createCustomer();


  playSfx(
    "door"
  );


  ui.status.textContent =
    "Klient wchodzi do sklepu...";


  ui.orderText.textContent =
    "Poczekaj, aż klient podejdzie do kasy.";


  ui.timerText.textContent =
    "--";


  ui.timerFill.style.width =
    "0%";


  setProductsEnabled(
    false
  );


  updateHud();

}


// ==================================================
// KLIENT PRZY KASIE
// ==================================================

function startOrdering() {

  generateOrder();


  state.phase =
    "ordering";


  state.maxTime =
    Math.max(

      7,

      20 -
      (
        state.day -
        1
      ) *
      1.35

    );


  state.timeLeft =
    state.maxTime;


  ui.status.textContent =
    "Klient czeka przy kasie.";


  ui.orderText.textContent =
    state.order
      .map(
        id =>
          PRODUCTS.find(
            product =>
              product.id === id
          ).name
      )
      .join(
        " + "
      );


  setProductsEnabled(
    true
  );

}


// ==================================================
// OBSŁUŻ KLIENTA
// ==================================================

function serveCustomer() {

  if (
    state.phase !==
    "ordering"
  ) {

    return;

  }


  playSfx(
    "serve"
  );


  const correctOrder =
    [
      ...state.order
    ].sort();


  const playerOrder =
    [
      ...state.basket
    ].sort();


  const correct =
    correctOrder.length ===
    playerOrder.length &&

    correctOrder.every(
      (
        value,
        index
      ) =>
        value ===
        playerOrder[index]
    );


  if (
    correct
  ) {

    const earned =

      12 +

      state.order.length *
      5 +

      Math.floor(
        state.timeLeft
      ) +

      Math.min(
        state.streak *
        2,
        24
      );


    state.money +=
      earned;


    state.streak++;


    state.correctThisDay++;


    playSfx(
      "success"
    );


    showToast(
      `DOBRZE! +${earned} ZŁ`,
      "success"
    );


    sendCustomerAway(
      true
    );

  }

  else {

    state.mistakes++;


    state.streak =
      0;


    playSfx(
      "error"
    );


    showToast(
      "ZŁE ZAMÓWIENIE!",
      "error"
    );


    updateHud();


    if (
      state.mistakes >=
      3
    ) {

      gameOver();

      return;

    }


    sendCustomerAway(
      false
    );

  }

}


// ==================================================
// KONIEC CZASU
// ==================================================

function timeoutCustomer() {

  if (
    state.phase !==
    "ordering"
  ) {

    return;

  }


  state.mistakes++;


  state.streak =
    0;


  playSfx(
    "timeout"
  );


  showToast(
    "KLIENT STRACIŁ CIERPLIWOŚĆ!",
    "error"
  );


  updateHud();


  if (
    state.mistakes >=
    3
  ) {

    gameOver();

    return;

  }


  sendCustomerAway(
    false
  );

}


// ==================================================
// WYJŚCIE KLIENTA
// ==================================================

function sendCustomerAway(
  happy
) {

  state.phase =
    "leaving";


  customer.targetX =
    1030;


  customer.speed =
    happy
      ? 120
      : 145;


  ui.status.textContent =
    happy
      ? "Klient odchodzi zadowolony."
      : "Klient wychodzi niezadowolony.";


  ui.orderText.textContent =
    "Następny klient za chwilę...";


  ui.timerText.textContent =
    "--";


  ui.timerFill.style.width =
    "0%";


  state.basket =
    [];


  renderBasket();


  setProductsEnabled(
    false
  );


  updateHud();

}


// ==================================================
// HUD
// ==================================================

function updateHud() {

  ui.day.textContent =
    state.day;


  ui.money.textContent =
    `${state.money} zł`;


  ui.mistakes.textContent =
    `${state.mistakes} / 3`;


  ui.streak.textContent =
    state.streak;


  ui.customerNumber.textContent =
    state.currentCustomer;


  ui.customerTotal.textContent =
    state.customersPerDay;


  const shiftPercent =
    Math.min(

      100,

      (
        state.currentCustomer /
        state.customersPerDay
      ) *
      100

    );


  ui.shiftFill.style.width =
    `${shiftPercent}%`;


  const totalMinutes =

    Math.floor(

      22 *
      60 +

      (
        state.currentCustomer /
        state.customersPerDay
      ) *

      8 *
      60

    ) %

    (
      24 *
      60
    );


  const hours =
    Math.floor(
      totalMinutes /
      60
    );


  const minutes =
    totalMinutes %
    60;


  ui.clock.textContent =
    `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}`;

}


// ==================================================
// KONIEC DNIA
// ==================================================

function completeDay() {

  state.playing =
    false;


  state.phase =
    "dayEnd";


  setProductsEnabled(
    false
  );


  ui.clock.textContent =
    "06:00";


  stopMusic();


  playSfx(
    "day"
  );


  ui.daySummary.textContent =
    `Przetrwałaś noc. Łączna kasa: ${state.money} zł. Poprawne zamówienia tej nocy: ${state.correctThisDay}.`;


  ui.dayOverlay.classList.remove(
    "hidden"
  );

}


// ==================================================
// KOLEJNY DZIEŃ
// ==================================================

function nextDay() {

  state.day++;


  state.mistakes =
    0;


  state.streak =
    0;


  state.currentCustomer =
    0;


  state.correctThisDay =
    0;


  state.customersPerDay =
    Math.min(
      7 +
      state.day,
      16
    );


  state.playing =
    true;


  state.phase =
    "idle";


  customer =
    null;


  ui.dayOverlay.classList.add(
    "hidden"
  );


  updateHud();


  if (
    musicEnabled
  ) {

    startMusic();

  }


  nextCustomerTimeout =
    setTimeout(
      beginCustomer,
      500
    );

}


// ==================================================
// GAME OVER
// ==================================================

function gameOver() {

  state.playing =
    false;


  state.phase =
    "gameOver";


  clearTimeout(
    nextCustomerTimeout
  );


  setProductsEnabled(
    false
  );


  stopMusic();


  ui.gameOverSummary.textContent =
    `Zmiana zakończyła się po 3 błędach. Udało Ci się zarobić ${state.money} zł.`;


  ui.gameOverOverlay.classList.remove(
    "hidden"
  );

}


// ==================================================
// RESTART
// ==================================================

function restartGame() {

  clearTimeout(
    nextCustomerTimeout
  );


  state =
    freshState();


  customer =
    null;


  ui.gameOverOverlay.classList.add(
    "hidden"
  );


  ui.dayOverlay.classList.add(
    "hidden"
  );


  state.playing =
    true;


  updateHud();


  renderBasket();


  if (
    musicEnabled
  ) {

    startMusic();

  }


  nextCustomerTimeout =
    setTimeout(
      beginCustomer,
      500
    );

}


// ==================================================
// TOAST
// ==================================================

function showToast(
  text,
  type
) {

  clearTimeout(
    toastTimeout
  );


  ui.toast.textContent =
    text;


  ui.toast.className =
    `toast ${type}`;


  toastTimeout =
    setTimeout(

      () =>
        ui.toast.classList.add(
          "hidden"
        ),

      1600

    );

}


// ==================================================
// REGAŁ
// ==================================================

function drawShelf(

  x,

  y,

  width,

  height,

  startIndex = 0

) {

  pxRect(
    ctx,
    x,
    y,
    width,
    height,
    "#1e2535"
  );


  pxRect(
    ctx,
    x + 8,
    y + 10,
    width - 16,
    height - 20,
    "#2b3447"
  );


  for (
    let row = 0;
    row < 3;
    row++
  ) {

    const shelfY =
      y +
      53 +
      row *
      50;


    pxRect(
      ctx,
      x + 14,
      shelfY,
      width - 28,
      8,
      "#161c29"
    );


    for (
      let column = 0;
      column < 5;
      column++
    ) {

      const product =
        PRODUCTS[
          (
            startIndex +
            row *
            5 +
            column
          ) %
          PRODUCTS.length
        ];


      drawProduct(

        ctx,

        product,

        x +
        22 +
        column *
        (
          (
            width -
            45
          ) /
          5
        ),

        shelfY -
        38,

        2

      );

    }

  }


  pxRect(
    ctx,
    x + 2,
    y + height - 12,
    width - 4,
    12,
    "#151a25"
  );

}


// ==================================================
// KASJER
// ==================================================

function drawCashier(
  x,
  y
) {

  pxRect(
    ctx,
    x,
    y - 44,
    32,
    30,
    "#efc29e"
  );


  pxRect(
    ctx,
    x,
    y - 48,
    32,
    10,
    "#5a3b30"
  );


  pxRect(
    ctx,
    x,
    y - 42,
    6,
    14,
    "#5a3b30"
  );


  pxRect(
    ctx,
    x + 7,
    y - 32,
    5,
    4,
    "#20242d"
  );


  pxRect(
    ctx,
    x + 21,
    y - 32,
    5,
    4,
    "#20242d"
  );


  pxRect(
    ctx,
    x - 6,
    y - 12,
    44,
    60,
    "#202b3e"
  );


  pxRect(
    ctx,
    x + 2,
    y - 6,
    28,
    54,
    "#4a78a8"
  );


  pxRect(
    ctx,
    x - 17,
    y,
    12,
    40,
    "#efc29e"
  );

}


// ==================================================
// SKLEP
// ==================================================

function drawShop() {

  const width =
    canvas.width;


  const height =
    canvas.height;


  // TŁO

  pxRect(
    ctx,
    0,
    0,
    width,
    height,
    "#131a2a"
  );


  // SUFIT

  pxRect(
    ctx,
    0,
    0,
    width,
    75,
    "#0a0f1b"
  );


  // LAMPY

  pxRect(
    ctx,
    120,
    28,
    250,
    14,
    "#f5f2c8"
  );


  pxRect(
    ctx,
    126,
    42,
    238,
    5,
    "#5a5b50"
  );


  pxRect(
    ctx,
    570,
    28,
    250,
    14,
    "#f5f2c8"
  );


  pxRect(
    ctx,
    576,
    42,
    238,
    5,
    "#5a5b50"
  );


  // ŚCIANA

  pxRect(
    ctx,
    0,
    75,
    width,
    265,
    "#384054"
  );


  // KAFELKI

  ctx.strokeStyle =
    "#465069";


  ctx.lineWidth =
    2;


  for (
    let y = 95;
    y < 340;
    y += 34
  ) {

    ctx.beginPath();

    ctx.moveTo(
      0,
      y
    );

    ctx.lineTo(
      width,
      y
    );

    ctx.stroke();

  }


  for (
    let x = 0;
    x < width;
    x += 64
  ) {

    ctx.beginPath();

    ctx.moveTo(
      x,
      75
    );

    ctx.lineTo(
      x,
      340
    );

    ctx.stroke();

  }


  // OKNO

  pxRect(
    ctx,
    36,
    104,
    250,
    160,
    "#101728"
  );


  pxRect(
    ctx,
    45,
    113,
    232,
    142,
    "#07101f"
  );


  pxRect(
    ctx,
    155,
    113,
    8,
    142,
    "#28344b"
  );


  pxRect(
    ctx,
    45,
    180,
    232,
    7,
    "#28344b"
  );


  // GWIAZDY

  const stars = [

    [70,130],

    [100,155],

    [220,140],

    [188,205],

    [245,164],

    [82,218]

  ];


  stars.forEach(
    (
      [
        x,
        y
      ]
    ) => {

      pxRect(
        ctx,
        x,
        y,
        4,
        4,
        "#dbe8ff"
      );

    }
  );


  // BUDYNKI

  pxRect(
    ctx,
    55,
    220,
    45,
    35,
    "#172038"
  );


  pxRect(
    ctx,
    104,
    230,
    34,
    25,
    "#202a43"
  );


  pxRect(
    ctx,
    170,
    215,
    42,
    40,
    "#18233a"
  );


  pxRect(
    ctx,
    218,
    226,
    50,
    29,
    "#202a43"
  );


  // OPEN

  pxRect(
    ctx,
    94,
    128,
    104,
    34,
    "#162921"
  );


  pxRect(
    ctx,
    99,
    133,
    94,
    24,
    "#73ee8a"
  );


  ctx.fillStyle =
    "#0b2212";


  ctx.font =
    '16px "Press Start 2P"';


  ctx.fillText(
    "OPEN",
    111,
    152
  );


  // REGAŁY

  drawShelf(
    320,
    112,
    250,
    198,
    0
  );


  drawShelf(
    585,
    112,
    225,
    198,
    8
  );


  // LADA

  pxRect(
    ctx,
    595,
    318,
    330,
    28,
    "#243048"
  );


  pxRect(
    ctx,
    610,
    346,
    300,
    126,
    "#5b4f55"
  );


  pxRect(
    ctx,
    624,
    360,
    272,
    95,
    "#78676c"
  );


  // BLAT

  pxRect(
    ctx,
    664,
    301,
    125,
    18,
    "#121722"
  );


  // KASA

  pxRect(
    ctx,
    680,
    280,
    92,
    22,
    "#29334a"
  );


  pxRect(
    ctx,
    695,
    262,
    62,
    20,
    "#202a3c"
  );


  pxRect(
    ctx,
    720,
    280,
    42,
    20,
    "#9ca4ad"
  );


  pxRect(
    ctx,
    726,
    285,
    30,
    10,
    "#1c2733"
  );


  // PODŁOGA

  pxRect(
    ctx,
    0,
    472,
    width,
    68,
    "#24293a"
  );


  for (
    let x = 0;
    x < width;
    x += 80
  ) {

    pxRect(
      ctx,
      x,
      472,
      3,
      68,
      "#343b51"
    );

  }


  pxRect(
    ctx,
    0,
    505,
    width,
    3,
    "#343b51"
  );


  // DRZWI

  pxRect(
    ctx,
    0,
    284,
    104,
    188,
    "#20283b"
  );


  pxRect(
    ctx,
    8,
    294,
    88,
    166,
    "#10182a"
  );


  pxRect(
    ctx,
    14,
    301,
    76,
    112,
    "#07101e"
  );


  pxRect(
    ctx,
    84,
    374,
    6,
    6,
    "#e1c36a"
  );


  drawCashier(
    820,
    355
  );

}


// ==================================================
// RYSOWANIE KLIENTA
// ==================================================

function drawCustomer(
  currentCustomer
) {

  if (
    !currentCustomer
  ) {

    return;

  }


  const [

    skin,

    hair,

    shirt,

    pants

  ] =
    currentCustomer.palette;


  const bob =
    Math.sin(
      currentCustomer.walk
    ) *
    2;


  const x =
    Math.round(
      currentCustomer.x
    );


  const y =
    Math.round(
      currentCustomer.y +
      bob
    );


  // CIEŃ

  pxRect(
    ctx,
    x - 22,
    y + 114,
    55,
    10,
    "rgba(0,0,0,.25)"
  );


  // NOGI

  pxRect(
    ctx,
    x - 8,
    y + 72,
    13,
    38,
    pants
  );


  pxRect(
    ctx,
    x + 14,
    y + 72,
    13,
    38,
    pants
  );


  // BUTY

  pxRect(
    ctx,
    x - 11,
    y + 108,
    18,
    8,
    "#171a22"
  );


  pxRect(
    ctx,
    x + 12,
    y + 108,
    18,
    8,
    "#171a22"
  );


  // CIAŁO

  pxRect(
    ctx,
    x - 15,
    y + 30,
    48,
    48,
    shirt
  );


  // RĘCE

  pxRect(
    ctx,
    x - 22,
    y + 36,
    10,
    36,
    skin
  );


  pxRect(
    ctx,
    x + 33,
    y + 36,
    10,
    36,
    skin
  );


  // GŁOWA

  pxRect(
    ctx,
    x - 8,
    y,
    34,
    34,
    skin
  );


  // WŁOSY

  pxRect(
    ctx,
    x - 8,
    y - 4,
    34,
    11,
    hair
  );


  pxRect(
    ctx,
    x - 8,
    y + 3,
    7,
    14,
    hair
  );


  // OCZY

  pxRect(
    ctx,
    x,
    y + 14,
    4,
    4,
    "#20242d"
  );


  pxRect(
    ctx,
    x + 17,
    y + 14,
    4,
    4,
    "#20242d"
  );


  // USTA

  pxRect(
    ctx,
    x + 8,
    y + 24,
    8,
    3,
    "#8b4f4c"
  );


  // TORBA

  pxRect(
    ctx,
    x + 37,
    y + 54,
    18,
    25,
    "#4f4035"
  );


  pxRect(
    ctx,
    x + 41,
    y + 48,
    10,
    7,
    "#8d735c"
  );

}


// ==================================================
// GAME LOOP
// ==================================================

function gameLoop(
  timestamp
) {

  const deltaTime =
    Math.min(

      (
        timestamp -
        lastTime
      ) /
      1000,

      0.05

    ) || 0;


  lastTime =
    timestamp;


  if (
    state.playing
  ) {


    // RUCH KLIENTA

    if (

      customer &&

      (
        state.phase ===
        "entering" ||

        state.phase ===
        "leaving"
      )

    ) {

      const direction =
        Math.sign(
          customer.targetX -
          customer.x
        );


      customer.x +=

        direction *

        customer.speed *

        deltaTime;


      customer.walk +=

        deltaTime *

        8;


      if (

        Math.abs(
          customer.targetX -
          customer.x
        ) <
        3

      ) {

        customer.x =
          customer.targetX;


        if (
          state.phase ===
          "entering"
        ) {

          startOrdering();

        }

      }


      if (

        state.phase ===
        "leaving" &&

        customer.x >
        1010

      ) {

        customer =
          null;


        nextCustomerTimeout =
          setTimeout(
            beginCustomer,
            550
          );

      }

    }


    // TIMER

    if (
      state.phase ===
      "ordering"
    ) {

      state.timeLeft -=
        deltaTime;


      if (
        state.timeLeft <=
        0
      ) {

        state.timeLeft =
          0;


        timeoutCustomer();

      }


      ui.timerText.textContent =
        `${state.timeLeft.toFixed(1)} s`;


      const percent =
        (
          state.timeLeft /
          state.maxTime
        ) *
        100;


      ui.timerFill.style.width =
        `${percent}%`;


      if (
        percent >
        50
      ) {

        ui.timerFill.style.background =
          "#65e572";

      }

      else if (
        percent >
        25
      ) {

        ui.timerFill.style.background =
          "#ffd166";

      }

      else {

        ui.timerFill.style.background =
          "#ff5f73";

      }

    }

  }


  drawShop();


  drawCustomer(
    customer
  );


  requestAnimationFrame(
    gameLoop
  );

}


// ==================================================
// START
// ==================================================

ui.startBtn.addEventListener(

  "click",

  () => {


    initAudio();


    playSfx(
      "click"
    );


    ui.startOverlay.classList.add(
      "hidden"
    );


    state.playing =
      true;


    updateHud();


    if (
      musicEnabled
    ) {

      startMusic();

    }


    nextCustomerTimeout =
      setTimeout(
        beginCustomer,
        450
      );

  }

);


// ==================================================
// OBSŁUGA
// ==================================================

ui.serveBtn.addEventListener(
  "click",
  serveCustomer
);


// ==================================================
// WYCZYŚĆ KOSZYK
// ==================================================

ui.clearBtn.addEventListener(

  "click",

  () => {


    if (
      state.phase !==
      "ordering"
    ) {

      return;

    }


    state.basket =
      [];


    playSfx(
      "clear"
    );


    renderBasket();

  }

);


// ==================================================
// KOLEJNY DZIEŃ
// ==================================================

ui.nextDayBtn.addEventListener(

  "click",

  () => {


    initAudio();


    playSfx(
      "click"
    );


    nextDay();

  }

);


// ==================================================
// RESTART
// ==================================================

ui.restartBtn.addEventListener(

  "click",

  () => {


    initAudio();


    playSfx(
      "click"
    );


    restartGame();

  }

);


// ==================================================
// AUDIO BUTTONS
// ==================================================

ui.musicBtn.addEventListener(
  "click",
  toggleMusic
);


ui.sfxBtn.addEventListener(
  "click",
  toggleSfx
);


// ==================================================
// STARTOWY RENDER
// ==================================================

buildProducts();


renderBasket();


updateHud();


setProductsEnabled(
  false
);


requestAnimationFrame(
  gameLoop
);
