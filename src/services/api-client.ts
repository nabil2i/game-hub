import axios from "axios";

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '1fe0cdef2693409aa12888c9d7790cf6'
  }
})