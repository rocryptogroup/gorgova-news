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


	<h1>www.Gorgova.ro</h1>
	<a>admin@gorgova.ro</a><p></p>


	<div>Sat Gorgova, Comuna </div>
	<div>Maliuc, Judetul Tulcea,</div>
	<div>Str Dunarii, No 33, Romania</div>


      </IonContent>
    </IonPage>
  );
};

export default Tab3;
