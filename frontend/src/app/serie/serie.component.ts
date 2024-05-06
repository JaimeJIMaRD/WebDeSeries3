import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Serie } from '../serie'; // Asegúrate de importar el modelo correcto
import { SerieService } from '../serie.service'; // Asegúrate de importar el servicio correcto

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  serie!: Serie; // Declara una propiedad para almacenar la serie

  constructor(
    private route: ActivatedRoute,
    private serieService: SerieService // Inyecta el servicio SerieService
  ) {}

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      // Utiliza el servicio para obtener la serie con ese ID
      this.serieService.getSerie(id).subscribe(serie => {
        this.serie = serie; // Asigna la serie recuperada a la propiedad 'serie'
      });
    } else {
      console.error('No se pudo obtener el ID de la serie de los parámetros de la ruta.');
    }
  }
  
}
