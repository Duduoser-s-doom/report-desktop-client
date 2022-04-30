export const parseText = (text: string, obj: object) => {
  let parsedText = text;
  Object.keys(obj).forEach((o) => {
    parsedText = parsedText.replaceAll(
      `{${o}}`,
      String(obj[o as keyof typeof obj])
    );
  });
  return parsedText;
};
