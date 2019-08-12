import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth) {
    this.afAuth.user.subscribe(x => {
      console.log('user data in service: ', x);
    });
  }


  login() {
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
}
