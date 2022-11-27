import React from "react";
import Applicant from "./data";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

class Applicants extends React.Component {
  state = { index: 0 };
  nextApplicant = () => {
    this.setState({ index: this.state.index + 1 });
  };
  PrevApplicant = () => {
    this.setState({ index: this.state.index - 1 });
  };
  render() {
    const { index } = this.state;
    const { name, job, image, text } = Applicant[index];
    return (
      <article className="applicant">
        <div className="imgContainer">
          <img src={image} alt={name} className="pics" />
        </div>
        <h2 className="name">{name}</h2>
        <h1 className="job">{job}</h1>
        <p className="info">{text}</p>
        <div className="buttons">
          <button onClick={this.PrevApplicant}>
            <FaAngleLeft size={20} />
          </button>
          <button onClick={this.nextApplicant}>
            <FaAngleRight size={20} />
          </button>
        </div>
      </article>
    );
  }
}
export default Applicants;
