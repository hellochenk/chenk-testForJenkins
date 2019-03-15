import React from 'react';
import styles from './add-item.scss';

const AddBtn = ({onClick}) => {
    return <div onClick={() => onClick()} className={styles.btn}>+</div>
}

export default AddBtn;
