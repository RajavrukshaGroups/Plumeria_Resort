import "./about.css";
import AboutImg1 from "../../assets/plumeriaresortimages/cottagehome.jpg";
import AboutImg2 from "../../assets/plumeriaresortimages/homeimg.jpg";

const AboutComponent = () => {
  return (
    <section className="about">
      <div className="about-content">
        <h3 className="about-subtitle">About Our Hotel</h3>
        <h2 className="about-title">Experience Comfort Like Never Before</h2>
        <p className="about-text">
          Escape into a world of tranquility at our luxurious resort, where nature and elegance blend seamlessly. 
          Nestled in the heart of Coorg, we offer an unforgettable retreat designed for relaxation, adventure, and indulgence.
        </p>
        <p className="about-text">
          Our thoughtfully crafted accommodations provide the perfect balance of comfort and style, allowing you to unwind in the lap of nature. 
          Whether you're here to explore the lush greenery, savor authentic local flavors, or simply rejuvenate, we ensure every moment is truly exceptional.
        </p>
        <p className="about-text">
          Let us take you on a journey of luxury, serenity, and warmth. Your escape to paradise starts here.
        </p>
        <button className="about-btn">Discover More</button>
      </div>

      <div className="about-images">
        <img src={AboutImg1} alt="Luxury Cottage" className="image-main" />
        <img src={AboutImg2} alt="Resort Poolside" className="image-overlay" />
      </div>
    </section>
  );
};

export default AboutComponent;
