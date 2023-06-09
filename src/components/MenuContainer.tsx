import React from 'react';
import { IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './MenuContainer.css'
import {football, home} from 'ionicons/icons'

function Menu() {
    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    <IonList>
                        <IonMenuToggle >
                            <IonItem routerLink='/Home' lines='none'>
                                <IonIcon slot='start' icon={home}/>
                                <IonLabel>Home</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                        <IonMenuToggle >
                            <IonItem routerLink='/Leagues' lines='none'>
                                <IonIcon icon={football} slot='start' />
                                <IonLabel>Videos partidos</IonLabel>
                            </IonItem>
                        </IonMenuToggle>
                    </IonList>
                </IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar  >
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle size='large' slot='end'>Football App ⚽</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding"></IonContent>
            </IonPage>
        </>
    );
}
export default Menu;