export const getApiRes = async (url) => {
    try {
        const response  = await fetch(url);
        if(!response.ok){
            console.log(response.status);
            return false;
        }
        return await response.json();
    } catch (error) {
        console.error(error.massage);
        return false;
    }
}




