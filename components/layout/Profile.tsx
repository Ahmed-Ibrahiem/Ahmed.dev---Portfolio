import Image from "next/image";
import Link from "next/link";

const Profile = () => {
  return (
    <div className="flex-start gap-3.5">
      <Link href={"/"}>
        <div className="img-box w-12.5 sm:w-15 h-12.5 sm:h-15 rounded-full border-3 border-gray-400 overflow-hidden relative">
          <Image
            src="/images/me.png"
            className="absolute top-0 left-0"
            alt=""
            width={300}
            height={300}
          />
        </div>
      </Link>
      <Link href={"/"}>
        <h1 className="text-heading text-xl font-bold uppercase">
          <span className="text-accent">Ahmed</span>.dev
        </h1>
      </Link>
    </div>
  );
};

export default Profile;
