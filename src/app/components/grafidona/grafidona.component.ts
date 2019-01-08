import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafidona',
  templateUrl: './grafidona.component.html',
  styleUrls: ['./grafidona.component.css']
})
export class GrafidonaComponent implements OnInit {

  @Input() Labels: string[];
  @Input() Data: number[];
  @Input()  Type: string ;
  constructor() { }

  ngOnInit() {
  }

}
