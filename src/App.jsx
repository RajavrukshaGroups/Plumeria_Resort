import { HelmetProvider } from "react-helmet-async";
import AllRoute from "./MainComp/Router";

function App() {
  return (
    <>
      <div>
        <HelmetProvider>
          <AllRoute />
        </HelmetProvider>
      </div>
    </>
  );
}

export default App;
