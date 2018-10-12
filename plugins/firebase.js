import firebase from 'firebase/app';
import 'firebase/firestore';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDemX_yG-2ZDJCwvpcY-H2MaovvOY1TiXg",
    authDomain: "innovaciondocente-utpl.firebaseapp.com",
    databaseURL: "https://innovaciondocente-utpl.firebaseio.com",
    projectId: "innovaciondocente-utpl",
    storageBucket: "innovaciondocente-utpl.appspot.com",
    messagingSenderId: "1011505668181"
  })
}

firebase.firestore().settings({
  timestampsInSnapshots: true
})

const AFirestore = firebase.firestore();

const MetaCollection = AFirestore.collection('meta');

const IndexDocument = MetaCollection.doc('index');

// programa-formacion
const ProgramaFormacionDocument = AFirestore
  .collection("formacion-docente")
  .doc("programa-formacion");
const CursosCollection = ProgramaFormacionDocument.collection('cursos')
  .orderBy('date', 'desc')
  .orderBy('postulation.date', 'desc');
const TipsExpertosCollection = ProgramaFormacionDocument.collection('tips')
  .orderBy('added', 'desc');

// cafe-cientifico
const CafeCientificoDocument = AFirestore
  .collection("formacion-docente")
  .doc("cafe-cientifico");
const EncuentrosCollection = CafeCientificoDocument
  .collection("encuentros").orderBy("date", "desc");

// observatorio
const EdutendenciasDocument = AFirestore
  .collection('observatorio')
  .doc('edutendencias');
const TipsCollection = EdutendenciasDocument.collection('tips');
export {
  AFirestore,
  IndexDocument,
  ProgramaFormacionDocument,
  CursosCollection,
  CafeCientificoDocument,
  TipsExpertosCollection,
  EncuentrosCollection,
  EdutendenciasDocument,
  TipsCollection
}
