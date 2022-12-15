/*//import pilote from "./pilote";
//import axios from 'axios';
//import { map } from 'lodash';
const BACKEND_BASE_URL = "http://localhost:3000/Pilote/";
*/



import {useState} from "react";
import axios from "axios";
import setData from "lodash/_setData";
const BACKEND_BASE_URL = "http://localhost:3001/Pilote/";
function Modifpilote() {
    const {addInput, setData} = useState({
        id: '',
        firstName: '',
        lastName: '',
        nextMision: '',
        previousMission: '',
        available: ''
    });

    function submit(e) {
        e.preventDefault();
        axios.put(BACKEND_BASE_URL, {
            identifier: addInput.id,
            firstName: addInput.firstName,
            lastName: addInput.lastName,
            nextMission: addInput.nextMission,
            previousMission: addInput.previousMission,
            available: addInput.available
        }).then((data) => this.getList());

    }

    function handleInfo(e) {
        const newPilote = {...addInput}
        newPilote[e.target.id] = e.target.value
        setData(newPilote)
    }

    return (
        <form onSubmit={(e) => submit(e)}>

            <label className="alata">
                ID :
                <input type="text" name="addId" placeholder="ID" onChange={(e) => handleInfo(e)} value={addInput.id}/>
            </label>
            <br/>
            <label className="alata">
                Nom :
                <input type="text" name="surname" placeholder="Nom" onChange={(e) => handleInfo(e)}
                       value={addInput.lastName}/>
            </label>
            <br/>
            <label className="alata">
                Prénom :
                <input type="text" name="name" placeholder="Prénom" onChange={(e) => handleInfo(e)}
                       value={addInput.firstName}/>
            </label>
            <br/>
            <label for="start" className="alata">Date de départ de la prochaine mission:

                <input type="date" id="start" name="trip-start"
                       min="2018-01-01" max="2025-12-31" onChange={(e) => handleInfo(e)}
                       value={addInput.nextMision}></input>
            </label>
            <label for="end" className="alata">Date de fin de la prochaine mission:

                <input type="date" id="end" name="trip-end"
                       min="2018-01-01" max="2025-12-31" onChange={(e) => handleInfo(e)}
                       value={addInput.previousMission}></input>
            </label>
            <br/>
            <label className="alata">
                Disponible ?
                <form name="form1" className="quicksand">
                    Oui<input type="radio" name="dispo" checked onChange={(e) => handleInfo(e)}
                              value={addInput.available = "oui"}/>
                    Non <input type="radio" name="dispo" onChange={(e) => handleInfo(e)}
                               value={addInput.available = "non"}/>

                </form>

            </label>
            <br/>

            <input className="bouton" type="submit" value="Modifier"/>
            <input className="bouton" type="submit" value="Ajouter"/>
        </form>


    )
}

export default Modifpilote;