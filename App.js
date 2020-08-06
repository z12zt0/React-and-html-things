import React, {useState, useEffect} from 'react';
import './App.css';
import QuoteApp from './QuoteApp.js';
//import * as switcher from './switcher.js'


function App() {
  const token = 'b7b00671bcb0db5df502204c2cb6ef3dd7400d90';
  let url = getAnUrl();
  const [state, setState] = useState(['','', url]);

  useEffect(() => {
    fetching();
}, []); 

function fetching() {
  url = getAnUrl();
  fetch(url, {
      headers: {
          Authorization: `Token ${token}`
      }
  })
  .then(response => response.json())
  .then(result => {
      setState([result.results[0].quote, result.results[0].author, url])
  })
  .catch(error => console.log(error))
}

function getAnUrl() {
  let randomNumber = Math.floor(Math.random()*56460 );
  return `https://api.paperquotes.com/quotes/?limit=5&offset=${randomNumber}`;
}

  return (
    <div id='main' className='main light'>
      {/* --- for the future ---
       <Navbar>
        <NavItem icon='⛛' > 
          <DropdownMenu />
        </NavItem>
      </Navbar> */}
      <h1 className="main-text">Random Quote Machine</h1>
      
      <div id={'App'}>
        < QuoteApp state={state} fetching={fetching} url={getAnUrl()}/>
      </div>
    </div>
  )
}
// -- Work is in progress --
// function Navbar(props) {
//   return (
//     <nav className='navbar'>
//       <ul className='navbar-nav'>{props.children}</ul>
//     </nav>
//   )
// }

// function NavItem(props) {

//   const [open, setOpen] = useState(false);

//   return (
//     <li className='nav-item'>
//       <a href='#' className='icon-button' onClick={() => setOpen(!open)}>
//         {props.icon}
//       </a>

//       {open && props.children}
//     </li>
//   )
// }

// function DropdownMenu() {

//   function DropdownItem(props) {
//     return (
//         <a href="#" id={props.id} className="menu-item">
//           <span className="icon-button">{props.leftIcon}</span>
//           {props.children}
//         </a>
//     )
//   }
//   let div = document.getElementById('main');
//   let light = document.getElementById('toLight');
//   let dark = document.getElementById('toDark');

//   light.onclick = () => {
//     if(div.classList.contains('dark')) {
//         div.classList.replace('dark', 'light');
//     }
// }

//   dark.onclick = () => {
//     if(div.classList.contains('light')) {
//         div.classList.replace('light', 'dark');
//     }
//   }

//   return (
//     <div className="dropdown">
//       <DropdownItem  id='toLight' leftIcon={"🔆"}>  Light</DropdownItem>
//       <DropdownItem  id='toDark' leftIcon={"🌙"} >  Dark</DropdownItem>
//     </div>
//   )
// }

export default App;
