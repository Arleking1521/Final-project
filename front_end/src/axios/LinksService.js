import axios from "axios"

export default class LinksService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/links/")
        return response.data
    }

    static async getById(id) {
        const response =  await axios.get("http://127.0.0.1:8000/api/links/"+id+"/")
        return response;
    }

    static async addLinks(newLinksData) {
        const response = await axios.post("http://127.0.0.1:8000/api/links/", newLinksData);
        return response;
    }
    static async updateLinks(id, updatedLinksData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/links/${id}/`, updatedLinksData);
        return response.data;
    }
    static async deleteLinks(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/links/${id}/`);
        return response.data;
    }
}