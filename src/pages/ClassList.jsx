import React, { useCallback, useEffect, useState } from "react";
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import GeneralSearch from '../components/GeneralSearch'
import ButtonNxtPrv from '../components/ButtonNxtPrv'
import TableClassList from '../components/TableClassList'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useDispatch } from "react-redux";
import { clearUser } from '../store/features/usersSlice'

const ClassList = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if (!cookies.userToken) {
            dispatch(clearUser())
            navigate("/")
        }
    }, [cookies.userToken])

    const onLogout = useCallback(
        () => {
          dispatch(clearUser())
          removeCookie("userToken")
        },
        [],
      )

    return (
        <Container>
            <Sidebar />
            <div className='flex flex-col w-full h-full m-5'>
                <Navbar 
                onLogout={onLogout}
                namePages={'Class List'}
                />
                <GeneralSearch />
                <div className='mt-5'>
                    <TableClassList />
                </div>
                <ButtonNxtPrv />
            </div>
        </Container>
    )
}

export default ClassList