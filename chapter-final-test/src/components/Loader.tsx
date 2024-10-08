interface Props {
  emptyAddressBook: boolean;
  children?: React.ReactNode;
}
const LoadingDots = () => {
  return <div>Empty data</div>;
};

export const Loader: React.FC<Props> = ({ emptyAddressBook, children }) => {
  return (
    <div>
      {emptyAddressBook && <LoadingDots />}
      {children}
    </div>
  );
};
