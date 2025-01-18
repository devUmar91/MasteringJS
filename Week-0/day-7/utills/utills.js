
export const addTwoNumbers = (a,b)=>{
    return (a+b);
       
}



// export const fetchData = async(url)=>{
//     try{
//            const response = await fetch(url)
//            const data = await response.json()
//            return data.products;
//         //    console.log(data);
//     }
//     catch(error){
//            console.log("error getting data from api");
           
//     }
// }

export const fetchData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data.products);
        return data; // Adjust based on the API structure
    } catch (error) {
        console.error("Error fetching data:", error.message);
        return null; // Return `null` in case of error
    }
};



