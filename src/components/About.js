import React from "react";
import Links from "./Links";
import user from "../data/user";



function About(props) {
  let bioParagraph;
  if (props.bio) {
    bioParagraph = <p>{props.bio}</p>;
  }

  return (
    <div id="about">
      <h2>About Me</h2>
      {bioParagraph}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.links.github} linkedin={props.links.linkedin} />

    </div>
  );
}

export default About;
