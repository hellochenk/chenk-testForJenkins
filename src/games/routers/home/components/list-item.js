import React from 'react';
import styles from './list-item.scss';

const ListItem = ({item}) => {
    console.log(item)

    return <li className={styles.item}>

        <p>发布人名称： {item.User}</p>
        <p>游戏名称： {item.Game}</p>
        <p>游戏价格： {item.Price}</p>
        <p>备注信息： {item.Mark}</p>
        <p>联系方式： {item.Connect}</p>
        <p>创建日期： {item.Date}</p>

    </li>
}

export default ListItem;
