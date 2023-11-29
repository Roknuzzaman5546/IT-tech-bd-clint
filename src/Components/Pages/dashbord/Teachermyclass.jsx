import { useQuery } from "@tanstack/react-query";
import Title from "../../Shared/Title";
import useAxiosSecuire from "../../hooks/useAxiosSecuire";

const Teachermyclass = () => {
    const axiossecure = useAxiosSecuire();
    const { data: classes = [], } = useQuery({
        queryKey: ['classes'],
        queryFn: async () => {
            const res = await axiossecure.get('/class')
            return res.data;
        }
    })

    return (
        <div>
            <Title
                Subheading={'Your all class is here include'}
                heading={'MY class'}
            >
            </Title>
        </div>
    );
};

export default Teachermyclass;