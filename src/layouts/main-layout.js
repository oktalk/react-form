import React from 'react';
import FormGroup from '../components/form-group';
import '../styles/main-layout.css';

const MainLayout = () => {
  return (
    <div className="main-layout">
      <FormGroup name="Foo" />
      <FormGroup name="Bar" />
      </div>
  );
};

export default MainLayout;
