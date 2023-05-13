import { IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import MenuContainer from "../components/MenuContainer";



const Standings: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>              
                <IonToolbar>
                    <IonMenuButton slot="start"></IonMenuButton>
                    <IonTitle slot="end">Standings</IonTitle>
                </IonToolbar>
            </IonHeader>
        </IonPage>
    );
};

export default Standings;