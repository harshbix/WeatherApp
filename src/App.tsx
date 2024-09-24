import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Navbar from "./components/Navbar";
import LocDetails from "./components/LocDetails";
import ConditionIcon from "./components/ConditionIcon";
import Temparure from "./components/Temparure";
import Footer from "./components/Footer";


const App = () => {
  return (
    <div className="container box">
      <div className="box-child bg-success p-3 rounded text-white">
        <Navbar />
        <LocDetails />
        <ConditionIcon />
        <Temparure />
        <Footer />
      </div>
    </div>
  );
};

export default App;
