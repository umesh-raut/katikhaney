
import './App.css';
import CalorieCounter from './components/CalorieCounter';
import DietNutritionPlan from './components/DietNutritionPlan';
import NavBar from "./components/NavBar";
import SliderCard from "./components/SliderCard";
import Footer from "./components/Footer";
import Subsription from './components/Subsription';

function App() {
  return (
    <>
      <NavBar/>
    {/* {/* <h2>Welome, Stranger!</h2>
    use js to welome users after logining in */
      }
      <SliderCard/>
    <hr></hr>
    <div>
      <DietNutritionPlan/>
    </div>
    <br />
    <CalorieCounter/>
    <div>
      <h4>Suscribe with your Email for regular updates</h4>
      
    </div>
    <Subsription/>
      <div><Footer/></div>


    </>
  );
}

export default App;
