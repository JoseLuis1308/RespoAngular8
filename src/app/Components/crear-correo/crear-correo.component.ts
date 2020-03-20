import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';//Importar EventEmitter
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { AvisosService } from 'src/app/Services/avisos.service';


@Component({
  selector: 'app-crear-correo',
  templateUrl: './crear-correo.component.html',
  styleUrls: ['./crear-correo.component.scss']
})
export class CrearCorreoComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted= false;
  @Input() correo:any;
  @Output() accionRealizada: EventEmitter<any>=new EventEmitter(); //Crear @Output.

  constructor(private formBuilder: FormBuilder, private servicioAvisos:AvisosService) { }

  ngOnInit(): void {
    this.nuevoCorreo= this.formBuilder.group({
      titulo:['', [Validators.required, Validators.minLength(3)]], //dentro de las comillas vacías se puede escribir un valor por defecto que aparezca en el
      cuerpo:['',[Validators.required, Validators.minLength(10)]],
      destinatario:['',[Validators.required, Validators.email]]
    })

    if(this.correo!=undefined){
      console.log("A",this.correo);
      this.nuevoCorreo.patchValue({
        titulo: 'Re: '+ this.correo.titulo, 
        destinatario: this.correo.emisor
    });

  }
}

  get formulario() { return this.nuevoCorreo.controls; }

    onSubmit() {
        this.submitted = true;

        if (this.nuevoCorreo.invalid) {
            return;
        }

        let correo = this.nuevoCorreo.value;
        correo.leido= false;
        correo.emisor= 'correoEmisor1@openWebinar.inv';

        alert("Correo Enviado \nEliminamos el formulario");
        this.onReset();
        this.servicioAvisos.showMensage('Correo enviado a '+correo.emisor);
    }

    onReset() {
        this.submitted = false;
        this.nuevoCorreo.reset();
        this.accionRealizada.emit();//añadir la emisión.
    }

    cancelar(){
      this.onReset();
      this.servicioAvisos.showMensage("Se ha cancelado el envío");
    }

}
