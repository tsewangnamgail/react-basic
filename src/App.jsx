// Lecture 1
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

// Lecture 2
import Card from './Card.jsx'

// Lecture 3
import Button from "./Button/Button.jsx"

// Lecture 4
import Student from "./Student.jsx"

//Lecture 5
import UserGreeting from "./UserGreeting.jsx"

//lecture 6
import List from "./List.jsx"

function App() {
  return (
    <>
      {/* Lecture 1 */}
      <Header />
      <Food />
      <Footer />
      <hr />

      {/* Lecture 2 */}
      <Card />
      <hr />

      {/* Lecture 3 */}
      {/*
        HOW TO STYLE REACT COMPONENT WITH CSS
        (not including external framework or preprocessor)
        1. External
        2. Modules
        3. Inline
      */}
      <Button />
      <hr />

      {/* Lecture 4 */}
      <Student name="Tsewang Namgail" age={23} isStudent={true} />
      <Student name="Stanzin Lhadol" age={22} isStudent={true} />
      <Student />
      <hr />

      {/* Lecture 5 */}
      {/*
        CONDITIONAL RENDERING= allows you to control what gets rendered
                              in your application based on certain conditaions
                              (show,hide,or change components)
      */}
      <UserGreeting isLoggedIn={false} username="tsewang"/>
      <UserGreeting isLoggedIn={true} />
      <hr/>

      {/* Lecture 6 */}
      <List/>
    </>
  );
}

export default App;
