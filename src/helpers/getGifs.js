const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Iv9oACgovcqVesuSx0uTacah7xq14qPC&q=${category}&limit=10`;
  const resp = await fetch(url);
  console.log(category);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));
  console.log(gifs);
  return gifs;
};

export default getGifs;
