import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Cotele Apelor Dunarii</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />

	<iframe title="Cotele Apelor Dunarii" src="https://gorgova.ro/cotele-apelor-dunarii/" width="100%" height="100%">Browser not compatible.</iframe>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
