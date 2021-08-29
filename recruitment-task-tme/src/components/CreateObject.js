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
      return randomPlateLetters + plateNumberString;
    };
    const records = [];
    for (let id = 0; id <= 19; id++) {
      const obj = {
        id,
        plates: randomPlate(),
        firstName: names[id].name.first,
        lastName: names[id].name.last,
        phone: randomPhoneNumber(),
        speed: generateRandomSpeed(60, 200),
        latlong: "123456",
      };
      records.push(obj);
      setUser(records);
    }
  }, [names, alphabet]);

  return (
    <>
      {user.map((el, i) => {
        return (
          <div key={i}>
            <div>
              {el.firstName} {el.lastName}
            </div>
            <div>{el.plates}</div>
            <div>{`+48 ${el.phone}`}</div>
            <div>{el.speed}</div>
          </div>
        );
      })}
    </>
  );
};
