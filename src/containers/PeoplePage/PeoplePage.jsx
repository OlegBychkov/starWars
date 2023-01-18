import { useState, useEffect } from 'react';
import { whithErrorApi } from '../../hoc-helper/withErrorApi';
import { getApiRes } from '../../utils/network';
import { SWAPI_SUM_PEOPLE_URL } from '../../constants/api';
import { getPersonNumber, getPersonAvatar } from '../../services/getPersonNumber';
import PeopleList from '../../components/PeoplePage/PeopleList'



const PeoplePage = ({ setErrorApi }) => {
    const [persons, setPersons] = useState(null);

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
          setErrorApi(false);
      }else{
        setErrorApi(true);
      }
    }

    useEffect(() => {
        getRes(SWAPI_SUM_PEOPLE_URL);
    }, []);
    
    return(<>
        <h1>navigation</h1>
        {persons && <PeopleList persons={persons}/> }        
    </>)
} 

export default whithErrorApi(PeoplePage);
