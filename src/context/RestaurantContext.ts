import { createContext } from "react";
import { RestaurantType } from "../models/RestaurantType";


export type RestaurantContextType = {restaurants : RestaurantType[]}

export const RestaurantContext = createContext<RestaurantContextType>({
  restaurants: [],
});

