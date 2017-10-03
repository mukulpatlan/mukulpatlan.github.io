import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr';
import { AuthService } from '../../shared';

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  	constructor(
  			private auth: AuthService,
        public toast: ToastsManager,
        public vcr: ViewContainerRef,
        public router: Router,
        ) {
          this.toast.setRootViewContainerRef(vcr);
       }

	  ngOnInit() {
	  }

  	onSubmit(form: NgForm){
	  	this.auth.login(form.value.email, form.value.password)
        .then(
          response => {
            this.toast.success('LoggedIn succesfully!');
            this.router.navigate(['/']);
          },
          error => {
            this.toast.error(error.message);
          }
        );
   	}
}
