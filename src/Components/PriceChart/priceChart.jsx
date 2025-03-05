import { useState } from "react";
import EPPlan from "../../assets/plumeriaresortimages/pathway.jpg";
import CPPlan from "../../assets/plumeriaresortimages/cp-plan.jpg";
import MapPlan from "../../assets/plumeriaresortimages/meditaion.jpg";
import ResortBrochure from "../../assets/plumeriaresortimages/PlumeriaResortBrochure.pdf";
import "./PriceChart.css";

const PriceChart = () => {
  const [modalData, setModalData] = useState(null);

  const handleDownloadBrochure = () => {
    window.open(ResortBrochure, "_blank");
  };

  const plans = [
    {
      name: "European Plan",
      image: EPPlan,
      prices: [
        {
          type: "Deluxe Rooms (2 Persons)",
          withoutGST: "Rs. 4000/-",
          withGST: "Rs. 4720/-",
        },
        {
          type: "Extra Adult (5+ years of age)",
          withoutGST: "Rs. 1500/-",
          withGST: "Rs. 1770/-",
        },
        {
          type: "Villa Rooms (2 Persons)",
          withoutGST: "Rs. 4400/-",
          withGST: "Rs. 4400/-",
        },
        {
          type: "Extra Adult (5+ years of age)",
          withoutGST: "Rs. 1500/-",
          withGST: "Rs. 1770/-",
        },
      ],
      note: "European Plan does not include any complimentary services.",
    },
    {
      name: "Continental Plan",
      image: CPPlan,
      prices: [
        {
          type: "Deluxe Rooms (2 Persons)",
          withoutGST: "Rs. 6000/-",
          withGST: "Rs. 7080/-",
        },
        {
          type: "Extra Adult (5+ years of age)",
          withoutGST: "Rs. 1800/-",
          withGST: "Rs. 2124/-",
        },
        {
          type: "Villa Rooms (2 Persons)",
          withoutGST: "Rs. 6400/-",
          withGST: "Rs. 7552/-",
        },
        {
          type: "Extra Adult (5+ years of age)",
          withoutGST: "Rs. 1800/-",
          withGST: "Rs. 2124/-",
        },
      ],
      note: "Continental Plan plan includes breakfast.",
    },
    {
      name: "Modified American Plan",
      image: MapPlan,
      prices: [
        {
          type: "Deluxe Rooms (2 Persons)",
          withoutGST: "Rs. 7100/-",
          withGST: "Rs. 8378/-",
        },
        {
          type: "Extra Adult (5+ years of age)",
          withoutGST: "Rs. 2200/-",
          withGST: "Rs. 2596/-",
        },
        {
          type: "Villa Rooms (2 Persons)",
          withoutGST: "Rs. 7500/-",
          withGST: "Rs. 8850/-",
        },
        {
          type: "Extra Adult (5+ years of age)",
          withoutGST: "Rs. 2200/-",
          withGST: "Rs. 2596/-",
        },
      ],
      note: "Modified American Plan includes breakfast and dinner.",
    },
  ];

  return (
    <div className="price-chart-container">
      <div className="price-title-container">
        <div className="title-section">
          <h1>Day Out Packages We Provide</h1>
          <p>
            Experience luxury, comfort, and adventure with our exclusive day-out
            plans.
          </p>
        </div>
        <div className="price-chart-content grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="price-card"
              onClick={() => setModalData(plan)}
            >
              <div className="price-card-image">
                <img src={plan.image} alt={plan.name} />
              </div>
              <div className="price-card-content">
                {/* <h2>{plan.name}</h2>
              <p>Click to view pricing details.</p> */}
                <button className="price-card-button">{plan.name}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="price-card-download">
          <button
            className="price-card-download-button"
            onClick={handleDownloadBrochure}
          >
            Download Brochure
          </button>
        </div>
      </div>

      {modalData && (
        <div className="modal-overlay modal-price">
          <div className="modal-content">
            <h2>{modalData.name} Pricing</h2>
            <table>
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Without GST</th>
                  <th>With GST 18%</th>
                </tr>
              </thead>
              <tbody>
                {modalData.prices.map((item, index) => (
                  <tr key={index}>
                    <td>{item.type}</td>
                    <td>{item.withoutGST}</td>
                    <td>{item.withGST}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="price-note">{modalData.note}</p>
            <button className="modal-close" onClick={() => setModalData(null)}>
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PriceChart;
