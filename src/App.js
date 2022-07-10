import './App.scss';
import HomeWrap from './Components/HomeWrap';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Info from './Components/Info';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route exact path='/' element={<HomeWrap/>}/>
    <Route exact path='/info' element={<Info/>}/>

   </Routes>
   </BrowserRouter>
    
  );
}

export default App;