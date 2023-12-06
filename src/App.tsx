import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div className="App-column">
          
          <b>Мои цели</b>
            <ul className='list'>
              <li>Научиться фронтенд-разработке на React</li>
              <li>Понимать как устроен, интерпретируется и исполняется JavaScript</li>
              <li>Научиться создавать сложные интерфейсы</li>
              <li>Научиться писать производительный и понятный код</li>
              <li>Научиться архитектурам и шаблонам</li>
            </ul>
            
            <b>Хочу понимать следующие технологии</b>
            <ul className='list'>
              <li>JavaScript/TypeScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Docker</li>
            </ul>

            <b>"Владею" (пробовал) следующие технологии</b>
            <ul className='list'>
              <li>PHP</li>
              <li>JS (JQuery)</li>
              <li>SQL</li>
              <li>NodeJS (Express, NestJS)</li>
              <li>Dart(Fuller)</li>
              <li>Swift</li>
              <li>Docker</li>
            </ul>

            <b>О себе</b>
            <p>Меня зовут Семен. Работаю программистом в университете</p>
        </div>
          
      </header>
    </div>
  );
}

export default App;
