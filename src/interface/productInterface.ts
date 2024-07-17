
export interface product{
    id:string;
    name:string;
    image:string;
    price:string;
    description:string;
    
}

const mockProducts: product [] = [
{ id: "1",
name: "product1", 
image: "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UFJPRE9UVEl8ZW58MHx8MHx8fDA%3D", 
price: "5$", 
description: "CIAO", 
}, 

{ id: "2",
    name: "product2", 
    image: "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UFJPRE9UVEl8ZW58MHx8MHx8fDA%3D", 
    price: "5$", 
    description: "CIAO", 
    },

    { id: "3",
        name: "product3", 
        image: "https://plus.unsplash.com/premium_photo-1675431443027-ad1f46c93c8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UFJPRE9UVEl8ZW58MHx8MHx8fDA%3D", 
        price: "5$", 
        description: "CIAO", 
        }

]

export default mockProducts;
