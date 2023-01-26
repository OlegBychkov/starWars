import { SWAPI_PEOPLE_URL, HTTP,HTTPS, SWAPI_SUM_PEOPLE_URL, GUIDE_IMG_EXTENSION,URL_AVATAR_PERSON, SWAPI_PARAM_PAGE} from "@constants/api";

export const getPeoplePageId = url => {
    const position = url.lastIndexOf(SWAPI_PARAM_PAGE);
    const id = url.slice(position + SWAPI_PARAM_PAGE.length, url.length);

    return Number(id);
}

const getID = (url, category) => {
    const id = parseInt(url.replace(/[^\d]/g, ''))
    return id
}

export const getPersonNumber = url => getID(url, SWAPI_PEOPLE_URL);

export const getPersonAvatar = id => `${URL_AVATAR_PERSON}/${id +GUIDE_IMG_EXTENSION}`;