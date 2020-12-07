import React from 'react';
import LaunchesItem from '../LaunchesItem/LaunchesItem';
import PreloaderItem from '../PreloaderItem/PreloaderItem';

import styles from './launchesList.module.scss';


const LaunchesList = ({title, items}) => {
    return (
        <div className={styles.list}>
            <div className={styles.list__title}>
                <span>{title}</span>
            </div>
            {
                !items.length ?
                (<>
                <PreloaderItem />
                <PreloaderItem />
                <PreloaderItem />
                </>) : (
                    items.map((item, index) => <LaunchesItem key={index} item={item}/>)
                )
            }
        </div>
    );
}

export default LaunchesList;
