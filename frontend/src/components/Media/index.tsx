interface MediaProps {
  url: string;
}

const Media = ({ url }: MediaProps) => {
  return url.endsWith('.mp4') ? (
    <video src={url} autoPlay loop muted />
  ) : (
    <img src={url} />
  );
};

export default Media;
