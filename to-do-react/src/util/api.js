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

export const apiDelete = (url) => {
  setTimeout(() => {
    fetch(url, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then(() => (window.location.href = "http://localhost:3000/"))
      .catch((error) => console.log(error));
  }, 1000);
};
