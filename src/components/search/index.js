import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import debounce from 'lodash/debounce';
import "./style.css";

export default function Search() {
    const [bookResult, setBookResult] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [maxResults, setMaxResults] = useState(20);
    const debouncedOnChange = debounce(onSearch, 200);
    function onSearch(e) {
        setLoading(true);
        const value = e.target.value;
        if ( value.trim() !== "") {
                axios.get(`https://www.googleapis.com/books/v1/volumes?q=${value}&maxResults=40`).then(function (response) {
                    setBookResult(response.data.items);
                    // console.log(response.data.items);
                });
                setLoading(false);
        }
    };
    function timeLoopBooks() {
        return bookResult.map((book) => {
            const { id, volumeInfo } = book;
            return (
                <li key={id}>
                    <Link to={`/books/${id}`} className="text-decoration-none">
                        <div className="book-cover">
                            <img className="rounded-2" src={volumeInfo?.imageLinks?.smallThumbnail} />
                            <div className="box-hover rounded-2 d-flex justify-content-around align-items-center">
                                <i class="bi bi-heart-fill fs-5 text-warning"></i>
                                <i class="bi bi-book-half fs-5 text-warning"></i>
                                <i class="bi bi-plus-circle-fill fs-5 text-warning"></i>
                            </div>
                        </div>
                        
                        <h6 className="text-dark fw-bold pt-3 mb-1">{volumeInfo.title}</h6>
                        <h6 className="text-dark fw-light">By {volumeInfo.authors}</h6>
                    </Link>
                </li>
            )
        })
    };

    return (
        <div className="search py-5">
            <div className="container">
                <div className="search-bar py-5 mb-4 d-flex justif-content-between align-items-center gap-3">
                    <i className="bi bi-binoculars fs-4"></i>
                    {/* <i className="bi bi-binoculars-fill fs-4"></i>
                    <i className="bi bi-search fs-4"></i> */}
                    <input
                        id="input"
                        placeholder="Search Title, Author or ISBN..."
                        className="px-3 pb-2 bg-transparent border-warning border-start-5 border-top-0 border-bottom-0 border-end-0 fs-2"
                        onChange={(e) => debouncedOnChange(e)}
                    />
                </div>
                <ul className="result d-flex list-unstyled justify-content-between gap-5 flex-wrap">
                    {timeLoopBooks()}
                </ul>
            </div>
        </div>
    )
}