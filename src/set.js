import "./set.css"
import "./police.css"
import image from "./loupe.png"
import {Component} from "react";
import axios from "axios";

class Set extends Component {
    constructor() {
        super();
        this.state = {
            Identifier: '',
            firstName: '',
            lastName: '',
            nextMission: '',
            previousMission: '',
            available: '',
        }
        this.changeId = this.changeId.bind(this)
        this.changeFirst = this.changeFirst.bind(this)
        this.changeLast = this.changeLast.bind(this)
        this.changeNext = this.changeNext.bind(this)
        this.changePrevious = this.changePrevious.bind(this)
        this.changeDispo = this.changeDispo.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeId(event) {
        this.setState({
            Identifier: event.target.value
        })
    }

    changeFirst(event) {
        this.setState({
            firstName: event.target.value
        })
    }

    changeLast(event) {
        this.setState({
            lastName: event.target.value
        })
    }

    changeNext(event) {
        this.setState({
            nextMission: event.target.value
        })
    }

    changePrevious(event) {
        this.setState({
            previousMission: event.target.value
        })
    }

    changeDispo(event) {
        this.setState({
            available: event.target.value
        })
    }

    onSubmit(event) {
        event.preventDefault()

        const registered = {
            Identifier: this.state.Identifier,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            nextMission: this.state.nextMission,
            previousMission: this.state.previousMission,
            available: this.state.available
        }

        axios.post('http://localhost:3001/app/Pilote',registered)
            .then(response => console.log(response.data))
this.state({
    Identifier: '',
    firstName: '',
    lastName: '',
    nextMission: '',
    previousMission: '',
    available: '',
})

    }

    render() {
        return (
            <div className="back">
                <div className="left">
                    <form>
                        <label className="searchclass">
                            <input type="text" name="search" placeholder="Rechercher"/>
                        </label>
                        <input type="image" src={image} value="clicImage"/>
                    </form>
                </div>
                <div className="right">
                    <h2 className="alata">Modifier les informations</h2>

                    <form onSubmit={this.onSubmit}>

                        <label className="alata">
                            ID :
                            <input type="text" name="id" placeholder="ID" onChange={this.changeId}
                                   value={this.state.Identifier}/>
                        </label>
                        <br/>
                        <label className="alata">
                            Nom :
                            <input type="text" name="surname" placeholder="Nom" onChange={this.changeLast}
                                   value={this.state.lastName}/>
                        </label>
                        <br/>
                        <label className="alata">
                            Prénom :
                            <input type="text" name="name" placeholder="Prénom" onChange={this.changeFirst}
                                   value={this.state.firstName}/>
                        </label>
                        <br/>
                        <label for="start" className="alata">Date de départ de la prochaine mission:

                            <input type="date" id="start" name="trip-start"
                                   min="2018-01-01" max="2025-12-31" onChange={this.changeNext}
                                   value={this.state.nextMission}></input>
                        </label>
                        <label for="end" className="alata">Date de fin de la prochaine mission:

                            <input type="date" id="end" name="trip-end"
                                   min="2018-01-01" max="2025-12-31" onChange={this.changePrevious}
                                   value={this.state.previousMission}></input>
                        </label>
                        <br/>
                        <label className="alata">
                            Disponible ?
                            <form name="form1" className="quicksand">
                                <input type={"radio"} name={"dispo"} onChange={this.changeDispo}
                                       value={this.state.available}/>Oui
                                <input type={"radio"} name={"dispo"} onChange={this.changeDispo}
                                       value={this.state.available}/> Non


                            </form>
                        </label>
                        <br/>

                        <input className="modifier" type="submit" value="Envoyer"/>
                    </form>
                </div>
            </div>
        )
    }
}

/*function Set() {

}*/

export default Set;