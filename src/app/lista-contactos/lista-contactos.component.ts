import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lista-contactos',
  templateUrl: './lista-contactos.component.html',
  styleUrls: ['./lista-contactos.component.css']
})
export class ListaContactosComponent implements OnInit {
  @Input() datos: string;
  @Output() clickEnEliminar= new EventEmitter<string>();
  
  notificarEliminacion(contacto: string) { 
    this.clickEnEliminar.emit(contacto);
  }
  constructor() { }

  ngOnInit() {
  }

}
