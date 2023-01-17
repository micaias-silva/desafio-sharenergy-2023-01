import { StyledImg, StyledVideo } from './styles';

interface MediaProps {
  url: string;
}

const Media = ({ url }: MediaProps) => {
  return url.endsWith('.mp4') ? (
    <StyledVideo src={url} autoPlay loop muted />
  ) : (
    <StyledImg src={url} />
  );
};

export default Media;
