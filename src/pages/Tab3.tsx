import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Live</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Live</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />
		<iframe title="M" src="https://realitateafm.net/radiochannel/realitatea-fm/" width="100%" height="100%">Browser not compatible.</iframe>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
