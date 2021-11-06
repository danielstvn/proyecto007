import { Component, OnInit,OnDestroy, ViewChild,Input } from '@angular/core';

import { DataTableDirective } from 'angular-datatables';
import { Subject } from 'rxjs/internal/Subject';
import { CasosCovidService } from '../casos-covid.service';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit ,OnDestroy {

  casosCovid:any;

  constructor(private casosCovidService: CasosCovidService){}


  @ViewChild(DataTableDirective, {static: false})
  datatableElement!: DataTableDirective;
  min!: number;
  max!: number;

  dtOptions: DataTables.Settings = {};
  

  ngOnInit(): void {

    this.casosCovidService.getDatos().subscribe( (result: any) => {
      this.casosCovid = result['features'];

      console.log(this.casosCovid);
    });

    $.fn['dataTable'].ext.search.push((settings:any, data:any, dataIndex:any) => {
      const id = parseFloat(data[0]) || 0; // use data for the id column
      if ((isNaN(this.min) && isNaN(this.max)) ||
        (isNaN(this.min) && id <= this.max) ||
        (this.min <= id && isNaN(this.max)) ||
        (this.min <= id && id <= this.max)) {
        return true;
      }
      return false;
    });

    this.dtOptions = {
      pageLength:10,
      language:{url:'//cdn.datatables.net/plug-ins/1.11.3/i18n/es_es.json'}
    };
  }

  ngOnDestroy(): void {
  
    $.fn['dataTable'].ext.search.pop();
  }

  filterById(): void {
    this.datatableElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.draw();
    });
  }

}
