import logoHeader from "../assets/logo-header.svg";
import logoFooter from "../assets/logo-footer.svg";

export default function Logo({ color = "dark" }) {
  return (
    <img
      src={color === "white" ? logoFooter : logoHeader}
      alt="Digital Store Logo"
      className="w-[253px] h-[44px]"
    />
  );
}
