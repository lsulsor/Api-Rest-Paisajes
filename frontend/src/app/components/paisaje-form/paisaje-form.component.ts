import { Component, HostBinding, OnInit } from '@angular/core';
import { Paisaje } from '../../models/paisaje';
import { ActivatedRoute, Router} from '@angular/router';
import {PaisajesService} from '../../services/paisajes.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-paisaje-form',
  templateUrl: './paisaje-form.component.html',
  styleUrls: ['./paisaje-form.component.css']
})
export class PaisajeFormComponent implements OnInit {
  @HostBinding ('class') classes= 'row';

  paisaje: Paisaje = {
    ID: 0,
    lugar: '',
    descripcion: '',
    imagen: '',
    fecha: new Date()

  };

  constructor(private paisajesService: PaisajesService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
   const params =  this.activeRoute.snapshot.params;
   if(params.id){
     this.paisajesService.getPaisaje(params.id)
     .subscribe(
       res => {
         console.log(res);
         this.paisaje = res;
       },
       err => console.error(err)
     )
   }
  }
  guardarPaisaje(){
    Swal.fire({
      icon: 'error',
      title: 'No puede añadir este paisaje ',
      text: 'No tiene permiso para agregar este objeto'
     
    })
    
  //   delete this.paisaje.ID;
  //   delete this.paisaje.fecha;
  //  this.paisajesService.crearPaisaje(this.paisaje)
  //  .subscribe(
  //    res => {
  //     console.log(res);
  //     this.router.navigate(['/paisajes']);
  //    },
  //    err => console.log(err)
     
  //  )
  }

}
