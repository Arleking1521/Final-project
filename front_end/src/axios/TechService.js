import axios from "axios"

export default class TechService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/tech/")
        return response.data
    }

    static async getById(id) {
        const response =  await axios.get("http://127.0.0.1:8000/api/tech/"+id+"/")
        return response;
    }

    static async addTech(newTechData) {
        const response = await axios.post("http://127.0.0.1:8000/api/tech/", newTechData);
        return response;
    }
    static async updateTech(id, updatedTechData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/tech/${id}/`, updatedTechData);
        return response.data;
    }
    static async deleteTech(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/tech/${id}/`);
        return response.data;
    }
}