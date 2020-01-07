import react from "react";
import "./styles.css";

const Text = ({ text, type, gutterBotton }) => {
  return (
    <p className={`text ${type} ${gutterBottom ? "gutterBottom" : ""}`}>
      {text}
    </p>
  );
};

export default Text;
