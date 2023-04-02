export default function Experience(props) {
    const points = [];

    for (const point of props.points) {
        points.push(<li key={point} className="text-justify">{point}</li>);
    }

    return (
        <article className="flex flex-col dark:bg-gray-800 mt-4 p-4 sm:w-3/4 m-auto">
            <div className="flex items-center mb-4 justify-start">
                <div className="h-24 w-24 mr-4 bg-white rounded-full p-3 flex">
                    <img src={props.imgsrc} className="h-16 w-16 m-auto object-cover"></img>
                </div>
                <div className="h-fit">
                    <h2 className="text-xl font-bold">{props.position}</h2>
                    <p className="text-slate-300">{props.organization}</p>
                    <p className="text-slate-300">{props.time}</p>
                </div>
            </div>
            <ul className="list-disc ml-5">
                {points}
            </ul>
        </article>
    )
}