import axios from "axios"

export default class CertificateService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/jobseekers/certificate/")
        return response.data
    }

    static async getById(id) {
        return await axios.get("http://127.0.0.1:8000/api/jobseekers/certificate/" + id + "/");
    }

    static async addCertificate(newCertificateData) {
        return await axios.post("http://127.0.0.1:8000/api/jobseekers/certificate/", newCertificateData);
    }
    static async updateCertificate(id, updatedCertificateData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/jobseekers/certificate/${id}/`, updatedCertificateData);
        return response.data;
    }
    static async deleteCertificate(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/jobseekers/certificate/${id}/`);
        return response.data;
    }
}