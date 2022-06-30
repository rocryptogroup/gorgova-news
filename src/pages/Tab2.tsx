import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Adancimi Minime Efective</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />

	<iframe title="Adancimi Minime Efective" src="https://www.afdj.ro/sites/default/files/adancimisub4metri.pdf" width="100%" height="100%">Browser not compatible. Please Contact Owner admin@gorgova.ro</iframe>

      </IonContent>
    </IonPage>
  );
};

export default Tab2;
