import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import ProductForm from "./components/ProductForm";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route to={'/'} element={<ProductForm />} />
      </Routes> */}
      <ProductForm/>
    </div>
  );
}

export default App;
