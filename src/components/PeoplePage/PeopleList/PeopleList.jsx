import styles from './PeopleList.module.css'

const PeopleList = ({persons}) => {

    return(
            <ul className={styles.list__contaiiner}>
                {persons.map(({id, name, img}) => 
                <li className={styles.list__item} key={id}>
                    <a href='#'>
                        <img className={styles.photo} src={img} alt={name}/>
                        <p className={styles.name}>{name}</p>
                    </a>
                </li>)}
            </ul>
    )
} 

export default PeopleList;
