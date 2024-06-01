import axios from "axios"

export default class VacancyService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/vacancy/")
        return response.data
    }

    static async getById(id) {
        return await axios.get("http://127.0.0.1:8000/api/vacancy/" + id + "/");
    }

    static async addVacancy(newVacancyData) {
        return await axios.post("http://127.0.0.1:8000/api/vacancy/", newVacancyData);
    }
    static async updateVacancy(id, updatedVacancyData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/vacancy/${id}/`, updatedVacancyData);
        return response.data;
    }
    static async deleteVacancy(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/vacancy/${id}/`);
        return response.data;
    }
}