cl = console.log;
cl(movieArray);

let result = '';
movieArray.forEach(movie => {
    result += 
            `
        <div class="col-md-3 mb-4">
            <div class="card">
                <figure class="movie-Info">
                    <img class="img-fluid"
                        src="${movie.poster_path}" alt="">
                    <figcaption>
                        <div class="heading">
                            <div class="row">
                                <div class="col-sm-10">
                                    <h3 class="text-light">
                                         ${movie.original_title}
                                    </h3>
                                </div>
                                <div class="col-sm-2 d-flex align-items-center">
                                    <span class="badge badge-warning">${movie.vote_average}</span>
                                </div>
                            </div>
                        </div>
                        <div class="overview bg-white">
                            <h4>
                                <em>${movie.overview_title}</em>
                            </h4>
                            <p>
                                ${movie.overview}
                            </p>
                        </div>
                    </figcaption>
                </figure>
            </div>
        </div>

            `
});


const moviesContainer = document.getElementById('moviesContainer');
moviesContainer.innerHTML = result;