import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Landingpage from './Landingpage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemoryRouter><Landingpage/></MemoryRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
