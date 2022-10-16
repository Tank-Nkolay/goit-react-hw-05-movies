import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const myKey = 'key=29585906-cf8cb97233adcc9f8a9891715';

const onParams = 'image_type=photo&orientation=horizontal';

export default async function getImg(query, page) {
  const response = await axios.get(
    `?q=${query}&page=${page}&${myKey}&${onParams}&per_page=12`
  );
  return response.data;
}
