import "./journal.css";

export default function Journal(props) {
  const { title, img, country, googleMapsLink, dates, text } = props;
  return (
    <>
      <div className="journal">
        <div>
          <img
            src={img.src}
            alt={img.alt}
            className="location-image"
          />
        </div>
        <div className="details">
          <div className="country">
            <img
              src="src/assets/marker.png"
              alt="location marker"
              className="marker"
            />
            <span>{country}</span>
            <a href={googleMapsLink}>View on Google Maps</a>
          </div>
          <p className="title">{title}</p>
          <p className="date">{dates}</p>
          <p className="text">{text}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
