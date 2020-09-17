import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-help-item',
  templateUrl: './help-item.component.html',
  styleUrls: ['./help-item.component.scss']
})
export class HelpItemComponent implements OnInit {
  @Input() syntax;
  @Input() title;
  @Input() description;

  constructor() { }

  ngOnInit(): void {
  }

}
