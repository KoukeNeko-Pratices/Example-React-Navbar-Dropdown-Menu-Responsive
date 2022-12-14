import React from 'react'
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './Dropdown.css'

function Dropdown() {

    const [click, setClick] = React.useState(false)
    const handleClick = () => setClick(!click)

    return (
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cName} to={item.path}>{item.title}</Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default Dropdown