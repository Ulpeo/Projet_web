import './pilote.css';
//import { map, split } from 'lodash';
//import React from 'react';

/* Data reçu :
-Identifier
-Fname
-Lname
-NextM
-PreM
-Available
 */
/*getList= () => {
    axios.get(BACKEND_BASE_URL).then((data) => data.data && data.data.movies && this.setState({ movies: data.data.movies }));
}*/

//affiche seulement les données nécessaire pour le dashboard

function Pilote(){

    this.props = undefined;


    const {infos, deletePilote} = this.props;
    this.renderInfo = function (label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }
    const {Identifier, firstName,lastName,available} = infos;
    return(

        <div className="pilote">
             <h2 className="alata">Pilotes</h2>
                <p>coucou je suis là</p>
                <div className={'infosPilote'}>
               
               {this.renderInfo('Identifier',Identifier)}
               {this.renderInfo('Fname',firstName)}
               {this.renderInfo('Lname',lastName)}
               {this.renderInfo('available',available)}
           </div>


        </div>
    )
}

export default Pilote;