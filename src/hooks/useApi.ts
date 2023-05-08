import { useEffect, useState } from 'react'


export const useApi = <T>(handler: () => Promise<T>) => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    useEffect(() => {
        setLoading(true);
        handler()
            .then(result => setData(result))
            .catch(err => setError(err))
            .finally(() => setLoading(false))
    }, [handler])


    return { data, setData, loading, error };
}