import React from 'react';
import { Button, Form } from 'react-bootstrap';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { toast } from 'react-toastify';
// import auth from '../../../firebase.init';
// import Footer from '../../Shared/Footer/Footer';
// import NavMenu from '../../Shared/NavMenu/NavMenu';
// import Notes from '../Notes/Notes';
import './Home.css';

const Home = () => {
    

    return (
        <div className='home-container'>
            {/* <NavMenu></NavMenu> */}
            <div className='home'>
                <h1 className=''><strong>T O D O</strong></h1>
                <div className='input-fields'>
                    <Form >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Note Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Enter Note Title"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="floatingTextarea2">
                            <Form.Label>Note Description</Form.Label>
                            <Form.Control
                                as="textarea"
                                name='note'
                                placeholder="Type your Note..."

                            />
                        </Form.Group>
                        <Button variant="outline-info" className='mx-5' type="submit">ADD TASK</Button>
                    </Form>
                </div>
            </div>
            <div className='HR'></div>

            {/* <Notes></Notes> */}

            {/* <Footer></Footer> */}
        </div>
    );
};

export default Home;