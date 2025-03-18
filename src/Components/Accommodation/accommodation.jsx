import "./accommodation.css";
import AboutUsNew from "../../assets/plumeriaresortimages/about_us_new1.jpeg";
const AccommodationComp = () => {
  return (
    <div className="overflow-hidden">
      <div className="w-full h-[460px] relative">
        <img
          className="w-full h-full object-cover"
          src={AboutUsNew}
          alt="about us"
        />
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60">
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            BOOK NOW
          </h1>
        </div>
      </div>
    </div>
  );
};

export default AccommodationComp;
