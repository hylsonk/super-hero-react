import Api from './api';

export const get = async (endpoint) => {
    const result =  await Api.get(endpoint)
    return result;
}

export default get;