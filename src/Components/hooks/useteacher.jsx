import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Authcontext } from '../Provaider/Authprovider';
import useAxiosSecuire from './useAxiosSecuire';

const useTeacher = () => {
    const axiossecure = useAxiosSecuire()
    const { user } = useContext(Authcontext)
    const { data: isTeacher, isPending: isTeacherloading } = useQuery({
        queryKey: [user?.email, 'isTeacher'],
            queryFn: async () => {
            const res = await axiossecure.get(`/users/teacher/${user.email}`)
            console.log(res.data)
           return res.data?.teacher;
         }
    })
    return [isTeacher, isTeacherloading];
};

export default useTeacher;