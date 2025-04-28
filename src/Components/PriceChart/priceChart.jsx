import { useState } from "react";
import EPPlan from "../../assets/plumeriaresortimages/pathway.jpg";
import CPPlan from "../../assets/plumeriaresortimages/cp-plan.jpg";
import MapPlan from "../../assets/plumeriaresortimages/meditaion.jpg";
import ResortBrochure from "../../assets/plumeriaresortimages/PlumeriaResortBrochureNew.pdf";
import { FaUtensils, FaCocktail, FaUtensilSpoon } from "react-icons/fa";
import "./PriceChart.css";
import ContactModal from "../../Utils/contactModal";

const PriceChart = () => {
  const [modalData, setModalData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [infoModal, setInfoModal] = useState(null);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleDownloadBrochure = () => {
    window.open(ResortBrochure, "_blank");
  };

  const plans = [
    {
      name: "Lite Plan",
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
      note: "It does not include any complimentary services.",
    },
    {
      name: "Plus Plan",
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
      note: (
        <>
          <FaUtensils className="inline-block mr-2 text-yellow-500" />
          It includes breakfast.
          <span
            className="ml-2 bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full cursor-pointer hover:bg-yellow-200"
            onClick={() => setInfoModal("plus")}
          >
            View Menu
          </span>
        </>
      ),
    },
    {
      name: "Max Plan",
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
          withoutGST: "Rs. 7499/-",
          withGST: "Rs. 8850/-",
        },
        {
          type: "Extra Adult (5+ years of age)",
          withoutGST: "Rs. 2200/-",
          withGST: "Rs. 2596/-",
        },
      ],
      note: (
        <>
          <FaUtensils className="inline-block mr-2 text-yellow-500" />
          breakfast, snacks and dinner.
          <span
            className="ml-2 bg-yellow-100 text-yellow-600 text-xs font-semibold px-2 py-1 rounded-full cursor-pointer hover:bg-yellow-200"
            onClick={() => setInfoModal("max")}
          >
            View Menu
          </span>
        </>
      ),
    },
  ];

  const menuDetails = {
    plus: {
      title: "Plus Plan Menu",
      items: [
        {
          category: "Welcome Drinks",
          options: [
            "Watermelon Juice",
            "Lemon Juice",
            "Mint Lemon Juice",
            "Carrot/Beetroot Juice",
          ],
          icon: <FaCocktail className="menu-category-icon text-yellow-500" />,
        },

        {
          category: "Breakfast",
          icon: <FaUtensils className="menu-category-icon text-yellow-500" />,
          options: [
            "Idli",
            "Vada",
            "Dosa (Plain, Masala, Onion, Set)",
            "Upma (Rava, Vermicelli)",
            "Kesari Bath",
            "Poha",
            "Poori Sagu",
            "Aloo Paratha (Curd & Pickle)",
            "Tomato Rice",
            "Lemon Rice",
            "Pongal (Karra, Sweet)",
            "Bisi Bele Bath",
            "French Toast",
            "Scrambled Egg",
            "Boiled Egg",
            "Omelette",
            "Sambar",
            "Chutney",
          ],
        },
      ],
    },
    max: {
      title: "Max Plan Menu",
      items: [
        {
          category: "Welcome Drinks",
          options: [
            "Watermelon Juice",
            "Lemon Juice",
            "Mint Lemon Juice",
            "Carrot/Beetroot Juice",
          ],
          icon: <FaCocktail className="menu-category-icon text-yellow-500" />,
        },
        {
          category: "Breakfast",
          icon: <FaUtensils className="menu-category-icon text-yellow-500" />,
          options: [
            "Idli",
            "Vada",
            "Dosa (Plain, Masala, Onion, Set)",
            "Upma (Rava, Vermicelli)",
            "Kesari Bath",
            "Poha",
            "Poori Sagu",
            "Aloo Paratha (Curd & Pickle)",
            "Tomato Rice",
            "Lemon Rice",
            "Pongal (Karra, Sweet)",
            "Bisi Bele Bath",
            "French Toast",
            "Scrambled Egg",
            "Boiled Egg",
            "Omelette",
            "Sambar",
            "Chutney",
          ],
        },
        {
          category: "Dinner",
          icon: <FaUtensils className="menu-category-icon text-yellow-500" />,
          options: [
            "Veg Starter",
            "Non-Veg Starter",
            "Veg Gravy",
            "Non-Veg Gravy",
            "Rasam",
            "Sambar / Dal",
            "Flavour Rice",
            "White Rice",
            "Chapathi / Pulka",
            "Curd / Papad / Pickle",
            "Salad",
          ],
        },
        {
          category: "Snacks (changes on daily basis)",
          icon: (
            <FaUtensilSpoon className="menu-category-icon text-yellow-500" />
          ),
          options: [
            "Ginger Tea",
            "Green Tea",
            "Masala tea",
            "Coffee",
            "Black Tea",
            "Black coffee",
            "Onion rings",
            "Pakoda",
            "Finger chips",
            "Capsiccum Bajji",
            "Mirchi bajji",
          ],
        },
      ],
    },
  };

  return (
    <div className="price-chart-container">
      <div className="price-title-container">
        <div className="title-section">
          <h1>Resort Stays We Offer</h1>
          <p>
            Indulge in luxury, comfort, and tranquility with our exclusive
            resort stays, designed for a perfect getaway.
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
                <button className="price-card-button">{plan.name}</button>
              </div>
            </div>
          ))}
        </div>
        <div className="price-card-download">
          <button
            className="price-card-download-button"
            onClick={handleOpenModal}
          >
            Download Brochure
          </button>
        </div>
      </div>

      {modalData && (
        <div className="modal-overlay modal-price">
          <div className="modal-content">
            <h2>{modalData.name}Pricing</h2>
            <table>
              <thead>
                <tr>
                  <th>Room Type</th>
                  <th>Without GST</th>
                </tr>
              </thead>
              <tbody>
                {modalData.prices.map((item, index) => (
                  <tr key={index}>
                    <td>{item.type}</td>
                    <td>{item.withoutGST}</td>
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
      {infoModal && (
        <div className="modal-overlay" onClick={() => setInfoModal(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{menuDetails[infoModal].title}</h2>

            {/* Wrap all categories in a grid container */}
            <div className="menu-container">
              {menuDetails[infoModal].items.map((category, index) => (
                <div key={index}>
                  <div className="menu-category">
                    {category.icon} {category.category}
                  </div>
                  <ul className="menu-list">
                    {category.options.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <button className="modal-close" onClick={() => setInfoModal(null)}>
              ✕
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <ContactModal
          show={showModal}
          handleClose={handleCloseModal}
          onSubmitSuccess={handleDownloadBrochure}
          project="Plumeria Resort"
        />
      )}
    </div>
  );
};

export default PriceChart;
