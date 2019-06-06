import { Component, OnInit, ɵConsole } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  public userDetails;
  constructor( private route : ActivatedRoute, private location :Location, private userService :UserService ) {
    
 }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.userService.getDetails(id)
    .subscribe(data => { this.userDetails = data.data
      console.log(this.userDetails);
    });    

  }

  goBack(){
    this.location.back();
  }
}
