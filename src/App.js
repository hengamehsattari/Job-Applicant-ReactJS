import { Component } from "react";
import Applicants from "./Applicant";

class App extends Component {
  render() {
    return (
      <main>
        <section className="container">
          <div className="title">
            <h2>Job Applicant</h2>
            <div className="underline"></div>
          </div>
          <Applicants/>
        </section>
      </main>
    );
  }
}
export default App;
