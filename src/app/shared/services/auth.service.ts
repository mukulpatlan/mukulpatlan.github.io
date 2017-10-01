import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Http } from '@angular/http';

import {RecipeService} from './recipe.service';

@Injectable()
export class AuthService {
  token: string;
  constructor(public http: Http, private recipeService: RecipeService){}

  login(email: string, password: string){
    return firebase.auth().signInWithEmailAndPassword(email, password)
          .then(
              response => {
                firebase.auth().currentUser.getToken()
                  .then(
                      (token: string) => this.token = token
                  );
              }
            );

  }

  signup(email: string, password: string){
  	return firebase.auth().createUserWithEmailAndPassword(email, password)
  }

  logout(){
    return firebase.auth().signOut();
  }

  getToken(){
    firebase.auth().currentUser.getToken()
      .then(
          (token: string) => this.token = token
      );

    return this.token;
  }

  isAuth(){
    return this.token != null;
  }

}
