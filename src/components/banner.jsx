import React,{Component} from 'react'
const Banner = props => {
    const { type } = props;
  
    if (type === "info") {
      return <div className="info-banner">I am an info banner</div>;
    }
  };
  React.memo(Component, [areEqual(prevProps, nextProps)]);
  const areEqual = (prevProps, nextProps) => {
    return (prevProps.name === nextProps.name)
  };
  React.memo(Person, areEqual);

  export default Banner;