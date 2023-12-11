import axios from "axios"

export default class CertificateService {
    static async getAll() {
        const response = await axios.get("http://127.0.0.1:8000/api/certificate/")
        return response.data
    }

    static async getById(id) {
        const response =  await axios.get("http://127.0.0.1:8000/api/certificate/"+id+"/")
        return response;
    }

    static async addCertificate(newCertificateData) {
        const response = await axios.post("http://127.0.0.1:8000/api/certificate/", newCertificateData);
        return response;
    }
    static async updateCertificate(id, updatedCertificateData) {
        const response = await axios.put(`http://127.0.0.1:8000/api/certificate/${id}/`, updatedCertificateData);
        return response.data;
    }
    static async deleteCertificate(id) {
        const response = await axios.delete(`http://127.0.0.1:8000/api/certificate/${id}/`);
        return response.data;
    }
}