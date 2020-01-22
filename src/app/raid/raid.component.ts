import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-raid',
  templateUrl: './raid.component.html',
  styleUrls: ['./raid.component.css']
})
export class RaidComponent implements OnInit {
  listOfRaids = [];
  
  constructor(private afStore: AngularFirestore) { }

  ngOnInit() {
    this.getRaids();
  }
  getRaids(){
    var colRef = this.afStore.collection('raids').get();
    colRef.forEach(fbObj => {
      fbObj.forEach(doc => {
        var raiddata = doc.data()
        var raidobj = {
          name: raiddata.name,
          howMany: raiddata.howMany,
          date: raiddata.date
        }
        this.listOfRaids.push(raidobj);
      })
    })
  }
}
