import React, { Component } from 'react';

class Slider extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="tk-slider">
        <div class="slider">
          <ul class="slides">
            <li>
              <img src="https://i.ebayimg.com/00/s/NTMyWDgwMA==/z/l8IAAOSwDQtclLN7/$_20.JPG" />
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="https://images.squarespace-cdn.com/content/v1/52176524e4b04422e03fe60e/1532551178757-1ZF523A2OE67LZLZTTH0/ke17ZwdGBToddI8pDm48kHUzxcQwd2DgHE3KO6VtZClZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI8WSdUAClKlbzUWAo0YGE76I9gwskSHZVrO0UO6f6EYs/tuition+cloud.png?format=1000w" />
              <div class="caption left-align">
                <h3>Left Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="https://i.ebayimg.com/00/s/MzQxWDgwMA==/z/QCsAAOSwC8ZcYnvP/$_20.JPG" />
              <div class="caption right-align">
                <h3>Right Aligned Caption</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
            <li>
              <img src="https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/istock-668477252_0.jpg?itok=WQEtfGXz" />
              <div class="caption center-align">
                <h3>This is our big Tagline!</h3>
                <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Slider;