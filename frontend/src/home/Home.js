import Map from './Map';
import Pilote from './pilote';
import Meteo from './meteo';
import Maree from './maree';
import Port from './port';
import Graph from './graph';
import Navbar from '../Navbar/Navbar';
import './home.css';
//import {useState} from "react";
import React from 'react';
import axios from 'axios';
import { map } from 'lodash';
//import {Button} from "../stories/Button";

//rajouter axios getList pour Pilote, Boats et container
/*getList= () => {
  axios.get(BACKEND_BASE_URL).then((data) => data.data && data.data.movies && this.setState({ movies: data.data.movies }));
}*/



const BACKEND_BASE_URL = "http://localhost:3001/Pilote";

export default class Home extends React.Component{
  constructor() {
    super();

    this.state = {
      pilotes: []

    }
  }

  componentDidMount() {
    this.getList();
  }

  getList= () => {
    axios.get(BACKEND_BASE_URL).then((data) => data.data && data.data.pilotes && this.setState({ pilotes: data.data.pilotes }));
  }
  renderCategory = (label, action) => {
    return (<div className='category'>
      <button text={label} onLoad={action} />
    </div>)
  }

  render() {
    const { pilotes} = this.state;
    return (
            <div>
              {this.renderCategory('Refresh',this.getList())}
              <Navbar />
              <div className="container">
                <div className="ma">
                  <Map/>
                </div>
                <div className="child">
                  <div className="pi">{map(pilotes,(pilote,index)=><Pilote key={`pilote-${index}`} infos={pilote} />)}</div>
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

}
/*
function Home() {
  const { pilotes} = useState();
  function componentDidMount() {
    this.getList =() => {
      axios.get(BACKEND_BASE_URL).then((data) => data.data && data.data.pilotes && this.setState({ pilotes: data.data.pilotes }));

    }
  }


  //const { boats, onlaod} = this.state;
  //const { caontainer, onlaod} = this.state;
  return (

    <div onLoad={componentDidMount}>

      <Navbar />
      <div className="container">
        <div className="ma">
          <Map/>
        </div>
        <div className="child">
          <div className="pi">{map(pilotes,(pilote,index)=><Pilote key={`pilote-${index}`} infos={pilote} />)}</div>
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

export default Home;*/