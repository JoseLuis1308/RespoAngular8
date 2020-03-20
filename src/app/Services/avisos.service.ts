import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AvisosService {

  private visible:boolean;
  private mensaje: string;

  constructor() {
    this.visible=false;
    this.mensaje="";
   }

  showMensage(mensaje: string){
    this.mensaje=mensaje;
    this.visible=true;
    this.waitToHide();
  }

  hideMensaje(){
    this.visible=false;
  }

  waitToHide(){
    setTimeout(()=>{
      this.hideMensaje();
    }, 2000);
  }

}

