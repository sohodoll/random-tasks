const shoes = {
    products: [
        {
            id: 1,
            brand: 'Adidas',
            name: 'Adistar',
            description: 'Solid running shoes',
            price: 180,
            rating: 5,
            stock: 30,
            category: 'Running',
            thumbnail: './images/adistar/adistar.jpg',
            images: [
                './images/adistar/adistar1.jpg',
                './images/adistar/adistar2.jpg',
            ],
        },
        {
            id: 2,
            title: 'iPhone X',
            description:
                'SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...',
            price: 899,
            discountPercentage: 17.94,
            rating: 4.44,
            stock: 34,
            brand: 'Apple',
            category: 'smartphones',
            thumbnail: 'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
            images: [
                'https://i.dummyjson.com/data/products/2/1.jpg',
                'https://i.dummyjson.com/data/products/2/2.jpg',
                'https://i.dummyjson.com/data/products/2/3.jpg',
                'https://i.dummyjson.com/data/products/2/thumbnail.jpg',
            ],
        },
    ],
    total: 100,
    skip: 0,
    limit: 100,
};

console.log(shoes.products);
