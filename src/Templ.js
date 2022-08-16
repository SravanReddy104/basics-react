const Templ = () => {
    const firstname = "Sravan Reddy";
    const lastname = "Myakala";
    return ( 
        <>
        
        <h1> hello </h1> 
        <h2> hello world </h2> 
        <h1> { `The first name is ${firstname} +and +${lastname}+ is lastname` } </h1>
        </>
    );
};
export default Templ;