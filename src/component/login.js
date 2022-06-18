import React, { useState } from "react";
import { Checkbox, Input, notification, Space, } from 'antd';
import Button from 'react-bootstrap/Button'
import "./login.css";
import Style from './button.module.css'

function Login() {
    
    var notiftitle;
    var description;
    const openNotificationWithIcon = (type) => {
        notification[type]({
            description: description,
            notification: notiftitle,
        });
    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    function ShowMessage(res) {
        console.log(res.status);
        if (res.status === 200) {
            openNotificationWithIcon('success');
            notiftitle = 'Success';
            description = 'Successfully Logged In';
        }
        else if (email === '') {
            openNotificationWithIcon('error');
            notiftitle = 'Warning';
            description = 'Please Enter The Email';
        }
        else if (password === '') {
            openNotificationWithIcon('error');
            notiftitle = 'Warning';
            description = 'Please Enter The Password';
        }
        else {
            openNotificationWithIcon('error');
            notiftitle = 'Error'
            description = 'User Not Found'
        }
    }
    function login() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "email": email,
            "password": password
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://reqres.in/api/login", requestOptions)
            .then(response => response)
            .then(result => ShowMessage(result))
            .catch(error => console.log('error', error));
    }
    return (
        <>
                <div className="input">
                <Space direction="vertical" style={{
                    marginBottom: -10
                }}>
                    <Input type="email" placeholder="Email Address"
                        onChange={(e) => setEmail(e.target.value)}
                        className="form-control"
                        style={{
                            width: 300,
                            height: 40,
                            marginBottom: -20
                        }} />
                    <br />
                    <Input type="password" placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        className="form-control"
                        style={{
                            width: 300,
                            height: 40,
                            marginBottom: -20
                        }} />
                    <br />
                    <Button className={Style.btn3} onClick={login}>
                        Login
                    </Button>{' '}
                    <br></br>
                    <Space size={65}>
                    <Checkbox><h5>Remember Password </h5></Checkbox>
                    <h5>Forget Password? </h5>
                    </Space>
                </Space>
            </div>
        </>
    );
}
export default Login