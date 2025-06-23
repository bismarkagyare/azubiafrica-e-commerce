import type { FC } from "react";

type BackButtonProps = {
  label?: string;
  className?: string;
};

const BackButton: FC<BackButtonProps> = ({
  label = "Go Back",
  className = "",
}) => (
  <button
    onClick={() => history.back()}
    className={`text-neutral-500 text-sm mb-2 cursor-pointer hover:underline flex items-start px-7 ${className}`}
  >
    {label}
  </button>
);

export default BackButton;
