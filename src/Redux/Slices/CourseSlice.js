import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    courseList : [],
}

export const getAllCourses = createAsyncThunk("course/getAllCourses", async () => {
    try {
        const res = axiosInstance.get("course");
        toast.promise(res, {
            loading: 'Wait! Fetching courses...',
            success: (data) => data?.data?.message || 'Courses fetched successfully',
            error: 'Failed to fetch courses',
        })
        return (await res).data.courses; 
    } catch (error) {
        toast.error(error?.message);
    }
})

export const createCourse = createAsyncThunk("course/createCourse", async (data) => {
    try {
        const res = axiosInstance.post("course", data);
        toast.promise(res, {
            loading: 'Wait! Creating course...',
            success: (data) => data?.data?.message || 'Course created successfully',
            error: 'Failed to create course',
        })
        return (await res).data;
    } catch (error) {
        toast.error(error?.message);
    }
})


const CourseSlice = createSlice({
    name: 'course',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllCourses.fulfilled, (state, action)=>{
            state.courseList = [...action.payload];
        })
    }
})

export default CourseSlice.reducer;