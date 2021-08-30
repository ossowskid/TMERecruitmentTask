import { useEffect, useState } from "react";

export const useGetCars = () => {
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
        "https://randomuser.me/api/?results=50&name&inc=name"
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

    const records = [];
    for (let id = 0; id < 50; id++) {
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

  if (
    localStorage.getItem("users") === null ||
    localStorage.getItem("users") === "[]"
  ) {
    localStorage.setItem("users", JSON.stringify(user));
  } else {
    return;
  }
};
