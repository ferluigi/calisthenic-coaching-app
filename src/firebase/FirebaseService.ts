
import firebase from "./FirebaseInitialize";

import { CustomerPaymentConfirmed } from '../store/types/storeType';


const db = firebase.collection("/customers");


class DataService {
  getAll() {
    console.log(db);
    return db;
  }

  create(customer: CustomerPaymentConfirmed) {
    return db.add(customer);
  }

  update(id: string, value: any) {
    return db.doc(id).update(value);
  }

  delete(id: string) {
    return db.doc(id).delete();
  }
}

export default new DataService();