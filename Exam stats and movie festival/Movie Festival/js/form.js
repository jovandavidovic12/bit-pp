// Nije zavrsen zadatak! 


var movies = [];
var program_movies = [];
var programsForDropDown = [];


$('#create-movie').on('click', function () {
    var movieGenre = '';
    $('select option:selected').each(function () {
        movieGenre = $(this).val();
    })



    var movieName = $('#movie-name').val();
    var movieLength = Number($('#movie-length').val());
    var newMovie = new Movie(movieName, movieLength, movieGenre);
    movies.push(newMovie.getMovie());
    console.log(movies)
    var movieErorr = $('#alert-movie')
    var isValid = movieName && movieLength && movieGenre;
    $('#add-movie-to-program').append(`<option>${newMovie.getData()}</option>`)

    if (!isValid) {

        $('#alert-movie').text('All input fields are required');

        return;
    }

    movieErorr.text('');

    $('#movie-list').append(`<li>${newMovie.getData()}</li>`)
    $('#select-movie')[0].reset()




})



// console.log(movies)


console.log(movies.length)
$('#create-program').on('click', function () {
    var data = $('#date-input').val();
    function getFullDuration(movies) {
        if (!movies.length) return 0;
        var count = 0;
        movies.forEach(newMovie => {
        count += newMovie.movieLength;
        });
        return count;
    }
    var prog = new Program(data, movies.length, getFullDuration(movies));
    

    $('#add-program-program').append(`<option>${prog.getData()}</option>`);

    $('#program-list').append(`<li>${prog.getData()}</li>`)


    console.log(prog)

    // $('#program-list').append(`<li>${prog.getFullDuration()}</li>`);

})


$('#movie-program').on('click', function () {
    var movieadd = '';
    var progamadd = '';
    $('#add-movie-to-program option:selected').each(function () {
        movieadd = $(this).val();
        
    })
    $('#add-program-program option:selected').each(function () {
        progamadd = $(this).val();
        
    })

    $(movieadd).text(`<option>${prog.getData()}</option>`);
})














