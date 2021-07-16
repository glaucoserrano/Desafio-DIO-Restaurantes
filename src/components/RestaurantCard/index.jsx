import React, { useState } from 'react';
import ReactStars from 'react-rating-stars-component';
import { Address, Restaurant, RestaurantInfo, RestaurantPhoto, Title } from './styles';
import restaurante from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

const RestaurantCard = ({ restaurant, onClick }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <Restaurant onClick={onClick}>
      <RestaurantInfo>
        <Title>{restaurant.name}</Title>
        <ReactStars
          count={5}
          isHalf
          activeColor="#e7711c"
          edit={false}
          value={restaurant.rating}
          size={20}
        />
        <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
      </RestaurantInfo>
      <RestaurantPhoto
        imageLoaded={imageLoaded}
        src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurante}
        alt={restaurant.name}
        onLoad={() => setImageLoaded(true)}
      />
      {!imageLoaded && <Skeleton width="100px" heigth="100px" />}
    </Restaurant>
  );
};

export default RestaurantCard;
