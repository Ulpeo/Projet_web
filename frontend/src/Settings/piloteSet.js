import '../home/pilote.css';
import {Button} from "../stories/Button";
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

//affiche toutes les data pour modifier


function piloteSet(){

    this.props = undefined;


    const {infos, deletePilote} = this.props;
    this.renderInfo = function (label, info) {
        return (<div className='infoLine'>
            <div className='infoLabel'>{label}</div>
            <div className='info'>{info}</div>
        </div>);
    }
    const {Identifier, firstName,lastName, nextMission,previousMission,available} = infos;
    return(

        <div className="pilote">
            <h2 className="alata">Pilotes</h2>

            <img src={"iconPilote"} alt={'icon'}/>
            <div className={'infosPilote'}>
            {this.renderInfo('Identifier',Identifier)}
            {this.renderInfo('Fname',firstName)}
            {this.renderInfo('Lname',lastName)}
            {this.renderInfo('nextMission',nextMission)}
            {this.renderInfo('previousMission',previousMission)}
            {this.renderInfo('available',available)}
        </div>
            <button text={'Delete movie'} onClick={() => deletePilote(Identifier)}/>

        </div>
    )
}

export default piloteSet;