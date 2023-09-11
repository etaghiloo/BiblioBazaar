import { Button } from 'react-bootstrap';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./style.css";

export default function Book({ bookData }) {
    return (
        <div className="book-info pt-5">
            <div className="container pt-5">
                <div className="book-info-wrapper d-flex justify-content-center align-items-center pb-5">
                    <img className="me-5" src={bookData.volumeInfo?.imageLinks.thumbnail} />
                    {/* <div className="category-tag">
                        {bookData.volumeInfo?.categories?.[0]}
                    </div> */}
                    <div className="info">
                        <h2 className="fw-bold pb-2">{bookData.volumeInfo?.title}</h2>
                        <div className="author-rating d-flex">
                            <h5 className="text-warning">By {bookData.volumeInfo?.authors}</h5>
                            <h5>&nbsp;&nbsp;|&nbsp;&nbsp;</h5>
                            <h5>{bookData.volumeInfo?.averageRating} <i class="bi bi-star-fill"></i></h5>
                        </div>
                        <div className="info-details-wrapper d-flex justify-content-between pt-5">
                            <div className="left">
                                <h5 className="fw-bold">Publisher</h5>
                                <h5 className="fw-bold">Number of pages</h5>
                                <h5 className="fw-bold">Year of issue</h5>
                                <h5 className="fw-bold">ISBN</h5>
                            </div>
                            <div className="right text-end">
                                <h5>{bookData.volumeInfo?.publisher}</h5>
                                <h5>{bookData.volumeInfo?.pageCount}</h5>
                                <h5>{bookData.volumeInfo?.publishedDate.slice(0, 4)}</h5>
                                <h5>{bookData.volumeInfo?.industryIdentifiers?.[0].identifier}</h5>
                            </div>
                        </div>
                        <div className="divider pt-4 pb-5 d-flex justify-content-between align-items-center">
                            <p>More info</p>
                            <i class="bi bi-arrow-down"></i>
                            <hr></hr>
                        </div>
                        <div className="availability-price d-flex justify-content-between align-items-center">
                            {bookData?.saleInfo?.saleability === "FOR_SALE" 
                                ?
                                <h5 className="text-warning mb-0 text-opacity-75">Available</h5>
                                :
                                <h5 className="text-warning mb-0 text-opacity-75">Unavailable</h5>
                            }
                            {bookData?.saleInfo?.saleability === "FOR_SALE"
                                ?
                                <div className="cart d-flex align-items-center">
                                    <h4 className="pe-4 mb-0 text-body-secondary fw-bold">${bookData?.saleInfo?.listPrice?.amount}</h4>
                                    <Button className="btn btn-light btn-outline-dark px-4">Add to cart</Button>
                                </div>
                                :
                                ""
                            }
                        </div>
                    </div>
                </div>
                <div className="description pt-5">
                    <h5 className="fw-bold">Description</h5>
                    <h5>{bookData.volumeInfo?.description}</h5>
                </div>
            </div>
        </div>
    )
}