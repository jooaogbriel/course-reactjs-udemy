import { MouseEventHandler } from "react"
import './index.css'

type data = {
    children: string
    onSelect: MouseEventHandler,
    isSelected: boolean
}


export const Children = ({onSelect, children, isSelected}: data) => {

  return (
    <div>
        <button className={isSelected ? 'active': undefined} onClick={onSelect}>{children}</button>
    </div>
  )
}
