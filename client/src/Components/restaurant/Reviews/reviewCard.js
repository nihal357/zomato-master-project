import React from 'react';
import { TiStarFullOutline } from "react-icons/ti";

const ReviewCard = () => {
    return (
        <>
            <div className="my-3 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full">
                            <img
                                src="https://b.zmtcdn.com/data/user_profile_pictures/876/069545ebc47fd889db14ad8d77e48876.jpg"
                                alt="avatar"
                                className="w-full h-full rounded-full object-cover"
                            />
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold">Nihal Chaudhari</h3>
                            <small className="text-gray-500">
                                5 Reviews &#8226; 3 Followers
                            </small>
                        </div>
                    </div>
                    <button className="text-zomato-400 border border-zomato-400 py-2 rounded-lg px-4">
                        Follow
                    </button>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                        <span className="text-white text-xs bg-green-700 px-2 py-1 rounded-lg flex items-center gap-1">
                            4 <TiStarFullOutline />
                        </span>
                        <h5 className="font-regular uppercase">
                            Delivery
                        </h5>
                        <small className="text-gray-500">
                            3 days ago
                        </small>
                    </div>
                    <div className="w-full">
                        <p className="w-full text-gray-600 font-light text-base">
                            Biryani House perfect for biryani lovers. Biryani was testy.
                            Food Quality and Quantity was Awesome.
                            
                            Food Item :
                            Chicken Dum Biryani : 5/5

                            Food Quality : 5/5
                            Food Quantity : 5/5
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReviewCard;
