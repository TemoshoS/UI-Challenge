import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Portfolio from './Components/Portfolio';
import Review from './Components/Review';
import Contact from './Components/Contact';
import Myblog from './Components/Myblog';
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Portfolio' element={<Portfolio/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Myblog'  element={<Myblog/>}/>
      <Route path='/Review'  element={<Review/>}/>
      <Route path='/Contact'  element={<Contact/>}/>
      
      </Routes>


    </div>
  );
}

export default App;
