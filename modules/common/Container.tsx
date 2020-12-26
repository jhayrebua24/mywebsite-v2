interface Props {
  children: React.ReactNode;
  className?: string;
}

function Container({ children, className }: Props): JSX.Element {
  return (
    <div className="container mx-auto">
      <div className={className}>{children}</div>
    </div>
  );
}
Container.defaultProps = {
  className: "",
};
export default Container;
