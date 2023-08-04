import Footer from '@/components/ui/footer'
import AnimatedContainer from "@/components/containers/animatedContainer"
import {HiPhone as PhoneIcon, HiMail as MailIcon} from 'react-icons/hi';
import nodemailer from 'nodemailer';

export default function Page() {



    async function createTodo(data) {
        "use server";
        // const title = data.get("mail")?.valueOf();
        // if (typeof title !== "string" || title.length === 0)
        //     res.json({ success: true, message: "Mail został wysłany pomyślnie." });
      const mail = data.get('mail');
      const title = data.get('title');
      const content = data.get('content');

      if (!mail || !title || !content )
        return console.log('jakiś błąd');
      
        // const transporter = nodemailer.createTransport({
        //   service: 'Gmail',
        //   host: 'smtp.gmail.com',
        //   port: 587,
        //   secure: false,
        //   auth: {
        //     user: '.....@gmail.com',
        //     pass: 'xxxx'
        //   }
        // });
        
        // // Dane do wysłania maila
        // const mailOptions = {
        //   from: '.....@gmail.com',
        //   to: mail,
        //   subject: title,
        //   text: content
        // };
        
        // // Wysyłanie maila
        // transporter.sendMail(mailOptions, function (error, info) {
        //   if (error) {
        //     console.log('Błąd wysyłania: ' + error);
        //   } else {
        //     console.log('E-mail wysłany: ' + info.response);
        //   }
        // });
      
      }
const labelClassName = 'underline font-medium'


 return (
    <div className='flex flex-wrap w-full h-screen animateUp gap-2'>

        <div className='w-full mx-10 h-fit flex md:justify-center justify-center'>   

        <form className="bg-slate-700 text-white flex gap-2 flex-col w-full h-full mx-10 max-w-[400px] border-4 p-4 border-yellow-700 rounded-sm animateLeft" action={createTodo}>
        <h3 className=' font-medium'>Skontaktuj się z nami</h3>
        <ul className='flex flex-col gap-2 mb-2 bg-slate-200 rounded-sm text-black p-2 w-fit'>
            <li className='cursor-pointer flex items-center gap-2'>
                <PhoneIcon/>
                <a href="tel:+48530884774">+48 530 883 443</a>
            </li>
            <li className='cursor-pointer flex items-center gap-2'>
              <MailIcon/>
                <a href="mailto:michal3611@gmail.com">michal3611@gmail.com</a>
            </li>
        </ul>
        <label htmlFor="mail" className={labelClassName}>Wpisz swój mail</label>
        <input
          required
          type="text"
          name="mail"
          className="border bg-slate-200 px-2 py-1 text-black rounded hover:bg-slate-300 focus-within:bg-slate-100 outline-none"
        />
        <label htmlFor="title" className={labelClassName}>Wpisz tytuł maila</label>
        <input
          required
          type="text"
          name="title"
          className="border px-2 py-1 rounded bg-slate-200 text-black hover:bg-slate-300 focus-within:bg-slate-100 outline-none"
        />
        <label htmlFor="content" className={labelClassName}>Wpisz treść maila</label>
        <textarea
          required
          type="text"
          name="content"
          className="border px-2 py-1 rounded bg-slate-200 text-black hover:bg-slate-300 focus-within:bg-slate-100 outline-none"
        />
        <div className="flex gap-1 justify-end">
          <button
            type="submit"
            className="border hover:text-slate-600 text-white bg-slate-700 border-slate-300  px-2 py-1 rounded hover:bg-slate-300 outline-none"
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
