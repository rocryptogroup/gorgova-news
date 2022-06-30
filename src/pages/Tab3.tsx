import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Contact</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large"></IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />

		<iframe title="Contact" src="https://gorgova.ro/contact/" width="100%" height="100%" scrolling="yes" >Browser not compatible. Please Contact Owner admin@gorgova.ro</iframe>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
