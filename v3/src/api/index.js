import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/api'
});

export const insertMsg = payload => api.post(`/message`, payload)
export const getAllMsgs = () => api.get(`/messages`)
export const updateMsgById = (id, payload) => api.put(`/message/${id}`, payload)
export const deleteMsgById = id => api.delete(`/message/${id}`)
export const getMsgById = id => api.get(`/message/${id}`)

const apis = {
    insertMsg,
    getAllMsgs,
    updateMsgById,
    deleteMsgById,
    getMsgById,
}

export default apis;