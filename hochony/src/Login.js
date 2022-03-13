import { Table, Button, Modal, Form, Container } from "react-bootstrap";
import React, { useState, lazy, Suspense } from "react";
import { connect } from "react-redux";
import "./Cart.scss";


function Login(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <><Container>
        <img src={"/images/hochonylogin.jpg"} className="mt-3" width="94%"/>
        <div class="product-box">
            어이, 네녀석이 오늘 온다는 신입이냐
        </div>
        <button class="buttonBlue" style={{marginTop:10}} role="button" onClick={handleShow}>
          회원가입
        </button>
        </Container>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>😼당신도 이제 호집사야😼</Modal.Title>
          </Modal.Header>
          <Form>
            <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Label>아이디</Form.Label>
                <Form.Control type="text" placeholder="영+숫 8자이상" name="id" />
                <Form.Text className="text-muted">
                    호집사의 개인정보는 호천이와도 공유하지 않습니다🤫
                </Form.Text>
            </Form.Group>

            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>비밀번호</Form.Label>
                <Form.Control type="password" placeholder="영+숫 8자이상" name="pw"/>
            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Label>비밀번호확인</Form.Label>
                <Form.Control type="password" placeholder="영+숫 8자이상" />
            </Form.Group>
            <Form.Group className="m-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="호천아 날 기억해줘!" />
            </Form.Group>
            </Form>
          <Modal.Footer>
            <button class="buttonGray" role="button" onClick={handleClose}>
              닫기
            </button>
            <button class="buttonBlue" role="button" type="submit" onClick={handleClose}>
              가입
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
export default connect(state를props화)(Login);