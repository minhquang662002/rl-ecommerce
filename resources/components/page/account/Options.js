import React from 'react'
import { memo } from 'react'
import { Link } from 'react-router-dom'
import { getaddressuser } from '../../../action/get_address_user'
import { logout } from '../../../action/logout'

const Options = (props) => {
  return (
    <div className="AccountPage__content--left" style={{cursor: 'pointer', height: 200}}>
        <p
            className="AccountPage__options"
            onClick={() =>
                props.setOption((state) => ({
                    ...!state,
                    dashboard: true,
                }))
            }
            style={{
                background: props.dashboard ? "gray" : "white",
            }}
        >
            My account
        </p>
        <p
            className="AccountPage__options"
            onClick={() =>
                {props.setOption((state) => ({
                    ...!state,
                    address: true,
                }));getaddressuser(props.id_user, props.setAddress, props.setSpecificLocation, props.dispatch)}
            }
            style={{
                background: props.address ? "gray" : "white",
            }}
        >
            Addresses
        </p>
        <div className="AccountPage__options">
            Notifications
        </div>
        <Link to="/favorite">
            <p className="AccountPage__options">Wishlist</p>
        </Link>
        <p onClick={()=> logout(props.setLoading)} className="AccountPage__options">Logout</p>
    </div>
  )
}

export default memo(Options)