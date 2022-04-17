
import './components/App.css';

function Details(){
  return(
  <section>
          <p><strong>Name : </strong> Adeala Adegbulugbe</p>
          <p><strong>Email : </strong> Adeala.Adegb@gmail.com</p>
          <p><strong>Number : </strong> 09080507949</p>
  </section>)
}

function Education(){
  return(<section>
          <p><strong>School : </strong>University of lagos</p>
          <p><strong>Study : </strong>Computer Science</p>
          <p><strong>date : </strong>november, 2021</p>
      </section>);
}

function Work(){
  return(
  <section>
        <p>No previous experience</p>
    </section>
  );
}
function App() {
  return (
    <div className="cv-project">
      <Details className="details" />
      <Education className="details" />
      <Work className="details" />
    </div>
  );
}

export default App;
