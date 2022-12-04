

function Modifcont(){
    return(
        <form>
        <label className="alata">
           ID :
           <input type="text" name="id" placeholder="ID" />
       </label>
       <br />
       <label className="alata">
           Nom du bateau :
           <input type="text" name="name" placeholder="Nom du bateau" />
       </label>
       <br />
       <label className="alata">
           EQP/EVP :
           <input type="text" name="eqpevp" placeholder="EQP/EVP" />
       </label>
       <br/>
       <label className="alata">
           Matière transportée :
           <input type="text" name="matiere" placeholder="Matière transportée" />
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

       <input className="modifier" type="submit" value="Modifier" />
   </form>
    )
}

export default Modifcont;