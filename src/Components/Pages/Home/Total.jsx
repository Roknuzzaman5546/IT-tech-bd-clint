import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/Title";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Total = () => {
    const axiospublic = useAxiosPublic();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiospublic.get('/users')
            return res.data;
        },
    })

    const student = users.filter(item => item.role == 'student')
    const { data: classes = [], } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiospublic.get('/class')
            return res.data;
        }
    })

    console.log(users, classes, student)

    return (
        <div>
            <Title
                heading={'Our total count'}
            >
            </Title>
            <h2>{users.length}</h2>
            <h2>{classes.length}</h2>
        </div>
    );
};

export default Total;