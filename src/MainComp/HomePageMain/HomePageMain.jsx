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
