import axios from "axios"

export default class ClickService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/clicks/")
        return response.data
    }

    static async addClick(newClickData) {
        return await axios.post("http://127.0.0.1:8000/api/clicks/", newClickData);
    }
    
}