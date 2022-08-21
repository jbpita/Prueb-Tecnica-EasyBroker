const fetch = require('node-fetch');
import { api } from "../keys";
import { ApiBrokerEasyInterfaces } from '../interfaces/index';
const { Response } = require ('node-fetch');

const getProperties = async () => {
    const response: Response = await fetch('https://api.stagingeb.com/v1/properties',{
    method: 'GET',    
    headers: {
            'X-Authorization': api.KEY,
            'Accept': 'application/json'
        }
    })

    const json: ApiBrokerEasyInterfaces = await response.json()

    return json;
}

export default getProperties;