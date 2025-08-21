const getData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data berhasil diambil!");
    }, 1000);
  });
};

// Pakai Promise
getData().then((res) => console.log(res));

// Pakai async/await
(async () => {
  const result = await getData();
  console.log(result);
})();
