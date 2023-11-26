import Title from "../../Shared/Title";

const Userprofile = () => {
    return (
        <div>
            <Title
                heading={'User profile'}
                Subheading={'This is users profile'}
            ></Title>
            <div className=" w-1/2 mx-auto">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className=" w-40 rounded-full" src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className=" space-y-2">
                        <h2 className=" text-2xl font-bold font-rubik">Name: Chankey pandy</h2>
                        <p className=" text-xl font-bold">Role: Users</p>
                        <p className=" font-bold">Email: sojib@gmail.com</p>
                        <p className=" font-bold">Phone: 01755463590</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Userprofile;