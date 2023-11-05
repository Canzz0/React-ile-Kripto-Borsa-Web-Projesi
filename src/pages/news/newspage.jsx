import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'; // useParams ekledik
import FooterComponent from '../../main_components/footer/footer';
import LoaderComponent from '../../main_components/loader/loader';
import { getNewsData } from '../../redux/features/news';
import NewsComponent from './components/news';
import PaginationComponent from './components/pagination';
import './newspage.css';

const NewsPage = () => {
    const dispatch = useDispatch();
    const { isSuccess, news } = useSelector(state => state.news);
    const [refreshed, setRefreshed] = useState(false);
    const { page } = useParams();

    const [currentPage, setCurrentPage] = useState(Number(page) || 1); //bulunduğumuz sayfa
    const newsPerPage = 5;  //sayfalarda bulunacak haber sayısı

    useEffect(() => {
        dispatch(getNewsData());
    }, [dispatch]);


    //sayfalama arası yenileme için
    const refreshPage = () => {
        if (!refreshed) {
            window.location.reload('/');
            setRefreshed(true);
        }
    }

    useEffect(() => {
        setCurrentPage(Number(page) || 1);//sayfa değiştikçe değişmesi için
    }, [page]);
    
    
    if (!isSuccess) {
        return (
            <>
                <LoaderComponent />
            </>
        );
    } else {

        //Sayfalamada veriyi sayfalamara bölme
        const indexOfLastnews = currentPage * newsPerPage;
        const indexOfFirstnews= indexOfLastnews - newsPerPage;
        const currentNews = news.slice(indexOfFirstnews, indexOfLastnews);

        return (
            <>
                <title>Haberler</title>
                <section className="news-places">
                    <NewsComponent currentNews={currentNews} />
                    <PaginationComponent
                        currentPage={currentPage}
                        newsPerPage={newsPerPage}
                        totalnews={news.length}
                        refreshPage={refreshPage}
                    />
                </section>
                <FooterComponent/>
            </>
        );
    }
};

export default NewsPage;
