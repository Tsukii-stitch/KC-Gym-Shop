import Card from "./Card";
import "./Home.css";

function Home() {
  const products = [
    { name: "Treadmill", image: "/images/treadmill.jpg", description: "Eto ang pang cardio hindi asawa!." },
    { name: "Dumbbells", image: "/images/dumbbells.jpg", description: "Build muscle, increase strength, and create powerful workouts." },
    { name: "Exercise Bike", image: "/images/bike.jpg", description: "Eto ang pang cardio hindi asawa!." },
    { name: "Barbell Set", image: "/images/barbell.jpg", description: "Para sa mga nag titiktok, pampalaki ng biceps." },
    { name: "Bench Press", image: "/images/bench.jpg", description: "Parang sa squat machine pero nakahiga at kamay gamit." },
    { name: "Kettlebell", image: "/images/kettlebell.jpg", description: "Eto ung ibabalabag mo pag nakita mo may kausap si crush 😭." },
    { name: "Pull-Up Bar", image: "/images/pullup.jpg", description: "Hihilain mo lang sarili mo pataas." },
    { name: "Cable Machine", image: "/images/cable.jpg", description: "Multi-purpose na machine, kunin mo na please." },
    { name: "Rowing Machine", image: "/images/rowing.jpg", description: "Row row row your boat buong katawan masaket katapos." },
    { name: "Smith Machine", image: "/images/smith.jpg", description: "Dun sa isa uupo dito tatayo pero uupo din." },
    { name: "Leg Press", image: "/images/legpress.jpg", description: "uupo ka lang tsaka mo itutulak gamit paa." },
    { name: "Elliptical Trainer", image: "/images/elliptical.jpg", description: "Moonwalk ka dito man." }
  ];

  return (
    <div className="home">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>
            You want this <span>Buy this</span>
          </h1>

          <p>Bibili ka o susumbong kita kay mama.</p>

          <button>Explore Equipment</button>
        </div>

        <div className="hero-image">
          <img src="/images/gym.jpg" alt="Gym" />
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="products">
        <h2>Featured Equipment</h2>

        <div className="cards">
          {products.map((item, index) => (
            <Card key={index} {...item} />
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 KC Gym Shop. Bumili kana alam ko kung taga san ka.</p>
      </footer>

    </div>
  );
}

export default Home;