import "./set.css"
import "./police.css"
import image from "./loupe.png"

function Set() {
    return (
        <div className="back">
            <div className="left">
                <form>
                    <label className="searchclass">

                        <input type="text" name="search" placeholder="Rechercher" />
                    </label>
                    <input type="image" src={image} value="clicImage" />
                </form>
            </div>
            <div className="right">
                <h2 className="alata">Modifier les informations</h2>

                <form>

                    <label className="alata">
                        ID :
                        <input type="text" name="id" placeholder="ID" />
                    </label>
                    <br />
                    <label className="alata">
                        Nom :
                        <input type="text" name="surname" placeholder="Nom" />
                    </label>
                    <br />
                    <label className="alata">
                        Prénom :
                        <input type="text" name="name" placeholder="Prénom" />
                    </label>
                    <br />
                    <label for="start" className="alata">Date de départ de la prochaine mission:

                        <input type="date" id="start" name="trip-start"
                            min="2018-01-01" max="2025-12-31"></input>
                    </label>
                    <label for="end" className="alata">Date de fin de la prochaine mission:

                        <input type="date" id="end" name="trip-end"
                            min="2018-01-01" max="2025-12-31"></input>
                    </label>
                    <br/>
                    <label className="alata">
                        Disponible ?
                    <form name="form1" className="quicksand">
                            Oui<input type="radio" name="dispo" checked value="Oui"/ >
                            Non <input type="radio" name="dispo" value="Non" />
                                
                                </form>
                                </label>
                                <br/>

                                <input className="modifier" type="submit" value="Envoyer" />
                            </form>
                        </div>
                    </div>
                    )
}

                    export default Set;