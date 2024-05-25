import axios from "axios"

export default class ClaimWorkService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/jobseekers/work/")
        return response.data
    }

    static async getById(id) {
        return await axios.get("http://127.0.0.1:8000/api/jobseekers/work/" + id + "/");
    }

    static async addWork(newWorkData) {
        return await axios.post("http://127.0.0.1:8000/api/jobseekers/work/", newWorkData);
    }
    static async updateWork(id, updatedWorkData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/jobseekers/work/${id}/`, updatedWorkData);
        return response.data;
    }
    static async deleteWork(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/jobseekers/work/${id}/`);
        return response.data;
    }
}