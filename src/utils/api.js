
import axios from 'axios'


const baseURL = "https://youtube138.p.rapidapi.com";
const options = {
  params: {
    q: "desp",
    hl: "en",
    gl: "US",
  },
  headers: {
    "X-RapidAPI-Key": import.meta.env.VITE_APP_YOUTUBE_API_KEY,
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com", 
  },
};

export const fetchYoutubeData = async (url) => {
    const {response} = await axios.get(`${baseURL}/${url}`, options);
    return response;  
};
