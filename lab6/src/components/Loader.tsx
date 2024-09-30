import { MutatingDots } from "react-loader-spinner";

interface Props {
  visible: boolean;
  height: number;
  width: number;
  color: string;
  secondaryColor: string;
  children?: React.ReactNode;
}
export const Loader: React.FC<Props> = (props) => {
  return (
    <div>
      <MutatingDots
        visible={props.visible}
        height={props.height}
        width={props.width}
        color={props.color}
        secondaryColor={props.secondaryColor}
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
        />
        {props.children}
    </div>
  );
};
