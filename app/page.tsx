'use client';

import { useState } from 'react';

export default function Home() {
    const [loading, setLoading] = useState(false);
    const fetchDataFromApi = async () => {
        try {
            setLoading(true);
            const response = await fetch('api/', {
                headers: {
                    Accept: 'application/json',
                    method: 'GET',
                },
            });
            if (response) {
                const data = await response.json();
                console.log(data);
            }
        } catch (error) {
            console.log(error);
        } finally {
            //@ts-ignore
            setLoading(error);
        }
        return (
            <div>
                <button className="button" onClick={() => fetchDataFromApi()}>
                    {loading ? 'Loading' : 'Call API'}
                </button>
            </div>
        );
    };
}
