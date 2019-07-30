import { Component, OnInit } from "@angular/core";
import { IProduct } from "./product";
import { ProductService } from "./product.service";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {
constructor(private productService: ProductService) { }
  
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: IProduct[];
  showImage: boolean = false;
  filteredProducts: IProduct[];
  _listFilter: string;
  get listFilter(): string{
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.PerformFilter(this.listFilter) : this.products;
  }
  
  PerformFilter(filterText: string): IProduct[] {
    return this.products.filter((p : IProduct) => p.productName.toLocaleLowerCase().indexOf(filterText.toLocaleLowerCase()) !== -1);
    // return this.products.filter(p=> p.productName.toLowerCase() === filterText.toLowerCase());
  }
  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error => this.errorMsg = <any>error
    );
    this.filteredProducts = this.products;
  }
errorMsg: string;
  toggleImage(): void{
      this.showImage = !this.showImage;      
  }
  onRatingClicked(msg: string): void{
    this.pageTitle = this.pageTitle + msg;
    alert(msg);
  }
}
