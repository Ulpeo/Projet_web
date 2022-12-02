import './navbar.css';
import logo from './Group2.svg';
import photo from './photo.svg';
import settings from './settings.svg';
import './police.css';

function Navbar() {
  return (
    <div className="test">
      <img className="col-sm-4 col-md-2" src={logo} alt="logo"/>
      <div className="col-sm-6 col-md-8 "><p className="alata">Lundi 26 Novembre</p></div>
      <img className="col-1" id="set" src={settings} alt="settings"/>
      <img className="col-1" id="photo" src={photo} alt="photo"/>
    </div>
  );
}

export default Navbar;