import PropTypes from 'prop-types'; 
import { Link } from 'react-router-dom';

import styles from './PeopleList.module.css'

const PeopleList = ({persons}) => {

    return(
            <ul className={styles.list__contaiiner}>
                {persons.map(({id, name, img}) => 
                <li className={styles.list__item} key={id}>
                    <Link to={`/people/${id}`}>
                        <img className={styles.photo} src={img} alt={name}/>
                        <p className={styles.name}>{name}</p>
                    </Link>
                </li>)}
            </ul>
    )
} 

PeopleList.propTypes = {
    persons: PropTypes.array
}

export default PeopleList;
