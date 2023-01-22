import { useEffect } from 'react';

function HomePage() {
    useEffect(() => {
        document.title = 'Tiktok - Make Your Day';
    }, []);

    return <h1>HomePage</h1>;
}

export default HomePage;
