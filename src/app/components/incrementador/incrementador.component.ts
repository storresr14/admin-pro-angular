import { log } from 'util';
import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtprogress') txtprogress: ElementRef;
  @Input('nombre') leyenda: string = 'leyenda';
  @Input() porcentaje: number ;
  @Output() cambiovalor: EventEmitter<number> = new EventEmitter();

  constructor() {
  console.log(this.leyenda);
  console.log(this.porcentaje);

  }

  ngOnInit() {
   console.log(this.porcentaje);
  }

  onchanges(newvalue: number) {

    // const elemHTML: any = document.getElementsByName('porcentaje')[0];

    if (newvalue > 100 ) {
      this.porcentaje = 100;

    } else if ( newvalue < 1) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newvalue;

    }
    // elemHTML.value = this.porcentaje;
    this.txtprogress.nativeElement.value = this.porcentaje;
    this.cambiovalor.emit(this.porcentaje);

  }

  cambiarvalor(valor) {

    if (this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }
    if (this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }
    this.porcentaje = this.porcentaje + valor;
    this.cambiovalor.emit(this.porcentaje);
    this.txtprogress.nativeElement.focus();

 }

}
