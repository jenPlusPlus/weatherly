import React from 'react';
import Search from './Search';
import '../CSS/styles.css'


export default function Header() {
  return (
    <header className="header">
      <h1>Weathrly</h1>
      <Search />
    </header>
  );
}
