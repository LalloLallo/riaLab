import './Leagues.css'
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonList, IonMenuButton, IonPage, IonTitle, IonToolbar, IonSearchbar } from "@ionic/react";
import React, { useEffect, useState } from "react";
import MenuContainer from "../components/MenuContainer";
import axios from "axios";
import { image, planet } from "ionicons/icons";






const Leagues = () => {
  
    const [search , setSearch] = useState('')
    const [data , setData] = useState<any[]>([])

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
                    <div className="contenedor-busqueda">
                    <input type="text" className='input-buscar' placeholder='Buscar partido' onChange={(e) =>setSearch(e.target.value) }/>
                    </div>
                </IonToolbar>
            </IonHeader>
            <IonContent class="background">
          
          
            
            <div className="content-container">
                {data.filter((item)=>{
                   return search.toLocaleLowerCase() === '' ? item : item.title.toLowerCase().includes(search);
                }).map((item)=>(
                    <div className="itemDiv" key={item.title} onClick={()=>window.open(item.matchviewUrl)}>
                        <div className="itemLiga">{item.competition}</div>
                        <div className="itemHeading">{item.title}</div>
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