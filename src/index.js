import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { App } from "./components/app";

import "./styles.css";
// import logoImageSrc from './images/ReactLogo.png';
// import { ReactComponent as Logo }  from './images/logo.svg';

// const AppList = () => {
//     const items = ['Мой первый элемент', 'Мой второй элемент', 'Мой третий элемент']
//     const firstItem = <li>ываываыва</li>;
//     const isAuth = true;
//     return (
//         <ul>
//             {items.map((item, index) => {
//                 return <li key={index}>{item}</li>
//             })}
//         </ul>
//     )

// }

// const AppInput = ({placeholder, label}) => {
//     return (
//         <label className="label">
//             {label}
//             <input placeholder={placeholder} type="password" />
//         </label>

//     )
// }

// const AppHeader = ({title, children}) => { //undefined
//     return (
//         <div>
//             {children}
//             {title && <h1 className="header-title"><span>{title}</span></h1>}
//         </div>
//     )
// }

// const App = () => {
//     return (
//         <>
//             <AppHeader title="Привет мир!">
//             <p>Какой-то текст</p>
//             <p>Какой-то текст</p>
//             <p>Какой-то текст</p>
//             <p>Какой-то текст</p>
//             <p>Какой-то текст</p>
//                 <img className="image" src={logoImageSrc}/>
//             </AppHeader>
//             {/* <AppHeader title="Привет мир!" /> */}
//             <AppList />
//             {/* <AppHeader title="Новый заголовок!" /> */}

//             <AppInput placeholder="Введите ваше имя" label="Имя" />
//             <AppInput placeholder="Введите ваш email" label="email" />
//         </>
//     )
// }

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
