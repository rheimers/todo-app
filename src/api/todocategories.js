export const getTodocategories = async () => {
  const response = await fetch("http://localhost:3332/todocategories");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};
