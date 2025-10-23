import marine from '../Components/Assets/marine_life.jpeg'
import monsters from '../Components/Assets/monster_archives.jpeg'
import vault from '../Components/Assets//dnd_vault.jpeg'
import game from '../Components/Assets/children_of_the_bookcase.jpeg'
import animals from '../Components/Assets/species.jpeg'
import kraken_demo from '../Components/Assets/kraken_smol_demo.mp4'
import ttrpg_website_demo from '../Components/Assets/ttrpg_website_with_crm_demo.mp4'
import conf_agree from '../Components/Assets/conf_agree.jpg'
import conf_stamp from '../Components/Assets/conf_stamp.jpg'
import conf_red from '../Components/Assets/conf_red.png'

const projectsData = [
    {
        title: "Marine Life",
        projectImg: marine,
        github_link: "https://github.com/Laufley/Marine_Life_Group_Project",
        demo_link: kraken_demo,
        stack: ["JavaScript", "React", "NodeJS", "MongoDB", "HTML"],
        nature: "Team project",
        duration: "4 days",
        info: "We created a fullstack learning platform with over 20 learning modules and a quiz page using our own API to teach kids about marine sustainability.",
        challenge: "The app works perfectly when you run it locally! GitHub Pages only support static sites though, which means that when deployed on github pages the db doesn't load. Similar issue with the link path for the quizz.",
        solution: "Solved the issue of db load by adding a cheeky button on the bottom on the main page which \"seeds\" the app when you click on it. Room for improvement to create a way to make github pages take us to the quizz path.",
        features: ["Our API contains 20 different learning blocks", "5 questions per block for the Quiz", "Dynamic search and select/sort-by features", "Progress tracking with checkboxes", "Randomized quiz questions", "Score tracker showing right/wrong answers", "Kid-friendly interface"], 
    },
    {
        title: "Monster archives",
        projectImg: monsters,
        github_link: "https://github.com/Laufley/DnD_monster_archives_app",
        demo_link: "https://Laufley.github.io/monster_archives_app",
        stack: ["JavaScript", "React", "HTML", "CSS"],
        nature: "Solo project",
        duration: "3 days",
        info: "To help Dungeon Masters find D&D monsters' main information quickly so that the time they spend creating games for the players is optimised.",
        challenge: "Working with a large and complex D&D API that was split into unfinished bits, and handling missing images for some entries.",
        solution: "I created a small webapp which displays all existing D&D monsters' information, using a Dungeons and Dragons public API. I also added music features to help them relax or energize depending on their needs.",
        features: ["Fetches data from D&D API", "Dynamic search functionality", "onClick searches displaying info by id", "Pagination", "Conditional rendering for missing images", "Interactive music buttons with play/pause control"],
    },
    {
        title: "ttrpg website with CRM",
        projectImg: vault,
        github_link: "https://github.com/Laufley/Personal_Project_DnD_Vault",
        demo_link: ttrpg_website_demo,
        stack: ["Python", "Flask", "SQL", "HTML", "CSS"],
        nature: "Solo project",
        duration: "6 days",
        info: "My user is the business owner of a ttrpg club who needs a website to promote his business. He also needs a CRM-ish system to manage the bookings.", 
        challenge: "Creating an all-in-one solution with both public website and private management system on a low budget.",
        solution: "Since his budget is low, I created an all-in-one solution; A fullstack webapp with a public space for his customers to browse about, and a private management system which only him can access by 'fake' login from where he can manage his business. Many to many db relationship used.",
        features: ["7 sections including Home, DMs, Events, Tips, About, Contact, Management", "Public browsing for customers", "Private management system with login", "Full CRUD operations for Sessions and Players", "Image upload for sessions", "Booking system with capacity tracking", "Prevents overbooking"],
    },
    {
        title: "A Game!",
        projectImg: game,
        github_link: "https://github.com/Laufley/Escape_Game",
        demo_link: "https://play.unity.com/mg/other/children-of-the-bookcase",
        stack: ["C#", "Unity"],
        nature: "Team project",
        duration: "11 days",
        info: "Big challenge: learning enough of a new language & a game engine to create a game!",
        challenge: "Learning a completely new language (C#) and game engine (Unity) from scratch within a tight timeframe.",
        solution: "Children of the Bookcase is a 3D, escape-room style, detective puzzle game. Built by us - namelessGamesInc. Published & ready to play in unity store",
        features: ["First person 3D graphics", "Puzzles", "Music and animations", "Menu and credits scenes", "Custom assets", "Published on Unity store"]
    },
    {
        title: "Endangered Species",
        projectImg: animals,
        github_link: "https://github.com/Laufley/Endangered_animals_DOM_hw_js",
        demo_link: "",
        stack: ["JavaScript", "HTML", "CSS"],
        nature: "Solo project",
        duration: "2 days",
        info: "To train myself and interact with the DOM directly without jsx and see how things work on the background.",
        challenge: "Learning to manipulate the DOM directly in vanilla JavaScript without React's JSX abstraction.",
        solution: "I like to work on interesting and meaningful projects, so I made the app about Mass extinction events so that our population at scale could be updated of the status of many different species by user input and raise awareness.",
        features: ["Informative content about mass extinction events", "Action form with submit and dropdown", "Species input with name and location", "Dynamic list display", "Delete functionality"],
    },
    {
        title: "Data transformation pipeline (Backend role)",
        projectImg: conf_agree,
        stack: ["Go", "Terraform", "AWS Lambda", "AWS S3", "AWS CloudWatch", "AWS DynamoDB", "AWS SQS", "AWS SNS"],
        nature: "Client project at work",
        duration: "Joined at the very initial stage of the project",
        info: "Work-related project. I can not disclose any information about it or the client.",
        challenge: "To boldly go where no one has gone before",
        solution: "I collaborated with the team to build a data transformation pipeline in Go. Event-driven architecture. Deployed with Terraform. Used various AWS services to ensure scalability and reliability. Very complex infra spanning different parties on the chain, but we had a fantastic tech lead and senior dev guiding our efforts!",
        features: ["I worked on every layer (back-end logic, test, infra) ", "I demo-ed frequently to stakeholders", "Extra: I built a complex AWS infrastructure diagram to showcase our team's work to the client", "Extra: I got handpicked to innovate for the client via participating in a dragon's den style presentation proposing a new greenfield project idea", "Happy client :)"],
    },
     {
        title: "Client website (Frontend role)",
        projectImg: conf_stamp,
        stack: ["Typescript", "Javascript", "React", "Redux", "HTML", "CSS", "Jest"],
        nature: "Client project at work",
        duration: "Joined from private-beta to go-live stages",
        info: "Work-related project. I can not disclose any information about it or the client.",
        challenge: "Modernise the old stack and create a new responsive, user-friendly webapp with new features",
        solution: "I contributed to modernising the repo, implemented new features, managed state with Redux and context, wrote unit tests, and cross-collaborated with design & test teams.",
        features: ["Moved from JS to TS", "Managed state with Redux", "Created unit tests with Jest", "Built new pages", "Built entire user journeys", "Became the go-to person alongside a colleague to demo for the client and stakeholders", "Happy client :)"],
    },
     {
        title: "Serverless notes app (Fullstack, solo project)",
        projectImg: conf_red,
        stack: ["Typescript", "React", "AWS cdk", "Lambda", "S3", "DynamoDB", "Cloudwatch", "Cloudfront", "APIG", "Cognito + Amplify"],
        nature: "Solo project - but built with the company laptop so it counts as work-related. Confidential ^^'",
        info: "A serverless notes app with authentication, notes saving on Dynamodb, files uploads, and rich text editor using AWS cdk and services.",
        challenge: "To work on frontend, backend and infra all by myself. Learning AWS cdk from scratch.",
        solution: "Build apis, back-end logic, front-end components, file-uploads in quite a clever way, a cool integration for authentication, and rich text editor for the notes. Deployed the whole infra with AWS cdk in typescript.",
        features: ["Built my infra diagram", "Built APIs", "Built lambdas", "CRUD operations", "User authentication", "List of notes", "Individual note", "Rich text editor for the note", "Add files to the notes", "Store data (notes, files, and static)"],
    }
];

export default projectsData;