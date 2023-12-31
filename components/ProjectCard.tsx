"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Props = {
    id: string;
    image: string;
    title: string;
    name: string;
    avatarUrl: string;
    userId: string;
};


const ProjectCard = ({ id, image, title, name, avatarUrl, userId }: Props) => {
    const [randomLikes, setRandomLikes] = useState(0);
    const [randomViews, setRandomViews] = useState('');

    useEffect(() => {
        setRandomLikes(Math.floor(Math.random() * 10000))
        setRandomViews(String((Math.floor(Math.random() * 10000) / 1000).toFixed(1) + 'k'))
    }, []);

    return (
     <div className="flexCenter flex-col rounded-2xl drop-shadow-card ">
      <Link
       href={`/project/${id}`}
       className="flexCenter group relative w-full h-full overflow-hidden rounded-2xl"
      >
       <Image
        src={image}
        width={414}
        height={314}
        className="w-full h-full group-hover:scale-110 transition-all duration-300 object-cover"
        alt="project image"
       />

       <div className="hidden group-hover:flex profile_card-title transition-all duration-300">
        <p className="w-full">{title}</p>
       </div>
      </Link>

      <div className="flexBetween w-full px-2 mt-3 font-semibold text-[.75rem]">
       <Link href={`/profile/${userId}`}>
        <div className="flexCenter gap-1">
         <Image
          src={avatarUrl}
          width={20}
          height={20}
          className="rounded-full"
          alt="profile image"
         />
         <p className="">{name}</p>
        </div>
       </Link>

       <div className="flexCenter gap-3">
        <div className="flexCenter gap-1">
         <Image
          src="/hearth.svg"
          width={13}
          height={12}
          alt="heart"
         />
         <p className="text-[.75rem]">{randomLikes}</p>
        </div>
        <div className="flexCenter gap-1">
         <Image
          src="/eye.svg"
          width={12}
          height={9}
          alt="eye"
         />
         <p className="text-[.75rem]">{randomViews}</p>
        </div>
       </div>
      </div>
     </div>
    );
};

export default ProjectCard;