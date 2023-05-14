import './Leagues.css'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import MenuContainer from "../components/MenuContainer";
import axios from "axios";
import { image } from "ionicons/icons";






const Leagues = () => {
  
   
    const [data , setData] = useState<any[]>([])   //([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://www.scorebat.com/video-api/v3/feed/?token=ODUwNjFfMTY4NDAxNjE1MF80MzBlMTFmYmJkNDE0YzRjNWEyZjJmNzI3NzM5MTIxZWFjZjcwNjcw",
        })
        .then((res)=> {
            console.log(res.data);
            setData(res.data.response);
        })
        .catch((e) =>console.log(e));
    }, []);
    
    return (
    
     
        
        <IonPage>
            
            <IonHeader>              
                <IonToolbar>
                    <IonMenuButton slot="start"></IonMenuButton>
                    <IonTitle slot="end">Videos partidos</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
            <div className="content-container">
                {data.map((item)=>(
                    <div className="itemDiv" key={item.title} onClick={()=>window.open(item.matchviewUrl)}>
                        <div className="itemHeading"><h4>{item.title}</h4></div>
                        <div className="itemImage">
                            <img src={item.thumbnail} alt="#"/>
                        </div>

                    </div>
                ))}
                </div>
            

                             
            </IonContent>
        </IonPage>
    );
    
};

export default Leagues;