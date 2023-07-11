import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Header from "../components/Common/Header";
import Buttons from "../components/ItemList/Buttons";
import SearchBar from "../components/ItemList/SearchBar";
import List from "../components/ItemList/List";
import Footer from "./../components/ItemList/Footer";

const ItemListPage = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(true);
  const onToggle = () => {
    setFilter(prev => !prev);
  };
  return (
    <Wrapper>
      <Header />
      <Buttons navigate={navigate} />
      <SearchBar onToggle={onToggle} filter={filter} />
      <List />
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default ItemListPage;
