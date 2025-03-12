import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ScrollToTop from "../../Utils/scrollToTop";
import LazyLoader from "../../Utils/LazyLoader/lazyLoader";
// import MainTermsAndConditions from "../TermsCondition/TermsAndCondition";

const HomePageMainComponent = lazy(() =>
  import("../HomePageMain/HomePageMain")
);
const AboutUsMain = lazy(() => import("../AboutUsMain/AboutUsMain"));
const ServicesMain = lazy(() => import("../ServicesMain/servicesMain"));
const GalleryMain = lazy(() => import("../GalleryMain/gallery"));
const ContactUsMain = lazy(() =>
  import("../../MainComp/contactUsMain/contactUsMain")
);
const MainTermsAndConditions=lazy(()=>import("../TermsCondition/TermsAndCondition"));

const AllRoute = () => {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<LazyLoader />}>
        <Routes>
          <Route path="/" element={<HomePageMainComponent />} />
          <Route path="/about-us" element={<AboutUsMain />} />
          <Route path="/facilities" element={<ServicesMain />} />
          <Route path="/gallery" element={<GalleryMain />} />
          <Route path="/contact-us" element={<ContactUsMain />} />
          <Route
            path="/terms-conditions"
            element={<MainTermsAndConditions />}
          />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default AllRoute;
