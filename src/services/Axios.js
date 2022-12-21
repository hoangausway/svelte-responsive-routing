import axios from 'axios'
const BASE_URL = import.meta.env.VITE_APP_API_URL // 'https://cncserver-fayj4.ondigitalocean.app'
/* Note: To not get Parsr Error regarding 'import.meta...' 
it should set 'parserOptions' in .eslintrc.json as below:
{
    ...,
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    }
}
*/

export default axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json', 'crossDomain': true },
    crossDomain: true
})
