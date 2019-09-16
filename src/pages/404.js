import PropTypes from "prop-types";
import React from "react";
import theme from "../theme/theme.yaml";
import Article from "../components/Article";
import Headline from "../components/Article/Headline";
import { graphql } from 'gatsby'

const NotFoundPage = props => {

  return (
    <Article theme={theme}>
      <header>
        <Headline title="404" theme={theme} />
      </header>
      <img src=images/gothic.jpg allign=center>
      <p>Nic tu nie ma, niczego tu nie znajdziesz.</p>
    </Article>
  );
};

export default NotFoundPage;
