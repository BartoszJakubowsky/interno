import Image from 'next/image';
interface InfoContainerProps {
    headerText: string;
    contentText: string;
    image?: any;
    left? : boolean
}


export default function InfoContainer({headerText, contentText, image, left = true} : InfoContainerProps) {
    return (
        <div className={`${left? 'text-left': 'text-right'} h-full w-full`}>
            <h3 className="relative">
            {headerText}
            <span className={`absolute bottom-0 ${left? 'left-0': 'right-0'} w-2/3 border-t-2 border-orange-600`}></span>
            </h3>
            <div className='flex flex-row w-full h-full overflow-hidden m-2'>
                <div className={`w-full h-full bg-gray-300 ${left? 'order-first' :'order-last'}`}>
                <p className='p-2'>
                    {contentText}
                </p>
                </div>
                <div className='w-full'>
                <Image placeholder='blur' className='h-fit w-fit mx-8' width={500} height={500} src={image} alt='bob budowniczy' />
                </div>
            </div>
            {/* <div className='flex flex-row w-full'>
            <div className='bg-gray-200 h-full w-hull'>
                <p className='w-full bg-slate-200'>
            {contentText}
                </p>
            </div>
            {image? 
            <Image placeholder='blur' className='h-[300px] w-fit mx-8' width={500} height={500} src={image} alt='bob budowniczy' />
            :
            false}
            </div> */}
            
      </div>
    )
};
