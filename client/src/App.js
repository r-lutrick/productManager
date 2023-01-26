import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
// Views
import Main from './views/Main';
import Detail from './views/Detail';
import ProductEdit from "./components/ProductEdit";
// Routes
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/detail/:id' element={<Detail/>} />
        <Route path='/edit/:id' element={<ProductEdit/>} />
      </Routes>
    </div>
  );
}

export default App;
