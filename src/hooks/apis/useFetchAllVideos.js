import { getAllVideos } from "@/apis/videos";
import { useQuery } from "@tanstack/react-query";

export default function useFetchAllVideos() {
    const { 
        isFetching: isVideoFetching, 
        isError: isVideoError, 
        isFetched: isVideoFetched, 
        data: videos 
    } = useQuery({
        queryKey: "videos",
        queryFn: getAllVideos,
        cacheTime: 0 // 0 means no cache
    });

    return {
        isVideoFetching,
        isVideoError,
        isVideoFetched,
        videos
    }
}