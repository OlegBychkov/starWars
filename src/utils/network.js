import { HTTP, HTTPS } from "@constants/api";

/** 
    * Изменяет url c http на https для гита
    * @parms {String} url - для изменения 
    * @return {string} - url c https
*/
export const changeHttp = url => {
    const result = url ?  url.replace(HTTP, HTTPS) : url;

    return result;
 }

 export const makeConcurrentRequest = async(url) => {
    const res = await Promise.all(url.map(res => {
        return fetch(res).then(res => res.json());
    }));

    return res;
 }
 
/**
 * Отправляет запрос fetch
 * @param {*} url -  url (string) для запроса.
 * @returns {promiss} - Promiss с результатом запроса 
 */
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




