import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BibliotecaService } from '../biblioteca.service';
import { Serie } from '../serie';
import { Lista } from '../lista';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  id!:number;
  lista!: Lista;

  constructor(
    private route: ActivatedRoute,
    private bibliotecaService: BibliotecaService
  ) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.bibliotecaService.verLista(this.id).subscribe((data:Lista)=>{
      this.lista=data;
      console.log(this.lista)
      
    })
    //this.obtenerSeries();
  }

  // obtenerSeries(): void {
  //   const id = Number(this.route.snapshot.paramMap.get('id'));
  //   this.bibliotecaService.getSeriesByListaId(id)
  //     .subscribe(series => this.series = series);
  // }

  // eliminarSerie(id: number): void {
  //   const listaId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.bibliotecaService.eliminarSerieDeLista(listaId, id)
  //     .subscribe(() => {
  //       // Actualizar la lista de series después de eliminar
  //       this.obtenerSeries();
  //     });
  // }

  
}
