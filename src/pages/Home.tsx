import './Home.css'
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar, IonMenuButton } from '@ionic/react';
import React, { useState,useEffect } from 'react';
import MenuContainer from '../components/MenuContainer';
import Standings from './Standings'
import axios from "axios";
;
import Leagues from './Leagues';



const Home = () => {
  
  const [data , setData] = useState<any[]>([])

  useEffect(() => {
    axios({
        method: "GET",
        url: "https://apiv2.allsportsapi.com/football/?met=Livescore&APIkey=d93b91b51ee47c5ba3de772672db37bf7e2404fce54e568b8a9cc5bbd688895d",
    })
    .then((res)=> {
        console.log(res.data);
        setData(res.data.response);
    })
    .catch((e) =>console.log(e));
}, []);

  return (
    <IonPage >
        <IonHeader> 
          <IonToolbar> 
           <IonMenuButton slot="start"></IonMenuButton>
        </IonToolbar> 
      </IonHeader>  


      <IonContent >
      
        <div className="content-container">
          {data?.map((item)=>(
              <div className="itemDiv" key={item.event_key}>
                <div className="pais">{item.country_name.value}</div>
              </div>
            ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
