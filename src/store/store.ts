import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from'./reducers/UserSlice';


const roootReducer = combineReducers({
    userReducer
})

export const setupStore = () =>{
    return configureStore({
        reducer: roootReducer
    })
}

export type RootState = ReturnType<typeof roootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']