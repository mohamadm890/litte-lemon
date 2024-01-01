import React from "react";
import "./Reviews.css";

function Reviews(props) {
  return (
    <div className="reviews">
      <div class="testimonials">
        <div class="testimonial-inner">
          <h1 className="h-rev">Testimonial</h1>

          <div class="row">
            <div class="col">
              <div class="testimonial">
                <img
                  src="https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <div class="name">John Waddrob</div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  repellat aspernatur temporibus assumenda sint odio minima.
                  Voluptate alias possimus aspernatur voluptates excepturi
                  placeat iusto cupiditate.
                </p>
              </div>
            </div>

            <div class="col">
              <div class="testimonial">
                <img
                  src="https://images.pexels.com/photos/3585325/pexels-photo-3585325.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <div class="name">John Waddrob</div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="far fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  repellat aspernatur temporibus assumenda sint odio minima.
                  Voluptate alias possimus aspernatur voluptates excepturi
                  placeat iusto cupiditate.
                </p>
              </div>
            </div>

            <div class="col">
              <div class="testimonial">
                <img
                  src="https://images.pexels.com/photos/2690323/pexels-photo-2690323.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                  alt=""
                />
                <div class="name">John Waddrob</div>
                <div class="stars">
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                  repellat aspernatur temporibus assumenda sint odio minima.
                  Voluptate alias possimus aspernatur voluptates excepturi
                  placeat iusto cupiditate!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
