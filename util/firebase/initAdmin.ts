import {
    AppOptions,
    cert,
    getApp,
    getApps,
    initializeApp,
    ServiceAccount,
  } from "firebase-admin/app";
  import { getAuth } from "firebase-admin/auth";


  var serviceAccount: ServiceAccount = require("../../service-account.json");
  
  const options: AppOptions = {
    credential: cert(serviceAccount),
  };
  
  function createFirebaseAdminApp(config: AppOptions) {
    if (getApps().length === 0) {
      return initializeApp(config);
    } else {
      return getApp();
    }
  }
  
  const firebaseAdmin = createFirebaseAdminApp(options);
  export const adminAuth = getAuth(firebaseAdmin);