import { useEffect, useState } from "react"

const useSellers = email => {
    const [isSellers, setIsSellers] = useState(false)
    const [isSellersLoading, setIsSellersLoading] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://assaingment-twelve-server.vercel.app/users/Sellers/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    setIsSellers(data.isSellers)
                    setIsSellersLoading(false)
                })
        }

    }, [email])
    return [isSellers, isSellersLoading]
}
export default useSellers;