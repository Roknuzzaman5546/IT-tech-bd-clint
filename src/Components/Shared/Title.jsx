const Title = ({Subheading, heading}) => {
    return (
        <div className=" mb-10 mt-5">
            <h1 className=" text-4xl border-2 border-b-slate-400 border-t-slate-400 py-5 w-1/2 mx-auto text-center font-Chinzel uppercase font-bold font-rancho">{heading}</h1>
            <h1 className=" text-center mb-2 text-yellow-500 text-xl">---{Subheading}---</h1>
        </div>
    );
};
 
export default Title;