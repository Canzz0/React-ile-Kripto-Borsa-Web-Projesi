import React from 'react';
import './newspage.css';
const NewsPage = () => {
  return (
    <>
    <title>Haberler</title>
       <section class="news-places">
    <div class="news-title text-center m-5">
        <h1>Haberler Alanımız</h1>

    </div>
    <div class="container">

        <div class="news-card row mt-2 mb-4">
            <div class="news-image col-4">
                <img src="./haber_örnek.jpeg" alt="" />
            </div>
            <div class="news-info col-8">
                <div class="row">
                    <h3><strong>Başlık 1</strong></h3>
                </div>
                <div class="row">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptate laudantium distinctio ratione tempora culpa suscipit consequuntur sunt eveniet deleniti!</p>
                </div>
            </div>
        </div>
        <div class="news-card row mt-2 mb-4">
            <div class="news-image col-4">
                <img src="./haber_örnek.jpeg" alt=""/>
            </div>
            <div class="news-info col-8">
                <div class="row">
                    <h3><strong>Başlık 2</strong></h3>
                </div>
                <div class="row">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam voluptate laudantium distinctio ratione tempora culpa suscipit consequuntur sunt eveniet deleniti!</p>
                </div>
            </div>
        </div>
    </div>
    
</section>
    </>
 
  )
}

export default NewsPage;