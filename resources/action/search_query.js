import axios from "axios"

const search_query=  async (query, setResultQuery)=> {
    const res= await axios({
        url: "http://localhost:8000/search",
        method: "get",
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
        params: {
            query_search : query
        }
    })
    const result= await res.data
    setResultQuery(()=> result)
}

export { search_query }