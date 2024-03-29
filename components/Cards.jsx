import { Card, Button } from "react-bootstrap"
import Link from "next/link"
import { Icon } from "@iconify/react";

export const Cards = ({title, desc, icons}) => {
    return (
        <Card
            className={"p-2 m-4"}
            style={{ width: "20rem" }}
            >
            <Card.Body>
                <Card.Title className="text-primary fw-bold">{title}</Card.Title>
                <Card.Text className="h6 ">
                    {desc}
                </Card.Text>
                <div className="text-end" >
                    {icons &&
                        icons.map((value, idx) => {
                            if(value.isLink) {
                                return(
                                    <a
                                        key={idx}
                                        href={ value.link}
                                        className={"mx-1"}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        <Icon 
                                            icon={value.name}
                                            width="2em"
                                            height={"3em"}
                                        />  
                                    </a>
                                )
                            }
                            else {
                                return (
                                    <Icon 
                                        key={idx}
                                        icon={value.name}
                                        width="2em"
                                        height={"3em"}                                        
                                    />
                                )
                            }
                            
                        })
                    }
                </div>   
            </Card.Body> 
             
        </Card>
    )
}