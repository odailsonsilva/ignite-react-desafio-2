import { useState, useEffect } from 'react'

import { api } from '../services/api';
import { useMovies } from '../hooks/moveis';
import { GenreResponseProps } from '../models/movies';

import { Button } from '../components/Button';
import '../styles/sidebar.scss';

export function SideBar() {
  const { selectedGenreId, setSelectedGenreId } = useMovies()

  const [genres, setGenres] = useState<GenreResponseProps[]>([]);

  function handleClickButton(id: number) {
    setSelectedGenreId(id)
  }

  useEffect(() => {
    api.get<GenreResponseProps[]>('genres').then(response => {
      setGenres(response.data);
    });
  }, []);
  
  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>

      <div className="buttons-container">
        {genres.map(genre => (
          <Button
            key={String(genre.id)}
            title={genre.title}
            iconName={genre.name}
            onClick={() => handleClickButton(genre.id)}
            selected={selectedGenreId === genre.id}
          />
        ))}
      </div>

    </nav>
  )
}