import Image from 'next/image';
interface InfoContainerProps {
    headerText: string;
    contentText: string;
    image?: any;
    left? : boolean
}


export default function InfoContainer({headerText, contentText, image, left = true} : InfoContainerProps) {
    return (
        <div className={`${left? 'text-left': 'text-right'}`}>
            <h3 className="relative text-lg text-slate-100 font-semibold">
            {headerText}
            <span className={`absolute bottom-0 ${left? 'left-0': 'right-0'} w-full border-t-2 border-orange-600`}></span>
            </h3>
            <div className='md:p-4 flex flex-row mt-2 md:gap-10 gap-4 items-stretch'>
            <p className={`text-left md:text-lg w-full bg-slate-200 rounded-md p-2 ${left? 'order-first' : 'order-last'}`}>
                {contentText}
            </p>
            <Image  placeholder='blur' className='h-full w-full rounded-md ' width={500} height={500} src={image} alt='keys' />
            </div>
                
      </div>
    )
};
