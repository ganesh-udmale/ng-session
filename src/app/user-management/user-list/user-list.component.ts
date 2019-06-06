import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public users=[];
  constructor(private userService: UserService) { 
    this.userService.getAllUser()
    .subscribe(data => { this.users = data.data
      console.log(data.data);
    })
  }

  ngOnInit() {
  }

}
