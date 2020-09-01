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
// const firebaseConfig = {
// 	apiKey: 'AIzaSyBG9fr1goHrrEN78bZxDQQXLWAMfh0ipI4',
// 	authDomain: 'weatherman-9860a.firebaseapp.com',
// 	databaseURL: 'https://weatherman-9860a.firebaseio.com',
// 	projectId: 'weatherman-9860a',
// 	storageBucket: 'weatherman-9860a.appspot.com',
// 	messagingSenderId: '832689902663',
// 	appId: '1:832689902663:web:7564440e8c400e61e64d62',
// 	measurementId: 'G-4WE1Y5B07Z',
// };

// firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
// // const base = Rebase.createClass(firebase.database());
export default firebase;
export var db = firebase.database();
// export { firebase };
// // export const auth = firebase.auth;

// // export { base };
// export default firebaseConfig;
