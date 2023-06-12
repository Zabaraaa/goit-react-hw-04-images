import axios from "axios";

const URL = 'https://pixabay.com/api/';
const API_KEY = '33939880-6980ae7d7dcf6a315ba694d35';

const searchParams = new URLSearchParams({
    image_type: "photo",
    orientation: "horizontal",
    per_page: 12,
});

export const getData = async (query, page) => {
    const response = await axios.get(`${URL}?key=${API_KEY}&${searchParams}&q=${query}&page=${page}`);
    console.log(response.data.hits);
    return response.data.hits;
}