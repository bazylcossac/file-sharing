import { PropagateLoader } from "react-spinners";
export default function MainLoader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <PropagateLoader color="#8c5cff" size={23} />
    </div>
  );
}
