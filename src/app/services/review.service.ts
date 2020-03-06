import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  reviewsDB = this.db.collection('reviews')

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
  }

  userQuery(key: string, operator: firebase.firestore.WhereFilterOp, value: string) {
    let dbquery: AngularFirestoreCollection<any> = this.db.collection('reviews', (ref) => ref.where(key, operator, value))
    let dbquery$ = dbquery.snapshotChanges().pipe(map(actions => {
      return actions.map(x => {
        const data = x.payload.doc.data();
        const id = x.payload.doc.id;
        return { id, ...data }
      })
    }))
    return dbquery$
  }


  postNewReview(review: Object) {
    const id = this.db.createId()
    const newreview = { ...review, id: id }
    this.reviewsDB.doc(id).set(newreview)
  }
}
