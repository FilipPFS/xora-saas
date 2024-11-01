import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marker from "./Marker";

type Props = {
  icon?: string;
  children?: React.ReactNode;
  href?: string;
  containerClassName?: string;
  onClick?: () => void;
  markerFill?: string;
};

const Button = ({
  icon,
  children,
  href,
  containerClassName,
  onClick,
  markerFill,
}: Props) => {
  const Inner = () => (
    <>
      <span className="relative flex items-center min-h-[60px] px-4 g4 rounded-2xl inner-before group-hover:before:opacity-100 overflow-hidden">
        <span className="absolute -left-[1px]">
          <Marker fill={markerFill} />
        </span>
        {icon && (
          <Image
            src={icon}
            width={40}
            height={40}
            alt="icon"
            className="size-10 object-contain mr-5 z-10"
          />
        )}

        <span className="relative font-poppins base-bold text-p1 uppercase">
          {children}
        </span>
      </span>

      <span className="glow-before" />
      <span className="glow-after" />
    </>
  );
  return href ? (
    <Link
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      href={href}
    >
      <Inner />
    </Link>
  ) : (
    <button
      className={clsx(
        "relative p-0.5 g5 rounded-2xl shadow-500 group",
        containerClassName
      )}
      onClick={onClick}
    >
      <Inner />
    </button>
  );
};

export default Button;
