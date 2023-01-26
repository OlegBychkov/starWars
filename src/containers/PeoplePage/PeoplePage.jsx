import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; 

import { whithErrorApi } from '@hoc-helper/withErrorApi';

import PeopleList from '@components/PeoplePage/PeopleList';
import PeopleNavigation from '@components/PeoplePage/PeopleNavigation';
import { getApiRes, changeHttp } from '@utils/network';
import { getPersonNumber, getPersonAvatar, getPeoplePageId } from '@services/getPersonNumber';
import { SWAPI_SUM_PEOPLE_URL } from '@constants/api';
import { useQueryParams } from '@hooks/useQueryParams';



// import styles from './PeoplePage.module.css'



const PeoplePage = ({ setErrorApi }) => {
    const [persons, setPersons] = useState(null);
    const [prevPage, setPrevPage] = useState(null);
    const [nextPage, setNextPage] = useState(null);
    const [counterPage, setCounterPage] = useState(1);

    const query = useQueryParams();
    const queryPage = query.get('page');

    const getRes = async (url) => {
      const body = await getApiRes(url);


      if(body){
        const personsList = body.results.map(({name, url}) => {
          const id = getPersonNumber(url);
          const img = getPersonAvatar(id)
  
          return{
             id,
             name,
             img
          }
        })
  
          setPersons(personsList);
          setPrevPage(changeHttp(body.previous));
          setNextPage(changeHttp(body.next));
          setCounterPage(getPeoplePageId(url));
          setErrorApi(false);
      }else{
        setErrorApi(true);
      }
    }

    useEffect(() => {
        getRes(SWAPI_SUM_PEOPLE_URL + queryPage);
    }, []);
    
    return(<>
        <PeopleNavigation 
          getRes={getRes}
          prevPage={prevPage}
          nextPage={nextPage}
          counterPage={counterPage}
        />
        {persons && <PeopleList persons={persons}/> }        
    </>)
} 
PeoplePage.propTypes = {
  setErrorApi: PropTypes.func
}

export default whithErrorApi(PeoplePage);
