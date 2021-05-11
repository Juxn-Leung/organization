import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getLogin } from '../../request/ApiServ'

import 'swiper/swiper.scss';
import style from './index.module.scss';

import wbb from '../../assest/index/wbb.png';
import w from '../../assest/index/w.jpg';
import ten from '../../assest/index/10.png';
import bb from '../../assest/index/bb.jpg';
const bannerList = [wbb, w, bb, ten];
console.log(bannerList)
export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: null
        };
    }

    getLogin = async () => {
        let params = { //请求参数
            userName: this.state.userName,
            passWord: this.state.passWord
        }
        try {
            const { data } = await getLogin(params)
            if (data) {
                console.log(data);
            }
        } catch (error) {

        }
    }

    goRouter = (path) => {
        return () => {
            this.props.history.replace({
                pathname: path,
                state: null
            })
        }
    }

    render() {
        return (
            <div className={style.container}>
                {/* <div className={style.cloes}></div> */}
                <div className={style.title}>
                    <p>微教培少儿培训中心</p>
                </div>

                <div className={style.content}>
                    <div className={style.swiper}>
                        <Swiper
                            spaceBetween={50}
                            slidesPerView={1}
                            loop={true}
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                        >
                            {
                                bannerList.map((item, index) => {
                                    return (
                                        <SwiperSlide>
                                            <img key={index} src={item} />
                                        </SwiperSlide>
                                    )
                                })
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        )
    }
}
