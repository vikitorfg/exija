import React, { Component } from "react";
import "./styles.css";
import Text from "../../atoms/text";

class Card extends Component {
  render() {
    const { title, date, author, text } = this.props.article;
    return (
      <div className="card">
        <div className="cardTitle">
          <Text text={title} type={"title"} />
          <div className="cardAuthor">
            <Text text={author} type={"author"} />
            <Text text={date} type={"date"} />
          </div>
        </div>
        <div className="cardText">
          <Text text={text} type={"content"} />
        </div>
        <div className="cardImage">
          <img src="https://baconmockup.com/300/300" alt="bacon" />
        </div>
      </div>
    );
  }
}

export default Card;
