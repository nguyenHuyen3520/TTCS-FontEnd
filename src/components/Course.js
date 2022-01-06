import React , { Fragment, useState } from 'react'
import AdminApi from '../api/AdminApi'
import ListCourse from './ListCourse';
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


const Course = () => {
    const [listCourse, setListCourse] = React.useState([]);
    const [listTypeCourse, setListTypeCourse] = React.useState([]);
    const [selected, setSelected] = React.useState('All')    
    React.useEffect(() => {
        const getData = async () => {
            const response = await AdminApi.getListCourse();
            setListCourse(response.data);
            const list = await AdminApi.getTypeCourses();
            const listCourseType = list.data.map((item) => item.nameType);
            listCourseType.unshift("All");
            setListTypeCourse(listCourseType);
            setSelected(listTypeCourse[0]);            
        }
        getData();
    }, []);

    React.useEffect(() => {
        const getData = async () => {
            console.log("===========================")
            const response = await AdminApi.getListCourse();            
            if(selected === 'All')  {
                setListCourse(response.data)
            } else{
                let filterCourse = response.data.filter((item, index)=> {
                    return item.typeCourse == selected;
                })
                setListCourse(filterCourse)
            }                   
        }
        getData();
    },[selected] )
    return (
        <div className="">
            <div className="mb-8 mt-5 flex justify-center">
                <div className="w-72">
                    typeCourse
                    <Listbox value={selected} onChange={setSelected}>
                        <div className="relative mt-1">
                            <Listbox.Button className="relative w-full py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-opacity-75 focus-visible:ring-white focus-visible:ring-offset-orange-300 focus-visible:ring-offset-2 focus-visible:border-indigo-500 sm:text-sm">
                                <span className="block truncate">{selected}</span>
                                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                    <SelectorIcon
                                        className="w-5 h-5 text-gray-400"
                                        aria-hidden="true"
                                    />
                                </span>
                            </Listbox.Button>
                            <Transition
                                as={Fragment}
                                leave="transition ease-in duration-100"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                                    {listTypeCourse.map((person, personIdx) => (
                                        <Listbox.Option
                                            key={personIdx}
                                            className={({ active }) =>
                                                `${active ? 'text-amber-900 bg-amber-100' : 'text-gray-900'} cursor-default select-none relative py-2 pl-10 pr-4`
                                            }
                                            value={person}
                                        >
                                            {({ selected, active }) => (
                                                <>
                                                    <span
                                                        className={`${selected ? 'font-medium' : 'font-normal'
                                                            } block truncate`}
                                                    >
                                                        {person}
                                                    </span>
                                                    {selected ? (
                                                        <span
                                                            className={`${active ? 'text-amber-600' : 'text-amber-600'} absolute inset-y-0 left-0 flex items-center pl-3`}
                                                        >
                                                            <CheckIcon className="w-5 h-5" aria-hidden="true" />
                                                        </span>
                                                    ) : null}
                                                </>
                                            )}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Transition>
                        </div>
                    </Listbox>
                </div>
            </div>
            <div className="flex justify-center font-bold text-xl mb-8 ">
                <div className="border-2 p-1 rounded-2xl pr-7 pl-7">
                    {listCourse.length} Course was found
                </div>
            </div>
            <ListCourse listCourse={listCourse} col={7} />
        </div>
    )
}

export default Course
