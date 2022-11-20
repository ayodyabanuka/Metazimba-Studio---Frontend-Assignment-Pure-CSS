import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Services from './Components/ServicesComponent/Services';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className='main'>
      <div className='bg-img'>
        <div className='App'>
          <header className='App-header'>
            <div className='navbarmain'>
              <Navbar />
              <Header />
            </div>
          </header>
        </div>
      </div>
      <div className='services'>
        <Services />
      </div>
      <Footer />
    </div>
  );
}

export default App;
