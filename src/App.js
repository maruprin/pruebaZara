import './App.scss';
import HomeWrap from './Components/HomeWrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Info from './Components/Info';
import { CartProvider } from './Context/cartContext';

function App() {
  return (
   <CartProvider>
    <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<HomeWrap/>}/>
    <Route exact path='/info' element={<Info/>}/>

   </Routes>
   </BrowserRouter>
    </CartProvider>
  );
}

export default App;