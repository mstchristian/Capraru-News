import "./new-preview.css";

function NewPreview({
  image_src,
  image_alt,
  children,
}: {
  image_src: string;
  image_alt: string;
  children: any;
}) {
  return (
    <div className="new-preview">
      <img className="preview-image" src={image_src} alt={image_alt} />
      <p className="preview-text">{children}</p>
    </div>
  );
}

export default NewPreview;
