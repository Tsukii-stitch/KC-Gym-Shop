const products = [
  {
    id: "treadmill",
    name: "Treadmill",
    category: "Cardio",
    image: "/images/treadmill.jpg",
    description: "Eto ang pang cardio hindi asawa!.",
    longDescription: "Heavy-duty motorized treadmill with adjustable incline, shock-absorbing deck, and a digital console that tracks speed, distance, time, and calories burned.",
    price: 24999,
    stock: 4,
    specs: ["2.5HP motor", "0-16 km/h speed range", "0-15% incline", "120kg max user weight"]
  },
  {
    id: "dumbbells",
    name: "Dumbbells",
    category: "Free Weights",
    image: "/images/dumbbells.jpg",
    description: "Build muscle, increase strength, and create powerful workouts.",
    longDescription: "Adjustable dumbbell set with quick-select weight plates, allowing you to switch load in seconds without swapping out separate weights.",
    price: 8999,
    stock: 12,
    specs: ["5-25kg adjustable per dumbbell", "Quick-lock dial system", "Rubber coated plates", "Includes storage tray"]
  },
  {
    id: "exercise-bike",
    name: "Exercise Bike",
    category: "Cardio",
    image: "/images/bike.jpg",
    description: "Eto ang pang cardio hindi asawa!.",
    longDescription: "Indoor cycling bike with magnetic resistance, an LCD monitor, and a padded adjustable seat for long, low-impact cardio sessions.",
    price: 15999,
    stock: 0,
    specs: ["8-level magnetic resistance", "LCD display", "Adjustable seat and handlebar", "Belt drive system"]
  },
  {
    id: "barbell-set",
    name: "Barbell Set",
    category: "Free Weights",
    image: "/images/barbell.jpg",
    description: "Para sa mga nag titiktok, pampalaki ng biceps.",
    longDescription: "Olympic barbell with a full set of weight plates and locking collars, built for progressive strength training.",
    price: 12999,
    stock: 6,
    specs: ["7ft Olympic bar", "20kg total plate set", "Spring collars included", "Knurled grip"]
  },
  {
    id: "bench-press",
    name: "Bench Press",
    category: "Free Weights",
    image: "/images/bench.jpg",
    description: "Parang sa squat machine pero nakahiga at kamay gamit.",
    longDescription: "Flat-to-incline adjustable weight bench with a sturdy steel frame, ideal for chest, shoulder, and core exercises.",
    price: 9499,
    stock: 3,
    specs: ["5 backrest positions", "300kg weight capacity", "Foam padded upholstery", "Foldable frame"]
  },
  {
    id: "kettlebell",
    name: "Kettlebell",
    category: "Free Weights",
    image: "/images/kettlebell.jpg",
    description: "Eto ung ibabalabag mo pag nakita mo may kausap si crush.",
    longDescription: "Cast iron kettlebell with a wide, comfortable handle for swings, squats, and full-body conditioning work.",
    price: 2499,
    stock: 20,
    specs: ["Available 4kg-32kg", "Cast iron construction", "Flat base for stability", "Textured grip handle"]
  },
  {
    id: "pull-up-bar",
    name: "Pull-Up Bar",
    category: "Free Weights",
    image: "/images/pullup.jpg",
    description: "Hihilain mo lang sarili mo pataas.",
    longDescription: "Doorway pull-up bar with multiple grip positions for pull-ups, chin-ups, and hanging core exercises.",
    price: 1999,
    stock: 15,
    specs: ["No-drill doorframe mount", "Multi-grip handles", "100kg max load", "Foam grip padding"]
  },
  {
    id: "cable-machine",
    name: "Cable Machine",
    category: "Machines",
    image: "/images/cable.jpg",
    description: "Multi-purpose na machine, kunin mo na please.",
    longDescription: "Dual-stack cable tower for isolation and compound movements, covering nearly every major muscle group in one unit.",
    price: 45999,
    stock: 0,
    specs: ["Dual adjustable pulleys", "20-position stack", "Includes bar and rope attachments", "Steel frame construction"]
  },
  {
    id: "rowing-machine",
    name: "Rowing Machine",
    category: "Cardio",
    image: "/images/rowing.jpg",
    description: "Row row row your boat buong katawan masaket katapos.",
    longDescription: "Air/magnetic resistance rowing machine that delivers a full-body cardio and strength workout in one smooth motion.",
    price: 18999,
    stock: 5,
    specs: ["Adjustable resistance", "LCD performance monitor", "Foldable frame", "Non-slip footplates"]
  },
  {
    id: "smith-machine",
    name: "Smith Machine",
    category: "Machines",
    image: "/images/smith.jpg",
    description: "Dun sa isa uupo dito tatayo pero uupo din.",
    longDescription: "Guided barbell rack system for safe squats, presses, and lifts, with adjustable safety catches at every angle.",
    price: 68999,
    stock: 2,
    specs: ["Linear bearing guide rods", "Adjustable safety stops", "Includes weight bar", "Multiple grip attachments"]
  },
  {
    id: "leg-press",
    name: "Leg Press",
    category: "Machines",
    image: "/images/legpress.jpg",
    description: "uupo ka lang tsaka mo itutulak gamit paa.",
    longDescription: "45-degree seated leg press machine that isolates the quads, hamstrings, and glutes with a smooth, guided sled.",
    price: 39999,
    stock: 0,
    specs: ["45-degree sled angle", "Adjustable seat position", "Weight plate loading pegs", "Non-slip footplate"]
  },
  {
    id: "elliptical-trainer",
    name: "Elliptical Trainer",
    category: "Cardio",
    image: "/images/elliptical.jpg",
    description: "Moonwalk ka dito man.",
    longDescription: "Low-impact elliptical trainer combining upper and lower body movement for a full cardio workout without joint strain.",
    price: 21999,
    stock: 8,
    specs: ["Adjustable resistance levels", "LCD console", "Moving handlebars", "Compact footprint"]
  }
];

export default products;