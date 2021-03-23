import React, {useRef} from 'react';
import {Button, Form} from "react-bootstrap";
import {FaCheckSquare, FaFacebookSquare, FaLinkedin, FaTwitter} from "react-icons/all";

const LoginForm = () => {
  const form = useRef(null);

  const submit = e => {
    const data = new FormData(form.current);
    if(data.get("username") !== 'michael'){
      e.preventDefault();
    }
  }

  return (
    <div>
      <div className={"d-flex align-items-stretch"}>
        <div className={"flex-grow-1 p-2"}>
          <h4 className={"text-uppercase mb-5 mt-4 font-weight-bold text-white"}>
            <span className={"login-select mr-3"}>LOG IN</span>
            <span className={"ml-3"}>Register</span>
          </h4>
          <Form action={"/addarticle"} onSubmit={submit} ref={form}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label className={"text-white"}>USERNAME</Form.Label>
              <Form.Control type="text" className={"form-email mb-3"} name={"username"}/>
              {/*<Form.Check type="checkbox" label="Keep me sign in" className={"text-white"} />*/}
              <FaCheckSquare className={"text-orange"}/><span className={"text-white"}>Keep me sign in</span>
              <Button className={"btn-orange form-submit mt-3"} type="submit">
                LOG IN
              </Button>
            </Form.Group>
          </Form>
        </div>
        <div className={"d-flex flex-column align-items-center text-white pt-5"}>
          <span className="vertical-line mt-5"></span>
          or
          <span className="vertical-line"></span>
        </div>
        <div className={"flex-grow-1 p-2"}>
          <h4 className={"text-uppercase mb-5 mt-4 text-white text-center"}>
            Login with
          </h4>
          <div>
            <Button className={"btn-facebook mt-3 p-2"} type="submit"><FaFacebookSquare/>FACEBOOK</Button>
            <Button className={"btn-linkedin mt-3 p-2"} type="submit"><FaLinkedin/>LINKEDIN</Button>
            <Button className={"btn-twitter mt-3 p-2"} type="submit"><FaTwitter/>TWITTER</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
