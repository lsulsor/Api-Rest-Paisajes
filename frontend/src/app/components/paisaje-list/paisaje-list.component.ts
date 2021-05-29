import { ThisReceiver, ThrowStmt } from '@angular/compiler';
import { Component, HostBinding, OnInit } from '@angular/core';

import {PaisajesService} from '../../services/paisajes.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-paisaje-list',
  templateUrl: './paisaje-list.component.html',
  styleUrls: ['./paisaje-list.component.css']
})
export class PaisajeListComponent implements OnInit {

  @HostBinding ('class') classes ='row';
  paisajes: any = [];
 

  constructor(private paisajesService: PaisajesService) { }

  ngOnInit(): void {
    this.getPaisajes();
  }

  getPaisajes(){
    this.paisajesService.getPaisajes().subscribe(
      res => {

        this.paisajes = res;
      },
      err => console.error(err)
    );

  }


  deletePaisaje(lugar: string){
    Swal.fire({
      icon: 'error',
      title: 'No puede eliminar ' + lugar,
      text: 'No tiene permiso para eliminar este objeto'
     
    })
    
    // this.paisajesService.deletePaisaje(id).subscribe(
    //   res => {

        
    //     console.log(res);
    //     this.getPaisajes();
    //   },
    //   err => console.error(err)
    // );

  }




}
