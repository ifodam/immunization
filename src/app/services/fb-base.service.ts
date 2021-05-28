import { Injectable } from '@angular/core';
import { AngularFirestore, CollectionReference, Query } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbBaseService<T extends { id?: string }> {

  constructor(private afs: AngularFirestore) { }

  // CREATE
  async create(collectionName: string, data: T, id?: string): Promise<string> {
    const uid = id ? id : this.afs.createId();
    data.id = uid;
    await this.afs.collection(collectionName).doc(uid).set(data);
    return uid;
  }

  // READ
  read(collectionName: string): Observable<T[]> {
    return this.afs.collection(collectionName, ref => {
      let query: CollectionReference | Query = ref;
      query = query.orderBy('status', 'asc');
      return query;
    }).valueChanges() as Observable<T[]>;
  }

  // UPDATE
  async update(collectionName: string, id: string, data: any): Promise<string> {
    data.id = id;
    await this.afs.collection(collectionName).doc(id).update(data);
    return id;
  }

  // DELETE
  async delete(collectionName: string, id: string): Promise<string> {
    await this.afs.collection(collectionName).doc(id).delete();
    return id;
  }

  getById(collectionName: string, id: string): Observable<T> {
    return this.afs.collection(collectionName).doc(id).valueChanges() as Observable<T>;
  }

}
