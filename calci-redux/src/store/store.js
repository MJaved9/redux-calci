import { legacy_createStore } from "redux";
import { reducer } from "./reducer";

const initial={
    count:1
}

export const store=legacy_createStore(reducer,initial)