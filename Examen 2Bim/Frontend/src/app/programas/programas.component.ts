import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-programas',
  templateUrl: './programas.component.html',
  styleUrls: ['./programas.component.css']
})
export class ProgramasComponent implements OnInit {
@Input () programa:any;
  constructor() { }

  ngOnInit() {
  }
identificador(id:any){
    if (isNaN(id)){
      return id.id;
    }else{
      return id;
    }
}
}
