import { useState } from "react";

export default function DogPics() {
  const url = "https://dog.ceo/api/breeds/image/random";
  const [imgUrl, setImgUrl] = useState(
    "https://images.dog.ceo/breeds/spaniel-cocker/n02102318_4172.jpg"
  );

  const fetchNewPicture = async () => {
    const response = await fetch(url);
    const pictureObj = await response.json();
    setImgUrl(pictureObj.message);
  };

  return (
    <div className="dog-pics">
      <img alt="dog" className="c04-img" src={imgUrl} data-testid="img" />
      <button onClick={fetchNewPicture} data-testid="button">
        🐶
      </button>
    </div>
  );
}
