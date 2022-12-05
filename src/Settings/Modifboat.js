

function Modifboat(){
    return(
        <form>
             <label className="alata">
                ID :
                <input type="text" name="id" placeholder="ID" />
            </label>
            <br />
            <label className="alata">
                Nom :
                <input type="text" name="name" placeholder="Nom" />
            </label>
            <br />
            <label className="alata">
                Compagnie :
                <input type="text" name="compagnie" placeholder="Compagnie" />
            </label>
            <br/>
            <label className="alata">
                EVP :
                <input type="text" name="evp" placeholder="EVP" />
            </label>
            <br />
            <label className="alata">
                Chargé ?
                <form name="form1" className="quicksand">
                    Oui<input type="radio" name="charge" checked value="Oui" />
                    Non <input type="radio" name="charge" value="Non" />

                </form>

            </label>
            <br />

            <input className="bouton" type="submit" value="Modifier" />
        </form>
    )
}

export default Modifboat;