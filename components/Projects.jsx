import { Cards } from "./Cards"

export const Projects = ({title, cards}) => {
    return(
        <div id="projects" className="bg-altlight p-5">
            <div className="container">
                <h1 className="text-primary fw-bold">
                   {title}
                </h1>
                <div className="d-flex flex-wrap justify-content-center" >
                    {cards.map((value, idx) => {
                        return(
                        <Cards 
                            key={idx}
                            title={value.title}
                            desc={value.desc}
                            icons={value.icons}
                        />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}