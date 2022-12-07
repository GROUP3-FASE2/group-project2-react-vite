import React, { useCallback, useEffect, useState } from "react";
import Container from '../components/Container'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import GeneralSearch from '../components/GeneralSearch'
import ButtonNxtPrv from '../components/ButtonNxtPrv'
import TableMenteeList from '../components/TableMenteeList'
import MenteeFilter from '../components/MenteeFilter'
import { useNavigate } from "react-router-dom";
import { useCookies } from 'react-cookie';
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from '../store/features/usersSlice'
import Swal from "sweetalert2";


const MenteeList = () => {

    const [cookies, setCookie, removeCookie] = useCookies(['userToken']);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const currentUsers = useSelector((state) => state.users.currentUser);

    useEffect(() => {
        if (!cookies.userToken) {
            dispatch(clearUser())
            navigate("/badpage")
        }
    }, [cookies.userToken])

    const onLogout = useCallback(
        () => {
            Swal.fire({
                title: "Are you sure want to logout?",
                // text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                confirmButtonText: "Yes",
                cancelButtonColor: "#d33",
                cancelButtonText: "No",
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        text: "Logout successfully",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    dispatch(clearUser());
                    removeCookie("userToken");
                    navigate("/");
                }
            });
        }, []);


    return (
        <Container>
            <Sidebar />
            <div className='flex flex-col w-full h-full m-5'>
                <Navbar
                    onLogout={onLogout}
                    namePages={'Mentee List'} 
                    userName={currentUsers.full_name}
                    />
                <GeneralSearch
                    onclick={() => navigate('/addmentee')} />
                <MenteeFilter />
                <div className='mt-5'>
                    <TableMenteeList
                        onClick={() => navigate('/menteelog')} />
                </div>
                <ButtonNxtPrv />
            </div>
        </Container>
    )
}

export default MenteeList