import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {
 parentName:any;
  constructor() { 
    
  }

  ngOnInit(): void {
    this.parentName="Parent Named the child";
  }

}
