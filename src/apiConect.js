import axios from 'axios';
import React from 'react';

const getProducts = async (url) => await fetchData(url);

const fetchData = async (url) => {
    //console.log(`Fetching data from ${url}`);

    try {
        const response = await axios.get(url);
        return response.status === 200
            ? response.data
            : null;
    } catch (error) {
        console.log(error);
    }
}

export { getProducts };