
export interface Product{
    id:string;
    name:string;
    image:string;
    price:string;
    description:string;
    
}

const mockProducts: Product[] = 
[
    //definiamo i tre prodotti
    // mock è una mappatura dei prodotti che decido di scrivere io
    {
        id: "1",
        name:"Product 1",
        image:"https://cdn.pixabay.com/photo/2016/10/22/20/55/makeup-brushes-1761648_1280.jpg",
        price:"9.99",
        description:"Lorem ipsum"
    },

    {
        id:"2",
        name:"Product 2",
        image:"https://cdn.pixabay.com/photo/2015/08/01/23/28/manicure-870857_1280.jpg",
        price:"19.99",
        description:"lorem ipsum",
    },

    {
        id:"3",
        name:"Product 3",
        image:"https://cdn.pixabay.com/photo/2015/08/01/23/28/manicure-870857_1280.jpg",
        price:"29.99",
        description:"lorem ipsum",

    },
];

export default mockProducts;
