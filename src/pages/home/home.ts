import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TopicPage } from './../topic/topic'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  topics(){
    this.navCtrl.push(TopicPage);
  }

  createAnAccount(){

  }

}
