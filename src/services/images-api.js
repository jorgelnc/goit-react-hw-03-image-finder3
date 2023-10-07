export function fetchImages(query, page) {
    const BASE_URL = 'https://pixabay.com/api/';
    const API_KEY = '?key=38461853-2a18bc6938cc549cf03ed926c'
    const searchParams = 'image_type=photo&orientation=horizontal&per_page=12';

    return fetch(`${BASE_URL}${API_KEY}&q=${query}&page=${page}&${searchParams}`)
                .then(response => response.json())
}