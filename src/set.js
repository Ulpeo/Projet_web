import "./set.css"
import "./police.css"
import image from "./loupe.png"

import Modifpilote from "./Modifpilote"
import Modifboat from "./Modifboat.js";

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
                <Modifboat/>
                
                    </div>
                    </div>
                    )
}

                    export default Set;

