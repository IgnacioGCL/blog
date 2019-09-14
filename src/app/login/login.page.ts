import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router) { }

  ngOnInit() {
  }

  public login(): void {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .then(() => this.router.navigate['blog']);
  }

}