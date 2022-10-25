import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./views/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
