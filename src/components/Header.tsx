import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks/reducer";
import { booksSlice } from "../store/reducers/books/booksSlice";
import { HOME } from "../utils/path";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [searchValue, setSearchValue] = useState<string>("");
  const { setSearch } = booksSlice.actions;

  const onSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue) {
      navigate(HOME);
      dispatch(setSearch(searchValue));
    }
  };

  return (
    <div className="py-4 px-10 bg-blue-400">
      <nav className="flex">
        <Link to="/">
          <svg className="h-10 w-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14">
            <path
              d="M 6.55466,11.542 C 6.10897,11.0187 5.36501,10.459 4.6445,10.1049 3.91698,9.7473 3.22595,9.5487 2.44138,9.4719 2.28669,9.4569 2.15844,9.4429 2.15639,9.4409 c -0.002,0 0.002,-1.6151 0.01,-3.5846 l 0.0132,-3.5808 0.14284,0.014 c 0.87708,0.087 1.85601,0.4184 2.59669,0.8803 0.63833,0.398 1.29749,1.0126 1.71774,1.6015 l 0.10576,0.1482 0,3.4014 c 0,1.8707 -0.008,3.401 -0.0176,3.4007 -0.01,-3e-4 -0.0861,-0.081 -0.16992,-0.1794 z m 0.72656,-3.2297 0,-3.4156 0.20424,-0.2729 C 7.74623,4.2754 8.27075,3.7505 8.61758,3.491 9.54472,2.7971 10.55044,2.405 11.70505,2.287 l 0.14648,-0.015 0,3.5858 0,3.5859 -0.16992,0.016 C 10.0739,9.6093 8.6801,10.2726 7.5899,11.4068 l -0.30868,0.3212 0,-3.4156 z m 0.9961,3.1835 c 0.63101,-0.592 1.46635,-1.0624 2.30546,-1.2985 0.4391,-0.1235 1.01012,-0.2097 1.38918,-0.2097 0.19874,0 0.30898,-0.043 0.37116,-0.1451 0.0468,-0.077 0.0473,-0.1101 0.0474,-3.0157 l 8e-5,-2.9382 0.0879,0.016 c 0.0483,0.01 0.18544,0.048 0.30468,0.086 l 0.2168,0.069 0,3.6669 c 0,2.0168 -0.008,3.6669 -0.0179,3.6669 -0.01,0 -0.15489,-0.031 -0.32227,-0.069 -0.66143,-0.149 -1.20614,-0.2002 -1.92152,-0.1809 -0.86772,0.024 -1.54209,0.145 -2.34375,0.422 l -0.30469,0.1053 0.1875,-0.1759 z m -2.67188,0.057 C 5.27252,11.4336 4.7227,11.2931 4.35153,11.2325 c -0.50468,-0.082 -0.85286,-0.1038 -1.4714,-0.09 -0.61458,0.013 -0.98632,0.056 -1.49344,0.1711 -0.1418,0.032 -0.28682,0.065 -0.32227,0.072 l -0.0644,0.014 1.1e-4,-3.6767 1.2e-4,-3.6768 0.27529,-0.08 c 0.1514,-0.044 0.28847,-0.085 0.30458,-0.09 0.0233,-0.01 0.0293,0.589 0.0293,2.9349 0,3.2057 -0.007,3.027 0.12978,3.1169 0.0476,0.031 0.1465,0.045 0.42893,0.062 1.12246,0.064 2.18752,0.4409 3.05702,1.0822 0.1875,0.1383 0.63749,0.5181 0.66328,0.5598 0.018,0.029 0.006,0.026 -0.28292,-0.078 z"
              fill="white"
            />
          </svg>
        </Link>
        <form onSubmit={onSearch} action="#" className="rounded-lg mx-auto flex overflow-hidden">
          <button type="submit" className="w-10 h-10 p-1 bg-slate-300 hover:bg-sky-700 transition-colors">
            <svg className="fill-white w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15C11.381 15 12.6296 14.4415 13.5355 13.5355C14.4415 12.6296 15 11.381 15 10C15 7.23858 12.7614 5 10 5ZM3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 11.5719 16.481 13.0239 15.6063 14.1921L20.7071 19.2929C21.0976 19.6834 21.0976 20.3166 20.7071 20.7071C20.3166 21.0976 19.6834 21.0976 19.2929 20.7071L14.1921 15.6063C13.0239 16.481 11.5719 17 10 17C6.13401 17 3 13.866 3 10Z"
              />
            </svg>
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="w-80 px-3 outline-0 text-sm"
          />
        </form>
      </nav>
    </div>
  );
};

export default Header;
