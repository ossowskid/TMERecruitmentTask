export const CreateObject = () => {
  let alphabet = "abcdefghijklmnoprstuwxyz";
  const generateRandomLetter = () => {
    let randomPlateLetters =
      alphabet[Math.floor(Math.random() * alphabet.length)];
    return randomPlateLetters;
  };
  const generateRandomNum = () => {
    let plateNumber = Math.floor(Math.random() * 9) + 1;
    return plateNumber;
  };

  let obj = [];
  for (let i = 1; i < 20000; i++) {
    obj[i] = {
      plates: `${generateRandomLetter()}${generateRandomLetter()}${generateRandomLetter()}${generateRandomNum()}${generateRandomNum()}${generateRandomNum()}`,
    };
  }
  return (
    <>
      {obj.map((el, i) => {
        return <div key={i}>{el.plates}</div>;
      })}
    </>
  );
};
