import "./set.css"
import "../Polices/police.css"
import image from "./loupe.png"

import Modifpilote from "./Modifpilote"
import Modifboat from "./Modifboat.js";
import Modifcont from "./Modifcont";
import {Component, useState} from "react";

class Set extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'Modifpilote'
        }
    }

    modifPilote() {
        this.setState({
            type: 'Modifpilote'
        })
    }

    modifBoat() {
        this.setState({
            type: 'Modifboat'
        })
    }

    modifCont() {
        this.setState({
            type: 'Modifcont'
        })
    }

    render() {
        if (this.state.type === 'Modifpilote') {
            return (
                <div className="back">
                    <div className="left">
                    <div className="boutons">
                        <div className="marg"><button className="bouton" onClick={this.modifBoat.bind(this)}>Bateaux</button></div>
                        <div className ="marg"><button className="bouton" onClick={this.modifPilote.bind(this)}>Pilotes</button></div>
                        <div className="marg"><button className="bouton" onClick={this.modifCont.bind(this)}>Containers</button></div>
                        </div>
                        <form>
                            <label className="searchclass">

                                <input type="text" name="search" placeholder="Rechercher"/>
                            </label>
                            <input type="image" src={image} value="clicImage"/>
                        </form>
                    </div>
                    <div className="right">
                        <h2 className="alata">Modifier les informations</h2>
                        <Modifpilote/>
                    </div>
                </div>
            )
        }else if (this.state.type === 'Modifboat'){
            return (
                <div className="back">
                    <div className="left">
                    <div className="boutons">
                        <div className="marg"><button className="bouton" onClick={this.modifBoat.bind(this)}>Bateaux</button></div>
                        <div className ="marg"><button className="bouton" onClick={this.modifPilote.bind(this)}>Pilotes</button></div>
                        <div className="marg"><button className="bouton" onClick={this.modifCont.bind(this)}>Containers</button></div>
                        </div>
                        <form className="loupe">
                            <label className="searchclass">

                                <input type="text" name="search" placeholder="Rechercher"/>
                            </label>
                            <input type="image" src={image} value="clicImage"/>
                        </form>
                    </div>
                    <div className="right">
                        <h2 className="alata">Modifier les informations</h2>
                        <Modifboat/>
                    </div>
                </div>
            )
        }else if (this.state.type === 'Modifcont'){
            return (
                <div className="back">
                    <div className="left">
                        <div className="boutons">
                        <div className="marg"><button className="bouton" onClick={this.modifBoat.bind(this)}>Bateaux</button></div>
                        <div className ="marg"><button className="bouton" onClick={this.modifPilote.bind(this)}>Pilotes</button></div>
                        <div className="marg"><button className="bouton" onClick={this.modifCont.bind(this)}>Containers</button></div>
                        </div>
                        
                        <form>
                            <label className="searchclass">

                                <input type="text" name="search" placeholder="Rechercher"/>
                            </label>
                            <input type="image" src={image} value="clicImage"/>
                        </form>
                        
                    </div>
                    <div className="right">
                        <h2 className="alata">Modifier les informations</h2>
                        <Modifcont/>
                    </div>
                </div>
            )
        }

    }

}

export default Set;