import FacebookIcon from '@/../public/images/iconFacebook.svg'
import InstagramIcon from '@/../public/images/iconInstagram.svg'
import SocialContainer from '@/components/containers/socialContainer';

export default function Footer({className} : {className: string}) {
  return (
    <footer className={`${className} w-full h-10 left-0 border-t border-black p-2  text-center text-sm text-gray-500`}>
      <p>Znajdź nas na</p>
      <div className='flex justify-center gap-2 pb-4'>
        <SocialContainer
          name='Facebook'
          src={FacebookIcon}
          link='https://www.facebook.com'
        />
        <SocialContainer
          name='Instagram'
          src={InstagramIcon}
          link='https://www.instagram.com'
        />
      </div>
    </footer>
  );
}
