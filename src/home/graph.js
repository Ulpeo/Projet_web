import './graph.css';
import '../Polices/police.css';
import {Bar} from "react-chartjs-2"

const dat ={
    labels:["Janvier", "Février", "Mars", "Avril", "Mai","Juin", "Juillet", "Août","Septembre","Octobre","Novembre","Decembre"],
    datasets:[
        {
            label:"Nombre de containers au port",
            data:["150","100","120","130","135","142","70","200","195","185","147","123"],
        },
    ],
}
function Graph(){
    return(
        <div className="graph">
            <h2 className="alata">Suivi du stock de containers</h2>
            
            
        </div>
    )
}

export default Graph;