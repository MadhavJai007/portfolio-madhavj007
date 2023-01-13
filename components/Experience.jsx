import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Icon } from '@iconify/react';

export const Experience = ({title, career}) => {
    return(
        <div id="experience" className="bg-primary py-5 px-2">
            <div className="container mt-2 pt-4 px-5">
            <h1 className="text-light fw-bold display-3 mb-4">{title}</h1>
            <VerticalTimeline layout='2-columns'>
                {career.map((value, idx) => {
                    return(
                        <VerticalTimelineElement
                        key={idx}
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: (value.isCurrent ? "#fd4d62" : "#FFF"), color: (value.isCurrent ? "#FFF" : "#000") }}
                            contentArrowStyle={{ borderRight: (value.isCurrent ? '7px solid  #fd4d62' : '7px solid  #FFF') }}
                            date={value.time}
                            dateClassName={"experienceDate"}
                            iconStyle={{ background: '#fd4d62', color: '#fff' }}
                            icon={<Icon 
                                icon={"mdi:briefcase"}
                                width="2em"
                                height={"3em"}                                        
                            />}
                        >
                            <h3 className="vertical-timeline-element-title">{value.position} @ {value.place}</h3>
                            <h4 className="vertical-timeline-element-subtitle">{value.location}</h4>
                            <p>{value.skills}</p>
                        </VerticalTimelineElement>
                    )
                })}
            </VerticalTimeline>
            
            {/* <VerticalTimeline layout='2-columns'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Icon 
                        icon={"mdi:briefcase"}
                        width="2em"
                        height={"3em"}                                        
                    />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    // className="vertical-timeline-element--work"
                    // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2011 - present"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Icon 
                        icon={"mdi:briefcase"}
                        width="2em"
                        height={"3em"}                                        
                    />}
                >
                    <h3 className="vertical-timeline-element-title">Creative Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2010 - 2011"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Icon 
                        icon={"mdi:briefcase"}
                        width="2em"
                        height={"3em"}                                        
                    />}
                >
                    <h3 className="vertical-timeline-element-title">Art Director</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2008 - 2010"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Icon 
                        icon={"mdi:briefcase"}
                        width="2em"
                        height={"3em"}                                        
                    />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2006 - 2008"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<Icon 
                        icon={"mdi:briefcase"}
                        width="2em"
                        height={"3em"}                                        
                    />}
                >
                    <h3 className="vertical-timeline-element-title">Web Designer</h3>
                    <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                    <p>
                    User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="April 2013"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<Icon 
                        icon={"mdi:briefcase"}
                        width="2em"
                        height={"3em"}                                        
                    />}
                >
                    <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                    <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                    <p>
                    Strategy, Social Media
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="November 2012"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<Icon 
                        icon={"mdi:briefcase"}
                        width="2em"
                        height={"3em"}                                        
                    />}
                >
                    <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                    <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                    <p>
                    Creative Direction, User Experience, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2002 - 2006"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<Icon 
                        icon={"mdi:briefcase"}
                        width="2em"
                        height={"3em"}                                        
                    />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                    <p>
                    Creative Direction, Visual Design
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<Icon 
                        icon={"mdi:briefcase"}
                        width="2em"
                        height={"3em"}                                        
                    />}
                />
            </VerticalTimeline> */}
            </div>
        </div>
    )
}
