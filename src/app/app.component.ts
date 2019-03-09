import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Current';

  sourceItems: any[] = ['Husain','Darshan','Yashpal','Alpesh','Ravi','Pragnesh','Haresh'];
  listRecycled: any[] = [];
  anotherlist: any[] = [];

  delete(index){
    console.log("---- Delete Called ----"+index);
    this.sourceItems.push(this.listRecycled[index]);
    this.listRecycled.splice(index,1);
  }



}
