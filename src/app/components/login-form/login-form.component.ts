import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { User } from '../../models/user';
import { LocalStorageModule } from 'angular-2-local-storage';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  nowDatetimeLocal: string;
    publicationDateScheduled: boolean = false;


   

    ngOnInit(): void {
      
    }

    

    submitPost(form: FormGroup): void {
         
      
       var user = User.defaultUser();
        localStorage.setItem("usuario",JSON.stringify(user.id))       
       console.log( user);
       
    }
}
