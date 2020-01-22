import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  title = "";
  text = "";
  date = "";
  info = [];
  constructor(private afStore: AngularFirestore) { }

  ngOnInit() {
    this.getInfo();
  }

  async getInfo(){
    var colRef = this.afStore.collection('info').doc('current_info').get();
    colRef.forEach(obj => {
      var data = obj.data();
      this.title = data.title;
      this.text = data.text;
      this.date = data.date;
    })
  }
}
