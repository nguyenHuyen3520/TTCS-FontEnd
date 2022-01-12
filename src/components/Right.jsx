import React, { useState } from 'react'
// import nbk1 from '../../../img/nbk1.jpg';
import TextField from '@mui/material/TextField';

const Show = ({ dataReceive, show, showList, setShowList, onHandleShowList, addItem, dataSubmit, editItem, onHandleEdit,
    valueName, valuePrice, valueType, valueDesc, valueImg,
    setValueName, setValuePrice, setValueType, setValueDesc, setValueImg

}) => {
    console.log('dataReceive', dataReceive)
    console.log('EEEEEEEEE', valueName)
    const listFil = Object.values(dataReceive)

    const handleSubmit = (e) => {

        e.preventDefault();

        if (addItem) {
            dataSubmit({
                name: valueName,
                price: valuePrice,
                type: valueType,
                desc: valueDesc,
                img: URL.createObjectURL(valueImg),
            })

        }
        if (editItem) {
            onHandleEdit({
                name: valueName,
                price: valuePrice,
                type: valueType,
                desc: valueDesc,
                img: URL.createObjectURL(valueImg),
            })
        }


    }
    // const handleOnchange=(e)=>{
    //     setValueInput(e.target.value)
    // }


    return (
        <>
            {show ? (
                <div className='w-1/2 bg-[#424242]  ' style={{ paddingTop: '14px' }}>
                    <div className='flex justify-center'>
                        <div className='w-11/12  flex gap-4  '>
                            <div className='w-1/2'><img src={dataReceive.img} style={{ width: '100%', height: '220px', objectFit: 'cover' }} /></div>
                            <div className='w-1/2 '>
                                <div className='pb-6 pt-2 '>
                                    <TextField

                                        label="Ten"
                                        value={valueName}
                                        onChange={(e) => setValueName(e.target.value)}

                                    />
                                </div>
                                <div className='pb-6'>
                                    <TextField

                                        label="Price"
                                        value={addItem ? valuePrice : editItem ? valuePrice : valuePrice}
                                        onChange={(e) => setValuePrice(e.target.value)}
                                    />

                                </div>
                                <div>

                                    <div className='pb-6'>
                                        <TextField

                                            label="Desc"
                                            value={addItem ? valueDesc : editItem ? valueDesc : dataReceive.desc}
                                            onChange={(e) => setValueDesc(e.target.value)}
                                        />

                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div className='w-full flex justify-center pt-4 '>
                        <div className='w-11/12 flex justify-between'>
                            <div className=''>
                                <TextField

                                    label="Type"
                                    value={addItem ? valueType : editItem ? valueType : dataReceive.type}
                                    onChange={(e) => setValueType(e.target.value)}
                                />

                            </div>
                            {addItem ? (
                                <div><input type="file"
                                    onChange={(e) => setValueImg(e.target.files[0])}

                                /></div>
                            ) : editItem ? (
                                <div><input type="file"
                                    onChange={(e) => setValueImg(e.target.files[0])}

                                /></div>
                            ) : null}
                            <div className='pb-6'>
                                <input type="date" className='w-60 h-10 px-4 bg-[#424242] border border-white' />

                            </div>

                        </div>
                    </div>
                    {
                        addItem ? (
                            <div className='w-full flex justify-center pt-4 '>
                                <div className='w-11/12 '>
                                    <button
                                        className='w-full bg-sky-600 hover:bg-sky-700 py-3 rounded-2xl text-white text-xl font-semibold'
                                        onClick={handleSubmit}
                                    >Add Item</button>
                                </div>
                            </div>
                        ) : null
                    }
                    {
                        editItem ? (
                            <div className='w-full flex justify-center pt-4 '>
                                <div className='w-11/12 '>
                                    <button
                                        className='w-full bg-sky-600 hover:bg-sky-700 py-3 rounded-2xl text-white text-xl font-semibold'
                                        onClick={handleSubmit}
                                    >Edit Item</button>
                                </div>
                            </div>
                        ) : null
                    }

                    <div className='flex justify-center'>
                        <div className='w-11/12'>
                            <div className='flex justify-between text-white'>
                                <div>Danh muc A</div>
                                <div>Danh sach Sinh vien</div>
                                <div
                                    className='cursor-pointer'
                                    onClick={() => setShowList(!showList)}
                                >+</div>

                            </div>
                            {
                                showList ? (
                                    <div>
                                        {listFil[6].map((item) => {
                                            return <div key={item.id} className='text-white'>{item.student}</div>
                                        })}
                                    </div>
                                ) : null
                            }
                        </div>
                    </div>

                </div>
            ) : (
                <div className='w-1/2 bg-gray-400 flex justify-center ' style={{ paddingTop: '14px' }}>

                </div>
            )}
        </>
    )
}

export default Show