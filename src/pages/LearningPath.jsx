// import React from 'react'
// import { useHistory, Link } from "react-router-dom";
// import image from '../../assets/image/LearningPath/image.png'
// import image2 from '../../assets/image/LearningPath/image2.png'
// import image3 from '../../assets/image/LearningPath/image3.png'
// import Image from '../components/Image';


// const listPost = [
//     {
//         image: image,
//         title: "Bắt đầu",
//         description: "Trước tiên, chúng ta sẽ tìm hiểu về phương pháp học lập trình, kỹ năng đặt mục tiêu và các khái niệm kỹ thuật như: domain, client, server."
//     },
//     {
//         image: image2,
//         title: "Font-end",
//         description: "Lập trình viên Front-end là người xây dựng ra giao diện websites. Trong phần này F8 sẽ chia sẻ cho bạn lộ trình để trở thành lập trình viên Front-end nhé."
//     },
//     {
//         image: image3,
//         title: "Back-end",
//         description: "Trái với Front-end thì lập trình viên Back-end là người làm việc với dữ liệu, công việc thường nặng tính logic hơn. Chúng ta sẽ cùng tìm hiểu thêm về lộ trình học Back-end nhé."
//     },
// ]
// const LearningPath = () => {
//     return (        
//             <div className="LearningPath">
//                 <Link to="/home">
//                     &lt; Quay lai
//                 </Link>
//                 <h1>Lộ trình cho người mới</h1>
//                 <p>Cho dù bạn là người mới bắt đầu hay một lập trình viên đã có kinh nghiệm đang tìm kiếm các khóa học để nâng cao kỹ năng bản thân và đạt đến mức độ cao hơn trong lập trình, lộ trình học tập này sẽ giúp bạn đạt được mục tiêu của mình.</p>

//                 {
//                     listPost.map((item, index) => (
//                         <div style={{ display: 'flex', padding: "30px", border: "0.5px solid", marginBottom: "10px", borderRadius: "10px"}} key={index}>
//                             <div>
//                                 <Image  width={190} height={190} src={item.image} />
//                             </div>
//                             <div>
//                                 <h2>{item.title}</h2>
//                                 <p>{item.description}</p>
//                                 <Link to="#" style={{color: 'white', backgroundColor: '#f16239', padding: '7px', borderRadius: "5px"}}>
//                                     Xem thêm
//                                 </Link>
//                             </div>
//                         </div>  
//                     ))
//                 }

//             </div>        
//     )
// }

// export default LearningPath
