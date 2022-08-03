import axios from 'axios';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export class Ajax {
    static get() {
        // Make a request for a user with a given ID
        axios.get('/user?ID=12345')
            .then(function (response) {
                // handle success
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
            }
                // always executed
            );
    }

    static getParams(params) {
        // Optionally the request above could also be done as
        axios.get('/user', {
            params: {
                ID: 12345
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
    }

    static getAsync() {
        // Want to use async/await? Add the `async` keyword to your outer function/method.
        async function getUser() {
            try {
                const response = await axios.get('/user?ID=12345');
                console.log(response);
            } catch (error) {
                console.error(error);
            }
        }
    }

    static post(api, params, callback) {
        axios.post('http://localhost:8080/api/' + api, params)
            .then(function (response) {
                callback(response.data);
            })
            .catch(function (error) {
                toast(error.response.data.message);
            });
    }
}