import axios from 'axios';
import {MAIN_URL} from './Url'

export function ContactData(data){
    return axios.post(`${MAIN_URL}/contact/sendMail`,data)
}

