import React from 'react'
import { Link } from 'react-router-dom'
import LoadingSuspense from '../../loading/LoadingSuspense'
import CartModalItem from '../cart/CartModalItem'

const SearchWithIcon = (props) => {
    if(props.loading=== true) {
        return <LoadingSuspense />
    }
    else {
        return (
            <div style={{height: '100%'}}>
                {(props.data?.length===0 && props.loading!== undefined) ? <div>Can't find</div> : <div style={{height: "calc(100vh - 270px - 10px)", overflow: "auto", paddingBottom: 10, lineHeight: 1.4}}>
                    {
                        props.data?.map((item, key)=> <Link key={key} to={`/collections/products/${item.title}`} state={{id_product: item.id_product}}><CartModalItem item={item} key={key} cart={true} /></Link>)
                    }
                    </div>}
            </div>
        )
    }
}

export default SearchWithIcon   