import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
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
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />

	<iframe title="Cotele Apelor Dunarii" src="https://www.afdj.ro/sites/default/files/bhcote.pdf" width="100%" height="100%">Browser not compatible. Please Contact Owner admin@gorgova.ro</iframe>
	
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
