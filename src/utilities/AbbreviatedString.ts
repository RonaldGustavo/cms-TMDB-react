export const abbreviatedString = (value: string) => {
  const string = value.split(" ");
  let abbreviatedStrings = string.map((string) =>
    string.charAt(0).toUpperCase()
  );
  let abbreviate = abbreviatedStrings.join("");
  abbreviate = abbreviate.substring(0, 3);

  return abbreviate;
};
