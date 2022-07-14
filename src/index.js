import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { transformations } from './data';
import Transformation from './transformation';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TransformationList />
  </React.StrictMode>
);

function TransformationList() {
  return (
    <section className='transformationlist'>
      {transformations.map((transformation) => {
        return (
          <Transformation
            key={transformation.id}
            transformation={transformation}
          />
        );
      })}
    </section>
  );
}
