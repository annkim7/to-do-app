export const apiAdd = (url, item) => {
  setTimeout(() => {
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(item),
    })
      .then((response) => response.json())
      .then(() => (window.location.href = "http://localhost:3000/"))
      .catch((error) => console.log(error));
  }, 1000);
};
