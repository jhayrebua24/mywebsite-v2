import clsx from "clsx";

interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props): JSX.Element {
  return (
    <div className="wrapper-container">
      <div className={clsx("w-full", className && className)}>{children}</div>
    </div>
  );
}
Container.defaultProps = {
  className: "",
};
export default Container;
