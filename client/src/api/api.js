import axios from "axios"

const baseUrl = "http://127.0.0.1:3001"

export const sendBeneficiariesData = async (quantity, beneficiaries) => {
    const response = await axios.post(`${baseUrl}/plans`, {
        quantidade: parseInt(quantity),
        beneficiarios: beneficiaries,
    })
    return response.data
}

export const getPropose = async () => {
    const response = await axios.get(`${baseUrl}/plans`)
    return response.data
}