import React from 'react'

const EditProfile = () => {
    const profile = JSON.parse(localStorage.getItem('profile'));
    return (
        <div style={{ backgroundColor: '#f0f2f5', fontSize: '25px' }} className="h-full w-full">
            <div className="flex justify-center items-center py-6">
                <div className="w-2/4 bg-white p-6">
                    <div className="flex justify-center items-center">
                        <div className="w-1/3 h-full">
                            <img src={profile?.avatar} alt={profile?.userName} className="w-full h-full rounded-full border-black" />
                        </div>
                    </div>
                    <div className="flex p-2">
                        <div className="font-bold mr-3">User Name:</div>
                        <div>
                            {
                                profile?.userName
                            }
                        </div>
                    </div>
                    <div className="flex p-2">
                        <div className="font-bold mr-3">Email:</div>
                        <div>
                            {
                                profile?.email
                            }
                        </div>
                    </div>
                    <div className="flex p-2">
                        <div className="font-bold mr-3">Phone:</div>
                        <div>
                            {
                                profile?.phone
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditProfile