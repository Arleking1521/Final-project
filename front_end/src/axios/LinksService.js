import axios from "axios"

export default class LinksService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/jobseekers/links/")
        return response.data
    }

    static async getById(id) {
        return await axios.get("http://127.0.0.1:8000/api/jobseekers/links/" + id + "/");
    }

    static async addLinks(newLinksData) {
        return await axios.post("http://127.0.0.1:8000/api/jobseekers/links/", newLinksData);
    }
    static async updateLinks(id, updatedLinksData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/jobseekers/links/${id}/`, updatedLinksData);
        return response.data;
    }
    static async deleteLinks(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/jobseekers/links/${id}/`);
        return response.data;
    }
}