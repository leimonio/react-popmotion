import React from 'react';
import Example1 from './examples/Example1';
import Example2 from './examples/Example2';

// Render the main component into the dom
React.render(<Example1 />, document.getElementById('example1'));
React.render(<Example2 />, document.getElementById('example2'));
