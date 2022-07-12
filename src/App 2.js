
import './App.scss';
import Home from './Components/Home'
import { CartProvider } from './Context/cartContext';

function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
