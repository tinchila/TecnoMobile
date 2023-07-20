import './App.css';
import NavBar from '../src/components/NavBar/NavBar';
import Error from '../src/components/Pages/Error';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from '../src/components/Pages/Contact';
import CartWidget from '../src/components/CartWidget/CartWidget';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import SingIn from '../src/components/Pages/SingIn';
import SingUp from '../src/components/Pages/SingUp';
import ItemListContainer from '../src/components/ItemListContainer/ItemListContainer.js';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <NavBar/>
        <Routes>
        <Route path={"/"} element={<ItemListContainer/>}/>
        <Route path={"/category/:id"} element={<ItemListContainer/>}/>
        <Route path={"/item/:id"} element={<ItemDetailContainer/>}/>
          <Route path={'/contact'} element={<Contact/>}/>
          <Route path={'/cart'} element={<CartWidget/>}/>
          <Route path={'/singin'} element={<SingIn/>}/>
          <Route path={'/singup'} element={<SingUp/>}/>
          <Route path={"*"} element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

