import './App.css';
import Navbar from './components/Navbar';
import Bg from './components/Bg';
import Password from './components/Password'
import Footer from './components/Footer';
function App() {
  return (
    <div>
    <Navbar/>
    <Bg/>
    <Password title="Password Reset"/>
    <Footer/>
    </div> 
  );
}

export default App;
