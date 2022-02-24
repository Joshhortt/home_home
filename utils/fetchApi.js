import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com'

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'x-rapidapi-host': 'bayut.p.rapidapi.com',
            'x-rapidapi-key': 'd95f14c338mshd5c1e1a0aec3fa7p116c80jsn509cdfa4371f'
          }
    });

    return data;
}