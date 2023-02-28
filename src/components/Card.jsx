function Card(props) {
    const { img, title, description } = props;
  
    return (
      <div className="cardbox">
        <img className="img" src={img} alt={title} />
        <span className="cardtitle">{title}</span>
        <span className="carddescription">{description}</span>
      </div>
    );
  }
  
  export default Card;