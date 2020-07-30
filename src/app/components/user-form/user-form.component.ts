import { Component, OnInit } from '@angular/core';
import { User } from '../../models/app';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {


  user: User = {
    id: 0,
    name: '',
    country: ''
  }

  constructor(private usersService: UsersService, private route: Router, private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activateRoute.snapshot.params;
    if(params.id){
      this.usersService.getuser(params.id)
      .subscribe(
        res => {
          console.log(res);
          // this.user = 
        },
        err => console.log(err)
      );
    }
  }

  saveNewUser(){
    delete this.user.id;
    this.usersService.saveUser(this.user)
    .subscribe(
      res =>{
        console.log(res);
        this.route.navigate(['/users']);
      },
      err => console.error(err)
    );
  }

}
