import axios from "axios"

export default class TechService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/jobseekers/tech/")
        return response.data
    }

    static async getById(id) {
        return await axios.get("http://127.0.0.1:8000/api/jobseekers/tech/" + id + "/");
    }

    static async addTech(newTechData) {
        return await axios.post("http://127.0.0.1:8000/api/jobseekers/tech/", newTechData);
    }
    static async updateTech(id, updatedTechData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/jobseekers/tech/${id}/`, updatedTechData);
        return response.data;
    }
    static async deleteTech(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/jobseekers/tech/${id}/`);
        return response.data;
    }
}