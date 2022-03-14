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
  return sendRequest(`${BASE_URL}/listings`);
}

export function updateListings(book, id) {
  return sendRequest(`${BASE_URL}/edit`, 'PUT', {book, id});
}
export function deleteListings(book, id) {
  return sendRequest(`${BASE_URL}/delete`, 'DELETE', {book, id});
}

export function searchDatabase(query) {
  return sendRequest(`${BASE_URL}/search`, 'POST', {query});
}

