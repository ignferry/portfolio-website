export default function ProjectFilterBtn(props) {
    let colorClass = props.selected ? "bg-green-500 hover:bg-green-700 text-white dark:text-black" : "button";

    return <button 
        className={"font-bold py-2 px-4 rounded inline-flex items-center w-fit " + colorClass}
        onClick={props.clickHandler}>
            {props.text}
        </button>
}