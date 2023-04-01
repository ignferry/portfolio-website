export default function Project(props) {
    const techs = [];

    for (const tech of props.techs) {
        techs.push(<span className="text-sm box-border border-2 w-fit p-2 mr-2 mb-2 rounded" key={tech}>{tech}</span>);
    }

    return (
        <article className="flex flex-col dark:bg-gray-900 sm:flex-row my-4">
            <img className="dark:bg-gray-700 sm:w-4/12" src={props.imgsrc}/>
            <div className="flex flex-col flex-1 p-6">
                <h3 className="py-2 text-lg font-semibold leading-snug">{props.title}</h3>
                
                <div className="flex flex-row flex-wrap">
                    {techs}
                </div>

                <p className="flex-1 py-2 leading-snug text-sm text-justify">
                    {props.desc}
                </p>

                <form action={props.github} method="get" target="_blank">
                    <button 
                        className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-2 px-4 rounded inline-flex items-center w-fit"
                        type="submit">
                        <picture>
                            <source srcSet="github-mark.svg" media="(prefers-color-scheme: dark)"></source>
                            <img src="github-mark-white.svg" className="h-6 mr-2"></img>
                        </picture>
                        <span className="text-sm">GitHub</span>
                    </button>
                </form>
            </div>
        </article>  
    );
}