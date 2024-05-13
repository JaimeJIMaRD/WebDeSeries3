import { Component, OnInit } from '@angular/core';
import { BibliotecaService } from '../biblioteca.service';
import { Biblioteca } from '../biblioteca';
import { Lista } from '../lista';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.component.html',
  styleUrls: ['./biblioteca.component.css'],
})
export class BibliotecaComponent implements OnInit {
  biblioteca!: Biblioteca;
  nombreLista: string = '';
  form!:FormGroup;
  listas! : Lista[];

  constructor(private bibliotecaService: BibliotecaService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      nombre: new FormControl('', [Validators.required])
    });
    this.obtenerBiblioteca(); 
  }

  obtenerBiblioteca(): void {
    this.bibliotecaService.getBibliotecas().subscribe((data: Biblioteca) => {
      this.biblioteca=data;
      console.log(this.biblioteca);
      this.listas=data.listas;
    });
  }

  verLista(listaId: number): void {

  }

  submit(form:FormGroup){
    const formData = new FormData();

    formData.append('nombre',form.value.nombre);

    this.bibliotecaService.createLista(formData).subscribe((res:any) => {
         console.log('Lista created successfully!');

    })
  }
}
