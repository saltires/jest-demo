import axios from "axios"

export const getData = () => {
    return axios.get('htpp://example.com').then( res => res.data)
}