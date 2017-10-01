import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { AuthService } from '../shared';

@Component({
  selector: 'rb-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  	constructor(
  			private auth: AuthService,
        public toast: ToastsManager,
        public vcr: ViewContainerRef
        ) {
          this.toast.setRootViewContainerRef(vcr);
       }

  ngOnInit() {
  }

	onSubmit(form: NgForm){
	  	this.auth.signup(form.value.email, form.value.password)
	  		.then(
        response => {
          this.toast.error('User account created succesfully');
        },
        error => {
          this.toast.error(error.message);
        }
      );
	}

}
