import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <div className='footer text-white pt-4'>
            <div className='container'>
                <div className='d-flex justify-content-around row text-center'>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <h5>About Company</h5>
                        <ul style={{ listStyle: "none" }} className='mt-3'>
                            <li>Windeep Finance is here at your quick and easy service for shopping.</li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <h5 className=''>Contact Information</h5>
                        <ul style={{ listStyle: "none" }} className='mt-3'>
                            <li>Email: windeepfoundation@gmail.com</li>
                            <li>Phone: +91 9823230290</li>
                            <li>PUNE, INDIA</li>
                        </ul>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <h5>Information</h5>
                        <ul style={{ listStyle: "none" }} className='mt-3'>
                            <li><Link to='/terms-and-conditions'>Terms and Conditions</Link></li>
                            <li><Link to='/privacy-policy'>Privacy Policy</Link></li>

                            <li><a href="https://maps.google.com/?cid=3558002934033666227&entry=gps" target="_blank" rel="noopener noreferrer">Locate Us</a></li>
                        </ul>
                    </div>
                </div>
                <div className='text-white text-center'>© 2024 Windeep Finance All rights reserved | Designed By <span className='font-weight-bold'>Samiksha Kad</span></div>
            </div>
        </div>
    );
}
