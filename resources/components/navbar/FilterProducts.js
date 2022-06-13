import React, { useMemo, useState } from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { Link } from "react-router-dom"

export default function MenuFilter(props) {
    const [anchorEl, setAnchorEl]= useState(null)
    const open= Boolean(anchorEl)
    const handleClick= (e)=> {
        setAnchorEl(e.currentTarget)
    }
    const handleClose= (e)=> {
        setAnchorEl(null)
    }
    const menu_filter= ["all", "trending", "bestseller", "women", "men", "latest", "hat", "beanie", "cap"]
    const listCategories = useMemo(()=> menu_filter, [])
    return (
        <div>
            <Button
                className="navbar__categories"
                id="btn-bs"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                
            >
                Filter
            </Button>
            <Menu 
                id="menu-bs"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                {
                    listCategories.map((item, key)=> <MenuItem key={key} onClick={handleClose}><Link style={{width: "100%", textTransform: "capitalize"}} to={{pathname: `/category/products/${item}`, search: `current_page=${1}`}}>{item}</Link></MenuItem>)
                }
            </Menu>
        </div>
    )
}