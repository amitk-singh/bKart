import { v4 as uuid } from "uuid"

import {
    t_shirt_1,
    t_shirt_2,
    t_shirt_3,
    t_shirt_4,
    t_shirt_5,
    jacket_1,
    shirt_1,
    shirt_2,
    shirt_3,
    shirt_4,
    shirt_5,
    jacket_2,
    jacket_3,
    jacket_4,
    jacket_5
} from "../assets/images/index";



const ProductData = [
    {
        _id: uuid(),
        image: t_shirt_1,
        name: "IronMan Tshirt",
        price: 399,
        MRP: 1999,
        categoryName: "T-shirt",
        productTitle: "Men's premium shirt",
        rating: 2.3,
        review: "18",
        quantity: 1,
        tag: "New"
    },
    {
        _id: uuid(),
        image: t_shirt_2,
        name: "IronMan Tshirt",
        price: 1199,
        MRP: 1999,
        categoryName: "T-shirt",
        productTitle: "Men's premium shirt",
        rating: 1,
        review: "18",
        quantity: 1,
        tag: "New"
    },
    {
        _id: uuid(),
        image: t_shirt_3,
        name: "IronMan Tshirt",
        price: 2000,
        MRP: 1999,
        categoryName: "T-shirt",
        productTitle: "Men's premium shirt",
        rating: 2.3,
        review: "18",
        quantity: 1,
        tag: "New"
    },
    {
        _id: uuid(),
        image: jacket_2,
        name: "IronMan Tshirt",
        price: 1800,
        MRP: 1999,
        categoryName: "jacket",
        productTitle: "Men's premium shirt",
        rating: 2.3,
        review: "18",
        quantity: 1,
        tag: "New"
    },
    {
        _id: uuid(),
        image: jacket_3,
        name: "IronMan Tshirt",
        price: 8500,
        MRP: 1999,
        categoryName: "jacket",
        productTitle: "Men's premium shirt",
        rating: 3,
        review: "18",
        quantity: 1,
        tag: "New"
    },
    {
        _id: uuid(),
        image: jacket_4,
        name: "IronMan Tshirt",
        price: 399,
        MRP: 1999,
        categoryName: "jacket",
        productTitle: "Men's premium shirt",
        rating: 2,
        review: "18",
        quantity: 1,
        tag: "New"
    },
    {
        _id: uuid(),
        image: shirt_2,
        name: "IronMan Tshirt",
        price: 5000,
        MRP: 1999,
        categoryName: "shirt",
        productTitle: "Men's premium shirt",
        rating: 1,
        review: "18",
        quantity: 1,
        tag: "New"
    },
    {
        _id: uuid(),
        image: shirt_3,
        name: "IronMan Tshirt",
        price: 1199,
        MRP: 1999,
        categoryName: "shirt",
        productTitle: "Men's premium shirt",
        rating: 2.3,
        review: "18",
        quantity: 1,
        tag: "New"
    },
]

export default ProductData