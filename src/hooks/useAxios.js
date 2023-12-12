import { useState } from "react";
import axios from "axios";

const useAxios = (whatTable, baseUrl) => {
    const [responses, setResponses] = useState([]);

    const clearResponse = () => {
        setResponses([]);
    }

    const addResponseData = async (formatter = data => data, restUrl) => {
        try {
            if (whatTable === 'cards') restUrl = '';
            const response = await axios.get(`${baseUrl}${restUrl}`);
            setResponses(data => [...data, formatter(response.data)]);

        } catch (error) {
            console.log(error);
        }
    };
    
        
    return [responses, addResponseData, clearResponse];
};

export default useAxios;