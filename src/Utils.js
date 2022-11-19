import axios from "axios"
const omdbi=axios.create({
    baseURL: "https://www.omdbapi.com/",
    timeout: 15000,
    params: {
      apikey: "1a9d9cea"
    }
})
export {omdbi}