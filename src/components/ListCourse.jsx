import React from 'react'

const ListCourse = ({listCourse, col}) => {
    return (
        <div className={`grid grid-cols-${col} gap-1`}> 
            {
                listCourse.map((item, index)=>(
                    <div className='border-2 h-72 w-full bg-slate-500'>
                        <div className='w-full h-36 object-cover bg-cover' style={{backgroundImage: `url("${item.image}")`}}>                            
                        </div>
                        <div className="font-medium p-3 text-purple-50">{item.name}</div>                        
                    </div>
                ))
            }
        </div>
    )
}

export default ListCourse
