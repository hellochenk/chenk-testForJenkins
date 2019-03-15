import React from 'react';
import styles from './styles.scss';
import { getGame } from './service';

class Home extends React.Component{
    componentDidMount() {
        getGame().then(res => {
            console.log(res)
        })
    }

    render() {    
        return (<div className={styles.home}>
            this is home
        </div>)
    }
}

export default Home;
