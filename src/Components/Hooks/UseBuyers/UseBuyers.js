import { useEffect, useState } from "react"

const useBuyers = email => {
    const [isBuyers, setIsBuyers] = useState(false)
    const [isBuyersLoading, setIsBuyersLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://assaingment-twelve-server.vercel.app/users/Buyers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsBuyers(data.isBuyers)
                    setIsBuyersLoading(false)
                })
        }

    }, [email])
    return [isBuyers, isBuyersLoading]
}
export default useBuyers;