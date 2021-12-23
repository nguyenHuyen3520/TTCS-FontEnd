import React, { Component } from 'react';

class Video extends Component {
    render() {
        return (
<div className="grid">
  <div className="video">
    <div className="video-img">
      <a
        href="https://www.youtube.com/watch?v=Nun-ZoggTMs"
        className="video-img-winter"
      >
        <div className="img-skiing" />
        <div className="video-img-btn">
          <i className="fas fa-play video-img-btn--play" />
        </div>
      </a>
    </div>
    <div className="video-img-sub">
    Everest Education was founded by HoangLong (Harvard Business School and Stanford University), and HuyenNguyen (Stanford University) to empower all learners, one student, and one moment at a time. We help students to gain entrance and succeed in international academic environments. For our families, we strive to be their trusted education partner.
    </div>
    <div className="btn btn-video">
      <span>view more</span>
    </div>
  </div>
</div>
        );
    }
}

export default Video;