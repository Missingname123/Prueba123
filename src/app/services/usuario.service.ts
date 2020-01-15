import { Injectable } from '@angular/core';


import { Router } from '@angular/router';

//Firebase
import { AngularFireAuth } from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {AngularFirestore,AngularFirestoreDocument} from '@angular/fire/firestore';
//Rxjs
import {Observable,of} from 'rxjs';
import {switchMap} from 'rxjs/operators';
//Modelo (interface)
import {Usuario} from './modelos/usuario.model';



@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  user$:Observable<Usuario>;
  private uid: String;

  constructor(
    private afAuth:AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ){
    this.user$ = this.afAuth.authState.pipe(
      switchMap(
        user=>{
          if(user){
            return this.afs.doc<Usuario>(`users/${user.uid}`).valueChanges();
          }
          else{
            return of(null);
          }
        }
      )
    )
  }

  getUid(){
    return this.uid;
  }

  async googleSignin(){
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.auth.signInWithPopup(provider);
    this.uid = credential.user.uid;
    return this.updateUserData(credential.user);
  }

  async signOut(){
    await this.afAuth.auth.signOut();
    return this.router.navigate(['/']);
  }

  private updateUserData({uid , email,displayName,photoURL} : Usuario){
    const userRef: AngularFirestoreDocument<Usuario> = this.afs.doc(`users/${uid}`);
    const data={
      uid,
      email,
      displayName,
      photoURL
    };

    return userRef.set(data, { merge: true });
  }
}
