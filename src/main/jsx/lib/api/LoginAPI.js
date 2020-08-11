import axios from 'axios';

export function loginAPI (data){
    let login = JSON.stringify({id: data.id, pw: data.password});
    return axios.post('/Login', login, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });
}
