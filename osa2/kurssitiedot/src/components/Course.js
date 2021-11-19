import React from "react";

const Header = (props) => {
  return (
    <div>
      <h2>{props.name}</h2>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exercises}
      </p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      {props.parts.map((parts) => (
        <Part key={parts.id} part={parts.name} exercises={parts.exercises} />
      ))}
    </div>
  );
};

const Total = (props) => {
  const reducer = (previousValue, currentValue) => previousValue + currentValue;
  const harjoitukset = props.parts.map((part) => {
    return part.exercises;
  });
  return (
    <div>
      <p>
        <b>Total of {harjoitukset.reduce(reducer)} exercises</b>
      </p>
    </div>
  );
};

const Course = ({ course }) => {
  return (
    <>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
};

export default Course;
