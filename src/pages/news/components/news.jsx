import React from 'react';
import { Link } from 'react-router-dom';
const NewsComponent = ({ currentNews }) => {
    return (
        <>
            <div className="news-title text-center m-5">
                <h1>Haberler Alanımız</h1>
            </div>
            <div className="container">
                {currentNews.map((article, index) => (
                    <Link to={article.url} target="_blank" rel="noopener noreferrer" key={index}>
                        <div key={index} className="news-card row mt-2 mb-4">
                            <div className="news-image col-4">
                                <img src={article.urlToImage} alt="" />
                            </div>
                            <div className="news-info col-8">
                                <div className="row">
                                    <h3><strong>{article.title}</strong></h3>
                                </div>
                                <div className="row">
                                    <p>{article.content}</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </>

    )
}

export default NewsComponent