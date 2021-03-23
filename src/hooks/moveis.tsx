import {
    createContext,
    useState,
    useContext
} from 'react'

const MoviesContext = createContext({} as any)

export const MoviesProvider = ({ children }: any) => {
    const [selectedGenreId, setSelectedGenreId] = useState(1)

    return (
        <MoviesContext.Provider value={{selectedGenreId, setSelectedGenreId}}>
            { children }
        </MoviesContext.Provider>
    )
}

export function useMovies() {
    const context = useContext(MoviesContext)

    if(!context) {
        throw new Error('useMovies must be used within a MoviesProvider')
    }

    return context
}