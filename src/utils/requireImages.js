// src/utils/requireImages.js

function importAll(r) {
  let images = {};
  r.keys().forEach((key) => {
    const filename = key.replace("./", ""); // Strip the './' from the key
    images[filename] = r(key);
  });
  return images;
}

const images = importAll(
  require.context("../../assets/image/dummy", false, /\.(png|jpg|svg)$/)
);

export default images;
