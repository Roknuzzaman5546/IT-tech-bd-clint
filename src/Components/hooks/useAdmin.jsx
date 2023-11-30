import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Authcontext } from '../Provaider/Authprovider';
import useAxiosSecuire from './useAxiosSecuire';

const useAdmin = () => {
    const axiossecure = useAxiosSecuire()
    const { user } = useContext(Authcontext)
    const { data: isAdmin, isPending: isAdminloading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            const res = await axiossecure.get(`/users/admin/${user.email}`)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminloading];
};

export default useAdmin;