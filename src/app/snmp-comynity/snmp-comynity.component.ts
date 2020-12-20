import { Component, OnInit } from '@angular/core';
import { M49sSQLserviceService } from "../m49s-sqlservice.service";
@Component({
  selector: 'snmp-comynity',
  templateUrl: './snmp-comynity.component.html',
  styleUrls: ['./snmp-comynity.component.css']
})
export class SnmpComynityComponent implements OnInit {

  dati: any=[];
  vidSQL='0';
  vSQL='select * from SnmpComunity';
  constructor(private qs:M49sSQLserviceService) {
    qs.vidSQL=this.vidSQL;
    qs.vSQL=this.vSQL;
    qs.inviaPost().subscribe((datijson)=>{
      this.dati=datijson;
      console.log(datijson);
    });
   }

  ngOnInit(): void {
  }

}
