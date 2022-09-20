const API_KEY = "838f16f19dc79c3c8fa62671e26b69db"

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetlixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComdyMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:  `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries:  `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests
//https://api.themoviedb.org/3/discover/tv?api_key=838f16f19dc79c3c8fa62671e26b69db&with_networks=213