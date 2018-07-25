import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TopicPage } from './../topic/topic';
import { CreateAccountPage } from './../create-account/create-account';
// import { ApiProvider } from './../../providers/api/api';
// import { User } from './../../app/users/user';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,) {

  }

  // public apiProvider: ApiProvider

//   ngOnInit() {
//   this.loadUsers();
// }

// loadUsers() {
//   this.apiProvider.getUsers().subscribe(
//     data => this.users = data["_embedded"]["users"],
//     err => {
//         console.log(err);
//     });
// }

  topics(){
    this.navCtrl.push(TopicPage);
  }

  createAnAccount(){
    this.navCtrl.push(CreateAccountPage);
  }

}
