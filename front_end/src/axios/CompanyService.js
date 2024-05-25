import axios from "axios"

export default class CompanyService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/vacancies/company/")
        return response.data
    }

    static async getById(id) {
        return await axios.get("http://127.0.0.1:8000/api/vacancies/company/" + id + "/");
    }

    static async addCompany(newCompanyData) {
        return await axios.post("http://127.0.0.1:8000/api/vacancies/company/", newCompanyData);
    }
    static async updateCompany(id, updatedCompanyData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/vacancies/company/${id}/`, updatedCompanyData);
        return response.data;
    }
    static async deleteCompany(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/vacancies/company/${id}/`);
        return response.data;
    }
}