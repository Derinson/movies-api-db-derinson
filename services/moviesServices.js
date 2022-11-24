//const { moviesMock } = require('../utils/mocks/movies');
const mysqlDB = require ('../lib/mysql');
class MoviesService {

    async getAllMovies(){
        const movies = await mysqlDB.getAll();
        return movies || [];
    }

    async getMovie( movieId ){
        console.log("MI ID DE PELICULA en SERVICES", movieId );
        const movie = await Promise.resolve(
            moviesMock.find( movie => movie.id === movieId )
        );
        return movie || {};
    }

}

module.exports = MoviesService;