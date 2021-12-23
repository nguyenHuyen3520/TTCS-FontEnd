import React, { Component } from 'react'

export default class Review extends Component {
    render() {
        return (
<div className="Review">
  <div className="Review-img">
    <div className="Review-main">
      <div className="Review-text">Top Reviews</div>
      <div className="Review-sub-text">
      Our students have been studying at many prestigious schools around the world
      </div>
      <div className="Review-list-rate">
        <input
          type="radio"
          name="r"
          id="r1"
          hidden
          className="a1"
          defaultChecked
        />
        <input type="radio" name="r" id="r2" hidden className="a2" />
        <input type="radio" name="r" id="r3" hidden className="a3" />
        <input type="radio" name="r" id="r4" hidden className="a4" />
        <input type="radio" name="r" id="r5" hidden className="a5" />
        <div className="Review-body s1">
          <div className="Review-card">
            <div className="avatar">
              <img src="https://thuthuatnhanh.com/wp-content/uploads/2021/02/Avatar-ngau-dep-390x390.jpg" alt />
            </div>
            <div className="avatar-feedback">
              <div className="avatar-name">Nguyễn Minh Tiến</div>
              <div className="avatar-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="avatar-comment">Thanks Everest education center. Wish the educational center more success.</div>
              <div className="avatar-nickname">Binz</div>
            </div>
          </div>
        </div>
        <div className="Review-body">
          <div className="Review-card">
            <div className="avatar">
              <img
                src="https://pdp.edu.vn/wp-content/uploads/2021/05/hinh-anh-avatar-nam-1.jpg"
                alt
              />
            </div>
            <div className="avatar-feedback">
              <div className="avatar-name">Lê Quang Chiến</div>
              <div className="avatar-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="avatar-comment">
                Thanks my teacher for the time!
              </div>
              <div className="avatar-nickname">Meow Meow</div>
            </div>
          </div>
        </div>
        <div className="Review-body">
          <div className="Review-card">
            <div className="avatar">
              <img
                src="https://tntaydu.vn/anh-gai-dep-nhat-the-gioi/imager_343.jpg"
                alt
              />
            </div>
            <div className="avatar-feedback">
              <div className="avatar-name">Trịnh Công Hoan</div>
              <div className="avatar-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="avatar-comment">
              Sincerely thanks! Thanks so much!
              </div>
              <div className="avatar-nickname">Hoan Trịnh</div>
            </div>
          </div>
        </div>
        <div className="Review-body">
          <div className="Review-card">
            <div className="avatar">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6_X2gvnaXIdd-oJIUZdMOY5MmEZ9ZEJxPEg&usqp=CAU"
                alt
              />
            </div>
            <div className="avatar-feedback">
              <div className="avatar-name">Nguyễn Thùy Linh</div>
              <div className="avatar-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="avatar-comment">
              I’m so grateful for your help. It was a challenging time but you made it easier. 
              </div>
              <div className="avatar-nickname">Thùy Linh</div>
            </div>
          </div>
        </div>
        <div className="Review-body">
          <div className="Review-card">
            <div className="avatar">
              <img
                src="https://image-us.eva.vn/upload/3-2020/images/2020-09-10/gai-xinh-khoe-nhung-mam-com-sieu-ngon-dan-mang-thot-len-com-sinh-vien-gi-xin-qua-101575085_567484237538834_7010232246003040256_n-1599703539-16-width1536height2048.jpg"
                alt
              />
            </div>
            <div className="avatar-feedback">
              <div className="avatar-name">Nguyễn Khánh Huyền</div>
              <div className="avatar-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="avatar-comment">
              Words cannot describe how grateful  I am for your help after my mom passed away. I was devastated and you helped me get through each day.
              </div>
              <div className="avatar-nickname">Huyền Chăm Chỉ</div>
            </div>
          </div>
        </div>
        <div className="Review-body">
          <div className="Review-card">
            <div className="avatar">
              <img
                src="https://image.vtc.vn/resize/th/upload/2020/06/28/nu-sinh-hoc-vien-an-ninh-nhan-dan-3-21211921.jpg"
                alt
              />
            </div>
            <div className="avatar-feedback">
              <div className="avatar-name">Nguyễn Thu Trang</div>
              <div className="avatar-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="avatar-comment">
              Thank you for your comments that have helped me have a wonderful result.
              </div>
              <div className="avatar-nickname">Trang Trong Trắng</div>
            </div>
          </div>
        </div>
        <div className="Review-body">
          <div className="Review-card">
            <div className="avatar">
              <img
                src="https://img.lostbird.vn/w960/2019/08/18/738325/9.jpg"
                alt
              />
            </div>
            <div className="avatar-feedback">
              <div className="avatar-name">Bùi Quang Hùng</div>
              <div className="avatar-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="avatar-comment">
              I would like to sincerely thank the leader for his enthusiastic support during my internship at the company.
              </div>
              <div className="avatar-nickname">Hùng Rose</div>
            </div>
          </div>
        </div>
        <div className="Review-body">
          <div className="Review-card">
            <div className="avatar">
              <img
                src="https://info-imgs.vgcloud.vn/2020/06/26/13/an-tuong-bo-anh-chill-duoi-anh-hoang-hon-phong-cach-hongkong-6.jpg"
                alt
              />
            </div>
            <div className="avatar-feedback">
              <div className="avatar-name">Nguyễn Thúy Hồng</div>
              <div className="avatar-rate">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <div className="avatar-comment">
              Together we have gone through many difficulties of the wave. Thank you for always believing me.
              </div>
              <div className="avatar-nickname">Hồng K33</div>
            </div>
          </div>
        </div>
      </div>
      <div className="icon-dot-review" style={{ marginTop: 40 }}>
        <label htmlFor="r1" className="icon-dot">
          <i className="fas fa-circle icon-dot--here" />
        </label>
        <label htmlFor="r2" className="icon-dot">
          <i className="fas fa-circle" />
        </label>
        <label htmlFor="r3" className="icon-dot">
          <i className="fas fa-circle" />
        </label>
        <label htmlFor="r4" className="icon-dot">
          <i className="fas fa-circle" />
        </label>
        <label htmlFor="r5" className="icon-dot">
          <i className="fas fa-circle" />
        </label>
      </div>
    </div>
  </div>
</div>

        )
    }
}
