import styles from "./styles.module.css";

function Card({ temp, weather, icon, temp_min, temp_max, humidity, wind }) {
  return (
    <div className={styles.card}>
      <p>
        <b>temp: </b>
        {temp}
      </p>
      <p>
        <b>weather:</b> {weather}
      </p>
      <img
        src={`http://openweathermap.org/img/w/${icon}.png`}
        alt=""
        width="100px"
      />
      <p>
        <b>min temp:</b> {temp_min}
      </p>
      <p>
        <b>max temp:</b> {temp_max}{" "}
      </p>
      <p>
        <b>humidity: </b>
        {humidity}{" "}
      </p>
      <p>
        <b>wind: </b>
        {wind}{" "}
      </p>
    </div>
  );
}

export default Card;
