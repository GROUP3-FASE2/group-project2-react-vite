import React, { useCallback, useEffect, useState } from "react";
import ButtonNxtPrv from '../components/ButtonNxtPrv'
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import TableUserList from '../components/TableUserList'
import GeneralSearch from "../components/GeneralSearch";
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useDispatch } from "react-redux";
import { clearUser } from '../store/features/usersSlice'

const UserList = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!cookies.userToken) {
            dispatch(clearUser())
            navigate("/")
        }
    }, [cookies.userToken])

    return (
        <Container>
            <Sidebar />
            <div className="flex flex-col w-full h-full m-5 ">
                <Navbar namePages={"User List"} />
                <GeneralSearch />
                <div>
                    <TableUserList />
                </div>
                <ButtonNxtPrv />
            </div>
        </Container>
    )
}

export default UserList