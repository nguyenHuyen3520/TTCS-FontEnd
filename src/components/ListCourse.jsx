import React from 'react'
import { Link } from 'react-router-dom'
const ListCourse = ({ listCourse, col }) => {

    return (
        <div className={`grid grid-cols-6 gap-2`}>
            {
                listCourse.map((item, index) => (
                    <Link to={`/course/${item._id}`} className='border-2 h-auto w-full bg-slate-500 rounded-md cursor-pointer shadow-2xl'>
                        <div className='w-full h-44 bg-cover bg-center' style={{ backgroundImage: `url("${item.image}")` }}>
                        </div>
                        {/* <div className="font-medium p-3 text-purple-50">{item.name}</div> */}
                        <div className='px-2 text-white pt-3'>
                            <div className='pt-1 pb-2 font-bold text-2xl'>{item.name}</div>
                            <div >
                                <div>
                                    {
                                        item?.descriptions ? (
                                            <div>
                                                {item?.descriptions?.split(' ').slice(0, 15).join(' ').concat('...')}
                                                <span className="text-red-500">
                                                    See More
                                                </span>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    )
}

export default ListCourse
