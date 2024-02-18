import React, { useState } from "react";
import { IoClose } from "react-icons/io5";

const Model = ({ setIsOpenModel, indexNumbers, setIndexNumbers, calendar }) => {
  const formObj = { title: "", email: "" }
  const [formData, setFormData] = useState(formObj);
  const generateColor = ()=>{
    const hexColors = [0,1,2,3,4,5,6,7,8,9, "a", "b", "c", "d", "e", "f"]
    let tempColor = "#"
    for (let index = 0; index < 6; index++) {
     const randomNumber = Math.floor((Math.random() * hexColors.length))
     tempColor += hexColors[randomNumber]
      
    }
    return tempColor
  }
  const handleSubmit = (e) => {
    e.preventDefault();
   const color = generateColor()
    const calendarTemp = [...calendar];
    const copiedObject = [...calendarTemp[indexNumbers?.outerIndex]];
    const data = {...formData, color}
    copiedObject[indexNumbers?.innerIndex]?.event.push(data);
    calendarTemp[indexNumbers?.outerIndex] = copiedObject;
    setFormData(formObj)
    setIsOpenModel(false)
  };
  const handleChage = (e) => {
    const { value, name } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <div className="w-10/12 bg-white h-[80vh]  border rounded-lg shadow-lg overflow-hidden">
      <div className="flex w-full justify-between items-center px-4 py-2 border-b">
        <h2 className="text-xl">Create events</h2>
        <button
          onClick={() => {
            setIsOpenModel(false);
            setIndexNumbers({});
          }}
        >
          <IoClose size={25} />
        </button>
      </div>
      <div className="grid grid-cols-[200px,auto] h-full">
        <div className="border-r p-4">
          <button className="w-full bg-gray-100 py-2 font-semibold rounded-sm">
            Meet
          </button>
        </div>
        <div className="w-1/2 mx-auto mt-3">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="title">Title</label> <br />
              <input
                className="w-full border p-2 rounded-md outline-none focus:border-gray-300"
                type="text"
                id="title"
                placeholder="Enter title"
                name="title"
                value={formData.title}
                onChange={handleChage}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="email">Email</label> <br />
              <input
                className="w-full border p-2 rounded-md outline-none focus:border-gray-300"
                type="text"
                id="email"
                placeholder="Enter email"
                name="email"
                value={formData.email}
                onChange={handleChage}
              />
            </div>
            <button className="bg-blue-400 px-4 py-2 rounded-md mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Model;
