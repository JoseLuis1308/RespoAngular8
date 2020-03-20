import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-correo',
  templateUrl: './crear-correo.component.html',
  styleUrls: ['./crear-correo.component.scss']
})
export class CrearCorreoComponent implements OnInit {

  nuevoCorreo: FormGroup;
  submitted= false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.nuevoCorreo= this.formBuilder.group({
      titulo:['', [Validators.required, Validators.minLength(3)]], //dentro de las comillas vacías se puede escribir un valor por defecto que aparezca en el
      cuerpo:['',[Validators.required, Validators.minLength(10)]],
      destinatario:['',[Validators.required, Validators.email]]
    })
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
    }

    onReset() {
        this.submitted = false;
        this.nuevoCorreo.reset();
    }

}
