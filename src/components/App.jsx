import React from 'react';
// import { nanoid } from 'nanoid';
// import Notiflix from 'notiflix';
// глобальные стили
import GlobalStyles from './GlobalStyles';
// импорт функции разметки
import Section from './Section/Section';
import { Markup } from './App.styled';

export class App extends React.Component {
  state = {};

  render() {
    return (
      <Section>
        <GlobalStyles />
        <Markup></Markup>
      </Section>
    );
  }
}
