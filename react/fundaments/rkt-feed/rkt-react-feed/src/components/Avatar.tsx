export const Avatar = (props) => {
    const hasBorder = props.hasBorder === false; 

  return (
    <img className={hasBorder 
        ? "boxSizing-initial rounded-lg w-14 h-14" : "border-4 border-gray-800 outline outline-orange boxSizing-initial rounded-lg w-12 h-12"} src={props.src} />
  )
}