import axiosInstance from "@/config/axiosConfig.js";

export const getAllVideos = async () => {
    try {
        
        const response = await axiosInstance.get("/videos");
        console.log("response", response);
        return response?.data;

    } catch (error) {
        console.log("Something went wrong while fetching all videos", error);
    }
}