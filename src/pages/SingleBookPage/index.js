import { useState,useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Book from "../../components/book";
import Header from "../../components/header";
import "./style.css";

export default function SingleBookPage() {
    const { id } = useParams();
    const [book, setBook] = useState({});
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    async function getBookApi() {
        try {
            setLoading(true);
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`);
            setBook(response.data);
            console.log(response.data);
            setLoading(false);
        } catch (e) {
            navigate(`/notfound`);
            setLoading(false);
        }
    };
    useEffect(function() {
        getBookApi();
    }, [id]);

    return (
        <div className="single-book-page">
            <Header />
            <div className="background mx-3">
                <Book bookData={book} />
            </div>
        </div>
    )
}