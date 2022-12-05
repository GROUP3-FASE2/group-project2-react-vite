import React from 'react'
import { FaUserFriends } from 'react-icons/fa';
import { FiUser } from 'react-icons/fi';
import { SiGoogleclassroom } from 'react-icons/si';
import { VscFeedback } from 'react-icons/vsc';


const CardDashboard = () => {
    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 mb-10'>
            <div className="card w-[300px] bg-base-100 shadow-xl mt-24 mx-auto">
                <div className="card-body  gap-14">
                    <p className='flex text-2xl'>
                        <FaUserFriends className='mr-4 mt-1 ' />
                        Mentee Active
                    </p>
                    <h2 className='flex p-3 text-2xl'>
                        <FiUser className=' mr-3' />
                        100 Mente
                    </h2>
                </div>
            </div>
            <div className="card w-[300px] bg-base-100 shadow-xl mt-24 mx-auto">
                <div className="card-body ">
                    <p className='flex text-2xl'>
                        <SiGoogleclassroom className='mr-4 mt-1 ' />
                        Mentee Placement
                    </p>
                    <h2 className='flex p-3 text-2xl'>
                        <FiUser className=' mr-3' />
                        100 Mente
                    </h2>
                </div>
            </div>
            <div className="card w-[300px] bg-base-100 shadow-xl mt-24 mx-auto">
                <div className="card-body ">
                    <p className='flex text-2xl'>
                        <VscFeedback className='mr-4 mt-1 ' />
                        Mentee Feedback
                    </p>
                    <h2 className='flex p-3 text-2xl'>
                        <FiUser className=' mr-3' />
                        100 Feedback
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default CardDashboard