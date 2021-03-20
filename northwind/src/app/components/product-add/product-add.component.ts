import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms"
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
productAddFrom:FormGroup;
  constructor(private FormBuilder:FormBuilder) { }

  ngOnInit(): void {
  }
createProductAddForm(){
this.productAddFrom=this.FormBuilder.group({
  productName:["", Validators.required],
  unitPrice:["", Validators.required],
  unitsInStock: ["", Validators.required],
  categoryId:["", Validators.required]
})
}

}
