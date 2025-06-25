import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/dresses.png",
    title: "Dresses",
    desc: "Pretty picks you must have! ",
    price: "58.00",
    rating: "4",
  },
  {
    img: "/jacket.png",
    title: "Jackets",
    desc: "Stay warm and stylish!",
    price: "75.00",
    rating: "5",
  },
  {
    img: "/shoe.png",
    title: "Shoes",
    desc: "Step up your style!",
    price: "49.00",
    rating: "4",
  },
  {
    img: "/bags.png",
    title: "Bags",
    desc: "Trendy bags for every occasion!",
    price: "35.00",
    rating: "3",
  },
  {
    img: "/watches.png",
    title: "Watches",
    desc: "Timeless pieces for your wrist.",
    price: "120.00",
    rating: "5",
  },
  {
    img: "/t-shirt.png",
    title: "T-Shirts",
    desc: "Casual and comfy.",
    price: "20.00",
    rating: "4",
  },
  {
    img: "/jeans.png",
    title: "Jeans",
    desc: "Classic denim for every day.",
    price: "60.00",
    rating: "5",
  },
  {
    img: "/sweaters.png",
    title: "Sweaters",
    desc: "Cozy up in style!",
    price: "55.00",
    rating: "4",
  },
  {
    img: "/hats.png",
    title: "Hats",
    desc: "Top off your look.",
    price: "18.00",
    rating: "4.0",
  },
  {
    img: "/sunglasses.png",
    title: "Sunglasses",
    desc: "Stay cool and protected.",
    price: "25.00",
    rating: "3",
  },
];

const NewProducts = () => { 
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-3xl uppercase pb-4 ml-[20px] "> New Products </h2>


<div className="grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-col-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10" >

{productsData.map((item, index) => (
    <ProductCard
    key={index}
    img = {item.img}
    title = {item.title}
    desc = {item.desc}
    rating={Number(item.rating)}
    price = {item.price}
    
    />
))}
</div>



      </div>
    </div>
  );
};

export default NewProducts;
