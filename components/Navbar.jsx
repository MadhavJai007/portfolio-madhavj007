import { useState, useEffect } from "react";
import {Container, Navbar, Nav, Button} from "react-bootstrap"
import Link from 'next/link'
import { resumeLink } from "../config/config";
// import  from  '../styles/navbar.module.css'

const NavBar = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);

    return(

        <Navbar expand="md" expanded={expand}  style={ {width: '100%'} }>
            <Container  >
                <Navbar.Brand className={""}>
                    <Link className={ "navLink2"} href={"/"}>
                         MJ
                     </Link> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className={ "navbarToggler"}
                     onClick={() => {
                        updateExpanded(expand ? false : "expanded");
                      }}
                >
                    <span/>
                    <span/>
                    <span/>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className={"ms-auto my-2 my-lg-0"}
                        // style={{ maxHeight: '100px'}}
                        navbarScroll
                    >
                        <Nav.Item>
                            <div className={ "navLink"}>
                                <Link className={ "navLink2"} href={"#projects"}>
                                    Projects
                                </Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className={ "navLink"}>
                                <Link className={ "navLink2"} target="_blank" rel="noreferrer" href={resumeLink}>
                                    Resume
                                </Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className={ "navLink"}>
                                <Link className={ "navLink2"} href={"#experience"}>
                                    Experience
                                </Link>
                            </div>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <Navbar
        //     expanded={expand}
        //     fixed={"top"}
        //     expand="md"
        //     className={navColour ?  sticky :  navbar}
        // >
        //     <Container>
        //         <Navbar.Brand className={`d-flex ${ navbarBrand}` }>
        //             <Link href={"/"}>
        //                 MJ
        //             </Link>
        //         </Navbar.Brand>
        //         <Navbar.Toggle
        //             aria-controls='navbarScroll'
        //             onClick={() => {
        //                 updateExpanded(expand ? false : "expanded");
        //             }}
        //             className={ navbarToggler}
        //         >
        //             <span/>
        //             <span/>
        //             <span/>
        //         </Navbar.Toggle>
        //         <Navbar.Collapse id="navbarScroll">
        //             <Nav className={"ms-auto"} >
        //                 <Nav.Item>
        //                     <div>
        //                         <Link href={"/"} onClick={() => updateExpanded(false)}>
        //                             Projects
        //                         </Link>
        //                     </div>
        //                 </Nav.Item>
                        
        //                 <Nav.Item>
        //                     <div>
        //                         <Link href={"/"} onClick={() => updateExpanded(false)}>
        //                             Resume
        //                         </Link>
        //                     </div>
        //                 </Nav.Item>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    )

}

export default NavBar;