import {Product} from "./productInterface";

export default interface Cart{
    product: Product;
    amount: number; //numero di volte che lo stesso prodotto è stato aggiunto al carrello
}