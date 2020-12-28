interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props): JSX.Element {
  return (
    <div className="wrapper-container">
      <div className={`${className} w-full`}>{children}</div>
    </div>
  );
}
Container.defaultProps = {
  className: "",
};
export default Container;
