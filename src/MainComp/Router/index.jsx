import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import HomePageMainComponent from "../HomePageMain/HomePageMain";
const AllRoute = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<HomePageMainComponent/>}/>
        </Routes>
    </Router>
  )
};

export default AllRoute;
