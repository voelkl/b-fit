const july = [
  { date: "2023-07-10", weight: 92.2 },
  { date: "2023-07-12", weight: 91.2 },
  { date: "2023-07-13", weight: 93.2 },
  { date: "2023-07-15", weight: 91.9 },
  { date: "2023-07-17", weight: 91.5 },
  { date: "2023-07-18", weight: 91.0 },
  { date: "2023-07-20", weight: 91.1 },
  { date: "2023-07-25", weight: 89.9 },
  { date: "2023-07-26", weight: 91.5 },
  { date: "2023-07-27", weight: 89.8 },
  { date: "2023-07-28", weight: 90.0 },
  { date: "2023-07-30", weight: 90.2 },
]
const august = [
  { date: "2023-08-02", weight: 90.0 },
  { date: "2023-08-03", weight: 90.2 },
  { date: "2023-08-04", weight: 90.1 },
  { date: "2023-08-09", weight: 88.8 },
  { date: "2023-08-11", weight: 90.0 },
  { date: "2023-08-13", weight: 91.9 },
  { date: "2023-08-14", weight: 90.5 },
  { date: "2023-08-15", weight: 90.2 },
  { date: "2023-08-17", weight: 90.7 },
  { date: "2023-08-21", weight: 90.3 },
  { date: "2023-08-23", weight: 90.0 },
  { date: "2023-08-24", weight: 90.1 },
  { date: "2023-08-25", weight: 89.3 },
  { date: "2023-08-26", weight: 89.1 },
  { date: "2023-08-28", weight: 91.5 },
  { date: "2023-08-29", weight: 89.6 }
]
const september = [
  { date: "2023-09-05", weight: 89.9 },
  { date: "2023-09-06", weight: 89.2 },
  { date: "2023-09-09", weight: 89.3 },
  { date: "2023-09-13", weight: 89.6 },
  { date: "2023-09-14", weight: 88.8 },
  { date: "2023-09-16", weight: 88.8 },
  { date: "2023-09-17", weight: 88.8 },
  { date: "2023-09-18", weight: 88.9 },
  { date: "2023-09-20", weight: 89.1 },
  { date: "2023-09-21", weight: 88.0 },
  { date: "2023-09-22", weight: 89.0 },
  { date: "2023-09-25", weight: 89.0 },
  { date: "2023-09-26", weight: 88.6 },
  { date: "2023-09-27", weight: 87.3 }
]
const october = [
  { date: "2023-10-02", weight: 88.9 },
  { date: "2023-10-05", weight: 88.5 },
  { date: "2023-10-08", weight: 88.9 },
  { date: "2023-10-10", weight: 87.9 },
  { date: "2023-10-13", weight: 88.1 },
  { date: "2023-10-14", weight: 88.3 },
  { date: "2023-10-16", weight: 88.2 },
  { date: "2023-10-19", weight: 88.2 },
  { date: "2023-10-21", weight: 88.1 },
  { date: "2023-10-26", weight: 88.3 },
  { date: "2023-10-28", weight: 88.0 },
  { date: "2023-10-31", weight: 89.0 }
]
const november = [
  { date: "2023-11-02", weight: 87.9 },
]
const allData = [...july, ...august, ...september, ...october, ...november];

// Iterate over the combined array
allData.forEach(item => {
  console.log(item);
  fetch('http://localhost:3000/events', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "date": item.date,
      "weight": item.weight
    })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch((error) => {
    console.error('Error:', error);
  });
});