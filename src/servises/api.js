import axios from 'axios';

//только с axios такой записью задаем переменой значение базового URL
axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImages = async (query, page) => {
  const params = new URLSearchParams({
    q: query,
    key: '37872410-94b8d8dcae65c80ceb9a65f05',
    page,
    per_page: 20,
    orientation: 'horizontal',
  });

  const response = await axios.get(`/?${params}`);
  console.log(response);
  const data = response.data;
//   console.log(data);
  return data;
};
