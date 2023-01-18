import { SWAPI_PEOPLE_URL, HTTP, SWAPI_SUM_PEOPLE_URL, GUIDE_IMG_EXTENSION,URL_AVATAR_PERSON} from "../constants/api";

const getID = (url, category) => {
    const id = parseInt(url.replace(/[^\d]/g, ''))
    return id
}

export const getPersonNumber = url => getID(url, SWAPI_PEOPLE_URL);

export const getPersonAvatar = id => `${URL_AVATAR_PERSON}/${id +GUIDE_IMG_EXTENSION}`;