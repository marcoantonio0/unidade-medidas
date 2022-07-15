import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  item = new FormControl('');
  dataItems: any[] = [];
  title: string = '';
  constructor(
    private router: Router
  ){
    this.router.events.subscribe(ev => {
      if(ev instanceof ActivationEnd) {
        if(ev.snapshot.data['title']){
          this.title = ev.snapshot.data['title'];
        }
      }
    })
  }
  

}
