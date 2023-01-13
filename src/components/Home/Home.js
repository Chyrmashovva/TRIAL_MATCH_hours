import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

const Home = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="home">
              <img className="lkg" src="https://pbs.twimg.com/media/CU249lRVAAAYV7k?format=jpg&name=large" />

              <div className="col-2">
                <h1 className="col-2__h1">Часы для экстремальных условий</h1>
                <p>Работают безотказно. Где бы вы ни были</p>
              </div>
              <div className="col-2">
                {" "}
                <img
                  className="home__img"
                  src="https://m-files.cdnvideo.ru/lpfile/4/b/9/4b93960797497660b8a4ad31fd946453/-/crop/0x0x1605x2096/-/resize/310/-/quality/95/f.png"
                />{" "}
              </div>
              <Link to={"/models"} className="home__link">
                Выбрать свои часы{" "}
              </Link>
              {/* <hr/> */}

             
            </div>
          </div>
          {/* <div className="home-3">
          <div className="home-3__p">
            <div className="div-1">
              <h1>70</h1>
              <p>
                ГРАДУСОВ НИЖЕ НУЛЯ — работают даже при сверхнизких температурах
              </p>
            </div>
            <div className="div-2">
              <h1>20</h1>
              <p>ЛЕТ — гарантия на бесперебойную работу</p>
            </div>
            <div className="div-3">
              <h1>30</h1>
              <p>МЕТРОВ — часы не боятся погружений на глубину</p>
            </div>
          </div>
        </div> */}
        </div>
      </section>
      <section >
        <div className="container">
          <div className="row">
            <div className="home-2">
              <img
                className="img"
                src="https://m-files.cdnvideo.ru/lpfile/6/2/e/62ef332b631d092b7ab09656d3393745.png"
              />
              <div className="home-2__about">
                <h1>История марки</h1>
                <p>
                  Бренд Trial Watch появился в Англии в 1966 году. Основатель
                  компании, Арен Джонсон, участвовал в арктической экспедиции. Условия
                  были настолько суровые, что его дорогие швейцарские часы вышли из
                  строя.
                </p>
                <p>
                  Тогда Арен решил создать собственные часы, которые будут служить
                  путешественникам в любых условиях. Так появились Trial Watch.
                </p>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default Home;
