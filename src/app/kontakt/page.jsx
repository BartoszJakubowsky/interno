import Footer from '@/components/ui/footer'
import AnimatedContainer from "@/components/containers/animatedContainer"
export default function Page() {



    async function createTodo(data) {
        "use server";
      console.log(data);
        const title = data.get("mail")?.valueOf();
        if (typeof title !== "string" || title.length === 0)
          throw new Error("invalid title");
      
        console.log('brawo');
      
      }
const labelClassName = 'underline font-medium'
 return (
    <div className='flex flex-wrap w-full h-screen '>
        <div className='w-full mx-10 h-fit flex justify-end'>   
        <header className='mb-2 p-2 bg-slate-300 rounded-md md: w-fit md:justify-self-end'>
        <h3 className=' font-medium'>Skontaktuj się z nami</h3>
        <ul className='flex flex-col gap-2 mb-2'>
            <li className='cursor-pointer'>
                <a href="tel:530884774">530884774</a>
            </li>
            <li className='cursor-pointer'>
                <a href="mailto:michal3611@gmail.com">michal3611@gmail.com</a>
            </li>
        </ul>
        <h3 className='font-medium'>lub napisz do nas na:</h3>
        <ul>
            <li className='cursor-pointer'>Facebook</li>
            <li className='cursor-pointer'>Instagram</li>
        </ul>
        </header>
        </div>
        <div className='w-full flex justify-center'>
        <form className="flex gap-2 flex-col w-full h-full mx-10 max-w-[400px] border-2 p-4 border-slate-600 rounded-sm" action={createTodo}>
        <label htmlFor="mail" className={labelClassName}>Wpisz swój mail</label>
        <input
          type="text"
          name="mail"
          className="border px-2 py-1 rounded hover:bg-slate-300 focus-within:bg-slate-100 outline-none"
        />
        <label htmlFor="title" className={labelClassName}>Wpisz tytuł maila</label>
        <input
          type="text"
          name="title"
          className="border px-2 py-1 rounded hover:bg-slate-300 focus-within:bg-slate-100 outline-none"
        />
        <label htmlFor="content" className={labelClassName}>Wpisz treść maila</label>
        <textarea
          type="te"
          name="content"
          className="border px-2 py-1 rounded hover:bg-slate-300 focus-within:bg-slate-100 outline-none"
        />
        <div className="flex gap-1 justify-end">
          <button
            type="submit"
            className="border hover:text-white border-slate-600 text-slate-600 px-2 py-1 rounded hover:bg-slate-700 outline-none"
          >
            Wyślij
          </button>
        </div>
      </form>
      </div>
      <Footer/>
    </div>
 )
  };
