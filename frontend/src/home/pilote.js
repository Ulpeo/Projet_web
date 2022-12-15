import './pilote.css';

import React from "react";
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





export default class Pilote extends React.Component {
    renderInfo(label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }



    render() {
        const { infos} = this.props;
        const { Identifier, firstName, lastName, nextMission, previousMission, available } = infos;


        return (
            <div className='pilote'>

                <div className='infos'>
                    {this.renderInfo('Identifier', Identifier)}
                    {this.renderInfo('firstName', firstName)}
                    {this.renderInfo('lastName', lastName)}
                    {this.renderInfo('nextMission', nextMission)}
                    {this.renderInfo('prevousMission', previousMission)}
                    {this.renderInfo('available',available)}
                </div>

            </div>)
    }
}


/*

function Pilote(){

   


    const {infos} = this.use;
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

                <div className={'infosPilote'}>
               
               {this.renderInfo('Identifier',Identifier)}
               {this.renderInfo('Fname',firstName)}
               {this.renderInfo('Lname',lastName)}
               {this.renderInfo('available',available)}
           </div>


        </div>
    )
}

export default Pilote;*/