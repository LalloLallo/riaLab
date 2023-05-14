import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import MenuContainer from '../components/MenuContainer';
import Standings from './Standings';
import Leagues from './Leagues';



const Home: React.FC = () => {
  

  return (
    <IonPage >
      <IonContent >
        <MenuContainer></MenuContainer>
      </IonContent>
      
    </IonPage>
  );
};

export default Home;
