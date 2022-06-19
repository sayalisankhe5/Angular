import { Component, Input } from "@angular/core";

@Component({
    templateUrl:'./product_category.component.html',
    selector:'product-category-row'
})
export class ProductCategoryRow {
    @Input()
    categoryName:string=""
}