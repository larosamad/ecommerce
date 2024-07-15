export interface Product{
    id:string;
    name:string;
    image:string;
    price: string;
    description: string;
}

const mockProducts: Product[] = [
    {
        id:"1",
        name: "Product 1",
        image: "https://image.unsplash.com/php",
        price: "9.99",
        description: "ciao"


    },
    {
        id:"2",
        name: "products 2",
        image: "",
        price:"19.99",
        description: "Lorum ipsum dolor"
    },
    {
        id:"3",
        name: "Product 3",
        image: "",
        price: "29.99",
        description: "lorem"
    },
];
export default mockProducts;