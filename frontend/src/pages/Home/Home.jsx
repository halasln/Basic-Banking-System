import React from 'react';
import './Home.scss';
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate();

  function handleClick() {
    navigate('/viewcustomers');
  }

  return (

    <div id='home'>

      <div className='left-section'>

        <h1>Welcome to ,</h1>
        <h1> Spark Foundation Bank </h1>

        <p>Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Cras ante mauris, hendrerit ut scelerisque hendrerit,
          eleifend eget tortor. Nunc venenatis orci eu
          eros sollicitudin, nec volutpat erat gravida.
          Duis egestas ornare dui at fringilla. Maecenas
          semper dictum commodo. Vivamus rhoncus est
          in dui bibendum bibendum. </p>

        <button type="button" onClick={handleClick} >View Customer</button>

      </div>

      <img src="https://media.istockphoto.com/vectors/bank-modern-thin-line-design-style-vector-illustration-vector-id1031507604?k=20&m=1031507604&s=612x612&w=0&h=OnkDaDwsnKLzTC3m9g3h5Sj3jtMNjYd_GEdxD48Cg0A=" alt="" />

    </div>

  )
}

export default Home;


