import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from "react-router-dom";
import ProductForm from "./components/ProductForm";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<ProductForm />} />
        <Route path='/product/:id' element={<ProductDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
