import { useEffect, useState } from "react";

export const CreateObject = () => {
  let alphabet = "abcdefghijklmnoprstuwxyz";

  const coordinates = {
    latitudeMin: 176400,
    latitudeMax: 197400,
    longitudeMin: 50820,
    longitudeMax: 86940,
  };

  const [user, setUser] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?results=5000&name&inc=name"
      );
      const data = await response.json();
      setNames(data.results);
    };
    getData();
  }, []);

  useEffect(() => {
    if (names.length < 1) {
      return;
    }
    const randomPhoneNumber = () => {
      return Math.floor(Math.random() * 999999999) + 0;
    };
    const generateRandomSpeed = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };
    const randomPlate = () => {
      let randomPlateLetters =
        alphabet[Math.floor(Math.random() * alphabet.length)] +
        alphabet[Math.floor(Math.random() * alphabet.length)] +
        alphabet[Math.floor(Math.random() * alphabet.length)];
      let plateNumber = Math.floor(Math.random() * 999) + 0;
      let plateNumberString;
      if (plateNumber < 100) {
        if (plateNumber < 10) {
          plateNumberString = "00" + plateNumber.toString();
        }
        plateNumberString = "0" + plateNumber.toString();
      }
      plateNumberString = plateNumber.toString();
      return randomPlateLetters.toUpperCase() + plateNumberString;
    };
    const generateRandomLocation = (min, max) => {
      return Math.floor(Math.random() * (max - min)) + min;
    };
    const recalculate = (coord) => {
      let degree = Math.floor(coord / 3600);

      let minutes = Math.floor((coord - degree * 3600) / 60);
      let seconds = coord - degree * 3600 - minutes * 60;

      return {
        degree,
        minutes,
        seconds,
      };
    };

    const records = [];
    for (let id = 0; id < 5000; id++) {
      const obj = {
        plates: randomPlate(),
        coordinates: {
          longtitude: generateRandomLocation(
            coordinates.longitudeMin,
            coordinates.longitudeMax
          ),
          latitude: generateRandomLocation(
            coordinates.latitudeMin,
            coordinates.latitudeMax
          ),
        },
        renderLongitude: function () {
          return recalculate(this.coordinates.longtitude);
        },

        renderLatitude: function () {
          return recalculate(this.coordinates.latitude);
        },
        firstName: names[id].name.first,
        lastName: names[id].name.last,
        phone: randomPhoneNumber(),
        speed: generateRandomSpeed(60, 200),
      };
      records.push(obj);
      setUser(records);
    }
  }, [
    names,
    alphabet,
    coordinates.latitudeMax,
    coordinates.latitudeMin,
    coordinates.longitudeMin,
    coordinates.longitudeMax,
    coordinates.longtitude,
    coordinates.latitude,
  ]);

  const [filterData, setFilterData] = useState("");
  const [filterType, setFilterType] = useState("");
  const handleChange = (e) => {
    e.preventDefault();
    setFilterData(e.target.value);
    return filterData;
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setFilterType(e.target.value);
    return filterType;
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <select onChange={handleSelect}>
        <option value="">Wybierz filtr</option>
        <option value="firstName">Imię</option>
        <option value="lastName">Nazwisko</option>
        <option value="plates">Numer rejestracyjny</option>
      </select>

      {user.map((el, i) => {
        if (filterType === "") {
          return (
            <div key={i}>
              <div>
                <img src={`http://picsum.photos/100/100?random=${i}`} alt="" />
              </div>
              <div>
                <div>{`Kierowca: ${el.firstName} ${el.lastName}`}</div>
                <div>{`Numer rejestracyjny: ${el.plates}`}</div>
                <div>{`Nr kontaktowy: ${el.phone}`}</div>
                <div>{`Średnia prędkość: ${el.speed} km/h`}</div>
                <div>
                  {`Pozycja samochodu: ${el.renderLatitude().degree}°N ${
                    el.renderLatitude().minutes < 10 ? "0" : ""
                  }${el.renderLatitude().minutes}' ${
                    el.renderLatitude().seconds < 10 ? "0" : ""
                  }${el.renderLatitude().seconds}'', ${
                    el.renderLongitude().degree
                  }°E ${el.renderLongitude().minutes < 10 ? "0" : ""}${
                    el.renderLongitude().minutes
                  }' ${el.renderLongitude().seconds < 10 ? "0" : ""}${
                    el.renderLongitude().seconds
                  }''`}
                </div>
              </div>
              <div>💖</div>
            </div>
          );
        }
        if (el[filterType].toLowerCase().includes(filterData)) {
          return (
            <div key={i}>
              <div>
                <img src={`http://picsum.photos/100/100?random=${i}`} alt="" />
              </div>
              <div>
                <div>{`Kierowca: ${el.firstName} ${el.lastName}`}</div>
                <div>{`Numer rejestracyjny: ${el.plates}`}</div>
                <div>{`Nr kontaktowy: ${el.phone}`}</div>
                <div>{`Średnia prędkość: ${el.speed} km/h`}</div>
                <div>
                  {`Pozycja samochodu: ${el.renderLatitude().degree}°N ${
                    el.renderLatitude().minutes < 10 ? "0" : ""
                  }${el.renderLatitude().minutes}' ${
                    el.renderLatitude().seconds < 10 ? "0" : ""
                  }${el.renderLatitude().seconds}'', ${
                    el.renderLongitude().degree
                  }°E ${el.renderLongitude().minutes < 10 ? "0" : ""}${
                    el.renderLongitude().minutes
                  }' ${el.renderLongitude().seconds < 10 ? "0" : ""}${
                    el.renderLongitude().seconds
                  }''`}
                </div>
              </div>
              <div>💖</div>
            </div>
          );
        }
        return <div></div>;
      })}
    </>
  );
};
