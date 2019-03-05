import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, eos accumsan tacimates ad, et unum nominavi hendrerit nam. Lorem essent volutpat has no, eius noster fuisset duo ei. Usu an cibo fabellas, ei eos falli nemore virtute. Pri cetero maluisset in.',
      loveits: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, eos accumsan tacimates ad, et unum nominavi hendrerit nam. Lorem essent volutpat has no, eius noster fuisset duo ei. Usu an cibo fabellas, ei eos falli nemore virtute. Pri cetero maluisset in.',
      loveits: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, eos accumsan tacimates ad, et unum nominavi hendrerit nam. Lorem essent volutpat has no, eius noster fuisset duo ei. Usu an cibo fabellas, ei eos falli nemore virtute. Pri cetero maluisset in.',
      loveits: 0,
      created_at: new Date()
    }
  ];
  constructor() {
    
  }
  
}
