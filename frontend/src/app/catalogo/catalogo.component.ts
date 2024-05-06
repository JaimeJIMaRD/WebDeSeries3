import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { SerieService } from '../serie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  series: Serie[] = [];

  constructor(private serieService: SerieService, private router: Router) {}

  ngOnInit(): void {
    this.obtenerSeries();
  }

  obtenerSeries(): void {
    this.serieService.getSeries()
      .subscribe(series => {
        this.series = series;
      });
  }

  goToSeriesDetail(id: number): void {
    this.router.navigate(['/series', id]);
  }
}
