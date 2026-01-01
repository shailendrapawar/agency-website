
import { createContext, useContext } from "react";

export const RefContext=createContext(null);


export const useRefContext=()=>useContext(RefContext)