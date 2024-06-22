import React, { useState, useEffect } from "react";
import PageTemplate from '../components/templateMovieListPage';
import { BaseMovieProps } from "../types/interfaces";
import { getUpcomingMovies } from "../api/tmdb-api";
import AddToWatchListIcon from '../components/cardIcons/addToWatchList';

const UpcomingMoviesPage: React.FC = () => {
    const [movies, setMovies] = useState<BaseMovieProps[]>([]);

    useEffect(() => {
        getUpcomingMovies().then(movies => {
            setMovies(movies);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <PageTemplate
            title='Upcoming Movies'
            movies={movies}
            action={(movie: BaseMovieProps) => {
                return <AddToWatchListIcon {...movie} />
            }}
        />
    );
};
export default UpcomingMoviesPage