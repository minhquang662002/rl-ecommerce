const createverifycode= ()=> {
    return axios({
        url: 'http://localhost:8000/verify/user/auth', 
        method: 'POST',
        timeout: 10000,
        headers: {
            'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute("content")
        },
        xsrfCookieName: 'qwerty',
        xsrfHeaderName: 'token',
        withCredentials: false,
      })
}

export { createverifycode }