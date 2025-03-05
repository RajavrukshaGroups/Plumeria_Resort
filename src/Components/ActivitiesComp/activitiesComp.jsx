import { useState, useEffect } from "react";
import {
  IconPingPong,
  IconDirectionArrows,
  IconChess,
  IconChartRadar,
  IconCricket,
  IconBallVolleyball,
  IconSwimming,
  IconCampfire,
} from "@tabler/icons-react";
import "./activities.css";

// Images
import TableTennis from "../../assets/plumeriaresortimages/tabletennis.webp";
import Carrom from "../../assets/plumeriaresortimages/carrom.webp";
import Chess from "../../assets/plumeriaresortimages/chess.webp";
import Darts from "../../assets/plumeriaresortimages/darts.webp";
import Badminton from "../../assets/plumeriaresortimages/badminton.webp";
import Cricket from "../../assets/plumeriaresortimages/cricket.webp";
import Volleyball from "../../assets/plumeriaresortimages/volleyball.webp";
import Pool from "../../assets/plumeriaresortimages/poolhero2.jpg";
import Campfire from "../../assets/plumeriaresortimages/campfire.webp";
import HomeImg from "../../assets/plumeriaresortimages/homeimg.jpg";

// All activities in a single array
const activities = [
  { name: "Table Tennis", img: TableTennis, icon: <IconPingPong size={24} /> },
  { name: "Carrom", img: Carrom, icon: <IconDirectionArrows size={24} /> },
  { name: "Chess", img: Chess, icon: <IconChess size={24} /> },
  { name: "Darts", img: Darts, icon: <IconChartRadar size={24} /> },
  { name: "Badminton", img: Badminton, icon: <IconPingPong size={24} /> },
  { name: "Cricket", img: Cricket, icon: <IconCricket size={24} /> },
  {
    name: "Volleyball",
    img: Volleyball,
    icon: <IconBallVolleyball size={24} />,
  },
  { name: "Kids Pool", img: Pool, icon: <IconSwimming size={24} /> },
  { name: "Camp Fire", img: Campfire, icon: <IconCampfire size={24} /> },
];

const ActivitiesComp = () => {
  const [activeImage, setActiveImage] = useState(HomeImg);
  const [isFading, setIsFading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        const newIndex = (activeIndex + 1) % activities.length;
        setActiveImage(activities[newIndex].img);
        setActiveIndex(newIndex);
        setIsFading(false);
      }, 500); // Delay for fade transition
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [activeIndex]);

  const handleButtonClick = (index) => {
    setActiveImage(activities[index].img);
    setActiveIndex(index);
  };

  return (
    <div className="activities-container">
      {/* Attractive Title */}
      <h2 className="activities-title">
        <span>Unleash</span> The Fun!
      </h2>
      <p className="sub-heading">
        "Discover Exciting Activities, Curated Just for You!"
      </p>

      {/* Image & Buttons Side by Side */}
      <div className="activities-content">
        {/* Image Display (No Overlay) */}
        <div className="image-container">
          <img src={activeImage} alt="Activity" className={`activity-image ${isFading ? "fade-out" : ""}`} />
        </div>

        {/* Buttons Grid (3 per row) */}
        <div className="buttons-container">
          {activities.map((activity, index) => (
            <button
              key={index}
              onClick={() => handleButtonClick(index)}
              className={`activity-button ${index === activeIndex ? "active-button" : ""}`}
            >
              {activity.icon}
              {activity.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivitiesComp;
