import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import { getLogin } from '../../request/ApiServ'

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export default class index extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            passWord: null
        };
    }

    onFinish = (values) => {
        console.log('Success:', values);
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
        return () => {
            this.props.history.replace({
                pathname: path,
                state: null
            })
        }
    }

    render() {
        return (
            <div className="container">
                <div className="cloes">
                    <CloseOutlined />
                </div>
                <div className="title">
                    <p>验证码登录</p>
                </div>

                <div className="content">
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                        onFinishFailed={this.onFinishFailed}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入手机号' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入验证码' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

                <div onClick={this.goRouter('/login')}>Go Login</div>
            </div>
        )
    }
}
