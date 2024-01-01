import React from "react";
import "./About.css";

function about(props) {
  return (
    <div className="about-continer">
      <div class="content-about">
        <h1 className="h-about">Little Lemon Chicago </h1>
        <p>
          Little Lemon opened in 1995 by two Italian brothers, Adrian and Mario.
          Despite the city's diversity, the two brothers recognized the lack of
          Mediterranean cuisine in Chicago, and were inspired to bring the
          flavors of their hometown in Italy to the people of Chicago. The two
          brothers continue to oversee the Little Lemon restaurant, nearly
          thirty years later.
        </p>
      </div>
      <section>
        <img
          className="img-about"
          src="https://b.zmtcdn.com/data/reviews_photos/f80/35a3808d9ffc7d6adf45ae0b5255ef80_1605030686.jpg"
          alt="food"
        />
        <img
          className="img-about1"
          src="https://img.freepik.com/free-photo/top-view-meals-tasty-yummy-different-pastries-dishes-brown-surface_140725-14554.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703894400&semt=ais"
          alt="name"
        />
      </section>
    </div>
  );
}

export default about;
