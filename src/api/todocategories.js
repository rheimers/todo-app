export const getTodocategories = async () => {
  const response = await fetch("http://localhost:3332/todocategories");
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};

export const postTodocategories = async (todocategory) => {
  const response = await fetch("http://localhost:3332/todocategories", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todocategory),
  });
  if (!response.ok) {
    throw response;
  }

  const result = await response.json();
  return result;
};
