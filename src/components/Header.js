import React, {useState} from "react";
import {Navbar, Form, FormControl} from 'react-bootstrap';

function Header(props) {
  const [query, setQuery] = useState('');
  const {onSubmitSearch} = props;

  return (
    <Navbar variant="info" style={style.nav} className="d-flex justify-content-between">
      <Navbar.Brand href="/">
        <img 
          src="https://www.pinclipart.com/picdir/big/86-862588_mobi-food-logo-gif-clipart.png"
          alt="logo"
          width="70"
          height="70"
        />
        <span style={style.title}>Website Name</span>
      </Navbar.Brand>
      <Form 
        onSubmit={() => onSubmitSearch(query)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            onSubmitSearch(query);
          }}
        }
      >
        <span style={style.search}>Search</span>
        <FormControl value={query} onChange={e => setQuery(e.target.value)} type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
    </Navbar>
  );
}

export default Header;

var style = {
  nav: {
    backgroundColor: "#faa",
  },
  title: {
    fontSize: 18,
    color: '#000',
    marginLeft: 20,
  },
  search: {
    fontSize: 16,
    marginLeft: 10,
  }
}