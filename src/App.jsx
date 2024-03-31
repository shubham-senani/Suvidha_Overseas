import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import CountrySection from "./components/common/country_section/CountryHome";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./components/contact_form/ContactUs";
function App() {
  const countryData = [
    {
      id: "USA",
      destination: "UNITED STATES OF AMERICA",
      imageUrl: "/src/assets/countries/usa.png",
      color: "#DFF5FF",
      description:
        "The United States of America has been a global leader in the field of education and boasts of a lion’s share of top ranked universities according to all major international rankings. Few countries offer as many high ranked universities and noble laureate academia, as USA does.",
      why: [
        {
          title: "Top-Tier Education System",
          desc: "The USA is home to many prestigious universities and colleges renowned for their academic excellence, innovative research, and state-of-the-art facilities. Students have access to world-class education and cutting-edge resources.",
        },
        {
          title: "Diverse Academic Options",
          desc: "The USA offers a vast array of academic programs and majors across various fields of study. Whether you're interested in STEM disciplines, liberal arts, business, or the arts, you'll find numerous options to pursue your academic interests.",
        },
        {
          title: "Cultural Diversity and Global Exposure",
          desc: "American universities welcome students from all over the world, fostering a diverse and inclusive environment. Interacting with peers from different backgrounds enhances cultural understanding, promotes tolerance, and prepares students for the globalized workforce.",
        },
        {
          title: "Opportunities for Research and Innovation",
          desc: "The USA leads the way in research and innovation, providing abundant opportunities for students to engage in groundbreaking research projects, internships, and collaborations with leading scholars and industry professionals.",
        },
        {
          title: "Career Prospects and Networking",
          desc: "Studying in the USA opens doors to a wide range of career opportunities and networking connections. Students benefit from access to internship programs, career fairs, and industry partnerships, positioning them for success in their chosen fields upon graduation. Additionally, the USA's robust alumni networks offer valuable support and mentorship opportunities throughout students' careers.",
        },
      ],
      courses: [
        "Computer Science and Engineering",
        "Business Administration and Management",
        "Business Administration",
        "Health Sciences and Medicine",
        "STEM (Science, Technology, Engineering, and Mathematics) Fields",
        "Social Sciences and Humanities",
      ],
      universities: [
        "Massachusetts Institute of Technology (MIT)",
        "Stanford University",
        "Harvard University",
        "California Institute of Technology (Caltech)",
        "University of Chicago",
        "Princeton University",
      ],
    },
    {
      id: "UK",
      destination: "UNITED KINGDOM",
      color: "#FFE7E7",
      imageUrl: "/src/assets/countries/uk.png",
      description:
        "With an academic reputation built on centuries old heritage, The UK is home to some of the world’s oldest universities that consistently rank among the highest in the world. Universities in UK have a rich legacy of welcoming international students for centuries and are known to offer an unforgettable student experience as they know the needs and aspirations of their students very well.",
      why: [
        {
          title: "Quality Education",
          desc: "The UK is home to some of the world's top universities, renowned for their high-quality education, cutting-edge research facilities, and esteemed faculty members.",
        },
        {
          title: "Diverse Academic Environment",
          desc: "UK universities attract students from all over the world, fostering a diverse and multicultural academic environment. This exposure enhances cultural awareness and provides opportunities for global networking.",
        },
        {
          title: "Internationally Recognized Qualifications",
          desc: "Degrees from UK universities are highly respected worldwide and hold significant value in the job market. Graduates benefit from the prestige and recognition associated with UK qualifications.",
        },
        {
          title: "Rich Cultural Experience",
          desc: "Studying in the UK offers more than just academic pursuits; it provides a rich cultural experience. Students can explore historic landmarks, museums, theaters, and vibrant city life, enriching their overall university experience.",
        },
        {
          title: "Career Opportunities",
          desc: "The UK offers abundant opportunities for career advancement and professional development. With access to leading industries, internships, and job placements, students can kick-start their careers and gain valuable work experience during and after their studies.",
        },
      ],
      courses: [
        "Business and Management Studies",
        "Computer Science",
        "Economics",
        "Engineering and Technology",
        "Law",
        "Medicine",
      ],
      universities: [
        "University of Oxford",
        "University of Cambridge",
        "Imperial College London",
        "London School of Economics and Political Science (LSE)",
        "University College London (UCL)",
        "University of Edinburgh",
      ],
    },
    {
      id: "Germany",
      destination: "GERMANY",
      color: "#FFEBE6",
      imageUrl: "/src/assets/countries/germany.png",
      description:
        "Germany is known for its world-class education system, cutting-edge research facilities, and vibrant student life. With a strong focus on innovation and practical learning, Germany offers a unique and rewarding academic experience for international students.",
      why: [
        {
          title: "World-Class Education System",
          desc: "Germany is renowned for its excellent education system, particularly in fields such as engineering, technology, and natural sciences. Universities in Germany consistently rank among the top institutions globally, offering high-quality education and research opportunities.",
        },
        {
          title: "Affordable Education",
          desc: "Public universities in Germany typically do not charge tuition fees for undergraduate programs, even for international students. This makes studying in Germany more affordable compared to many other countries, reducing financial barriers to higher education.",
        },
        {
          title: "Strong Economy and Career Opportunities",
          desc: "Germany boasts a robust economy and is home to numerous multinational companies and innovative startups. Studying in Germany provides access to internship opportunities, practical training programs, and job placements, enhancing career prospects and employability.",
        },
        {
          title: "International Environment",
          desc: "Germany attracts a diverse community of students from around the world, fostering a rich and multicultural learning environment. Students benefit from exposure to different cultures, languages, and perspectives, preparing them for success in a globalized world.",
        },
        {
          title: "High Quality of Life",
          desc: "Germany offers a high standard of living, with excellent healthcare, transportation, and infrastructure. Cities like Berlin, Munich, and Hamburg provide vibrant cultural scenes, recreational activities, and a safe environment for students to live and study.",
        },
      ],
      courses: [
        "Engineering and Technology",
        "Business and Management Studies",
        "Computer Science",
        "Natural Sciences",
        "Social Sciences",
        "Medicine",
      ],
      universities: [
        "Technical University of Munich",
        "Ludwig Maximilian University of Munich",
        "Heidelberg University",
        "Humboldt University of Berlin",
        "University of Freiburg",
        "RWTH Aachen University",
      ],
    },

    {
      id: "France",
      destination: "FRANCE",
      color: "#FFF3E6",
      imageUrl: "/src/assets/countries/france.png",
      description:
        "France is known for its rich history, vibrant culture, and world-class education system. With a focus on innovation, creativity, and academic excellence, France offers a unique and rewarding academic experience for international students.",
      why: [
        {
          title: "Renowned Academic Institutions",
          desc: "France is home to prestigious universities and grandes écoles known for their academic excellence and rich history. Institutions like Sorbonne University, École Normale Supérieure, and Sciences Po Paris attract students from around the world.",
        },
        {
          title: "Quality Education at Affordable Costs",
          desc: "Compared to other Western countries, France offers relatively affordable tuition fees for both domestic and international students. Additionally, the French government heavily subsidizes higher education, making it accessible to a wide range of students.",
        },
        {
          title: "Cultural and Artistic Hub",
          desc: "France boasts a rich cultural heritage and vibrant arts scene. Studying in France provides opportunities to explore its renowned museums, theaters, galleries, and historical landmarks, offering a unique cultural experience.",
        },
        {
          title: "Diverse Range of Programs",
          desc: "French universities and grandes écoles offer a diverse range of academic programs across various disciplines, including humanities, sciences, engineering, business, and the arts. Students have the flexibility to choose programs that align with their interests and career aspirations.",
        },
        {
          title: "Global Networking Opportunities",
          desc: "Studying in France provides access to a diverse and international student community, fostering cross-cultural exchanges and global networking opportunities. Additionally, France's central location in Europe facilitates travel and collaboration with neighboring countries, enhancing students' international exposure and career prospects.",
        },
      ],
      courses: [
        "Business and Management Studies",
        "Engineering and Technology",
        "Social Sciences",
        "Art and Design",
        "Hospitality and Tourism Management",
        "Medicine",
      ],
      universities: [
        "Sorbonne University",
        "École Normale Supérieure",
        "Sciences Po Paris",
        "Paris-Saclay University",
        "University of Paris",
        "École Polytechnique",
      ],
    },

    {
      id: "Canada",
      destination: "CANADA",
      color: "#EDE4FF",
      imageUrl: "/src/assets/countries/canada.png",
      description:
        "A country that offers a truly dynamic education system with some of the world’s best universities, a high standard of living & a promising future, Canada is undoubtedly amongst the most popular and ideal study destinations in the world.",
      why: [
        {
          title: "High-Quality Education",
          desc: "Canada is home to world-renowned universities and colleges known for their high academic standards and innovative research programs. Institutions like the University of Toronto, McGill University, and the University of British Columbia consistently rank among the top universities globally.",
        },
        {
          title: "Diverse and Inclusive Society",
          desc: "Canada prides itself on its multiculturalism and inclusivity. Students from all backgrounds are welcomed and supported in Canada, fostering a diverse and tolerant society. This multicultural environment enhances cultural awareness, promotes tolerance, and prepares students for global citizenship.",
        },
        {
          title: "Safe and Welcoming Environment",
          desc: "Canada is known for its safe and peaceful cities, making it an ideal destination for international students. Canadians are known for their friendly and welcoming attitude, creating a supportive environment for students to live and study.",
        },
        {
          title: "Opportunities for Work and Immigration",
          desc: "Canada offers numerous opportunities for international students to gain work experience and explore immigration pathways after graduation. Programs like the Post-Graduation Work Permit (PGWP) allow students to work in Canada for up to three years after completing their studies, providing valuable work experience and potential pathways to permanent residency.",
        },
        {
          title: "Natural Beauty and Outdoor Recreation",
          desc: "Canada's stunning natural landscapes, including mountains, forests, lakes, and coastlines, offer endless opportunities for outdoor recreation and exploration. From skiing and snowboarding in the Rockies to hiking in national parks, students can enjoy a wide range of outdoor activities while studying in Canada.",
        },
      ],

      courses: [
        "Business and Management Studies",
        "Engineering and Technology",
        "Computer Science and Information Technology",
        "Health Sciences and Medicine",
        "Social Sciences and Humanities",
        "Natural Sciences",
      ],
      universities: [
        "University of Toronto",
        "McGill University",
        "University of British Columbia",
        "University of Alberta",
        "University of Waterloo",
        "University of Calgary",
      ],
    },
    {
      id: "Australia",
      destination: "AUSTRALIA",
      color: "#EAFDFC",
      imageUrl: "/src/assets/countries/australia.png",
      description:
        "A network of world leading universities, outstanding learning & research facilities, inspiring lectures from brilliant instructors & unparalleled academic excellence, Australian education system offers them all with an exceptional student experience & qualifications that are valued world over.",
      why: [
        {
          title: "High-Quality Education System",
          desc: "Australia is known for its high-quality education system, with world-class universities and institutions offering a wide range of academic programs and courses.",
        },
        {
          title: "Diverse and Inclusive Society",
          desc: "Australia is a multicultural society that welcomes students from all backgrounds. Studying in Australia provides exposure to diverse cultures and perspectives, enhancing cross-cultural understanding and global citizenship.",
        },
        {
          title: "Safe and Welcoming Environment",
          desc: "Australia is recognized for its safe and welcoming environment, with low crime rates and a high standard of living. International students can feel secure and supported while living and studying in Australia.",
        },
        {
          title: "Opportunities for Work and Immigration",
          desc: "Australia offers opportunities for international students to gain work experience and explore immigration pathways after graduation. Programs like the Temporary Graduate visa (subclass 485) allow students to work in Australia temporarily after completing their studies, providing valuable work experience and potential pathways to permanent residency.",
        },
        {
          title: "Natural Beauty and Outdoor Lifestyle",
          desc: "Australia's stunning natural landscapes, including beaches, rainforests, and outback areas, offer opportunities for outdoor activities and adventure. Students can enjoy a healthy outdoor lifestyle while studying in Australia.",
        },
      ],
      courses: [
        "Business and Management Studies",
        "Engineering and Technology",
        "Computer Science and Information Technology",
        "Health Sciences and Medicine",
        "Social Sciences and Humanities",
        "Natural Sciences",
      ],
      universities: [
        "Australian National University",
        "University of Melbourne",
        "University of Sydney",
        "University of Queensland",
        "University of New South Wales",
        "Monash University",
      ],
    },
    {
      id: "New Zealand",
      destination: "NEW ZEALAND",
      color: "#E5FFF99E",
      imageUrl: "/src/assets/countries/newzealand.png",
      description:
        "New Zealand offers world class education system, qualifications that are valued globally, an unmatchable lifestyle and friendly & welcoming natives. This island country has abundant natural beauty, breathtaking landscapes and picturesque coastlines that make studying in New Zealand an adventurous experience.",
      why: [
        {
          title: "High-Quality Education System",
          desc: "New Zealand offers a high-quality education system, with universities and institutions known for their academic excellence and innovative teaching methods. Institutions like the University of Auckland, Victoria University of Wellington, and University of Otago are highly regarded globally.",
        },
        {
          title: "Safe and Welcoming Environment",
          desc: "New Zealand is known for its safe and welcoming environment, with low crime rates and a friendly population. International students can feel secure and supported while living and studying in New Zealand.",
        },
        {
          title: "Beautiful Natural Landscapes",
          desc: "New Zealand's stunning natural landscapes, including mountains, beaches, and fjords, offer opportunities for outdoor activities and exploration. Students can enjoy hiking, skiing, surfing, and other outdoor pursuits in their leisure time.",
        },
        {
          title: "Diverse and Inclusive Society",
          desc: "New Zealand is a multicultural society that embraces diversity and inclusivity. Studying in New Zealand provides exposure to different cultures and perspectives, fostering cross-cultural understanding and global citizenship.",
        },
        {
          title: "Opportunities for Work and Immigration",
          desc: "New Zealand offers opportunities for international students to gain work experience and explore immigration pathways after graduation. Programs like the Post-Study Work Visa allow students to work in New Zealand temporarily after completing their studies, providing valuable work experience and potential pathways to permanent residency.",
        },
      ],
      courses: [
        "Business and Management Studies",
        "Engineering and Technology",
        "Computer Science and Information Technology",
        "Health Sciences and Medicine",
        "Social Sciences and Humanities",
        "Natural Sciences",
      ],
      universities: [
        "University of Auckland",
        "Victoria University of Wellington",
        "University of Otago",
        "University of Canterbury",
        "Massey University",
        "Auckland University of Technology",
      ],
    },
  ];

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/destination/usa"
          element={<CountrySection country={countryData[0]} />}
        />
        <Route
          path="/destination/uk"
          element={<CountrySection country={countryData[1]} />}
        />
        <Route
          path="/destination/canada"
          element={<CountrySection country={countryData[4]} />}
        />
        <Route
          path="/destination/germany"
          element={<CountrySection country={countryData[2]} />}
        />
        <Route
          path="/destination/france"
          element={<CountrySection country={countryData[3]} />}
        />
        <Route
          path="/destination/australia"
          element={<CountrySection country={countryData[5]} />}
        />
        <Route
          path="/destination/new-zealand"
          element={<CountrySection country={countryData[6]} />}
        />
        <Route path="/contactus" element={<ContactUs />} />{" "}
        <Route path="/player/:id" element={<CountrySection />} />{" "}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
