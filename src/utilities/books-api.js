import sendRequest from './send-request';

const BASE_URL = '/api/books';

export function search(query) {
    return sendRequest(`${BASE_URL}/search`, 'POST', {query});
}

export function addBook(book) {
    return sendRequest(`${BASE_URL}/add`, 'POST', book);
}

export function getAll() {
  return sendRequest(BASE_URL);
}

export function getListings() {
  return sendRequest(BASE_URL);
}

