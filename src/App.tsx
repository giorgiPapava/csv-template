import { MdEmail, MdPhone } from 'react-icons/md';
import { ImGithub, ImLinkedin, ImLocation } from 'react-icons/im';
import classNames from 'classnames';
import profilePicture from '/profile_picture.jpg'

const fullName = 'Giorgi Papava';
const email = 'giorgi.papava.00@gmail.com';
const phoneNumber = '599977880';
const linkedin = 'https://www.linkedin.com/in/giorgi-papava-7084211b6';
const github = 'https://github.com/giorgiPapava';
const description = 'I\'m react developer with 3+ years of experience.';
const address = 'Tbilisi, Georgia';
const nationality = 'Georgian';
const birthDate = '02.08.2000';
const position = 'React Front End Developer'

const contacts = [
  {
    icon: <MdEmail className='text-yellow-600' />,
    desc: email,
  },
  {
    icon: <MdPhone className='text-yellow-600' />,
    desc: phoneNumber,
  },
  {
    icon: <ImGithub className='text-yellow-600' />,
    desc: github,
  },
  {
    icon: <ImLinkedin className='text-yellow-600' />,
    desc: linkedin,
  },
  {
    icon: <ImLocation className='text-yellow-600' />,
    desc: address,
  },
];
const LANGUAGES = [
  {
    title: 'Georgian',
    value: 5,
  },
  {
    title: 'English',
    value: 3,
  },
];

const skills = [
  "JavaScript/TypeScript",
  "React/React Native",
   "Node.js",
  "Next.js",
   "Redux/ReduxToolkit/Redux Saga",
   "Zustand",
  "Rest API",
   "React Query",
   "GraphQL",
  "Apollo Client",
   "MUI",
   "StyledComponents/Emotion",
   "TailwindCSS",
   "Vite",
   "Webpack/Babel",
   "Git",
  "Prettier/ESLint/Husky",
   "Strapi",
  "Docker",
   "Azure",
    "and more..."
];
const education = [
  {
    title: 'Computer science bachelor, Business and Technology University',
    date: 'Sep 2018 - Jul 2022',
  }
];
const experience = [
  {
    title: 'Front End Developer, PASHA Bank in Georgia',
    date: 'Aug 2021 - Present',
    desc: 'Working on rebank.ge, ibank.rebank.ge and more using React, Next.js,react-query, MUI5, GraphQL, Apollo, TypeScript, Docker, Azure, andmore.',
  },
  {
    title: 'React Front End Developer, Upwork',
    date: 'Apr 2021 - Present',
    desc: 'Working with european clients and creating web applications.',
  },
  {
    title: 'Working with european clients and creating web applications.',
    date: 'Nov 2019 - Jul 2021',
    desc: 'Working on affix.net gaming platform using React, Gatsby, Redux,Material UI, Flow and more.',
  },
];
const REFERENCES = [] as [];

const Content = () => {
  return (
    <div className='pb-4'>
      <div className='text-yellow-600 h-56 bg-green-900 w-full flex justify-center items-center gap-2 flex-col'>
        <h2 className=' font-bold text-2xl letter tracking-wider'>
          {fullName}
        </h2>
        <p>{position}</p>
      </div>
      <div className='flex mt-12 items-stretch px-16'>
        <div className='flex-1'>
          <img className='w-56 h-56 rounded-full object-cover' src={profilePicture} />
          <div className='flex flex-col gap-1'>
            <p className='text-yellow-600 mt-8 text-xl font-medium'>CONTACT</p>
            {contacts.map((item) => (
              <div className='flex gap-4 items-center mt-2'>
                {item.icon}
                <p className='text-sm'>{item.desc}</p>
              </div>
            ))}
          </div>
          <p className='text-yellow-600 mt-4 text-sm'>Nationality:</p>
          <p className='text-sm'>{nationality}</p>
          <p className='text-yellow-600 mt-4 text-sm'>Date of Birth:</p>
          <p className='text-sm'>{birthDate}</p>

          <p className='text-yellow-600 mt-8 mb-2 text-xl font-medium'>
            SKILLS
          </p>
          <p className='text-sm font-light'>{skills.join(', ')}</p>
        </div>
        <div className='w-px bg-gray-200 mx-16' />
        <div className='flex-[3]'>
          <p className='text-yellow-600 mt-8 text-xl font-medium'>PROFILE</p>
          <p className='text-sm mt-4'>{description}</p>

          <p className='text-yellow-600 mt-12 text-xl font-medium'>EDUCATION</p>
          {education.map((item) => (
            <>
              <p className='text-black font-bold text-sm mt-4'>{item.title}</p>
              <p className='text-gray-400 text-sm mt-2'>{item.date}</p>
            </>
          ))}

          <p className='text-yellow-600 mt-12 text-xl font-medium'>
            Experience
          </p>
          {experience.map((item) => (
            <>
              <p className='text-black font-bold text-sm mt-4'>{item.title}</p>
              <p className='text-gray-400 text-sm mt-2'>{item.date}</p>
              <p className='text-gray-700 text-sm mt-2'>{item.desc}</p>
            </>
          ))}

          {REFERENCES.length > 0 && (
            <>
                  <p className='text-yellow-600 mt-12 text-xl font-medium'>
            REFERENCES
          </p>
          {REFERENCES.map((item) => (
            <p className='text-gray-700 text-sm mt-2'>{item}</p>
          ))}</>
          )}
    
        </div>
      </div>

      <div className='px-16'>
        <p className='text-yellow-600 mt-8 text-xl font-medium'>LANGUAGES</p>
        <div className='flex flex-col gap-2'>
          {LANGUAGES.map((item) => (
            <>
              <p className='text-gray-700 text-sm my-2'>{item.title}</p>
              <div className='flex gap-1'>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <div
                      className={classNames(
                        'h-2 w-12 bg-yellow-500',
                        index > item.value - 1 && 'opacity-10'
                      )}
                    />
                  ))}
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <Content />
    </>
  );
};

export default App;
