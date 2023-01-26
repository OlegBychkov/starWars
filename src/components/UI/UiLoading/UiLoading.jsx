import PropTypes from 'prop-types';
import cn from 'classnames';

import { useState,useEffect } from 'react'
import loaderBlack from './img/loader-black.svg' 
import loaderWhite from './img/loader-white.svg' 
import loaderBlue from './img/loader-blue.svg' 
import styles from './UiLoading.module.css'

const UiLoading = ({theme = 'white', isShadow=true, classes }) => {

    const [loaderIcon, setLoaderIcon] = useState(null);

    useEffect(() => {
        switch (theme) {
            case 'black': setLoaderIcon(loaderBlack); break;
            case 'white': setLoaderIcon(loaderBlack); break;
            case 'blue': setLoaderIcon(loaderBlack); break;
            default: setLoaderIcon(loaderBlack);
        } 
    }, [])

    return( <div className={styles.wrapper}>
        <img 
            className={cn(styles.loader, isShadow && styles.shadow, classes)}
            src={loaderIcon}
            alt="Loader"
        />
    </div>)
} 

UiLoading.propTypes = {
    theme: PropTypes.string,
    isShadow: PropTypes.bool,
    classes: PropTypes.string
}

export default UiLoading;