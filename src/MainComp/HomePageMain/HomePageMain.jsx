import { Helmet } from "react-helmet-async";
import ActivitiesComp from "../../Components/ActivitiesComp/activitiesComp";
import NearByLocation from "../../Components/FocalPoints/nearByLocation";
import Footer from "../../Components/Footer/footer";
import HomePageComp from "../../Components/HomePageComp/homePageComp";
import PriceChart from "../../Components/PriceChart/priceChart";
import Reviews from "../../Components/Reviews/reviews";
import DeluxeRooms from "../../Components/Rooms/deluxeRooms";
import VillaRooms from "../../Components/Rooms/villaRooms";
import WhyChooseUs from "../../Components/WhyUs/whyChooseUs";

const HomePageMainComponent = () => {
  return (
    <div>
      <Helmet>
        <title>Plumeria Resort - Luxury Stay in Coorg, Karnataka</title>
        <meta
          name="description"
          content="Escape to Plumeria Resort in Coorg, Karnataka! Experience luxury stays with premium villas, deluxe rooms, and eco-friendly surroundings. Perfect for nature lovers and adventure seekers!"
        />
        <meta
          name="keywords"
          content="Plumeria Resort, luxury stay in Coorg, Coorg resorts, eco-friendly resorts, deluxe rooms in Coorg, villa stay in Karnataka, Coorg vacation, best resorts in Coorg"
        />
        {/* 🔹 Open Graph Meta Tags for Social Media Sharing */}
        <meta
          property="og:title"
          content="Plumeria Resort - Luxury Stay in Coorg, Karnataka"
        />
        <meta
          property="og:description"
          content="Enjoy a premium stay at Plumeria Resort in Coorg, featuring deluxe rooms, private villas, and breathtaking nature views. Book now!"
        />
        {/* <meta property="og:image" content="/plumeria.png" />{" "} */}
        {/* ✅ Use public folder image */}
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* 🔹 Page Content */}
      <HomePageComp />
      <ActivitiesComp />
      <WhyChooseUs />
      <DeluxeRooms />
      <VillaRooms />
      <PriceChart />
      <NearByLocation />
      <Reviews />
      <Footer />
    </div>
  );
};

export default HomePageMainComponent;
