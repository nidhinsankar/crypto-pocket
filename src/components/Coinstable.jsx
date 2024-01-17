import { useState } from "react"
import CoinDetailModal from "./CoinDetailModal"
import OptionBar from "./OptionBar"

const CoinsTable = ({coins}) => {

    const [modalOpen,setModalOpen] = useState(false)

    const handleClick = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <>
            <OptionBar />
            <table className="table-fixed h-full border-2 border-gray-800 rounded-md shadow-md">
                <thead className="">
                    <tr className="border-b-2 border-gray-800">
                    {['coin','price','1h','24h','7d','24h volume','market cap'].map(head => (
                        <th className="">{head}</th>
                    ))}
                    </tr>
                </thead>
                <tbody className="">
                    {coins?.map(coin => (
                        <tr className="">
                            <td className="py-4 border-b-2 border-gray-700">{coin?.name}</td>
                            <td className="border-b-2 border-gray-700">{coin?.current_price}</td>
                            <td className="border-b-2 border-gray-700">{Number(coin?.price_change_percentage_1h_in_currency).toFixed(2)}%</td>
                            <td className="border-b-2 border-gray-700">{Number(coin?.price_change_percentage_24h_in_currency).toFixed(2)}%</td>
                            <td className="border-b-2 border-gray-700">{Number(coin?.price_change_percentage_7d_in_currency).toFixed(2)}%</td>
                            <td className="border-b-2 border-gray-700">{coin?.total_volume}</td>
                            <td className="border-b-2 border-gray-700">{coin?.market_cap}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                    </>
    )
}

export default CoinsTable