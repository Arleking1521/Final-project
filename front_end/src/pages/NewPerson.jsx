import React from 'react';
import {Col, Container, Nav, Row, Tab,} from 'react-bootstrap'
import PersonForm from '../Components/PersonForm';
import ClaimWorkForm from '../Components/ClaimWorkForm';

const NewPerson = () => {
    return (
        <div className="addPage">
            <Container className='Log_cont'>
                <Tab.Container id="Tabs-person-works" defaultActiveKey='person'>
                    <Col>
                        <Row className="row_t">
                            <Nav variant="pills" className="mt-2 row_t">
                                <Nav.Item className="tabsIt">
                                    <Nav.Link eventKey='person' htmlFor="login-tab">
                                        Person
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item className="tabsIt">
                                    <Nav.Link eventKey='claim_work' htmlFor="register-tab">
                                        Claim work
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Row>
                        <Row>
                            <Tab.Content className='content'>
                                <Tab.Pane eventKey='person'>
                                    <PersonForm/>
                                </Tab.Pane>
                                <Tab.Pane eventKey='claim_work'>
                                    <ClaimWorkForm/>
                                </Tab.Pane>
                            </Tab.Content>
                        </Row>
                    </Col>
                </Tab.Container>

            </Container>
        </div>
    );
};

export default NewPerson;
