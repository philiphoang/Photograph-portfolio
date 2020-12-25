import headerImage from "./assets/headerimage.jpg";
import instagramIcon from "./assets/instagram.png";
import linkedinIcon from "./assets/linkedin.png";
import githubIcon from "./assets/github.png";
import profileImage from "./assets/profile.png";
import TalkieImage from "./assets/Talkie.png";
import TangyImage from "./assets/Tangy.png";
import algovis from "./assets/mergesort.png";


let resumeData = {
    "headerImage": headerImage,
    "imagebaseurl":"https://github.com/philiphoang",
    "name": "Philip",
    "role": "Developer",
    "linkedinId": "",
    "roleDescription": "I like to learn and create applications in various parts of software development and like to learn about new technologies!",
    "profileImage":profileImage,
    "socialLinks": [
        {
            "name":"linkedin",
            "url":"https://www.linkedin.com/in/philip-hoang-7a50b2181/",
            "className":"linkedin",
            "imgsrc": linkedinIcon
        },
        {
            "name":"github",
            "url":"https://github.com/philiphoang",
            "className":"github",
            "imgsrc":githubIcon
        },
        {
            "name":"instagram",
            "url":"https://instagram.com/philipoth",
            "className":"instagram",
            "imgsrc":instagramIcon
        }
    ],
    "aboutMe":"I am currently a Masters student at University of Bergen and pursuing my master in Media and Interaction Design. I have knowledge in backend-developing from my bachelordegree, currently diving into the frontend-developing world.",
    "address": "Bergen, Norway",
    "age": "24",
    "website": "https://github.com/philiphoang",
    "education": [
        {
            "UniversityName": "University in Bergen",
            "specialization": "Media and Interaction Design",
            "MonthOfPassing": "June",
            "YearOfPassing": "Currently studying",
        },
        {
            "UniversityName": "University in Bergen",
            "specialization": "Computer Technology",
            "MonthOfPassing": "June",
            "YearOfPassing": "2018",
        },
        {
            "UniversityName": "Vardafjell Videregåendeskole",
            "specialization": "Studiespesialiserende",
            "MonthOfPassing": "June",
            "YearOfPassing": "2015",
        }
    ],
    "work": [
        {
            "CompanyName":"Høgskolen på Vestlandet",
            "specialization":"Lab Assistent",
            "MonthOfStarting":"August",
            "YearOfStarting":"2019",
            "MonthOfLeaving":"December",
            "YearOfLeaving":"2019"
        },
        {
            "CompanyName":"University in Bergen",
            "specialization":"Teaching Assistent",
            "MonthOfStarting":"January",
            "YearOfStarting":"2019",
            "MonthOfLeaving":"June",
            "YearOfLeaving":"2019"
        },
        
        {
            "CompanyName":"Deli de Luca",
            "specialization":"Shop employee",
            "MonthOfStarting":"July",
            "YearOfStarting":"2017",
            "MonthOfLeaving":"July",
            "YearOfLeaving":"2018"
        }
    ],
    "skillsDescription":"",
    "skills":[
        {
            "skillname":"Python",
            "level": 3
        },
        {
            "skillname":"Java",
            "level": 4
        },
        {
            "skillname":"Javascript",
            "level": 3
        },
        {
            "skillname":"HTML5",
            "level": 5
        },
        {
            "skillname":"CSS",
            "level": 3

        },
        {
            "skillname":"Reactjs",
            "level": 2
        }, 
        {
            "skillname":"SQL",
            "level": 1
        },
    ],
    "project1": 
    {
        "name":"Talkie",
        "subtitle":"A social child interviewing robot",
        "imageurl":TalkieImage
    },
    "project2":
    {
        "name":"Tangy",
        "subtitle":"A persistent wellbeing coach",
        "imageurl":TangyImage
    },
    "project3":
    {
        "name":"Visualization of algorithms and datastructures",
        "subtitle":"A visualization tool for different algorithms",
        "imageurl":algovis
    }
        
}

export default resumeData;