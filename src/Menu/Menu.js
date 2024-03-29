import React from 'react';
import './Menu.css'
import Loading from '../Components/Loading/Loading';
import { useNavigate } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';
import CustomLink from '../Components/Shared/Header/CustomLink/CustomLink';
import { signOut } from 'firebase/auth';

const Menu = () => {
    const navigate = useNavigate()

    const [user, loading, error] = useAuthState(auth);

    let displayError;
    if (error) {
        displayError = <h5 className='text-danger text-center '>{error.message}</h5>
    }
    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='container'>
            <Navbar bg="transparent" expand="lg" className='navbar-sticky'>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="ms-auto menu">
                        {
                            user?.email || user?.displayName ? (
                                <>
                                   <>
                                   <CustomLink to="/" className='nav-link header-title'>Dashboard</CustomLink>
                                    <CustomLink to="/updateProfile" className='nav-link header-title'>Profile update</CustomLink>
                                    </> 
                                    <button className='logout-btn' onClick={() => signOut(auth)}>Logout</button>
                                </>
                            ) : (
                                navigate('/login')
                            )
                        }


                    </Nav>
                </Navbar.Collapse>

            </Navbar>
            {displayError}
        </div>
    );
};

export default Menu;