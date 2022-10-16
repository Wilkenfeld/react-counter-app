import axios from "axios";

export async function getQuote() {
    return axios.get('https://api.chucknorris.io/jokes/random')
} 