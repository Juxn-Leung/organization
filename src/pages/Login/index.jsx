import React, { Component } from 'react';
import { Form, Input, Button, message, Space } from 'antd';
import { CloseOutlined, WechatOutlined } from '@ant-design/icons';
import { getLogin } from '../../request/ApiServ';

import style from './index.module.scss';

const winHeight = document.body.clientHeight;

export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: null
        };
    }

    componentWillMount() {
        console.log(document.body.clientHeight)
    }

    //监听窗口大小改变

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this))
    }

    //移除监听器，防止多个组件之间导致this的指向紊乱
    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    handleResize = (e) => {
        //e.target.innerWidth是浏览器窗口的宽度
        // 根据宽度不同，进行你所要进行的操作
        console.log(e)
    }

    onFinish = (values) => {
        console.log('Success:', values);
        if (values.userName === "admin") {
            if (values.passWord === "123456") {
                this.successMessage('登陆成功')
                this.goRouter('/index');
            } else {
                this.errorMessage('用户名或密码错误')
            }
        }
    };

    successMessage = (value) => {
        message.success(value);
    };

    errorMessage = (value) => {
        message.error(value);
    };

    warningMessage = (value) => {
        message.warning(value);
    };

    onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

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
        this.props.history.replace({
            pathname: path,
            state: null
        })
    }

    render() {
        return (
            <div className={style.container} style={{ height: winHeight }}>
                <div className={style.cloes}>
                    <CloseOutlined />
                </div>
                <div className={style.title}>
                    <p>验证码登录</p>
                </div>

                <div className={style.content}>
                    <Form
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="userName"
                            rules={[{ required: true, message: '请输入手机号' }]}
                        >
                            <Input placeholder="请输入手机号" />
                        </Form.Item>

                        <Form.Item
                            name="passWord"
                            rules={[{ required: true, message: '请输入验证码' }]}
                        >
                            <Input.Password placeholder="请输入验证码" />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <div className={style.foot}>
                    <div className={style.title}>
                        <p>第三方登录</p>
                    </div>

                    <div className={style.button}>
                        <WechatOutlined />
                        <p>微信登录</p>
                    </div>
                </div>

                {/* <div onClick={this.goRouter('/login')}>Go Login</div> */}
            </div>
        )
    }
}
