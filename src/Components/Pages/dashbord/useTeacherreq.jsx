import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const useTeacherreq = () => {
    const axiospublic = useAxiosPublic();
    const { refetch, data: teacherreq = [] } = useQuery({
        queryKey: ['teacherreq'],
        queryFn: async () => {
            const res = await axiospublic.get(`/teacherreq`)
            return res.data; 
        }
    })
    return [teacherreq, refetch]
};

export default useTeacherreq;