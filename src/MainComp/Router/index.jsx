import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "../../Utils/scrollToTop";
import LazyLoader from "../../Utils/LazyLoader/lazyLoader";
import { IconLocationX } from "@tabler/icons-react";
const HomePageMainComponent = lazy(() =>
  import("../HomePageMain/HomePageMain")
);

const AccommodationMain = lazy(() =>
  import("../AccommodationMain/accommodationMain")
);
const AboutUsMain = lazy(() => import("../AboutUsMain/AboutUsMain"));
const ServicesMain = lazy(() => import("../ServicesMain/servicesMain"));
const GalleryMain = lazy(() => import("../GalleryMain/gallery"));
const ContactUsMain = lazy(() =>
  import("../../MainComp/contactUsMain/contactUsMain")
   );
const MainPrivacyPolicy = lazy(() =>
  import("../../MainComp/PrivacyPolicy/PrivacyPolicy")
);

const MainTermsAndConditions = lazy(() =>
  import("../../MainComp/TermsAndConditions/termsAndConditions")
);
const AllRoute = () => {
  return (
    <Router>
      <ScrollToTop/>
      <Suspense fallback={<LazyLoader/>}>
        <Routes>
          <Route path="/" element={<HomePageMainComponent />} />
          <Route path="/about-us" element={<AboutUsMain />} />
          <Route path="/facilities" element={<ServicesMain />} />
          <Route path="/gallery" element={<GalleryMain />} />
          <Route path="/contact-us" element={<ContactUsMain />} />
          <Route path="/privacy-policy" element={<MainPrivacyPolicy />} />
          <Route path="/terms-conditions" element={<MainTermsAndConditions />} />
          <Route path="/book-now" element={<AccommodationMain />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AllRoute;
