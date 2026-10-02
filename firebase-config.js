// Shared Firebase configuration for the Billing project.
// This uses the user's billing-bd Firebase project.
(function(){
  if (window.firebase && !firebase.apps.length) {
    firebase.initializeApp({
      apiKey: 'AIzaSyDb17q096my1Tddl7kYP9N5VXFHxC11wHA',
      authDomain: 'billing-bd.firebaseapp.com',
      databaseURL: 'https://billing-bd-default-rtdb.firebaseio.com',
      projectId: 'billing-bd',
      storageBucket: 'billing-bd.firebasestorage.app',
      messagingSenderId: '426702662740',
      appId: '1:426702662740:web:748ec69388403d356e11c1',
      measurementId: 'G-L08QJMLMEP'
    });
  }
})();
