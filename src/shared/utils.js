
//function to filter items using some()
export const searchItems = (items, param) => {
  console.log("obtaining new results " + param);
  if (param === "all") {
    return items;
  }

  return items.filter((item) => {
    return item.discipline.indexOf(param) > -1;
  });
};
