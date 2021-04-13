import axios from "axios";

export const getRequest = async (url) => {
  const data = await axios
    .get(url)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
    });

  return data;
};
