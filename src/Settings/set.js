import "./set.css"
import "../Polices/police.css"
import image from "./loupe.png"

import Modifpilote from "./Modifpilote"
import Modifboat from "./Modifboat.js";
import Modifcont from "./Modifcont";

function Set() {

    return (
        <div className="back">
            <div className="left">
                <button>Bateaux</button>
                <button>Pilotes</button>
                <button>Containers</button>
                <form>
                    <label className="searchclass">

                        <input type="text" name="search" placeholder="Rechercher" />
                    </label>
                    <input type="image" src={image} value="clicImage" />
                </form>
            </div>
            <div className="right">
                <h2 className="alata">Modifier les informations</h2>
                <Modifcont />

            </div>
        </div>
    )
}

                    export default Set;