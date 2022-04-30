import axios from "axios";
import { IUser } from "../../models/IUser";
import { AppDispatch } from "../store";
import { userSlice } from "./UserSlice";


export const fetchUsers = () => async(dispatch: AppDispatch) =>{
    try{
        dispatch(userSlice.actions.usersFetching());
        const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        dispatch(userSlice.actions.usersFetchingSeuccess(responce.data));

    }catch(e){
         //dispatch(userSlice.actions.usersFetchingError(e.message));
         alert(e);
    }
}