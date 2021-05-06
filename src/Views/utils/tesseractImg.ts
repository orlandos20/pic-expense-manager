export type image = {
  name: string;
  type: string;
  uri: string;
};

const tesseractImg = async photoData => {
  console.log("img in tesseractImg --> ", photoData);
  const ApiUrl = "https://pic-expense-manager-ocr-api.herokuapp.com/";
  const Endpoint = `${ApiUrl}/recognize`;

  const data = new FormData();
  data.append("photo", photoData);

  let response = await fetch(Endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: data
  });

  let responseJson = await response.json();

  console.log("responseJson of recognize --> ", responseJson);

  return responseJson;
};

export default tesseractImg;
