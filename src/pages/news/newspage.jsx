import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoaderComponent from '../../main_components/loader/loader';
import { getNewsData } from '../../redux/features/news';
import './newspage.css';

const NewsPage = () => {
    const dispatch = useDispatch();
    const { isSuccess, news } = useSelector(state => state.news);

    useEffect(() => {
        dispatch(getNewsData());
    }, [getNewsData]);
    if (!isSuccess) {
        return (
            <>
                <LoaderComponent />
            </>
        );
    }
    else {
        console.log(news);

        return (
            <>
                <title>Haberler</title>
                <section className="news-places">
                    <div className="news-title text-center m-5">
                        <h1>Haberler Alanımız</h1>
                    </div>
                    <div className="container">
                        {news.map((article, index) => (
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
                </section>
            </>
        );
    }


};

export default NewsPage;
