import Map from './Map';
import Pilote from './pilote';
import Meteo from './meteo';
import Maree from './maree';
import Port from './port';
import Graph from './graph';
import Navbar from './Navbar';
import './index.css';

function Home(){
    return(
        <div>
        <Navbar />
        <div className="container">
          <div className="ma"><Map /></div>
          <div className="child">
            <div className="pi"><Pilote /></div>
            <div className="groupe"><div className="mm">
              <Meteo />
              <Maree />
            </div>
              <div className="po"><Port /></div>
            </div>
  
            <div className="gr"><Graph /></div>
          </div>
  
        </div>
      </div>
    )
}

export default Home;