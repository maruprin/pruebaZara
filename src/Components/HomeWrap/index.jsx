import Home from '../Home'
import { CartProvider } from '../../Context/cartContext';

import styles from './styles.module.scss'

function HomeWrap() {
  return (
    <div className={styles.containerHome}>
    <CartProvider>
      <Home />
    </CartProvider>
 </div> 
 );
}

export default HomeWrap;