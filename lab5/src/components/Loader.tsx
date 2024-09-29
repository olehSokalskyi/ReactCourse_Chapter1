import { MutatingDots } from "react-loader-spinner";

interface Props {
  loading: boolean;
  children?: React.ReactNode;
}
const LoadingDots = () => {
  return (
    <MutatingDots
      visible={true}
      height={100}
      width={100}
      color="#4fa94d"
      secondaryColor="#4fa94d"
      radius="12.5"
      ariaLabel="mutating-dots-loading"
      wrapperStyle={{
        direction: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      wrapperClass=""
    />
  );
}

export const Loader: React.FC<Props> = ({loading, children }) => {
  return (
    <>
      {loading && <LoadingDots />}
      {children}
    </>
  )
};
