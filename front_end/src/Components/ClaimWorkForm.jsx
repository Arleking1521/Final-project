import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import PersonService from '../axios/PersonService';
import { useFetching } from '../hookes/useFetching';
import ClaimWorkService from '../axios/ClaimWorkService';

const ClaimWorkForm = () => {
    const navigate = useNavigate();
    const [persons, setPersons] = useState([]);
    const [fetchPersons] = useFetching(async () => setPersons(await PersonService.getAll()));

    useEffect(() => {
        try {
            fetchPersons();
        } catch (error) {
            console.error('Error loading data:', error);
        }
    }, []);

    const [newWork, setNewWork] = useState({
        person: '',
        stack: '',
        frame: '',
        desired_salary: '',
        skills: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewWork({
            ...newWork,
            [name]: value,
        });
    };

    const handleSelectChange = (event) => {
        setNewWork({
            ...newWork,
            person: event.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await ClaimWorkService.addWork(newWork);
            navigate('/'); // Перенаправление на главную страницу, измените при необходимости

            console.log('Новая работа добавлена:', response);

            // Очистить форму
            setNewWork({
                person: '',
                stack: '',
                frame: '',
                desired_salary: '',
                skills: '',
            });
        } catch (error) {
            console.error('Ошибка при добавлении новой работы:', error);
        }
    };

    return (
        <Form onSubmit={handleSubmit} className='text'>
            <h2>Добавление новой работы</h2>
            <div className="newPostForm">
                <Form.Group controlId="name">
                    <Form.Label>Имя:</Form.Label>
                    <Form.Control as="select" value={newWork.person} onChange={handleSelectChange} required>
                        <option value="" disabled>
                            Выберите опцию
                        </option>
                        {persons.map((person) => (
                            <option key={person.id} value={person.id}>
                                {person.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="stack">
                    <Form.Label>Стек:</Form.Label>
                    <Form.Control
                        type="text"
                        name="stack"
                        value={newWork.stack}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="frame">
                    <Form.Label>Фреймы:</Form.Label>
                    <Form.Control
                        type="text"
                        name="frame"
                        value={newWork.frame}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="desired_salary">
                    <Form.Label>Желаемая зарплата:</Form.Label>
                    <Form.Control
                        type="text"
                        name="desired_salary"
                        value={newWork.desired_salary}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
                <Form.Group controlId="skills">
                    <Form.Label>Опыт работы:</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="skills"
                        value={newWork.skills}
                        onChange={handleChange}
                        required
                    />
                </Form.Group>
            </div>
            <Button className="btn" type="submit">
                Добавить пост
            </Button>
        </Form>
    );
};

export default ClaimWorkForm;
