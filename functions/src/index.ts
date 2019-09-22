import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


export const checkCocktailAvailability = functions
    .region('europe-west1')
    .firestore
    .document('barUsers/{barUserId}/alcoholics/{ingredienId}')
    .onUpdate((change, context) => {

        console.log('INGREDIENT ID', change.after.id);

        return true;
    });