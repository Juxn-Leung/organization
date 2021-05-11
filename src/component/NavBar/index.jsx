import React, { Component } from 'react'
import style from './index.module.scss';

import navList from './config'

export default class NavBar extends Component {
    render() {
        return (
            <div className={style.container}>
                {
                    navList.map((item) => {
                        return (
                            <div key={item.id} className={style.nav}>
                                <img src={item.img} />
                                <p>{item.name}</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
