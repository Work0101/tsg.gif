import logoPng from '../../assets/our_img/Orange logo background White.png'
import {AiFillInstagram, AiOutlineTwitter} from "react-icons/ai";
import React from "react";

const Footer = () => {
    return (
        <footer id="footer" className="position-relative bg-quaternary mt-0 border-top-0">
            <div className="container container-xl-custom pt-4 pb-3">
                <div className="row pt-1">
                    <div className="col-md-6 col-lg-2 mt-4 mt-lg-0 d-flex align-items-center">
                        <div>
                            <img src={logoPng} width={"130px"}/>
                            <div className="col mt-4 ">
                                <p className="text-left text-color-grey text-1 mb-0">Porto © 2022. All Rights
                                    Reserved.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-2 mt-4 mt-lg-0">
                        <h3 className="mb-3 text-4-5 text-color-light">Services</h3>
                        <ul className="list list-unstyled  font-weight-medium">
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Residential Solar
                                    Panels
                                </div>
                            </li>
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Commercial Solar
                                    Panels
                                </div>
                            </li>
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Energy Stations</div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-2 mt-4 mt-lg-0">
                        <h3 className="mb-3 text-4-5 text-color-light">Services</h3>
                        <ul className="list list-unstyled  font-weight-medium">
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Residential Solar
                                    Panels
                                </div>
                            </li>
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Commercial Solar
                                    Panels
                                </div>
                            </li>
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Energy Stations</div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-2 mt-4 mt-lg-0">
                        <h3 className="mb-3 text-4-5 text-color-light">Services</h3>
                        <ul className="list list-unstyled  font-weight-medium">
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Residential Solar
                                    Panels
                                </div>
                            </li>
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Commercial Solar
                                    Panels
                                </div>
                            </li>
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Energy Stations</div>
                            </li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-2 mt-4 mt-lg-0">
                        <h3 className="mb-3 text-4-5 text-color-light">Services</h3>
                        <ul className="list list-unstyled  font-weight-medium">
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Residential Solar
                                    Panels
                                </div>
                            </li>
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Commercial Solar
                                    Panels
                                </div>
                            </li>
                            <li>
                                <div className="text-color-grey text-color-hover-primary">Energy Stations</div>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-6 col-lg-2 mt-4 mt-lg-0">
                        <h3 className="mb-3 text-4-5 text-color-light">Contact US</h3>
                        <ul className="list list-unstyled  font-weight-medium ">

                            <a href={"https://www.instagram.com/"}>
                                <AiOutlineTwitter size={"36px"} color={"#EEEEEE"}/>
                            </a>
                            <a href={"https://twitter.com/"}>
                                <AiFillInstagram size={"36px"} color={"#EEEEEE"}/>
                            </a>
                        </ul>
                    </div>
                </div>
            </div>

        </footer>

    )
}

export default Footer