import "./new-image.css";

function NewImage({ image_src }: { image_src: string }) {
  return <img className="new-image" src={image_src} />;
}

export default NewImage;
