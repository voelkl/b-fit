fetch("http://localhost:3000")
  .then((response) => response.json())
  .then((data) => {
    data.sort((a, b) => new Date(a.date) - new Date(b.date));
  })
