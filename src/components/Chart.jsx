



const ChartComponent = () => {

    return (
        <div>chart component</div>
    )
}

const Chart = () => {

    return (
        <div className="flex flex-col">
            <ChartComponent />
            <div className="flex">
                <button className="py-2 mx-2 text-sm px-4 bg-opacity-25">Price</button>
                <button className="py-2 mx-2 text-sm px-4 bg-opacity-25">Market caps</button>
                <button className="py-2 mx-2 text-sm px-4 bg-opacity-25">total volume</button>
                <button className="py-2 mx-2 text-sm px-4 bg-opacity-25">7d</button>
                <button className="py-2 mx-2 text-sm px-4 bg-opacity-25">14d</button>
                <button className="py-2 mx-2 text-sm px-4 bg-opacity-25">30d</button>
            </div>
        </div>
    )
}

export default Chart