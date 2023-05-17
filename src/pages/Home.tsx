import './Home.css'
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonMenuButton } from '@ionic/react';
import React, { useState,useEffect } from 'react';
import MenuContainer from '../components/MenuContainer';
import axios from "axios";
import Leagues from './Leagues';



const Home = () => {
  const [search , setSearch] = useState('')
  const [data , setData] = useState<any[]>([])

  useEffect(() => {
    axios({
        method: "GET",
        url: "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=d93b91b51ee47c5ba3de772672db37bf7e2404fce54e568b8a9cc5bbd688895d",
    })
    .then((res)=> {
        console.log(res.data);
        setData(res.data.result);
    })
    .catch((e) =>console.log(e));
}, []);

  return (
    <IonPage >
        <IonHeader> 
          <IonToolbar> 
           <IonMenuButton slot="start"></IonMenuButton>
           <div className="contenedor-busqueda">
              <input type="text" className='input-buscar' placeholder='🔍 Buscar partido en vivo' onChange={(e) =>setSearch(e.target.value) }/>
           </div>
        </IonToolbar> 
      </IonHeader>  


      <IonContent className='pagina' >
      
        <div className="contenedor">
          {data.filter((item)=>{
            return search.toLocaleLowerCase() === '' ? item : item.event_home_team.toLowerCase().includes(search) || item.event_away_team.toLowerCase().includes(search);}).map((item)=>(
              <div className="partidos">
               
                <div className="header-partidos">
                  <div className="estado">En juego</div>
                  <center><div className="nombre-liga"><strong>{item.league_name}</strong></div></center>
                  <center><div className="liga"><img src={item.league_logo}/></div></center>
                  
                </div>
                
                <div className="contenedor-partidos">
                  
                  <div className="column">
                    <div className="equipo-local">
                    <h2 className="nombre-equipo"> <strong>{item.event_home_team}</strong></h2>
                      <div className="escudo">   
                        <img src= {item.home_team_logo} />
                      </div>
                      
                    </div>
                  </div>
                

                  <div className="column">
                    <div className="datos-partido">
                      <div className="resultado">
                        <span className="resultado">{item.event_final_result}</span>
                      </div>
                      <div className="tiempo">{item.event_status}'</div>
                      <center><div className="estadio"><strong>{item.event_stadium}</strong></div></center>
                      
                    </div>
                  </div>

                  <div className="column">
                      <div className="equipo-visitante">
                      <h2 className="nombre-equipo"> <strong>{item.event_away_team}</strong></h2>
                        <div className="escudo">
                          <img src= {item.away_team_logo} />
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </div>
                    
              ))}
        </div>

		
        
	
		
		
			



	
      </IonContent>
    </IonPage>
  );
};

export default Home;
