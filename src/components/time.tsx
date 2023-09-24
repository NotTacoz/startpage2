import { useEffect, useState } from "react"
import "./../css/time.css"

export default function Time() {
    const [unix, setUnix] = useState<any>()

    useEffect(() => {
        setUnix(Date.now()) // runs immediately
        const interval = setInterval(() => {
            setUnix(Date.now())
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div>
            <p>{new Date(unix).toDateString()}</p>
            <p>{new Date(unix).toLocaleTimeString()}</p>
        </div>
    )
}