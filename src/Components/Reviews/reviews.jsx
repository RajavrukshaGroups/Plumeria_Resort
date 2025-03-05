import { useState } from "react";
import "./reviews.css";
import bgImage from "../../assets/plumeriaresortimages/poolhero.jpg"; // Adjust the path

const reviews = [
  {
    text: "Really enjoyed staying here. The resort near Kushalnagar has beach hut-style wooden rooms. Spacious rooms, a clean pool, and delicious food made our stay great.",
    author: "Nithin K",
    source: "Tripadvisor",
    rating: "★★★★★",
  },
  {
    text: "We stayed one night in the deluxe cottage, which was very clean and comfortable. The food was good, and the staff was friendly. The campfire with singing was amazing.",
    author: "Nandini",
    source: "Make My Trip",
    rating: "★★★★",
  },
  {
    text: "The rooms were spacious, with enough space for three people. The pool was clean and well-maintained. There’s plenty of space for outdoor sports activities.",
    author: "Arjun V P",
    source: "Google Reviews",
    rating: "★★★★★",
  },
  {
    text: "It was a great experience! We visited as a group of ten and had a fantastic time. The food, games, night camp, and pool were all excellent.",
    author: "Keerthi Balaji",
    source: "Google Reviews",
    rating: "★★★★",
  },
];

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length
    );
  };

  return (
    <div
      className="reviews-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="reviews-overlay"></div>
      <div className="reviews-content">
        <p className="reviews-subtitle">
          Customer satisfaction is in our core values as a team
        </p>
        <h2 className="reviews-title">Hear What They Say About Us</h2>
        <div className="star-rating">{reviews[currentIndex].rating}</div>
        <p className="reviews-text">"{reviews[currentIndex].text}"</p>
        <p className="reviews-author">
          {reviews[currentIndex].author}{" "}
          <span>- {reviews[currentIndex].source}</span>
        </p>
        <div className="reviews-nav">
          <button className="nav-btn prev-btn" onClick={prevReview}>
            — Prev
          </button>
          <button className="nav-btn next-btn" onClick={nextReview}>
            Next —
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
