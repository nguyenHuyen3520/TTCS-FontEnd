import React from 'react';
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div className="grid grid-cols-3 gap-3" style={{
      padding: '10px 10%',
      backgroundColor: '#4d6cb5',
      color: 'white',
    }}>
      <div>
        <div className="flex">
          <img src={logo} alt="avatar" style={{ height: '100px', width: '250px', objectFit: 'fill' }} />
          <div className="flex justify-content items-center">
            <div className="text-3xl font-bold">Trinh phục lập trình</div>
          </div>
        </div>
        <div className="flex">
          <div className="font-bold mr-1">Email:</div>
          <a href="mailto:contact@fullstack.edu.vn">nguyenhuyennd1211@gmail.com</a>
        </div>
        <div className="flex">
          <div className="font-bold mr-1">Địa chỉ:</div>
          141 Chiến Thắng, Tân Triều, Thanh Trì, Hà Nội
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <div>
          <div className="font-bold text-xl">
            Hỗ Trợ
          </div>
          <div className="footer__magic">
            <div className="py-1">
              <Link to="/contact" >Liên hệ</Link>
            </div>
            <div className="py-1">
              <Link to="/security">Bảo mật</Link>
            </div>
            <div className="py-1">
              <Link to="/rules">Điều khoản</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <div>
          <div className="font-bold text-xl">
            Về Everest Education
          </div>
          <div className="footer__magic">
            <div className="py-2">
              <Link to="/introduce" >Giới thiệu</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;