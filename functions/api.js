const axios = require('axios');

require('dotenv').config();
const { API_END_POINT, OMDB_API_KEY } = process.env;

exports.handler = async function (event) {
  const options = JSON.parse(event.body);
  const hasSearchWord = Object.keys(options).includes('searchWord');
  const { searchWord = '', page = 0, id = '', plot = 'full' } = options;
  const { data } = await axios({
    url: hasSearchWord
      ? `${API_END_POINT}?apikey=${OMDB_API_KEY}&s=${searchWord}&page=${page}`
      : `${API_END_POINT}?apikey=${OMDB_API_KEY}&i=${id}&plot=${plot}`,
    method: 'GET',
  });
  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
