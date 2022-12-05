import React from 'react'
import ButtonNewLog from '../components/ButtonNewLog'
import ButtonNxtPrv from '../components/ButtonNxtPrv'
import CardNewLog from '../components/CardNewLog'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TableUserList from '../components/TableUserList'

const UserList = () => {
    return (
        <Container>
            <Sidebar />
            <div className="flex flex-col w-full h-full m-5 ">
                <Navbar namePages={"User List"} />
                <div>
                    <TableUserList />
                </div>
                <ButtonNxtPrv />
            </div>
        </Container>
    )
}

export default UserList