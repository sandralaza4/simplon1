import React from 'react';
import { MDBFooter, MDBBtn, MDBIcon } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="Blue" id="footer">
            <div className="row">
                <div className="col-md-6">
                <center><MDBBtn outline color="blue" tag="a" href="">sandra.laza4@gmail.com</MDBBtn></center>
                </div>
                <div className="col-md-6">
                    <center><MDBBtn>RAKOTONDRATSIMA Lazanirina S.</MDBBtn></center>
                </div>
            </div>
        </MDBFooter>
    );
}

export default Footer;