import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as config from './../../config';
import { BsPersonCircle, BsFillTelephoneFill } from 'react-icons/bs';
import { MdEmail, MdAttachMoney } from 'react-icons/md';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { GiReceiveMoney } from 'react-icons/gi';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import cogoToast from 'cogo-toast'
import { Modal } from 'antd';
import './Customers.scss';

import './../../components/Modal/Modal.scss';
import 'antd/dist/antd.css';

function Customers() {

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isModalTransfer, setIsModalTransfer] = useState(false);
  const [customers, setCustomers] = useState([]);

  const [customerId, setCustomerId] = useState();
  const [image, setImage] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [currentBalance, setCurrentBalance] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  const [address, setAddress] = useState();
  const [email, setEmail] = useState();
  const [transfer, setTransfer] = useState();
  const [accountNumber, setAccountNumber] = useState();



  const showModal = () => {

    setIsModalVisible(true);

    setCustomerId('');
    setImage('');
    setFirstName('');
    setLastName('');
    setCurrentBalance('');
    setPhoneNumber('');
    setEmail('');
    setAddress('');
    setIsModalTransfer(true);
  };

  const getCustomers = () => {
    axios({
      method: 'get',
      url: config.API_LINK + 'customers/get_customers.php',
      headers: { "Content-Type": "form-data" }
    }).then(function (response) {
      setCustomers(response.data.data);
    });
  }

  useEffect(() => {
    getCustomers();
  }, []);

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const transferMoney = () => {
    let remaining = currentBalance - transfer;

    let data = new FormData();
    data.append('from_id', customerId);
    data.append('account_number', accountNumber);
    data.append('remaining', remaining);
    data.append('transfer_balance', transfer);
    console.log(transfer);

    axios({
      method: 'post',
      data: data,
      url: config.API_LINK + 'customers/transfer_money.php',
      headers: { "Content-Type": "form-data" }
    }).then(response => {
      console.log(transfer);
      setIsModalVisible(false);
      cogoToast.success(transfer + '$' + ' has been transferred ');
      getCustomers();
    })

  }


  const transferMoneyFunction = (customer_id,
    image,
    first_name,
    last_name,
    current_balance,
    email,
    phone_number,
    address) => {

    showModal();

    setCustomerId(customer_id);
    setImage(image);
    setFirstName(first_name);
    setLastName(last_name);
    setCurrentBalance(parseInt(current_balance));
    setEmail(email);
    setPhoneNumber(phone_number);
    setAddress(address);

    setIsModalTransfer(true);

  }




  return (

    <div id='customers'>

      <table>

        <thead>

          <tr>
            <th>
              <div className="img" style={{ backgroundImage: 'url(https://i.pinimg.com/564x/46/48/3b/46483b1f0c55ee6ecf9277666ba33378.jpg)' }}></div>
            </th>
            <th>Name</th>
            <th>Email</th>
            <th>Account Number</th>
            <th>Phone</th>
            <th>Adresse</th>
            <th>Balance</th>
            <th>
              <span></span>
            </th>
          </tr>

        </thead>

        <tbody>

          {
            customers.map((customer, i) => {
              return (

                <tr key={i}>
                  <td>
                    <div className="img"
                      style={{ backgroundImage: `url(${customer.image})` }}
                    ></div>


                  </td>
                  <td>{customer.first_name} {customer.last_name}</td>
                  <td>{customer.email}</td>
                  <td>{customer.account_number}</td>

                  <td>{customer.phone_number}</td>
                  <td>{customer.address}</td>
                  <td>{customer.current_balance}</td>

                  <td className="button-container">

                    <button className="btnedit" onClick={() => transferMoneyFunction(customer.id,
                      customer.image,
                      customer.first_name,
                      customer.last_name,
                      customer.current_balance,
                      customer.email,
                      customer.phone_number,
                      customer.address
                    )}>Send money</button>
                  </td>
                </tr>


              )
            })
          }

        </tbody>

      </table>


      <Modal
        className="modalStyle"
        visible={isModalVisible}
        closable={false}
        footer={null}>


        <div className="modal-container">

          <div className="details-container">

            <div className='details'>
              <BsPersonCircle />
              <p> {firstName} {lastName}</p>
            </div>

            <div className='details'>
              <BsFillTelephoneFill />
              <p> {phoneNumber}</p>
            </div>

          </div>

          <div className="details-container">
            <div className='details'>
              <MdEmail />
              <p> {email}</p>
            </div>

            <div className='details'>
              <FaMapMarkerAlt />
              <p> {address} </p>
            </div>


          </div>

          <div className="details-container">


            <div className='details'>
              <p className='c'>Current Balance :</p>
              <p>{currentBalance}</p>
            </div>



          </div>




          <div className="transfer">
            <input type="text" placeholder="account Number	" onChange={(e) => setAccountNumber(e.target.value)} />
            <input type="text" placeholder="amount" onChange={(e) => setTransfer(parseInt(e.target.value))} />
          </div>

          <div className="btn-container ">

            <button className="button-close" onClick={() => handleCancel()}>Close</button>
            {

              isModalTransfer
              && <button className="button-act" onClick={() => transferMoney()} >Send money</button>

            }
          </div >

        </div >

      </Modal >

    </div >

  )
}

export default Customers; 