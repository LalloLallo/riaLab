import './LigaDePartido.css'
import { Link, useParams, RouteComponentProps } from 'react-router-dom';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonMenuButton } from '@ionic/react';
import React, { useState,useEffect } from 'react';
import MenuContainer from '../components/MenuContainer';
import axios from "axios";

interface DetalleLiga extends RouteComponentProps<{ligaID: string, ligaNombre: string;}> {}


const Home : React.FC<DetalleLiga> = ({ match }) => {
    const ligaID = match.params.ligaID;
    const ligaNombre = match.params.ligaNombre;
    console.log(ligaNombre)
    
    const [data , setData] = useState<any[]>([''])

  useEffect(() => {
    axios({
        method: "GET",
        url: `https://apiv2.allsportsapi.com/football/?&met=Standings&leagueId=${ligaID}&APIkey=014a7a45a3c297d138622a29fa4b2aa7d4c52c8043457cb13ea9632cc60e5e62`,
    })
    .then((res)=> {
        console.log(res.data);
        setData(res.data.result.total);
    })
    .catch((e) =>console.log(e));
}, []);

    return (
    <IonPage className='pagina' >
        <IonHeader> 
            <IonToolbar> 
                <center>{ligaNombre}</center>
            </IonToolbar> 
        </IonHeader>  

        <IonContent className='contenido' >
        <div className='contenedorGeneral'>
            <div className="tituloequipos">
                <div className="column">
                    <div className='tituloposicion'>Posicion</div>
                </div>
                <div className="column">
                    <div className='titulonombreequipo'>Equipo</div>
                </div>
                <div className="column">
                        <div className='tituloganados'>Ganados</div>
                    </div>
                    <div className="column">
                        <div className='tituloempatados'>Empatados</div>
                    </div>
                    <div className="column">
                        <div className='tituloperdidos'>Perdidos</div>
                    </div>
                <div className="column">
                    <div className='titulopuntos'>Puntos</div> 
                </div>
            </div>   
                            
            {data.map((item)=>(
                <div className="equipos">
                    <div className="column">
                        <div className='posicion'>{item.standing_place}</div>
                    </div>
                    <div className="column">
                        <div className='nombreequipo'>{item.standing_team}</div>
                    </div>
                    <div className="column">
                        <div className='ganados'>{item.standing_W}</div>
                    </div>
                    <div className="column">
                        <div className='empatados'>{item.standing_D}</div>
                    </div>
                    <div className="column">
                        <div className='perdidos'>{item.standing_L}</div>
                    </div>
                    <div className="column">
                        <div className='puntos'>{item.standing_PTS}</div> 
                    </div>
                </div>
            ))}
        </div>
        </IonContent>
    </IonPage>
  );
};

export default Home;
