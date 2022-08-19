import { MyComponent } from 'components/products';
import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

render(
  <div>
    <MyComponent></MyComponent>
  </div>,
  document.getElementById('root'),
);
