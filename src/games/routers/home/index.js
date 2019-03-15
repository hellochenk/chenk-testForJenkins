import React from 'react';
import styles from './styles.scss';
import { getGame, testGame } from './service';
import { paths } from '../../constants/config'
import Banner from './components/banner';
import ListItem from './components/list-item';
import AddBtn from './components/add-item';

class Home extends React.Component{
    state = {
        list: []
    }

    componentDidMount() {
        getGame().then(res => {
           if(res.type === 'success') {
               this.setState({
                   list: res.result
               })
           }
        });
    }

    addItem = () => {
        console.log(this.props)
        this.props.history.push(paths.create)
    }

    render() { 
        const { list } = this.state
        return (<div className={styles.home}>
            <Banner />
            <ul className={styles.list}>
                {
                    list.length ? list.map((item, i) => {
                        return <ListItem item={item} key={i}/>
                    })
                    : <p>暂无数据</p>
                }
            </ul>
            <AddBtn onClick={this.addItem} />
        </div>)
    }
}

export default Home;
