// Gallery.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchImages } from './imgSlice';
import ImgCart from './ImgCart';
import './imgList.css';

const ImgList = () => {
  const dispatch = useDispatch();
  const { data, status, error } = useSelector((state) => state.img);
console.log(data);
  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'failed') {
    return <p>Error: {error}</p>;
  }

  return (
    <div className="gallery">
      {data.products?.map((image) => (
        <ImgCart key={image.id} title={image.title} price={image.price} imageUrl={image.images[0]} />
      ))}
    </div>
  );
};

export default ImgList;
