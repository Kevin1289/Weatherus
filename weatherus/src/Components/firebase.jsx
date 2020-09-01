import * as firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyDBeXL9Kvh5FVSd1hXI7TD3UyZfsVhK68A',
	authDomain: 'weatheruser-ce3d4.firebaseapp.com',
	databaseURL: 'https://weatheruser-ce3d4.firebaseio.com',
	projectId: 'weatheruser-ce3d4',
	storageBucket: 'weatheruser-ce3d4.appspot.com',
	messagingSenderId: '174866559386',
	appId: '1:174866559386:web:0d64c2130b546acb494a23',
	measurementId: 'G-7F2JBDY6YF',
};

firebase.initializeApp(firebaseConfig);
export default firebase;
export var db = firebase.database();
