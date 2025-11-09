document.addEventListener('DOMContentLoaded', async () => {
    const moviesContainer = document.getElementById('movies-container');
    const searchInput = document.getElementById('searchInput');
    const genreFilter = document.getElementById('genreFilter');
    const sortFilter = document.getElementById('sortFilter');

    let movies = [];

    const fetchMovies = async () => {
        try {
            const response = await fetch('movies.json');
            movies = await response.json();
            populateGenres();
            renderMovies();
        } catch (error) {
            console.error('Błąd wczytywania filmów:', error);
        }
    };

    const populateGenres = () => {
        const genres = [...new Set(movies.map(movie => movie.gatunek))];
        genres.forEach(genre => {
            const option = document.createElement('option');
            option.value = genre;
            option.textContent = genre;
            genreFilter.appendChild(option);
        });
    };

    const renderMovies = (moviesToRender = movies) => {
        moviesContainer.innerHTML = '';
        moviesToRender.forEach(movie => {
            const movieCard = `
                <div class="movie-card">
                    <img src="${movie.plakat_url}" alt="${movie.tytuł}">
                    <div class="movie-card-content">
                        <h3>${movie.tytuł}</h3>
                        <p>Rok: ${movie.rok}</p>
                        <p>Ocena: ⭐ ${movie.ocena}/10</p>
                    </div>
                </div>
            `;
            moviesContainer.innerHTML += movieCard;
        });
    };

    const applyFiltersAndSorting = () => {
        let filteredMovies = [...movies];

        // Search
        const searchTerm = searchInput.value.toLowerCase();
        filteredMovies = filteredMovies.filter(movie => movie.tytuł.toLowerCase().includes(searchTerm));

        // Genre filter
        const selectedGenre = genreFilter.value;
        if (selectedGenre !== 'all') {
            filteredMovies = filteredMovies.filter(movie => movie.gatunek === selectedGenre);
        }

        // Sort
        const sortBy = sortFilter.value;
        if (sortBy === 'rating_desc') {
            filteredMovies.sort((a, b) => b.ocena - a.ocena);
        } else if (sortBy === 'title_asc') {
            filteredMovies.sort((a, b) => a.tytuł.localeCompare(b.tytuł));
        }

        renderMovies(filteredMovies);
    };

    searchInput.addEventListener('input', applyFiltersAndSorting);
    genreFilter.addEventListener('change', applyFiltersAndSorting);
    sortFilter.addEventListener('change', applyFiltersAndSorting);

    fetchMovies();
});
