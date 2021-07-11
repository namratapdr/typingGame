import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText=lorem.sentence();
  enteredText='';

  onText(event: Event){
    if(event){
      const targetElement: HTMLInputElement = <HTMLInputElement> event.target;
      this.enteredText=targetElement.value;
    }
  }
  compare(randomChar:String, enteredChar:String)
  {
    if(!enteredChar){
      return 'pending';
    }

    if(enteredChar === randomChar){
      return "correct";
    }
    else{
      return "incorrect";
    }
  }
}
