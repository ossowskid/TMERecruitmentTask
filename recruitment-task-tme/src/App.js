import "./index.css";
import { CreateObject } from "./components/CreateObject";
import { useGetCars } from "./hooks/UseGetCar";

function App() {
  useGetCars();

  return (
    <div className="App">
      <CreateObject />
    </div>
  );
}

export default App;
