import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row } from 'react-bootstrap';
import PersonService from '../axios/PersonService';

const PersonForm = () => {
    const navigate = useNavigate();
    const [selectedFile, setSelectedFile] = useState(null);
    const [newPerson, setNewPerson] = useState({
        name: '',
        age: '',
        phone: '',
        email: '',
        living_place: '',
        languages: '',
        work_ex: '',
        certificate_knewit: false,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewPerson({
            ...newPerson,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();
            formData.append('file', selectedFile);

            Object.keys(newPerson).forEach((key) => {
                formData.append(key, newPerson[key]);
            });

            const response = await PersonService.addPerson(formData);
            navigate('/');
            console.log('Новый человек добавлен:', response);

            setNewPerson({
                name: '',
                age: '',
                phone: '',
                email: '',
                living_place: '',
                languages: '',
                work_ex: '',
                certificate_knewit: false,
            });
            setSelectedFile(null);
        } catch (error) {
            console.error('Ошибка при добавлении нового человека:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className='text'>
            <h2>Добавление нового человека</h2>
            <Row>
                <Col>
                    <Form.Group controlId="name">
                        <Form.Label >Имя:</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={newPerson.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="age">
                        <Form.Label>Возраст:</Form.Label>
                        <Form.Control
                            type="text"
                            name="age"
                            value={newPerson.age}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>Телефон:</Form.Label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={newPerson.phone}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Почта:</Form.Label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={newPerson.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <Form.Group controlId="file">
                        <Form.Label>Файлы:</Form.Label>
                        <Form.Control type="file" onChange={handleFileChange} />
                    </Form.Group>
                    <Form.Group controlId="living_place">
                        <Form.Label>Место проживания:</Form.Label>
                        <Form.Control
                            type="text"
                            name="living_place"
                            value={newPerson.living_place}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="languages">
                        <Form.Label>Знание языков:</Form.Label>
                        <Form.Control
                            type="text"
                            name="languages"
                            value={newPerson.languages}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="work_ex">
                        <Form.Label>Опыт работы:</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="work_ex"
                            value={newPerson.work_ex}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button className="btn" type="submit">
                Добавить человека
            </Button>
        </Form>
    );
};

export default PersonForm;
