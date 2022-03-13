import { Table, Button, Modal, Form, Container } from "react-bootstrap";
import React, { useState, lazy, Suspense } from "react";
import { connect } from "react-redux";
import "./Cart.scss";


function Cart(props) {
    return ( 
      <>
      <Table responsive> 
      <thead>
        <tr>  {/* tr: 가로행   td,th: 세로행 */}
          <th>사진</th>
          <th>상품명</th>
          <th>수량</th>
          <th>변경</th>
        </tr>
        </thead>
        <tbody>
        {
        props.state.map((a,i)=>{
            return (
                <tr key={i}>
                    <td >{ <img src={"/images/hochony" + (i + 115) + ".jpg"} width="75px"/> }</td>
                    <td >{ a.name }</td>
                    <td >{ a.quan }</td>
                    <td><button class="buttonOrange" role="button" onClick={()=>{props.dispatch({ type : '수량증가', payload : a.id })}}>+1</button>
                    <button class="buttonGreen" role="button" onClick={()=>{props.dispatch({ type : '수량감소', payload : a.id })}}>-1</button></td>
                </tr>
                )
            })
        }
        </tbody>
      </Table>
      <주문하기></주문하기>
    </>
   
    )
}
function 주문하기() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <button class="buttonBlue" role="button" onClick={handleShow}>
          주문하기
        </button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>주소랑 번호 적으셈</Modal.Title>
          </Modal.Header>
    <Form>
        <Form.Group className="p-3" controlId="formGridAddress1">
        <Form.Label>주소</Form.Label>
        <Form.Control placeholder="호천로1번길 83 106동 301호" />
        <Form.Label className="mt-3">전화번호</Form.Label>
        <Form.Control placeholder="0101234567" />
        </Form.Group>
    </Form>
        <Modal.Body>호천이도 주소는 알아야 새벽배송을 가지;;😅
        </Modal.Body>
          <Modal.Footer>
            <button class="buttonGray" role="button" onClick={handleClose}>
              닫기
            </button>
            <button class="buttonBlue" role="button" onClick={handleClose}>
              배송
            </button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

function state를props화 (state){ //redux store 데이터 가져와서 props 로 변환해주는 함수
    return{
        state : state
    }
}
export default connect(state를props화)(Cart);