import { useEffect, useState } from "react";

export const CreateObject = () => {
  let alphabet = "abcdefghijklmnoprstuwxyz";

  const [user, setUser] = useState([]);
  const [names, setNames] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://randomuser.me/api/?results=20&name&inc=name"
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

    const records = [];
    for (let id = 0; id <= 19; id++) {
      const obj = {
        plates: randomPlate(),
        firstName: names[id].name.first,
        lastName: names[id].name.last,
        phone: randomPhoneNumber(),
        speed: generateRandomSpeed(60, 200),
      };
      records.push(obj);
      setUser(records);
    }
  }, [names, alphabet]);

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

    console.log(e, e.value);
    return filterType;
  };

  return (
    <>
      <input type="text" onChange={handleChange} />
      <select onChange={handleSelect}>
        <option value="">Choose filter</option>
        <option value="firstName">Name</option>
        <option value="lastName">Surname</option>
        <option value="plates">Plate number</option>
      </select>

      {user.map((el, i) => {
        if (filterType === "") {
          return (
            <ul key={i}>
              <li>{`Name: ${el.firstName}`}</li>
              <li>{`Surname: ${el.lastName}`}</li>
              <li>{`Plate: ${el.plates}`}</li>
              <li>{`Phone number: ${el.phone}`}</li>
              <li>{`Speed: ${el.speed} km/h`}</li>
            </ul>
          );
        }
        if (el[filterType].toLowerCase().includes(filterData)) {
          return (
            <ul key={i}>
              <li>{`Name: ${el.firstName}`}</li>
              <li>{`Surname: ${el.lastName}`}</li>
              <li>{`Plate: ${el.plates}`}</li>
              <li>{`Phone number: ${el.phone}`}</li>
              <li>{`Speed: ${el.speed} km/h`}</li>
            </ul>
          );
        }
        return <div></div>;
      })}
    </>
  );
};
