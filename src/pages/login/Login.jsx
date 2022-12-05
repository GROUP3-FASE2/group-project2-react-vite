import React from 'react'
import loginLogo from '../../assets/login.jpg'

const Login = () => {
    return (
        <div className='bg-[#65B7CC] h-[100vw] w-[100vw]'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-2'>
                    <div>
                        <img src={loginLogo} />
                    </div>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Card title!</h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
