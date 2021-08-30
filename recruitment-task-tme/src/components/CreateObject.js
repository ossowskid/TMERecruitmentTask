import { useState } from "react";

export const CreateObject = () => {
  const user = JSON.parse(localStorage.getItem("users"));

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
                  {`Pozycja samochodu: ${
                    recalculate(el.coordinates.latitude).degree
                  }°N ${
                    recalculate(el.coordinates.latitude).minutes < 10 ? "0" : ""
                  }${recalculate(el.coordinates.latitude).minutes}' ${
                    recalculate(el.coordinates.latitude).seconds < 10 ? "0" : ""
                  }${recalculate(el.coordinates.latitude).seconds}'', ${
                    recalculate(el.coordinates.longtitude).degree
                  }°E ${
                    recalculate(el.coordinates.longtitude).minutes < 10
                      ? "0"
                      : ""
                  }${recalculate(el.coordinates.longtitude).minutes}' ${
                    recalculate(el.coordinates.longtitude).seconds < 10
                      ? "0"
                      : ""
                  }${recalculate(el.coordinates.longtitude).seconds}''`}
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
