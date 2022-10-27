import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import useFetchAuth from "./customHooks/useFetchAuth";
import useFetchHome from "./customHooks/useFetchHome";
import useFetchHomes from "./customHooks/useFetchHomes";
import Header from "./views/Header";

function App() {
  const { content } = useFetchHomes();

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
