import React from 'react';
import { AiOutlineCompass } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";

// component 
import FloatMenuBtn from '../../Components/restaurant/Order-Online/FloatMenuBtn';
import MenuListContainer from '../../Components/restaurant/Order-Online/MenuListContainer';
import FoodItem from '../../Components/restaurant/Order-Online/FoodItem';
import FoodList from '../../Components/restaurant/Order-Online/FoodList';

const OrderOnline = () => {
    return (
        <>
            <div className="w-full h-screen flex">
                <aside className="hidden md:flex flex-col gap-3 border-r border-gray-200 h-screen overflow-y-scroll w-1/4">
                    <MenuListContainer />
                </aside>
                <div className="w-full px-3 md:w-3/4">
                    <div className="pl-3 mb-4">
                        <h2 className="text-xl font-semibold">
                            Order Online
                        </h2>
                        <h4 className="flex items-center gap-2 font-light text-gray-500">
                            <AiOutlineCompass /> Live Track Your Order | <BiTimeFive /> 45 min
                        </h4>
                    </div>
                    <section className="flex h-screen overflow-y-scroll flex-col gap-3 md:gap-5">
                        <FoodList
                            name="Recommended"
                            items={[
                                {
                                    title: "Paneer Subz (Classic Paneer and Veg Biryani - Serves 1)",
                                    image: "https://b.zmtcdn.com/data/dish_photos/51f/c5feab5fcf17681584c66db2f9cda51f.jpg",
                                    price: "1328",
                                    rating: 3,
                                    description: "[Served with 1 Gulab Jamun & Mint Raita] In this immaculately balanced culinary masterpiece, diced fresh vegetables infused with succulent pieces of spiced paneer are layered on a bed of aromatic rice.",
                                },
                            ]}
                        />
                        <FoodList
                            name="Festive Veg Specials"
                            items={[
                                {
                                    title: "Paneer Subz (Classic Paneer and Veg Biryani - Serves 1)",
                                    image: "https://b.zmtcdn.com/data/dish_photos/51f/c5feab5fcf17681584c66db2f9cda51f.jpg",
                                    price: "1328",
                                    rating: 3,
                                    description: "[Served with 1 Gulab Jamun & Mint Raita] In this immaculately balanced culinary masterpiece, diced fresh vegetables infused with succulent pieces of spiced paneer are layered on a bed of aromatic rice.",
                                },
                            ]}
                        />
                    </section>
                </div>
            </div>
            <FloatMenuBtn />
        </>
    );
};

export default OrderOnline;
