
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Work from './components/Work'
import Certificate from './components/Certificate'
import Dashboard from './components/Dashboard'
import Navbar from './components/Navbar';
import BubbleEffect from './components/Bubble';

function App() {
  let url = 'https://portfolioapi-9riq.onrender.com'
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar></Navbar>
            <Routes>
              <Route path='/' element={<Dashboard/>}></Route>
              <Route path='work' element={<Work/>}></Route>
              <Route path='certificate' element={<Certificate/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
