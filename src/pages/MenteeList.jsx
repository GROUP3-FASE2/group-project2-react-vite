import React from 'react'

import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import GeneralSearch from '../components/GeneralSearch'
import ButtonNxtPrv from '../components/ButtonNxtPrv'
import TableMenteeList from '../components/TableMenteeList'

const MenteeList = () => {
    return (
        <Container>
            <Sidebar />
            <div className='flex flex-col w-full h-full m-5'>
                <Navbar />
                <GeneralSearch />
                <div className='mt-5'>
                    <TableMenteeList />
                </div>
                <ButtonNxtPrv />
            </div>
        </Container>
    )
}

export default MenteeList