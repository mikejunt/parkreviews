import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private db: AngularFirestore) { }

  dataQuery(collection: string, key: string, operator: firebase.firestore.WhereFilterOp, value: string): Observable<any[]> {
    const dbquery: AngularFirestoreCollection<any> = this.db.collection(collection, (ref) => ref.where(key, operator, value))
    const dbquery$ = dbquery.snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data();
        const id = x.payload.doc.id;
        return { id, ...data }
      })
    }))
    return dbquery$
  }

  dataSave(collection: string, document: Object, setid?: string, options?: firebase.firestore.SetOptions) {
    const database: AngularFirestoreCollection<any> = this.db.collection(collection)
    let id
    if (setid) { id = setid }
    else { id = this.db.createId()}
    const doc = { ...document, id: id }
    if (options) { database.doc(id).set(doc, options) }
    else { database.doc(id).set(doc) }
  }

  getWholeCollection(collection: string): Observable<any[]> {
    let collect: Array<any>
    let database = this.db.collection(collection)
    let database$ = database.valueChanges()
    return database$
  }

}
