import axios from "axios"

export default class PersonService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/person/")
        return response.data
    }

    static async getById(id) {
        return await axios.get("http://127.0.0.1:8000/api/person/" + id + "/");
    }

    static async addPerson(newPersonData) {
        return await axios.post("http://127.0.0.1:8000/api/person/", newPersonData);
    }
    static async updatePerson(id, updatedPersonData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/person/${id}/`, updatedPersonData);
        return response.data;
    }
    static async deletePerson(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/person/${id}/`);
        return response.data;
    }
}