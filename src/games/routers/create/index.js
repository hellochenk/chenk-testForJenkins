import React from 'react';
import styles from './styles.scss';
import { paths } from '../../constants/config';
import { AddNewOne } from './service';
import moment from 'moment';

const defaultState = {
    game: '',
    price: '',
    user: '',
    connect: '',
    mark: ''
}
export default class Create extends React.Component{
    state = defaultState 

    handleChange = (e, type) => {
        // console.log(e.target.value, type)
        this.setState({
            [type]: e.target.value
        })
    }

    handleSubmit = () => {
        // console.log('submit',this.state)
        const { game, price, user, connect, mark } = this.state;
        if(!game || ! price || !user) {
            return alert('必须填写游戏，价格，以及群昵称')
        }

        AddNewOne({
            game, 
            price, 
            user, 
            connect, 
            mark,
            date: moment(new Date()).format()
        }).then(res => {
            console.log('res'.res)
            if(res.type === 'success') {
                this.handleCancel()
            }
        })

    }

    handleCancel = () => {
        this.props.history.push(paths.home);
    }

    handleReset = () => {
        this.setState({
            ...defaultState
        })
    }

    render() {
        const { game, price, user, connect, mark } = this.state;
        return (<div className={styles.create}>
            <p className={styles.title}>你可以在这里发布你的信息</p>
            <div className={styles.colon}>
                <p>*游戏名称：</p>
                <input value={game} onChange={(e) => this.handleChange(e, 'game')}/>
            </div>

            <div className={styles.colon}>
                <p>*价格：</p>
                <input value={price} onChange={(e) => this.handleChange(e, 'price')}/>
            </div>

            <div className={styles.colon}>
                <p>*我的群昵称：（建议依靠群昵称互相联系）</p>
                <input value={user} onChange={(e) => this.handleChange(e, 'user')}/>
            </div>

            <div className={styles.colon}>
                <p>联系方式：（不建议填写）</p>
                <input value={connect} onChange={(e) => this.handleChange(e, 'connect')}/>
            </div>

            <div className={styles.colon}>
                <p>备注：</p>
                <input value={mark} onChange={(e) => this.handleChange(e, 'mark')}/>
            </div>

            <div className={styles.btnBox}>
                <p className={styles.submit} onClick={this.handleSubmit}>确认发布</p>
                <p className={styles.cancel} onClick={this.handleCancel}>取消发布</p>
                <p className={styles.reset} onClick={this.handleReset}>重置</p>
            </div>
        </div>)
    }
};
