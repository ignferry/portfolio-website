export default function ProjectFilterBtn(props) {
    let colorClass = props.selected ? "bg-green-300 hover:bg-green-400" : "bg-gray-300 hover:bg-gray-400";

    return <button 
        className={"text-black font-bold py-2 px-4 rounded inline-flex items-center w-fit " + colorClass}
        onClick={props.clickHandler}>
            {props.text}
        </button>
}