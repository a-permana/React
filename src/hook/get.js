const axios = require('axios');

    const getData = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(response)
        } catch (error) {
            console.error(error);
        }
    }

    getData()