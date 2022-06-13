import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.scss']
})
export class ListProductsComponent implements OnInit {

  products:any=[];
  nomc:string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.nomc=this.route.snapshot.params.nomc;
    this.getListOfProducts();
  }

  getListOfProducts(){
      axios.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${this.nomc}`)
           .then((res) =>{
              this.products=res.data;
              if (this.products.length>100) {
                this.products= this.products.splice(0,99);
              }
           })
           .catch((error: any)=>{
              console.log(error)
           })

  }

}
