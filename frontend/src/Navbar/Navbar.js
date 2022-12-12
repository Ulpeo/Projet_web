import './navbar.css';
import logo from './Group2.svg';
import photo from './photo.svg';
import settings from './settings.svg';
import '../Polices/police.css';
import { useNavigate } from 'react-router-dom';

function Navbar() {

  const navigate = useNavigate();

  const navigateToSettings = () =>{
    navigate('/settings');};

  const navigateToHome = () =>{
    navigate('/');
  };

  return (
    <div className="test">
      <div className="col-sm-4 col-md-2" >
      <button className="logo" onClick={navigateToHome}> <img src={logo}/></button></div>
      <div className="col-sm-6 col-md-8 "><p className="alata">Lundi 26 Novembre</p></div>
      <button className="setting" onClick={navigateToSettings}><img src={settings}/></button>
      <img className="col-1" id="photo" src={photo} alt="photo"/>
    </div>
  );
}

export default Navbar;