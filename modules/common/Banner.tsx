interface Props {
  position: "left" | "right";
  text: string;
  style?: { [key: string]: any };
}

function Banner({ position, text, style }: Props): JSX.Element {
  return (
    <div className={`banner-wrapper ${position}`} style={style}>
      <div className={`banner ${position}`}>{text}</div>
    </div>
  );
}

Banner.defaultProps = {
  style: {},
};
export default Banner;
