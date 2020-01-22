import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  title = "";
  text = "";
  constructor(private afStore: AngularFirestore) { }


  ngOnInit() {
    this.getInfo();
  }
  async getInfo(){
    var colRef = this.afStore.collection('info').doc('guild_info').get();
    colRef.forEach(obj => {
      var data = obj.data();
      this.title = data.title;
      this.text = data.text;
    })
  }
}
