import Link from "next/link";
import { Icon } from "@iconify/react";

export const Footer = ({contactLinks}) => {
    return(
        <div id="contact" className="d-flex flex-column bg-white text-center my-2 py-2">
                <h4 >Want to connect? Reach out to me</h4>
                <div className="d-flex flex-row justify-content-center">
                    {contactLinks.map((value, idx) => {
                        return(
                            <Link
                                key={idx}
                                href={value.link}
                                className={"my-3 mx-2"}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <Icon 
                                    icon={value.iconName}
                                    width="3em"
                                    height={"3em"}
                                />  
                            </Link>
                        )
                    })}
                </div>
                <div className="container text-muted">
                    <small>&copy; Copyright {new Date().getFullYear()} </small>
                </div>
        </div>
    )
}