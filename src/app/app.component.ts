import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Module';
  contactos: string[] = [
    "Fulanito de tal",
    "Zutanito",
    "Menganito"
  ];
  ngOnInit() { 
    console.log('Iniciando componente');

  }
  eliminarContacto(contacto: string) { 
    this.contactos = this.contactos.filter((value: string, index: number): boolean => { 
      return value !== contacto;
    });
  }
}
