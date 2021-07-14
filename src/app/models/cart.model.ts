import { ProductModel } from './product.model';

export class CartModel {
    [x: string]: any;
    public products: ProductModel[] = [];
    public total: number = 0;
}
