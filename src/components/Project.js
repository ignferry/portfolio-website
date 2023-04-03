export default function Project(props) {
    const techs = [];

    for (const tech of props.techs) {
        techs.push(<span className="text-sm box-border border-2 border-gray-500 dark:border-gray-200 w-fit p-2 mb-2 rounded font-semibold" key={tech}>{tech}</span>);
    }

    const codeButton = () => {
        if (props.codeurl.includes("github")) {
            return <button 
                className="button font-bold py-2 px-4 rounded inline-flex items-center w-fit"
                type="submit">
                <picture>
                    <source srcSet="github-logo.svg" media="(prefers-color-scheme: dark)"></source>
                    <img src="github-logo-white.svg" className="h-6 mr-2"></img>
                </picture>
                <span className="text-sm">GitHub</span>
            </button>
        }
        else if (props.codeurl.includes("gitlab")) {
            return <button 
                className="button font-bold py-2 px-4 rounded inline-flex items-center w-fit"
                type="submit">
                <picture>
                    <source srcSet="gitlab-logo-600.svg" media="(prefers-color-scheme: dark)"></source>
                    <img src="gitlab-logo-700.svg" className="h-6 mr-2"></img>
                </picture>
                <span className="text-sm">GitLab</span>
            </button>
        }
    }

    return (
        <article className="flex flex-col bg-gray-200 dark:bg-gray-800 sm:flex-row my-4 rounded-xl">
            <img className="bg-gray-700 dark:bg-black sm:w-4/12 rounded-xl" src={props.imgsrc ? props.imgsrc : "/project-img/no-ui-img.jpg"}/>
            <div className="flex flex-col flex-1 p-6">
                <h3 className="py-2 text-xl font-semibold leading-snug">{props.title}</h3>
                
                <div className="flex flex-row flex-wrap gap-2">
                    {techs}
                </div>

                <p className="flex-1 py-2 leading-snug text-sm text-justify">
                    {props.desc}
                </p>

                <form action={props.codeurl} method="get" target="_blank">
                    {codeButton()}
                </form>
            </div>
        </article>  
    );
}