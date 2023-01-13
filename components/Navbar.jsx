import { useState, useEffect } from "react";
import {Container, Navbar, Nav, Button} from "react-bootstrap"
import Link from 'next/link'

import navbarStyles from  '../styles/navbar.module.css'

const NavBar = () => {
    const [expand, updateExpanded] = useState(false);
    const [navColour, updateNavbar] = useState(false);



    return(

        <Navbar expand="md" expanded={expand}  style={ {width: '100%'} }>
            <Container  >
                <Navbar.Brand className={""}>
                    <Link className={navbarStyles.navLink2} href={"/"}>
                         MJ
                     </Link> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" className={navbarStyles.navbarToggler}
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
                            <div className={navbarStyles.navLink}>
                                <Link className={navbarStyles.navLink2} href={"#projects"}>
                                    Projects
                                </Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className={navbarStyles.navLink}>
                                <Link className={navbarStyles.navLink2} href={"/"}>
                                    Resume
                                </Link>
                            </div>
                        </Nav.Item>
                        <Nav.Item>
                            <div className={navbarStyles.navLink}>
                                <Link className={navbarStyles.navLink2} href={"/"}>
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
        //     className={navColour ? navbarStyles.sticky : navbarStyles.navbar}
        // >
        //     <Container>
        //         <Navbar.Brand className={`d-flex ${navbarStyles.navbarBrand}` }>
        //             <Link href={"/"}>
        //                 MJ
        //             </Link>
        //         </Navbar.Brand>
        //         <Navbar.Toggle
        //             aria-controls='navbarScroll'
        //             onClick={() => {
        //                 updateExpanded(expand ? false : "expanded");
        //             }}
        //             className={navbarStyles.navbarToggler}
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