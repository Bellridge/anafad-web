import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const Logo: React.FC<Props> = ({ width = 50, height = 50 }) => {
  return (
    <Link href="/">
      <Image
        src="https://res.cloudinary.com/dmbqk1irb/image/upload/v1762120834/Anafad_Limited_Logo_-_Emblem_in_Deep_Blue-2-removebg-preview_wyyqwx.png"
        alt=" Anafad's logo"
        width={width}
        height={height}
        className={`w-18 h-18 ${``}`}
      />
    </Link>
  );
};

export default Logo;
