import "./set.css"
import "../Polices/police.css"
import image from "./loupe.png"

import Modifpilote from "./Modifpilote"
import Modifboat from "./Modifboat.js";
import Modifcont from "./Modifcont";

import pilote from "../home/pilote";
//import boat from "../home/boat";
//import boat from "../home/container";

import PiloteSet from "./piloteSet";
import React, {Component, useState} from "react";
import axios from "axios";
import {map} from "lodash";
import Pilote from "../home/pilote";

const BACKEND_BASE_URL = "http://localhost:3001/Pilote/";

class Set extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: 'Modifpilote',
            addPiloteInput: '',
            id: '',
            firstName: '',
            lastName: '',
            nextMision: '',
            previousMission: '',
            available: ''
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList = () => {
        axios.get(BACKEND_BASE_URL).then((data) => data.data && data.data.pilotes && this.setState({pilotes: data.data.pilotes}));
    }
    deletePilote = (id) => {
        axios.delete(`${BACKEND_BASE_URL}/${id}`).then((data) => this.getList());
    }
    addPilote = () => {
        axios.put(BACKEND_BASE_URL, {Identifier: this.state.id,
        pilote: this.state.firstName}).then((data) => this.getList());
    }
    addPiloteInput = event => {
        this.setState({id: event.target.value})
        this.setState({firstName: event.target.value})
        this.setState({lastName: event.target.value})
        this.setState({nextMission: event.target.value})
        this.setState({previousMission: event.target.value})
        this.setState({available: event.target.value})
    }
    addDateInput = events =>{
        this.setState({nextMission: events.target.value})
        this.setState({previousMission: events.target.value})
    }

    renderCategory = (label, action) => {
        return (<div className='category'>
            <button text={label} onLoad={action}/>
        </div>)
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
        const {pilotes,id, firstName, lastName, nextMission, previousMission, available } = this.state;
        if (this.state.type === 'Modifpilote') {
            return (
                <div className="back">
                    <div className="left">
                        <div className="boutons">
                            <div className="marg">
                                <button className="bouton" onClick={this.modifBoat.bind(this)}>Bateaux</button>
                            </div>
                            <div className="marg">
                                <button className="bouton" onClick={this.modifPilote.bind(this)}>Pilotes</button>
                            </div>
                            <div className="marg">
                                <button className="bouton" onClick={this.modifCont.bind(this)}>Containers</button>
                            </div>
                        </div>
                        <form>
                            <label className="searchclass">

                                <input type="text" name="search" placeholder="Rechercher"/>
                            </label>

                        </form>
                        <div className={'piloteDisplay'}>
                            {this.renderCategory('Refresh', this.getList())}
                            <div className="pi">{map(pilotes, (pilote, index) => <PiloteSet key={`pilote-${index}`}
                                                                                            infos={pilote}
                                                                                            deletePilote={() => this.deletePilote(pilote['_id'])}/>)}</div>
                        </div>


                    </div>

                    <div className="right">
                        <h2 className="alata">Modifier les informations</h2>
                        <form>

                            <label className="alata">
                                ID :
                                <input type="text" name="addId" placeholder="ID" onChange={this.addPiloteInput} value={id}/>
                            </label>
                            <br/>
                            <label className="alata">
                                Nom :
                                <input type="text" name="surname" placeholder="Nom" onChange={this.addPiloteInput} value={firstName}/>
                            </label>
                            <br/>
                            <label className="alata">
                                Prénom :
                                <input type="text" name="name" placeholder="Prénom" onChange={this.addPiloteInput} value={lastName}/>
                            </label>
                            <br/>
                            <label htmlFor="start" className="alata">Date de départ de la prochaine mission:

                                <input type="text" id="start" name="trip-start"
                                       onChange={this.addDateInput} value={nextMission}></input>
                            </label>
                            <label htmlFor="end" className="alata">Date de fin de la prochaine mission:

                                <input type="text" id="end" name="trip-end"
                                        onChange={this.addDateInput} value={previousMission}></input>
                            </label>
                            <br/>
                            <label className="alata">
                                Disponible ?
                                <form name="form1" className="quicksand">
                                    Oui<input type="radio" name="dispo"  onChange={this.addPiloteInput} value={available}/>
                                    Non <input type="radio" name="dispo"  onChange={this.addPiloteInput} value={available}/>

                                </form>

                            </label>
                            <br/>

                            <input className="bouton" type="submit" value="Modifier"/>
                            <input className="bouton" type="submit" value="Ajouter" onClick={this.addPilote}/>
                        </form>

                    </div>
                </div>
            )
        } else if (this.state.type === 'Modifboat') {
            return (
                <div className="back">
                    <div className="left">
                        <div className="boutons">
                            <div className="marg">
                                <button className="bouton" onClick={this.modifBoat.bind(this)}>Bateaux</button>
                            </div>
                            <div className="marg">
                                <button className="bouton" onClick={this.modifPilote.bind(this)}>Pilotes</button>
                            </div>
                            <div className="marg">
                                <button className="bouton" onClick={this.modifCont.bind(this)}>Containers</button>
                            </div>
                        </div>
                        <form className="loupe">
                            <label className="searchclass">

                                <input type="text" name="search" placeholder="Rechercher"/>
                            </label>

                        </form>


                    </div>
                    <div className="right">
                        <h2 className="alata">Modifier les informations</h2>
                        <Modifboat/>
                    </div>
                </div>
            )
        } else if (this.state.type === 'Modifcont') {
            return (
                <div className="back">
                    <div className="left">
                        <div className="boutons">
                            <div className="marg">
                                <button className="bouton" onClick={this.modifBoat.bind(this)}>Bateaux</button>
                            </div>
                            <div className="marg">
                                <button className="bouton" onClick={this.modifPilote.bind(this)}>Pilotes</button>
                            </div>
                            <div className="marg">
                                <button className="bouton" onClick={this.modifCont.bind(this)}>Containers</button>
                            </div>
                        </div>

                        <form>
                            <label className="searchclass">

                                <input type="text" name="search" placeholder="Rechercher"/>
                            </label>

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