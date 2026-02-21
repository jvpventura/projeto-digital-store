import { Link } from "react-router-dom";

export default function Information({ title, informations }) {
  return (
    <div>
      <h3 className="text-lg font-bold mb-6 text-white">{title}</h3>
      <ul className="flex flex-col gap-4 text-gray-400">
        {informations.map((info, index) => (
          <li key={index}>
            <Link to={info.link} className="hover:text-white transition">
              {info.text}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
