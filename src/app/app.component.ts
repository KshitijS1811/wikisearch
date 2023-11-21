import { Component } from '@angular/core';
import { PediaService } from './pedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  pages : any= []; 
  title = 'apnapedia';

  constructor(private ps:PediaService){}

  onEmit(event:string){
    //console.log(event);

    this.ps.getData(event).subscribe((res:any)=> {
      this.pages=res.query.search;
      console.log(this.pages);
    });
  }

  

  
}
