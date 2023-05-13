import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import MenuContainer from "../components/MenuContainer";
import axios from "axios";
import { image } from "ionicons/icons";






const Leagues: React.FC = () => {
  
   
    const [data , setData] = useState([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: "https://www.scorebat.com/video-api/v3/feed/?token=ODUwNjFfMTY4NDAxNjE1MF80MzBlMTFmYmJkNDE0YzRjNWEyZjJmNzI3NzM5MTIxZWFjZjcwNjcw",
        }).then(res=> {
            console.log(res.data);
        })
    }, []);
    
            
/*         <div className="leagues-container"> 
    {data.map((data) => (
        <div key={data.id} className="leagues">
            <img src={data.logos.light} alt="#"/>
            <h1>{data.name}</h1>
        </div>
    ))}
</div>  */
        

                    
    return (
        
        
        <IonPage>
            
            <IonHeader>              
                <IonToolbar>
                    <IonMenuButton slot="start"></IonMenuButton>
                    <IonTitle slot="end">Leagues</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
   
            

                             
            </IonContent>
        </IonPage>
    );
    
};

export default Leagues;