import * as FaIcons from "react-icons/fa"

const SidebarLabel = (props) => {
  return (
    <li className="item">
      <div className="item-left">
        <span className={`item-left-icon-${props.labelColor}`}>
          <FaIcons.FaRegCircle />
        </span>
        <span className="content">{props.text}</span>
      </div>
    </li>
  )
}

export default SidebarLabel
