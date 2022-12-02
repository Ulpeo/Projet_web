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
                <h2 className="Alata">Modifier les informations</h2>

                <form>

                    <label className="Alata">
                        ID :
                        <input type="text" name="id" placeholder="ID" />
                    </label>
                    <br />
                    <label className="Alata">
                        Nom :
                        <input type="text" name="surname" placeholder="Nom" />
                    </label>
                    <br />
                    <label className="Alata">
                        Prénom :
                        <input type="text" name="name" placeholder="Prénom" />
                    </label>
                    <br />
                    <label for="start">Date de départ de la prochaine mission:

                        <input type="date" id="start" name="trip-start"
                            value="2022-11-22"
                            min="2018-01-01" max="2025-12-31"></input>
                    </label>
                    <input type="submit" value="Envoyer" />
                </form>
            </div>
        </div>
    )
}

export default Set;