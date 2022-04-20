import React from 'react'
import SearchModalItem from '../components/modals/search/SearchModalItem'
import { Link } from 'react-router-dom'

const Inspiration = (props) => {
    
      return (
        <div>    
            {
                props.data.map((item, key)=> {
                    <Link key={key} to={`/collections/products/${item.title.toLowerCase().replaceAll(" ", "-")}`} state={{id_product: item.id_product, title: item.title, price: item.price, color: item.color, size: item.size, decription: item.decription, categories: item.categories }}>
                        <SearchModalItem item={item} />
                    </Link>
                })
            }
        </div>
      )
}

export default Inspiration