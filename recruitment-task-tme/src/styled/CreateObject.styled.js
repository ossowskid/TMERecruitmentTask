import styled from "styled-components";

export const Wrapper = styled.div``;

export const ImageBox = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
  @media only screen and (max-width: 768px) {
    width: 75px;
    height: 75px;
  } ;
`;

export const MainBox = styled.div`
  display: flex;
  flex-flow: row;
  margin: 5px 0;
  background-color: lightgray;
  @media only screen and (max-width: 480px) {
    max-width: 480px;
    display: flex;
    flex-flow: column;
  }
`;
export const SecondBox = styled.div`
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-flow: column;
  }
`;

export const InsideBox = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    display: flex;
    flex-flow: column;
  }
`;

export const PlatesNumberInformation = styled.div`
  height: 30px;
`;

export const InformationText = styled.p`
  padding: 5px;
  font-size: 12px;

  @media only screen and (max-width: 480px) {
    padding: 0;
    font-size: 6px;
  }
  @media only screen and (max-width: 768px) {
    padding: 3px;
    font-size: 8px;
  } ;
`;

export const InformationInside = styled.span`
  font-size: 14px;
  @media only screen and (max-width: 480px) {
    font-size: 8px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  } ;
`;
