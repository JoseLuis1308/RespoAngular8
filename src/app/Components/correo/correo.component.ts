import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-correo',
  templateUrl: './correo.component.html',
  styleUrls: ['./correo.component.scss']
})
export class CorreoComponent implements OnInit {

  correo:any;
  show: boolean=true;
  constructor() { 
    this.correo = {
      titulo: "Titulo del correo",
      cuerpo: 'Cuerpo del correo, Cuerpo del correo, Cuerpo del correo, Cuerpo del correo, Cuerpo del correo, Cuerpo del correo, Cuerpo del correo, Cuerpo del correo,',
      emisor: "correoEmisor@correo.com",
      destinatario: "correoDestinatario@correo.com"
    }
  }

  ngOnInit(): void {

  }

}
