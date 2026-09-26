import { useState, useEffect } from "react";
import Button from "../components/Button";
import "./Home.css";

function Home() {
  const heroImages = ["/images/gym.jpg", "/images/gym2.jpg"];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev === 0 ? 1 : 0));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home page-enter-home">
      <section className="hero">
        <div className="hero-text">
          <h1 className="hero-heading">
            <span>You want this.</span>
            <span className="hero-heading-accent">Buy this.</span>
          </h1>
          <p className="hero-tagline">Bibili ka o susumbong kita kay mama.</p>
          <Button to="/equipment">Explore Equipment</Button>
        </div>

        <div className="hero-plate">
          <div className="hero-plate-ring">
            <div className="hero-plate-inner">
              {heroImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt="Gym"
                  className={`hero-img hero-img-${index} ${activeImage === index ? "active" : ""}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;