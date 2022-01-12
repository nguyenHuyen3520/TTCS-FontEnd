import React, { useState } from 'react'
import { FaProductHunt, FaTrash } from 'react-icons/fa';
import { MdDone, MdEdit } from 'react-icons/md';
const Product = ({ data, onHandleRemove, onHandleDataReceive, addItem, setAddItem, onHandleEdit, setEditItem }) => {

    const [term, setTerm] = useState("");
    const onSearchTerm = (e) => {
        setTerm(e.target.value);

    }

    const searchDataReducers = data.filter((fil) => {
        if (fil.desc.toLowerCase().includes(term.toLowerCase())) {
            return fil
        }
    })

    const handleAddItem = () => {
        setAddItem(!addItem);
        setEditItem(false)
    }
    return (
        <div className='w-1/2 '>
            <div className=' flex justify-center bg-[#424242]'>
                <div className='w-11/12 pb-6 pt-3'>
                    <div className='flex justify-between items-center'>
                        <div
                            className='w-10 h-10 bg-blue-600 text-white flex justify-center leading-9 text-xl rounded-full cursor-pointer'
                            onClick={handleAddItem}
                        >
                            +
                        </div>
                        <div className='flex border rounded-2xl px-2 py-1 '>
                            <div className='flex items-center text-white '>
                                <FaProductHunt />
                            </div>
                            <div className='text-white font-semibold text-sm px-2'>
                                2 course was found!
                            </div>
                            <div className='flex items-center text-[#2e2e2e] text-lg'>
                                <MdDone />
                            </div>
                        </div>
                        <div className='pb-2'>
                            <select className='bg-[#424242] border-b text-white font-medium text-sm'>
                                <option>ALL COURSE</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>
            <div className='pb-2 flex justify-center bg-[#424242]'>
                <input
                    className='w-11/12 outline-none border-b py-1 px-2 bg-[#424242]'
                    placeholder='Search course ...'
                    value={term} onChange={onSearchTerm}
                />
            </div>
            <div className='flex justify-center bg-[#222222]'>
                <div className='w-11/12'>
                    <div className='grid grid-cols-5 gap-4 mt-2'>
                        {term.length === 0 ? (
                            data.map((item) => {
                                return <div key={item.id}
                                    className='bg-[#424242] rounded-md cursor-pointer'
                                    onClick={() => onHandleDataReceive(item)}
                                >
                                    <div>
                                        <div><img src={item.img} /></div>
                                        <div className='px-3 text-white'>
                                            <div className='pt-1 pb-8'>{item.desc}</div>
                                            <div className='flex justify-between mb-3'>
                                                <div onClick={() => onHandleRemove(item.id)}><FaTrash /></div>
                                                <di onClick={() => onHandleEdit(item.id)}><MdEdit /></di>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            })
                        ) : (
                            searchDataReducers.map((item) => {
                                return <div key={item.id}
                                    className='bg-[#424242] rounded-md cursor-pointer'
                                    onClick={() => onHandleDataReceive(item)}
                                >
                                    <div>
                                        <div><img src={item.img} /></div>
                                        <div className='px-3 text-white'>
                                            <div className='pt-1 pb-8'>{item.desc}</div>
                                            <div className='flex justify-between mb-3'>
                                                <div onClick={() => onHandleRemove(item.id)}><FaTrash /></div>
                                                <div><MdEdit /></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            }))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product