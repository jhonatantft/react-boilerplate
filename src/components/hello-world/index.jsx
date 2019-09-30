import React from 'react';
import PropTypes from 'prop-types';
import style from './hello-world.css';
import main from './main.scss';

const HelloWorld = ({ title }) => (
  <div className={style['hello-world']}>
    {title}
    <div className={main.text}>
      This is a pink text made with SASS
      <div className={`${main.color} ${main.size}`}>And here blue and bigger</div>
    </div>
  </div>
);

HelloWorld.propTypes = {
  title: PropTypes.string,
};

export default HelloWorld;
