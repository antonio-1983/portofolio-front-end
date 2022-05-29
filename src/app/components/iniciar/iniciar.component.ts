import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-iniciar',
  templateUrl: './iniciar.component.html',
  styleUrls: ['./iniciar.component.css']
})
export class IniciarComponent implements OnInit {
  form:FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.form=this.formBuilder.group(
      {

      }
    )
   }

  ngOnInit(): void {
  }

}
