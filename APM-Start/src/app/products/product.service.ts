import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { IProduct } from "./product";
import { Observable, throwError } from "rxjs";
import {tap, catchError} from "rxjs/operators";

@Injectable({
    providedIn: 'root'
})

export class ProductService{
    /**
     *
     */
    constructor(private http: HttpClient) {        
        
    }

    productUrl: string = 'api/products/products.json';
getProducts(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data=> console.log('All: '+JSON.stringify(data))),
        catchError(this.handleError)
    );
    
}
    private handleError(err: HttpErrorResponse) {
        let errorMessage = "";
        // if(err.error instanceof ErrorEvent){
        //     errorMessage = "An error occurred " + err.error.message;
        // }
        // else{
        //     errorMessage = "Server returned error code "+ err.status + "with message "+ err.message;
        // }

        errorMessage = (err.error instanceof ErrorEvent) ?
        "An error occurred " + err.error.message :
        "Server returned error code "+ err.status + "with message "+ err.message;

        console.log(err.message);
        return throwError(err);
    }
 }