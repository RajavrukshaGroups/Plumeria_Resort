import React from "react";
import Dubare from "../../assets/plumeriaresortimages/dubare_new.webp";
import NisargaDhama from "../../assets/plumeriaresortimages/kaverinisarga.webp";
import Monastery from "../../assets/plumeriaresortimages/tibetan_new.webp";
import Mandalpatti from "../../assets/plumeriaresortimages/mandalpatti_new.webp";
import Talakaveri from "../../assets/plumeriaresortimages/talakaveri_new.webp";
import Bhagamandala from "../../assets/plumeriaresortimages/Bhagamandala_new.webp";
import Harangi from "../../assets/plumeriaresortimages/harangi_new.webp";
import Pushpagiri from "../../assets/plumeriaresortimages/pushpagiri_new.webp";
import "./nearByLocation.css";

const locations = [
  { image: Dubare, name: "Dubare Elephant Camp" },
  { image: NisargaDhama, name: "Kaveri Nisarga Dhama" },
  { image: Monastery, name: "Tibetan Golden Temple" },
  { image: Mandalpatti, name: "Mandalpatti View Point" },
  { image: Talakaveri, name: "Talakaveri Temple" },
  { image: Bhagamandala, name: "Bhagamandala Temple" },
  { image: Harangi, name: "Harangi Dam" },
  { image: Pushpagiri, name: "Pushpagiri Sanctuary" },
];

const NearByLocation = () => {
  return (
    <div className="nearby-container">
      <h2 className="nearby-title"> Nearby Attractions</h2>
      <div className="nearby-services">
        <p className="service-line">
          <strong>Reliable Cab Services:</strong> Enjoy stress-free travel to
          breathtaking destinations with our trusted cabs.
          <span className="highlight-text"> (*Charges apply)</span>
        </p>
        <hr className="divider" />
        <p className="service-line">
          <strong>Explore with Ease:</strong> Hire expert drivers and
          knowledgeable guides for a seamless adventure.
        </p>
      </div>

      <div className="grid-container">
        {locations.map((location, index) => (
          <div className="location-card" key={index}>
            <img
              src={location.image}
              alt={location.name}
              className="location-image"
            />
            <p className="location-name">{location.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearByLocation;
