import styles from "./styles.module.css";
import { useWeather } from "../../context/WeatherContext";

const cities = [
  "Adana",
  "Adiyaman",
  "Afyon",
  "Agri",
  "Aksaray",
  "Amasya",
  "Ankara",
  "Antalya",
  "Ardahan",
  "Artvin",
  "Aydin",
  "Balikesir",
  "Bartin",
  "Batman",
  "Bayburt",
  "Bilecik",
  "Bingol",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Canakkale",
  "Cankiri",
  "Corum",
  "Denizli",
  "Diyarbakir",
  "Duzce",
  "Edirne",
  "Elazig",
  "Erzincan",
  "Erzurum",
  "Eskisehir",
  "Gaziantep",
  "Giresun",
  "Gumushane",
  "Hakkari",
  "Hatay",
  "Igdir",
  "Isparta",
  "Istanbul",
  "Izmir",
  "Kahramanmaras",
  "Karabuk",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kilis",
  "Kirikkale",
  "Kirklareli",
  "Kirsehir",
  "Kocaeli",
  "Konya",
  "Kutahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Mugla",
  "Mus",
  "Nevsehir",
  "Nigde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Sanliurfa",
  "Siirt",
  "Sinop",
  "Sirnak",
  "Sivas",
  "Tekirdag",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Usak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak",
];

const CustomSelect = () => {
  const { setCityName } = useWeather();

  return (
    <div className={styles.customSelect}>
      <label htmlFor="city">Choose your city: </label>
      <select
        name="cities"
        id="city"
        onChange={(e) => setCityName(e.target.value)}
      >
        {cities.map((city, index) => (
          <option value={city} key={index}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomSelect;
