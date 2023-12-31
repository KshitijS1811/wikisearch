import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Output() emitter = new EventEmitter<string>();
  term :string =''

  onFormSubmit(event:any){
    event.preventDefault()
    //console.log(this.term);
    this.emitter.emit(this.term);
  }

  

  
}
