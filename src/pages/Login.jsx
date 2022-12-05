import React from 'react'

import Container from '../components/Container'
import LoginCard from '../components/LoginCard'
import logo from '../assets/logo.png'
import login from '../assets/bg-logo.png'

const Login = () => {
    return (
        <Container>
            <div className='flex flex-col w-full h-screen bg-dark-alta'>
                <div className='m-5 w-full'>
                    <img src={logo} alt="" className='w-32 mx-5' />
                </div>
                <div className='w-3/4 mx-10'>
                    <h1 className='mt-5 text-6xl font-bold text-white'>Welcome...</h1>
                    <p className='my-5 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi consectetur impedit odio architecto, laboriosam nemo quo deleniti maxime iste dicta?</p>
                </div>
                <div className='w-full h-full'>
                    <img src={login} alt="" className='block m-auto' />
                </div>
            </div>
            <div className='flex flex-col w-full h-screen bg-dark-alta'>
                <div className='flex h-screen justify-center items-center'>
                    <LoginCard />
                </div>
            </div>
        </Container>
    )
}

export default Login
