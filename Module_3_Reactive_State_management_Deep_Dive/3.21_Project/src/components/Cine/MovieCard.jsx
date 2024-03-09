/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { getImgUrl } from "../../utils/cine_utilty";
import Rating from "./Rating";
import MovieDetailsModal from "./MovieDetailsModal";
import { MovieContext } from "../../context";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const { state, dispatch } = useContext(MovieContext);
  console.log(state)

  function handleAddToCart(e, movie) {
    e.stopPropagation();

    const found = state.find((item) => {
      return item.id === movie.id;
    });

    if (!found) {
      dispatch({
        type: "Add_To_Cart",
        payload: {
          ...movie,
        },
      });
    } else {
      console.error(`The Movie ${movie.title} had already added to the cart!`);
    }
  }

  function handleMovieSelection(movie) {
    setShowModal(true);
    setSelectedMovie(movie);
  }

  function handleHideModal() {
    setSelectedMovie(null);
    setShowModal(false);
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          handleAddToCart={handleAddToCart}
          movie={selectedMovie}
          onClose={handleHideModal}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
        <a href="#" onClick={() => handleMovieSelection(movie)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt={movie.title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1 ">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
            <div className="flex items-center space-x-1 mb-5">
              <Rating value={movie.rating} />
            </div>
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src="./assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </a>
          </figcaption>
        </a>
      </figure>
    </>
  );
};

export default MovieCard;
