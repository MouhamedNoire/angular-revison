import { Component  , OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{
    // @ts-ignore
  @Input() text: string;
    // @ts-ignore
  @Input() color: string;
    constructor() {
    }
    ngOnInit() : void {
}
}
