import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(url);
                if(isMounted) {
                    setData(response.data);
                    setLoading(false);
                }
            }
            catch (err) {
                if(isMounted) {
                    setError(err.message || 'Something went wrong');
                    setLoading(false);
                }
            }
        };
        fetchData();

        // cleanup in case the component unmounts
        return () => {
            isMounted = false;
        }
    }, [url]);

  return { data, loading, error };
};

export default useFetch;
