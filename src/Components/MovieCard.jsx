import React from 'react';

function MovieCard({ poster_path, name, handleAddToWatchList, movieObj, handleRemoveWatchList, watchlist }) {

  function isContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div className="relative">
      <div
        className="h-[45vh] w-[200px] bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer"
        style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})` }}
      >
        <div className="absolute top-0 right-0 mr-2 mt-2">
          {isContain(movieObj) ? (
            <div onClick={() => handleRemoveWatchList(movieObj)} className="text-white text-xl w-full text-center bg-gray-800 bg-opacity-75 py-1 rounded-lg mr-2">
              &#10060;
            </div>
          ) : (
            <div onClick={() => handleAddToWatchList(movieObj)} className="text-white text-xl w-full text-center bg-gray-800 bg-opacity-75 py-1 rounded-lg mr-2">
              &#128525;
            </div>
          )}
        </div>
        <div className="absolute bottom-0 left-0 right-0 text-white text-xl text-center bg-gray-800 bg-opacity-75 py-1 rounded-b-xl">
          {name}
        </div>
      </div>
    </div>
  );
}

export default MovieCard;
