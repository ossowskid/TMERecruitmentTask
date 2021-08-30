import styled from "styled-components";

export const Wrapper = styled.div`
  //   display: flex;
  //   flex-flow: column;
  //   @media only screen and (max-width: 480px) {
  //     width: 480px;
  //   }
`;

export const ImageBox = styled.div`
  display: flex;
  @media only screen and (max-width: 480px) {
    width: 50px;
    height: 50px;
  }
`;

export const MainBox = styled.div`
  display: flex;
  flex-flow: row;
  margin: 5px 0;
  width: 80vw;
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
  } ;
`;

export const InformationInside = styled.span`
  font-size: 14px;
  @media only screen and (max-width: 480px) {
    font-size: 8px;
  } ;
`;
