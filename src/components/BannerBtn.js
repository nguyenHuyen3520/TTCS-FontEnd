import React, { Component } from 'react';

class BannerBtn extends Component {
    render() {
        return (
<div className="banner-btn">
  <div className="banner-btn-left">
    <i className="fas fa-chevron-circle-left" />
  </div>
  <div className="banner-btn-right">
    <i className="fas fa-chevron-circle-right" />
  </div>
</div>

        );
    }
}

export default BannerBtn;