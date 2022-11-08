import axios from 'axios';
//const TUITS_API = 'https://tuiter-node-server-app.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
console.log(process.env)
const TUITS_API = `${API_BASE}/tuits`;
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit)
    return response.data;
}


export const findTuits = async () => {
    const response = await axios.get(TUITS_API);
    const tuits = response.data;
    return tuits;
}


export const deleteTuit = async (tid) => {
    const response = await axios
        .delete(`${TUITS_API}/${tid}`)
    return response.data
}


export const updateTuit = async (tuit) => {
    await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return tuit;
}



