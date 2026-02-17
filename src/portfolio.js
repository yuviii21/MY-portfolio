const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '',
  title: '',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'G Yuvaraj',
  role: 'Python full stack developer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Passionate Computer Science student skilled in software development, AI, and data-driven solutions with hands-on project experience in real-world applications.',
  resume: 'https://drive.google.com/file/d/1Q---hI0mjZwTbcAe73DrPOrsQO_S5UZ4/view?usp=sharing',
  social: {
    linkedin: 'https://linkedin.com/in/g-yuvaraj-42b1b634a',
    github: 'https://github.com/yuviii21',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Autosteer',
    description:
      'Autonomous Vehicle Steering Prediction System Developed a computer vision application leveraging  Convolutional Neural Networks (CNNs) to predict real-time steering angles from road video input.',
    stack: ['Python'],
    sourceCode: 'https://github.com/yuviii21/AutoSteer.git',
    livePreview: '',
    
  },
  {
    name: 'PlugEase EV Charging Access Mobile Application',
    description:
      'Developed a React Native mobile application enabling users to locate, book, and manage home EV charging points.',
    stack: ['JavaScript', 'TypeScript', 'kotlin', 'React Native'],
    sourceCode: 'https://github.com/yuviii21/PlugEase.git',
    livePreview: '',
    
  },
  {
    name: 'Gesture Voice Board',
    description:
      'Designed and developed a browser-based multimodal interaction system enabling users to control drawing and note-taking using hand gestures and voice commands.',
    stack: ['JavaScript', 'MediaPipe', 'Web Speech API', 'Computer Vision'],
    sourceCode: 'https://github.com/yuviii21/Gesture-Voice-Board.git',
    livePreview: '',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'c',
  'React.js',
  'React Native',
  'JavaScript',
  'Tailwind CSS',
  'HTML5',
  'CSS3',
  'REST APIs',
  'SQL',
  'mongoDB',
  'Firebases',
  'Git',
  'Postman',
  'MySQL',
  'Netlify',
  'Vercel'
  
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'yuvrazz21@gmail.com',
}

export { header, about, projects, skills, contact }
