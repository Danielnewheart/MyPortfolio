import { useState, useEffect } from 'react';

export default function CurrentTime() {
    // 創建一個函數來獲取 EST 時間
    const getESTTime = () => {
        return new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York' });
    };

    const [time, setTime] = useState(getESTTime());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(getESTTime());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <time>{time}</time>
    );
}