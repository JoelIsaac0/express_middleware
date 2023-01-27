import { Component, OnInit } from '@angular/core';
import { GastoService } from '../gasto.service';
import { Gasto } from '../Gasto'
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit{
  ngOnInit(): void {
      
  }
  gastos:Gasto[]=[];
  constructor(private gastoService:GastoService){
    this.gastoService.obtnerDatos().subscribe(data =>
      {
        console.log(data);
        this.gastos=data;
      })
  }
}

