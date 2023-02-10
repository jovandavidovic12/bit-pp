class Movie {
    constructor(title, duration, genre) {
        this.title = title;
        this.duration = duration;
        this.genre = genre;
    }
    getData() {

        return `${this.title}, ${this.duration}min, ${this.genre[0].toUpperCase() + this.genre[this.genre.length - 1].toUpperCase()}`
    }

    getMovie() {
        var name = this.title;
        var duration = Number(this.duration);
        var genre = this.genre;

        return `${name} ${duration}${genre}`
    }
}

class Program {
    constructor(date, movieListCount, fullDuration) {
        this.date = date;
        this.movieListCount = movieListCount;
        this.fullDuration = fullDuration;

    }

    getData() {
        return `${this.date}, ${this.movieListCount} movies, duration: ${this.fullDuration} min.`
    }

    
}

class MovieProgram {
    constructor(movie, program){
        this.movie = movie;
        this.program = program;

    }

    addMovie(){
        program_movies.push(newMovie);
    }

    getdata(){
        return `${this.movie} - ${this.program}`;
    }
}



