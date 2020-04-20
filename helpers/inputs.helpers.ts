export const inputIsFilled = (e: any, setIsFilled) => {
  if (e.target.value.trim() !== "") {
    setIsFilled(true);
  }
};
