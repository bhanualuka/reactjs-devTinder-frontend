import { useNavigate } from "react-router-dom";

const EmptyConnection = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center mt-20 sm:mt-32 lg:mt-64 px-4">
      <h1 className="text-gray-500 text-center text-xl sm:text-2xl md:text-3xl lg:text-5xl">
        You don't have any connections yet. 🤝
        <br />
        Explore the <span className="font-semibold">Feed</span> to find new
        developer friends!
      </h1>
      <button
        className="btn btn-primary mt-6 w-full sm:w-64 text-lg sm:text-xl"
        onClick={() => navigate("/")}
      >
        Go to Feed 🚀
      </button>
    </div>
  );
};

export default EmptyConnection;
