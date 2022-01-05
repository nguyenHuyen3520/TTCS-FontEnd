import React from 'react'
import AdminApi from '../api/AdminApi';
import ListCourse from '../components/ListCourse'

const CourseManagement = () => {
    const [listCourse, setListCourse] = React.useState([]);
    const [search, setSearch] = React.useState('')
    React.useEffect(() => {
        const getData = async () => {
            const response = await AdminApi.getListCourse();
            setListCourse(response.data);
        }
        getData();
    }, []);
    const handleOnChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        // <div>
        //     <div style={{ width: '900px' }}>
        //         <input className="inputSearch" style={{ width: '100%', marginTop: '10px', height: '30px', border: 'none' }} placeholder="Enter course" onChange={(e) => handleOnChange(e)} />
        //         <ListCourse listCourse={listCourse} col={3} />
        //     </div>
        //     <div>

        //     </div>
        // </div>
        <div className="MnUser">
            <div className="MnUser__left">
                <div className="MnUser__left__header">
                    <div style={{ height: '30px', width: '30px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', padding: '3px', backgroundColor: '#303f9f', cursor: 'pointer' }}>
                        <div style={{ fontSize: '2rem' }}>+</div>
                    </div>
                    <div style={{ padding: '0px 30px', border: '1px solid #e0e0e0', borderRadius: '15px', lineHeight: '2rem' }}>
                        {listCourse.length} course was found
                    </div>
                    <div>

                    </div>
                </div>
                <input className="inputSearch" style={{ width: '100%', marginTop: '10px', height: '30px', border: 'none' }} placeholder="Enter course" onChange={(e) => handleOnChange(e)} />
                <div className="MnUser__left__listUser">
                    <ListCourse listCourse={listCourse} col={3} />
                </div>
            </div>
            <div className="MnUser__right">
                {/* {
                    isNew ? (<CreateUser />) : null
                } */}
            </div>
        </div>
    )
}

export default CourseManagement
