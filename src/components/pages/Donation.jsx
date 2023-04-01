import { Link } from "react-router-dom";
import adoptions from "../adoptionLinks";

const Donation = () => {
  return (
    <div className="bg-white p-10 w-full">
      <h1 className="font-bold text-xl p-3">Adopt a Red Panda</h1>
      <p className="font-bold text-md p-3 text-red-700">
        Support our Red Panda Conversation Work by Adopting a Red Panda
        Symbolically.
      </p>
      <div className="p-6 flex flex-wrap gap-6 justify-center items-center">
        {adoptions.map((panda) => (
          <div
            key={panda.id}
            className="flex-col gap-2 justify-center items-cente"
          >
            <Link to={`/donation/${panda.id}`}>
              <img
                src={panda.image}
                alt={panda.name}
                className="h-80 w-60 object-cover justify-self-center rounded-lg cursor-pointer hover:scale-110"
              />
            </Link>
            <h2 className="font-bold text-lg text-center p-6 text-red-800">
              {panda.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Donation;
