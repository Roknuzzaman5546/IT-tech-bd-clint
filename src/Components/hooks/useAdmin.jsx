import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { Authcontext } from '../Provaider/Authprovider';
import useAxiosPublic from './useAxiosPublic';

const useAdmin = () => {
    const axiospublic = useAxiosPublic();
    const { user } = useContext(Authcontext)
    const { data: isAdmin, isPending: isAdminloading } = useQuery({
        queryKey: [user?.email, 'isAdim'],
        queryFn: async () => {
            const res = await axiospublic.get(`/users/${user.email}`)
            console.log(res.data)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminloading];

};

export default useAdmin;