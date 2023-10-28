import LoginPage from '../login/login'
import { useState, useEffect } from 'react';

// const loginstyle = {
//     zIndex:'3',
//     display:none
// }

export default function Top() {
    const [dis, setdis] = useState('none')
    const loginstyle = {
        zIndex: '3',
        display: dis
    }
    function loginClick() {
        setdis('block')
    }

    return (
        <div >
            <span onClick={loginClick}>登录</span>
            <div style={loginstyle}>
                <LoginPage />
            </div>


        </div>
    );
}
