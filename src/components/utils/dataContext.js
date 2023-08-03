import { useContext } from "react";
import { Context } from "../DataProvider";

export const useProductsData = () => useContext(Context);
