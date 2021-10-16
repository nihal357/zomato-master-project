import React from "react";
import { Route } from "react-router-dom";

//Layout
import RestaurantLayout  from "../Layout/Restaurant.layout";

const RestaurantLayoutHOC = ({ component: Component, ...rest }) => {
    return (
        <>
            <Route
                {...rest}
                component={(props) => (
                    <RestaurantLayout>
                        <Component {...rest} />
                    </RestaurantLayout>
                )
                }
            />
        </>
    );
};

export default RestaurantLayoutHOC;