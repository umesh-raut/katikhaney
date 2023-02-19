
import './App.css';
import DietNutritionPlan from './components/DietNutritionPlan';
import NavBar from "./components/NavBar";
import SliderCard from "./components/SliderCard";
import Footer from "./components/Footer";
import Login from './components/Login';
function App() {
  return (
    <>
    <NavBar/>
    {/* <h2>Welome, Stranger!</h2>
    use js to welome users after logining in */
    }
    <SliderCard/>
    <hr></hr>
    <div>
      <DietNutritionPlan></DietNutritionPlan>
    </div>
    <div>
      <Login/>
    </div>
    <div><Footer/></div>

    </>
  );
}

export default App;
