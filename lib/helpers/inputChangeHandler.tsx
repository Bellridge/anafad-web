export const inputChangeHandler = (
  e: React.ChangeEvent<HTMLInputElement> | any,
  setState: any,
  isSimple?: boolean,
  leadingText?: string,
  lowerCaseAndHyphenate?: boolean
) => {
  const rawValue = e.target.value;

  const transformedValue = lowerCaseAndHyphenate
    ? rawValue.replaceAll(" ", "-").toLowerCase()
    : rawValue;

  if (isSimple) {
    setState(transformedValue);
  } else {
    setState((prevState: any) => {
      const currentValue = prevState[e.target.name] || "";

      const newValue =
        !currentValue && leadingText
          ? `${leadingText}${transformedValue}`
          : transformedValue;

      return {
        ...prevState,
        [e.target.name]: newValue,
      };
    });
  }
};
