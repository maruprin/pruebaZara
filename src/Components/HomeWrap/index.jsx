import Home from '../Home'
import { CartProvider } from '../../Context/cartContext';

function HomeWrap() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default HomeWrap;