
import Link from "next/link"
import Image from "next/image"

interface SocialProps {
    name: string,
    src: any
    link: string,
}
export default function SocialContainer({name, src, link} : SocialProps) {
    

    return (
        <div className='flex justify-center items-center text-center'>
          <Link href={link}>
          <h3>{name}</h3>
          <Image className='w-10 h-10 ml-auto mr-auto' alt={name} src={src}/>
        </Link>
        </div>
    )
};
