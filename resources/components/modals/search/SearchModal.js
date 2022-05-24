import "./SearchModal.css"
import CloseIcon from "@mui/icons-material/Close"
import { lazy, Suspense, useContext, useState, useEffect } from "react"
import { NavContext } from "../../context/NavContext"
import SearchModalItem from "./SearchModalItem"
import { search_by_option } from "../../../action/search_by_option"
import LoadingSuspense from "../../loading/LoadingSuspense"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import axios from "axios"
import { MyContext } from "../../../ContextApp/ContextContainer"
import Inspiration from "../../../InspirationProduct/Inspiration"
import SearchIcon from '@mui/icons-material/Search'
import _ from "lodash"
import { search_query } from "../../../action/search_query"
import ResultSearch from "./ResultSearch"
import { search_with_icon } from "../../../action/search_with_icon"
import SearchWithIcon from "./SearchWithIcon"

const SearchModal = () => {
    const { ref, inView }= useInView({
        threshold: 0
    })
    const { setNavChoices, navChoices } = useContext(NavContext)
    const { inspirationProduct, setInspirationProduct }= useContext(MyContext)
    const [loading, setLoading]= useState(()=> undefined)
    const [data, setData]= useState(()=> [])
    const [resultQuery, setResultQuery]= useState(()=> [])
    const [value, setValue]= useState(()=> "")
    const [dataInspiration, setDataInspiration]= useState(()=> [])
    const [valueSearch, setValueSearch]= useState(()=> "")
    const [datasearchicon, setdatasearchicon]= useState(()=> [])
    const [loadingClick, setLoadingIcon]= useState(()=> undefined)

    const temp = [
        "All Categories",
        "Accessories",
        "Bag",
        "Camera",
        "Decor",
        "Earphones",
        "Electric",
        "Furniture",
        "Headphone",
        "Men",
        "Shoes",
        "Speaker",
        "Watch",
        "Women",
    ]
    useEffect(()=> {
        (async()=> {
            const res= await axios({
                url: 'http://localhost:8000/inspiration/products/',
                method: 'get',
                timeout: 10000,
                headers: {
                    'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
                },
                xsrfCookieName: 'qwerty',
                xsrfHeaderName: 'token',
                withCredentials: false,
            })
            const result= await res.data
            setInspirationProduct(result)
            setDataInspiration(result)
        })()
        return ()=> setDataInspiration(()=> [])
    }, [])
    if(loading=== true) {

        return (
            <div
                className="SearchModal"
                style={{
                    transform: navChoices.search
                        ? "translateX(0)"
                        : "translateX(100%)",
                }}
            >
                <div className="SearchModal__header NavModal__header">
                    <p>SEARCH OUR SITE</p>
                    <span
                        className="NavModal__close--button"
                        onClick={() =>
                            {setNavChoices((state) => ({ ...state, search: false }));setValueSearch(()=> "")}
                        }
                    >
                        <CloseIcon />
                    </span>
                </div>
                <div className="SearchModal__body">
                    <form className="SearchModal__body--form">
                        <select onChange={(e)=> search_by_option(e.target.value, setData, setLoading, setValue)} value={value} className="SearchModal__body--categories SearchModal__input">
                            {temp.map((item, key) => (
                                <option key={key}>{item}</option>
                            ))}
                        </select>
                        <input className="SearchModal__body--search SearchModal__input" placeholder="Searchs for products" />
                    </form>
                    <div className="SearchModal__body--suggest">
                        Need some inspiration?
                    </div>
                    
                </div>
                <div className="SearchModal__footer">
                    <LoadingSuspense />
                </div>
            </div>
        )
    }
    else {
        return (
            <div
                className="SearchModal"
                style={{
                    transform: navChoices.search
                        ? "translateX(0)"
                        : "translateX(100%)",
                }}
            >
                <div className="SearchModal__header NavModal__header">
                    <p ref={ref}>SEARCH OUR SITE</p>
                    <span
                        className="NavModal__close--button"
                        onClick={() =>
                            {setNavChoices((state) => ({ ...state, search: false }));setValueSearch(()=> "")}
                        }
                        
                    >
                        <CloseIcon />
                    </span>
                </div>
                <div className="SearchModal__body" >
                    <form className="SearchModal__body--form">
                        <select onChange={(e)=> search_by_option(e.target.value, setData, setLoading, setValue)} value={value} className="SearchModal__body--categories SearchModal__input">
                            {temp.map((item, key) => (
                                <option key={key}>{item}</option>
                            ))}
                        </select>
                        <div style={{position: "relative"}}>
                            <input className="SearchModal__body--search SearchModal__input" placeholder="Searchs for products" onChange={(e)=> setValueSearch(e.target.value)} value={valueSearch} onKeyUp={(e)=> search_query(e.target.value, setResultQuery)} />
                            {
                                valueSearch.length >=1 && <div onClick={()=> search_with_icon(valueSearch, setdatasearchicon, setLoadingIcon)}><SearchIcon style={{position: "absolute", right: 0, top: "50%", transform: "translate(-50%, -50%)", padding: 5, cursor: "pointer"}} /></div>
                            }  
                            <div style={{position: "absolute", width: "100%", display: 'block', background: "#fff", paddingTop: "10px", maxHeight: 400, overflow: "auto"}}>
                                {inView=== true &&
                                    <ResultSearch data={resultQuery} valueSearch={valueSearch} setValueSearch={setValueSearch} />
                                }
                            </div>
                        </div>
                    </form>
                    {
                        (data.length < 1 && loading=== undefined) &&
                        <div className="SearchModal__body--suggest">
                            Need some inspiration?
                        </div>
                    }
                    {/* {
                       <SearchWithIcon data={datasearchicon} loading={loadingClick} /> 
                    } */}
                    {
                        dataInspiration.map((item, key)=> {
                            <Link key={key} to={`/collections/products/${item.title.toLowerCase().replaceAll(" ", "-")}`} state={{id_product: item.id_product, title: item.title, price: item.price, color: item.color, size: item.size, decription: item.decription, categories: item.categories }}>
                                <SearchModalItem item={item} />
                            </Link>
                        })
                    }
                    {
                        loading !== undefined && <div className="SearchModal__body--suggest">Search results</div>
                    }
                    
                </div>
                <div className="SearchModal__footer">

                    {data.length>=1 && data.map((item, key) => (
                        <Link key={key} to={`/collections/products/${item.title.toLowerCase().replaceAll(" ", "-")}`} state={{id_product: item.id_product, title: item.title, price: item.price, color: item.color, size: item.size, decription: item.decription, categories: item.categories }}>
                            <SearchModalItem item={item} />
                        </Link>
                    ))}
                    {(data.length< 1 && loading=== false ) && <div>Can't find out any item belongs to <strong>{value}</strong> field</div>}
                    {(data.length< 1 && loading=== undefined) && <div></div>}
                    {
                    data.length > 3 &&
                    <div className="SearchModal__footer--view">View All</div>
                    }
                </div>
            </div>
        )
    }
}

export default SearchModal
