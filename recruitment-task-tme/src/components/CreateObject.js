import { useState } from "react";
import {
  ImageBox,
  InformationInside,
  InformationText,
  InsideBox,
  MainBox,
  PlatesNumberInformation,
  SecondBox,
  Wrapper,
} from "../styled/CreateObject.styled";

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
            <Wrapper key={i}>
              <MainBox>
                <ImageBox>
                  <img
                    src={`http://picsum.photos/100/100?random=${i}`}
                    alt=""
                  />
                </ImageBox>
                <SecondBox>
                  <PlatesNumberInformation>
                    <InformationText>
                      Numer rejestracyjny:{" "}
                      <InformationInside>{el.plates}</InformationInside>
                    </InformationText>
                  </PlatesNumberInformation>
                  <InsideBox>
                    <InformationText>
                      Kierowca:{" "}
                      <InformationInside>
                        {el.firstName} {el.lastName}
                      </InformationInside>
                    </InformationText>
                    <InformationText>
                      Nr kontaktowy:{" "}
                      <InformationInside>{el.phone}</InformationInside>
                    </InformationText>
                    <InformationText>
                      Średnia prędkość:{" "}
                      <InformationInside>{el.speed}</InformationInside> km/h
                    </InformationText>
                    <InformationText>
                      Pozycja samochodu:
                      <InformationInside>
                        {recalculate(el.coordinates.latitude).degree}°N{" "}
                        {recalculate(el.coordinates.latitude).minutes < 10
                          ? "0"
                          : ""}
                        {recalculate(el.coordinates.latitude).minutes}'{" "}
                        {recalculate(el.coordinates.latitude).seconds < 10
                          ? "0"
                          : ""}
                        {recalculate(el.coordinates.latitude).seconds}'',{" "}
                        {recalculate(el.coordinates.longtitude).degree}°E{" "}
                        {recalculate(el.coordinates.longtitude).minutes < 10
                          ? "0"
                          : ""}
                        {recalculate(el.coordinates.longtitude).minutes}'{" "}
                        {recalculate(el.coordinates.longtitude).seconds < 10
                          ? "0"
                          : ""}
                        {recalculate(el.coordinates.longtitude).seconds}''
                      </InformationInside>
                    </InformationText>
                  </InsideBox>
                </SecondBox>
              </MainBox>
            </Wrapper>
          );
        }
        if (el[filterType].toLowerCase().includes(filterData)) {
          return (
            <Wrapper key={el.firstName}>
              <MainBox>
                <ImageBox>
                  <img
                    src={`http://picsum.photos/100/100?random=${i}`}
                    alt=""
                  />
                </ImageBox>
                <SecondBox>
                  <PlatesNumberInformation>
                    <InformationText>
                      Numer rejestracyjny:{" "}
                      <InformationInside>{el.plates}</InformationInside>
                    </InformationText>
                  </PlatesNumberInformation>
                  <InsideBox>
                    <InformationText>
                      Kierowca:{" "}
                      <InformationInside>
                        {el.firstName} {el.lastName}
                      </InformationInside>
                    </InformationText>
                    <InformationText>
                      Nr kontaktowy:{" "}
                      <InformationInside>{el.phone}</InformationInside>
                    </InformationText>
                    <InformationText>
                      Średnia prędkość:{" "}
                      <InformationInside>{el.speed}</InformationInside> km/h
                    </InformationText>
                    <InformationText>
                      Pozycja samochodu:
                      <InformationInside>
                        {recalculate(el.coordinates.latitude).degree}°N{" "}
                        {recalculate(el.coordinates.latitude).minutes < 10
                          ? "0"
                          : ""}
                        {recalculate(el.coordinates.latitude).minutes}'{" "}
                        {recalculate(el.coordinates.latitude).seconds < 10
                          ? "0"
                          : ""}
                        {recalculate(el.coordinates.latitude).seconds}'',{" "}
                        {recalculate(el.coordinates.longtitude).degree}°E{" "}
                        {recalculate(el.coordinates.longtitude).minutes < 10
                          ? "0"
                          : ""}
                        {recalculate(el.coordinates.longtitude).minutes}'{" "}
                        {recalculate(el.coordinates.longtitude).seconds < 10
                          ? "0"
                          : ""}
                        {recalculate(el.coordinates.longtitude).seconds}''
                      </InformationInside>
                    </InformationText>
                  </InsideBox>
                </SecondBox>
              </MainBox>
            </Wrapper>
          );
        }
        return <div></div>;
      })}
    </>
  );
};
