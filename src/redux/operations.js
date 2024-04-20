import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import {getDatabase, ref, get}  from "firebase/database";

export const fetchData = createAsyncThunk(
'data/fetchData',
async(_, {rejectWithDate}) => {
    try {
    const db = getDatabase();
    const dbRef = ref(db);
    const snap = await get(dbRef);
    const data = snap.val();  
    if (data) {
        return Object.keys(data).map(key => ({id:key, ...data[key]})); 
    }
    } 
    catch (error) {
        toast.error('No data! There was a problem.', {
            duration: 5000,
            position: 'top-right',
        });
return rejectWithDate(error.message);  
  }  
}
);