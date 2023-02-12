const siteTitle = "Portfolio: Madhav Jaisankar"
export const resumeLink = "https://docs.google.com/document/d/1E4TdnjVs5oVecf597O_JbVMOTpVObCll/edit?usp=sharing&ouid=107318243930186771380&rtpof=true&sd=true"

export const pageHead = {
    siteTitle: siteTitle,
    metatags: {
        description: 'My portfolio',
        imageUrl: `https://og-image.vercel.app/${encodeURI( siteTitle, )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`
    }
}

export const intro = {
    title: "Hello, I'm Madhav",
    desc: "Full Stack React.js and Mobile Application developer",
    buttons: [
        {
          title: "Connect",
          link: "#contact",
          isPrimary: true,
        },
        {
          title: "Resume",
          link: resumeLink,
          isPrimary: false,
        },
      ]
}

export const about = {
    title: "A little about me...",
	desc: [
		"I'm a software developer with experience developing Full Stack web applications with React.js. I've also had experience in mobile app development projects involving Android and iOS in an agile development environment.",
        // "As a recent graduate, my goal is to use my newfound knowledge, experience and curiosity to learn new tech so I can implement them in my future personal projects.",
	],
}

export const skills = {
    title: 'Things I do',
    cards: [
        {
            title: "Full stack development",
            desc: "I create Full stack SPAs and REST APIs using React.js and AWS.",
            icons: [
                {
                    name: "logos:react",
                    isLink: false,
                    link: ""
                }
            ]
        },
        {
            title: "Mobile app development",
            desc: "I create Mobile Apps for both Android and iOS with Kotlin and SwiftUI.",
            icons: [
                {
                    name: "material-symbols:android",
                    isLink: false,
                    link: ""
                },
                {
                    name: "vscode-icons:file-type-swift",
                    isLink: false,
                    link: ""
                },
            ]
        },
    ]
}

export const projects = {
    title: 'Projects',
    cards: [
        // {
        //     title: "Rpoject",
        //     desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
        //     icons: [
        //         {
        //             name: "mdi:github",
        //             isLink: true,
        //             link: "https://github.com/MadhavJai007/Swiftly"
        //         }
        //     ]
        // },
        {
            title: "Swiftly | 2022",
            desc: "A Swift (iOS) learning platform built with React and SwiftUI. It is aimed towards students in a high school setting to help them kickstart their learning journey.",
            icons: [
                {
                    name: "mdi:github",
                    isLink: true,
                    link: "https://github.com/MadhavJai007/Swiftly-Expert"
                },
                {
                    name: "mdi:github",
                    isLink: true,
                    link: "https://github.com/MadhavJai007/Swiftly"
                },
            ]
        },
    ]
}

export const contactLinks = [
    {
        iconName: "mdi:github",
        link: "https://github.com/MadhavJai007"
    },
    {
        iconName: "mdi:linkedin",
        link: "https://www.linkedin.com/in/madhav-jaisankar/"
    },
    {
        iconName: "ic:sharp-email",
        link: "mailto:madhav.jaisankar@gmail.com"
    }
]

export const experience = {
    title: "Experience",
    career: [
        {
            position: "Application Developer",
            place: "CloudDX",
            skills: "React Native/Android development, SciChart",
            time: "Jan 2022 - April 2022",
            location: 'Oakville, ON / Remote',
            isCurrent: false,
        },
        {
            position: "Mobile application developer",
            place: "Nevvon",
            skills: "React.js development, AWS, Python, Twilio",
            time: "May 2021 - Dec 2021",
            location: 'Oakville, ON / Remote',
            isCurrent: false,
        },
        {
            position: "Research assistant",
            place: "Nevvon",
            skills: "Python, Twilio, AWS",
            time: "Jan 2021 - April 2021",
            location: 'Oakville, ON / Remote',
            isCurrent: false,
        },
    ]
}
