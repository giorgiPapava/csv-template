import { MdEmail, MdPhone } from 'react-icons/md';
import { ImLinkedin, ImLocation } from 'react-icons/im';
import classNames from 'classnames';

const image =
  'https://media-exp1.licdn.com/dms/image/C4D03AQFMU9u_gVgAZQ/profile-displayphoto-shrink_800_800/0/1515062964082?e=1665619200&v=beta&t=p51YRZp90Pe3l_rNvpl3UEhdj2xERCd2Tfu7CQNJW6g';
const email = 'aleksandre.kapanadze.89@gmail.com';
const phoneNumber = '558105740';
const linkedin = 'https://linkedin.com/in/aleksandre-kapanadze-a75361101';
const description = 'I am a .NET developer with 3.5+ years of experience.';
const address = 'Sof.Chiaureli st. 14, app.47, Tbilisi, 0179, Georgia';
const nationality = 'Georgian';
const birthDate = '12.07.1989';

const CONTACT = [
  {
    icon: <MdEmail className='text-yellow-600' />,
    desc: email,
  },
  {
    icon: <MdPhone className='text-yellow-600' />,
    desc: phoneNumber,
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
    title: 'Russian',
    value: 4,
  },
  {
    title: 'English',
    value: 3,
  },
];

const SKILLS = [
  'C#',
  'XML',
  'JSON',
  '.NET Framework',
  '.NET Core',
  'ASP.NET Core',
  'ASP.NET Core WebAPI',
  'WinForms',
  'WPF',
  'WCF',
  'ADO.NET',
  'MS SQL Server',
  'PostgreSQL',
  'Elasticsearch',
  'Redis',
  'Git',
  'RabbitMQ',
  'DomainDriven Design',
  'Microservices',
];
const EDUCATION = [
  {
    title: 'Computer science undergraduate, Tbilisi State University',
    date: 'Sep 2011 - Jul 2015',
  },
  {
    title: 'Econimics and business bachelor, Tbilisi State University',
    date: 'Sep 2006 - Jul 2011',
  },
];
const EXPERIENCE = [
  {
    title: '.Net Developer, AFFIX Network, Tbilisi',
    date: 'Oct 2020 - Present',
    desc: 'Working on affix.net gaming platform using ASP.NET Core WebAPI, PostgreSQL, Domain-Driven Design, Microservices, Elasticsearch, Redis, RabbitMQ, and Hangfire.',
  },
  {
    title: 'Product Owner, Betsolutions LTD, Tbilisi',
    date: 'Oct 2019 - May 2020',
    desc: 'Working on an online poker application as a product owner.',
  },
];
const REFERENCES = [
  'Alexander Muller, AFFIX Network, +995591777979',
  'Davit Bagaturia, TBC Bank, +995 595367117',
];

const Content = () => {
  return (
    <div className='pb-4'>
      <div className='text-yellow-600 h-56 bg-cyan-900 w-full flex justify-center items-center gap-2 flex-col'>
        <h2 className=' font-bold text-2xl letter tracking-wider'>
          ALEKSANDRE KAPANDZE
        </h2>
        <p>.NET Developer</p>
      </div>
      <div className='flex mt-12 items-stretch px-16'>
        <div className='flex-1'>
          <img className='w-56 h-56 rounded-full' src={image} />
          <div className='flex flex-col gap-1'>
            <p className='text-yellow-600 mt-8 text-xl font-medium'>CONTACT</p>
            {CONTACT.map((item) => (
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
          <p className='text-sm font-light'>{SKILLS.join(', ')}</p>
        </div>
        <div className='w-px bg-gray-200 mx-16' />
        <div className='flex-[3]'>
          <p className='text-yellow-600 mt-8 text-xl font-medium'>PROFILE</p>
          <p className='text-sm mt-4'>{description}</p>

          <p className='text-yellow-600 mt-12 text-xl font-medium'>EDUCATION</p>
          {EDUCATION.map((item) => (
            <>
              <p className='text-black font-bold text-sm mt-4'>{item.title}</p>
              <p className='text-gray-400 text-sm mt-2'>{item.date}</p>
            </>
          ))}

          <p className='text-yellow-600 mt-12 text-xl font-medium'>
            Experience
          </p>
          {EXPERIENCE.map((item) => (
            <>
              <p className='text-black font-bold text-sm mt-4'>{item.title}</p>
              <p className='text-gray-400 text-sm mt-2'>{item.date}</p>
              <p className='text-gray-700 text-sm mt-2'>{item.desc}</p>
            </>
          ))}

          <p className='text-yellow-600 mt-12 text-xl font-medium'>
            REFERENCES
          </p>
          {REFERENCES.map((item) => (
            <p className='text-gray-700 text-sm mt-2'>{item}</p>
          ))}
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
