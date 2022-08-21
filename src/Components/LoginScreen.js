import React, { useState, useContext } from 'react'
import Context from '../Context/Context'
import Logo from '../Assets/images/Logo_Main.png'
import toast from 'react-hot-toast';


const LoginScreen = () => {
    const { setLoginScreen } = useContext(Context);
    const [userName, setUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    const [viewMessage, setViewMessage] = useState(true);

    setTimeout(() => {
        setViewMessage(false);
    }, 5000);
    const submitHandler = (e) => {
        e.preventDefault();
        if (userName.trim().length >= 6 && userName.includes('admin@mail.com') && userPassword.includes('shitPassword')) {
            setLoginScreen(false)
            localStorage.setItem('isLoggedIn', '1')
            setUserName('')
            setUserPassword('')
            toast.success('Login Successfull')
        } else {
            toast.error('invalid credentials')
        }

    }

    return (
        <div className='main-login'>
            {viewMessage ? '' : <>
                {showDetails ?
                    <div className='userInfoMessage' >
                        <div className='Message'>
                            <p className='inText'>
                                Login Details :
                            </p>
                            <p className='inText'>
                                <span className='Head'>UserName :</span> <span className='value' >admin@mail.com</span>
                                <span className='Head'> Password :</span> <span className='value' >shitPassword</span>
                            </p>
                        </div>
                        <div className='closure'>
                            <span onClick={() => { setShowDetails(false) }} className='close-btn fas fa-close'></span>
                        </div>
                    </div> :
                    <div onClick={() => { setShowDetails(true) }} className='cpointer userInfoMessage'>View Login Details</div>
                }</>}
            <div className='brandName' ><img src={Logo} alt='sideImage' className='img-fluid' /> </div>
            <div className='loginBox'>

                <div className='textBox'>
                    Pleae Login to contiue...
                </div>
                <form onSubmit={submitHandler}>
                    <div className='col'>
                        <input
                            type='text'
                            name='Address'
                            value={userName}
                            onChange={(e) => { setUserName(e.target.value) }}
                            className='form-control'
                            placeholder='Username or e-mail'
                        /></div>
                    <div className='col'>
                        <input
                            type='password'
                            value={userPassword}
                            onChange={(e) => { setUserPassword(e.target.value) }}
                            className='form-control'
                            placeholder='Password'
                        /></div>
                    <div className='col'>
                        <input
                            type='submit'
                            className='form-control'
                            placeholder='submit'
                        /></div>
                </form>
            </div>

        </div>
    )
}

export default LoginScreen