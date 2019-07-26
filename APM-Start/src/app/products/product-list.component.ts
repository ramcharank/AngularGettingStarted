import { Component } from "@angular/core";

@Component({
  selector: "pm-products",
  templateUrl: "./product-list.component.html"
})
export class ProductListComponent {
  pageTitle: string = "Product List";
  imageWidth: number = 50;
  imageMargin: number = 2;
  products: any[] = [
    {
      productId: 2,
      productName: "Garden Cart",
      productCode: "GDN-0023",
      releaseDate: "March 18, 2016",
      description: "15 gallon capacity rolling garden cart",
      price: 32.99,
      starRating: 4.2,
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/02/01/11/18/wheelbarrow-2029732__340.png"
    },
    {
      productId: 5,
      productName: "Hammer",
      productCode: "TBX-0048",
      releaseDate: "May 21, 2016",
      description: "Curved claw steel hammer",
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        "https://cdn.pixabay.com/photo/2019/05/18/06/32/thor-4211305__340.png"
    },
    {
      productId: 8,
      productName: "Saw",
      productCode: "TBX-0022",
      releaseDate: "May 15, 2016",
      description: "15-inch steel blade hand saw",
      price: 11.55,
      starRating: 3.7,
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/06/26/18/24/saw-1480971__340.png"
    }
  ];
  showImage: boolean = false;
  listFilter: string = 'cart';

  toggleImage(): void{
      this.showImage = !this.showImage;
      
  }
}
