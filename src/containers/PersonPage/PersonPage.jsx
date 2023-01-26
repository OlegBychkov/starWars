import PropTypes from 'prop-types';
import React, { useEffect, useState, Suspense } from 'react';


import { useParams } from 'react-router';
import { whithErrorApi } from '@hoc-helper/withErrorApi';

import PersonInfo from '@components/PersonPage/PersonInfo/PersonInfo';
import PersonPhoto from '@components/PersonPage/PersonPhoto';
import PersonGoBack from '@components/PersonPage/PersonGoBack/PersonGoBack';

import UiLoading from '@components/UI/UiLoading';


import { SWAPI_SUM_PERSON_URL } from '@constants/api'
import styles from './PersonPage.module.css'    
import { getApiRes } from '@utils/network';
import { getPersonAvatar } from '@services/getPersonNumber';



const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms'));


const PersonPage = ({setErrorApi}) => {

    const [personInfo, setPersonInfo] = useState(null);
    const [personName, setPersonName] = useState(null);
    const [personPhoto, setPersonPhoto] = useState(null);
    const [personFilms, setPersonFilms] = useState(null);
    const {id} = useParams();

    useEffect(() => {
        (async () => {
            const res = await getApiRes(`${SWAPI_SUM_PERSON_URL}/${id}/`);
            
            if(res){
                setPersonInfo([
                    {title:'Height', data: res.height},
                    {title:'Mass', data: res.mass},
                    {title:'Hair Color', data: res.hair_color},
                    {title:'Skin Color', data: res.skin_color},
                    {title:'Eye color', data: res.eye_color},
                    {title:'Birth year', data: res.birth_year},
                    {title:'Gender', data: res.gender},
                ]);

                setPersonName(res.name);
                setPersonPhoto(getPersonAvatar(id))

                res.films.length && setPersonFilms(res.films);

                setErrorApi(false)
            }else{
                setErrorApi(true);
            }
        })();
    },[]);


    return(<>
        <PersonGoBack />

        <div className={styles.wrapper}>
            <span className={styles.person__name}>{personName}</span>

            <div className={styles.container}>
                <PersonPhoto 
                    personPhoto={personPhoto}
                    personName={personName}
                />
                
                    
                {personInfo && <PersonInfo personInfo={personInfo}/>}

                {personFilms &&(
                    <Suspense fallback={<UiLoading />} > 
                       <PersonFilms personFilms={personFilms} />
                    </Suspense>
                ) }
            </div>
        </div> 
    </>)

} 

PersonPage.propTypes = {
    setErrorApi: PropTypes.func
}

export default whithErrorApi(PersonPage);
