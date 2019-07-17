import moment from "moment";

const date = function(value) {
  if (value) {
    const dateArray = value.split("T");
    const stringDate = dateArray.length ? dateArray[0] : value;
    return moment(stringDate).format("MMMM DD");
  }
};

export { date };
