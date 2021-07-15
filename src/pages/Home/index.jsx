import React, { useState } from 'react';

import TextField, { Input } from '@material/react-text-field';
import MaterialIcon from '@material/react-material-icon';
import logo from '../../assets/logo.svg';
import restaurante from '../../assets/restaurante-fake.png';
import { Container, Search, Logo, Wrapper, Map, CarouselTitle, Carousel } from './styles';
import { Card } from '../../components';

const Home = () => {
  const [inputValue, setInputValues] = useState('');
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptiveHeight: true,
  };

  return (
    <Wrapper>
      <Container>
        <Search>
          <Logo src={logo} alt="Logo do site de busca" />
          <TextField
            label="Pesquisar Restaurantes"
            trailingIcon={<MaterialIcon role="button" icon="search" />}
            outlined>
            <Input value={inputValue} onChange={(e) => setInputValues(e.target.value)} />
          </TextField>
          <CarouselTitle>Na sua Área</CarouselTitle>
          <Carousel {...settings}>
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
            <Card photo={restaurante} title="nome do restaurante" />
          </Carousel>
        </Search>
      </Container>
      <Map />
    </Wrapper>
  );
};

export default Home;
