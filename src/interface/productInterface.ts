
export interface Product{
    id:string;
    name:string;
    image:string;
    price:any;
    description:string;
    
}

const mockProducts: Product[] = 
[
    //definiamo i tre prodotti
    // mock è una mappatura dei prodotti che decido di scrivere io
    {
        id: "1",
        name:"Siero capelli",
        image:"https://i.imgur.com/eJW7mZr.jpeg",
        price:"9.99",
        description:"ideale per capelli sottili"
    },

    {
        id:"2",
        name:"Aqua di Gio",
        image:"https://i.imgur.com/2N5JuW4.jpeg",
        price:"49.99",
        description:"una fragranza di Alberto Morillas",
    },

    {
        id:"3",
        name:"Siero viso",
        image:"https://i.imgur.com/rKFOVQT.jpeg",
        price:"29.99",
        description:"idratante e rimpolpante",

    },

    {
        id:"4",
        name:"Olio viso",
        image:"https://i.imgur.com/neq1Xm2.jpeg",
        price:"39.99",
        description:"per pelli mature e secche",
    },

    {
        id:"5",
        name:"Siero capelli",
        image:"https://i.imgur.com/HVMSgJ6.jpeg",
        price:"29.99",
        description:"per capelli diradati",
    },

    {
        id:"6",
        name:"Set antirughe",
        image:"https://i.imgur.com/iOCZTWl.jpeg",
        price:"49.99",
        description:"crema e siero per una pelle più giovane",
    },

    {
        id:"7",
        name:"Spray illuminante viso",
        image:"https://i.imgur.com/3jh0C8p.jpeg",
        price:"19.99",
        description:"rinfrescante e idratante",
    },

    {
        id:"8",
        name:"Detergente viso",
        image:"https://i.imgur.com/wVCUgsn.jpeg",
        price:"16.99",
        description:"per una pulizia profonda",
    },

    {
        id: "9",
        name:"Lip oil",
        image:"https://i.imgur.com/ms0oFC8.jpeg",
        price:"26.99",
        description:"per labbra sempre perfette",
    },
];

export default mockProducts;
