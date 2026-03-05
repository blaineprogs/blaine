import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const skills = [
	"HTML",
	"CSS",
	"JavaScript",
	"React"
  ];

  const education = [
	{
	  year: "2024-2028",
	  program: "Bachelor of Science Information Technology",
	  school: "University of Science and Technology of Southern Philippines (CDO)"
	},
	{
	  year: "2022-2024",
	  program: "Humanities and Social Sciences",
	  school: "Liceo de Cagayan University"
	},	
	{
	  year: "2020-2022",
	  program: "Junior High School (Grade 9-10)",
	  school: "Misamis Oriental General Comprehensive High School"
	},	
	{
	  year: "2018-2020",
	  program: "Junior High School (Grade 7-8)",
	  school: "Pilgrim Christian College"
	},	
	{
	  year: "2012-2018",
	  program: "Elementary School (Grade 1-6)",
	  school: "City Central School"
	},
	{
	  year: "2010-2012",
	  program: "Kindergarten",
	  school: "Mount Olive Christian School"
	},
  ];


  return (
  <div className={darkMode ? "dark-mode" : ""}>
    <button onClick={() => setDarkMode(!darkMode)}>
      {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"} 
  </button>
      <main>
        <div className="container">
	  <Header />
          <About />
          <Skills skills={skills} />
          <Education education={education} />
          <Contact />
        </div>
      </main>

      <footer>
        <p>
          &copy; 2026 Dorothy Blaine E. Tura. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;