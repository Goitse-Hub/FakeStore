export interface Product {
    id: number;
    name: string;
    price: number;
    imageUrl?: any;
    description: string;
  }
  
  export const PRODUCTS = [
    {
      id: 1,
      name: 'Nike Uptempo',
      price: 3399.95,
      imageUrl: 'https://thefoschini.vtexassets.com/arquivos/ids/51183576-1200-1200?v=638168472986870000&width=1200&height=1200&aspect=true',
     description: 'A large phone with one of the best screens'
    },
    {
      id: 2,
      imageUrl: 'https://thefoschini.vtexassets.com/arquivos/ids/50444732-1200-1200?v=638167638797500000&width=1200&height=1200&aspect=true',
      name: 'Nike Air Max',
      price: 749.95,
    description: 'A great phone with one of the best cameras'
    },
    {
      id: 3,
      name: "Adidas Ozelle's",
      imageUrl: 'https://thefoschini.vtexassets.com/arquivos/ids/51632927-1200-1200?v=638173417920170000&width=1200&height=1200&aspect=true',
      price: 1699.95,
      description: 'asd'
    },
    {
      id: 4,
      name: 'Adidas NMD_V3',
      price: 3299.99,
      imageUrl: 'https://thefoschini.vtexassets.com/arquivos/ids/50276756-1200-1200?v=638167451659400000&width=1200&height=1200&aspect=true',
      description: 'A large phone with one of the best screens'
    },
    {
      id: 5,
      name: 'Adidas Oznova',
      imageUrl: 'https://thefoschini.vtexassets.com/arquivos/ids/51490274-1200-1200?v=638168823119730000&width=1200&height=1200&aspect=true',
      price: 2699.95,
    description: 'A great phone with one of the best cameras'
    },
    {
        id: 6,
        name: 'Nike',
        imageUrl: 'https://thefoschini.vtexassets.com/arquivos/ids/51766403-1200-1200?v=638175169185530000&width=1200&height=1200&aspect=true',
        price: 2699.99,
     description: 'A great phone with one of the best cameras'
      },
      {
        id: 7,
        name: 'Converse Chuck',
        imageUrl: 'https://thefoschini.vtexassets.com/arquivos/ids/51764352-1200-1200?v=638175141859900000&width=1200&height=1200&aspect=true',
        price: 2399.99,
       description: 'A great phone with one of the best cameras'
      }

      
  ];
  
