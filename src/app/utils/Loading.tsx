import React from "react";

const Loading = (props: any) => {
  const { error } = props;
  if (error) {
    return "Oh nooess!";
  } else {
    return <h3>Loading...</h3>;
  }
};

export default Loading;
