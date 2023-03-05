import React from 'react';

function Filter(props) {
  const { title, rate, onTitleChange, onRateChange } = props;

  return (
    <div className="flex justify-between w-1/2 mx-auto my-4">
    <input className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2" type="text" placeholder="Filter by Title" value={title} onChange={onTitleChange} />
    <select className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline w-1/2 ml-4" value={rate} onChange={onRateChange}>
      <option value="">Filter by Rating</option>
      <option value="1">1 star</option>
      <option value="2">2 stars</option>
      <option value="3">3 stars</option>
      <option value="4">4 stars</option>
      <option value="5">5 stars</option>
    </select>
  </div>
  );
}

export default Filter;
