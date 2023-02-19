
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  //  templateUrl: './app.component.html',
  template: `<p> merhaba</p>
    <div style="background-color: aqua;">
      <app-home></app-home>
      <app-com1></app-com1>

    </div>
  
  <hr>
  
  ` ,
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'humans';
}
