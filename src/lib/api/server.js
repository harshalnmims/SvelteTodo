async function fetchData(url, obj) {
  let requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json ",
    },
    body: JSON.stringify(obj),
  };

  let response = await fetch(url, requestOptions);
  let data = await response.json();

  return data;
}
