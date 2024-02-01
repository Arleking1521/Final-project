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
        photo: null,
        living_place: '',
        languages: '',
        work_ex: null,
        certificate_knewit: false,
    });

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        setNewPerson({
            ...newPerson,
            photo: file,  // Здесь сохраняем сам файл, а не его имя
        });
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
            // Создаем объект FormData для передачи файлов и текстовых данных
            const formData = new FormData();

            // Добавляем текстовые данные в formData
            Object.keys(newPerson).forEach((key) => {
                formData.append(key, newPerson[key]);
            });

            // Проверка наличия выбранного файла
            if (selectedFile) {
                formData.append('photo', selectedFile);
            }
            else {
                formData.append('photo', null);
            }

            const response = await PersonService.addPerson(formData);

            console.log('Новый человек добавлен:', response);

            setNewPerson({
                name: '',
                age: '',
                phone: '',
                email: '',
                photo: null,
                living_place: '',
                languages: '',
                work_ex: null,
                certificate_knewit: false,
            });
            setSelectedFile(null);
            navigate('/newperson');
        } catch (error) {
            console.error('Ошибка при добавлении нового человека:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className='text'>
            <h2>Добавление нового человека</h2>
                <div>
                    <Form.Group controlId="name">
                        <label >Имя:</label>
                        <Form.Control
                            type="text"
                            name="name"
                            value={newPerson.name}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="age">
                        <label>Возраст:</label>
                        <Form.Control
                            type="text"
                            name="age"
                            value={newPerson.age}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <label>Телефон:</label>
                        <Form.Control
                            type="text"
                            name="phone"
                            value={newPerson.phone}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="email">
                        <label>Почта:</label>
                        <Form.Control
                            type="text"
                            name="email"
                            value={newPerson.email}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                </div>
                <div>
                    <Form.Group controlId="file">
                        <label>Файлы:</label>
                        <Form.Control type="file" onChange={handleFileChange} />
                    </Form.Group>
                    <Form.Group controlId="living_place">
                        <label>Место проживания:</label>
                        <Form.Control
                            type="text"
                            name="living_place"
                            value={newPerson.living_place}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="languages">
                        <label>Знание языков:</label>
                        <Form.Control
                            type="text"
                            name="languages"
                            value={newPerson.languages}
                            onChange={handleChange}
                            required
                        />
                    </Form.Group>
                    <Form.Group controlId="work_ex">
                        <label>Опыт работы:</label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            name="work_ex"
                            onChange={handleChange}
                        />
                    </Form.Group>
                </div>
            <Button className="btn" type="submit">
                Добавить человека
            </Button>
        </Form>
    );
};

export default PersonForm;
