import React, { useState, useEffect } from 'react'


const HomePage :React.FC= () => {
  
  return (
    <div className="bg-gray-800 text-white p-4">
      <h1 className="text-4xl font-bold">Chào mừng đến với Tailwind</h1>
      <p className="my-4 ">
        Tailwind là một thư viện CSS giúp thiết kế nhanh và dễ dàng cho các trang web của bạn.
      </p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Tìm hiểu thêm
      </button>
    </div>
  );
};


export default HomePage

