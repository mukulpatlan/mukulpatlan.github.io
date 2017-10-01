import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'rb-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	ngOnInit(){
		firebase.initializeApp({
			apiKey: "AIzaSyD2sGTZN6WuOe6jBedaTUqVaw0AQ-iud08",
			authDomain: "recipe-book-f584f.firebaseapp.com",
		})
	}
}
