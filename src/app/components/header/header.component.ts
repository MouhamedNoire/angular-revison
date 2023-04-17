import {Component, OnInit} from '@angular/core';
import{UiService} from "../../services/ui.service";
import{Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  title : string  = 'Task Tracker';

  // @ts-ignore
  showAddTask: boolean;
  // @ts-ignore
  subscription: Subscription;
  constructor(private uiService : UiService) {

    }
  ngOnInit() : void{
    this.subscription = this.uiService.onToggle().subscribe((value)=>(this.showAddTask = value));
  }

  toggleAddTask(){
    this.uiService.toggleAddtask();
  }

}
