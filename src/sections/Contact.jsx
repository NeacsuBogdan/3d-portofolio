import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
    const formRef = useRef();

    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = ({target: {name, value}}) => {
        setForm({ ...form, [name]: value });
    }
    //service_j7zoeaa
    const handleSubmit =  async (e) => {
        e.preventDefault();

        setLoading(true);

        try {
         await emailjs.send(
                'service_j7zoeaa',
                'template_kvrii2c',
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                },
             'HAwTDrQ_E9XtlCZaH'
             )

            setLoading(false);

         alert('Your email has been sent.');
         setForm({
             name: '',
             email: '',
             message: '',
         });
        } catch (e) {
            console.log(e);
            alert('Something went wrong.');
        }

    }

    return (
        <section className='c-space my-20' id='contact'>
            <h3 className='head-text'>
                Contact Me
            </h3>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src='/assets/terminal.png' alt='terminal-bg' className='absolute inset-0 min-h-screen'/>
                <div className='max-w-xl relative z-10 sm:px-10 px-5 mt-12'>
                    <h3 className='head-text'>
                        Let's talk
                    </h3>
                    <p className='text-lg text-white-600 mt-3'>
                        Got an idea or need a hand with your project? Drop me a message—I'm always up for building something cool!
                    </p>

                    <form ref={formRef} onSubmit={handleSubmit}
                    className='mt-12 flex flex-col space-y-7'>
                        <label className='flex flex-col space-y-3'>
                            <span className='text-lg text-white-600'>
                                Full Name
                            </span>
                            <input
                            type='text'
                            placeholder='John Doe'
                            onChange={handleChange}
                            value={form.name}
                            name='name'
                            required
                            className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none'/>
                        </label>
                        <label className='flex flex-col space-y-3'>
                            <span className='text-lg text-white-600'>
                                Email
                            </span>
                            <input
                                type='email'
                                placeholder='JohnDoe@gmail.com'
                                onChange={handleChange}
                                value={form.email}
                                name='email'
                                required
                                className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none'/>
                        </label>
                        <label className='flex flex-col space-y-3'>
                            <span className='text-lg text-white-600'>
                                Your Message
                            </span>
                            <textarea
                                placeholder="Hi, I wanna give you a job..."
                                onChange={handleChange}
                                value={form.message}
                                name='message'
                                required
                                rows={5}
                                className='w-full bg-black-300 px-5 py-2 min-h-14 rounded-lg placeholder:text-white-500 text-lg text-white-800 shadow-black-200 shadow-2xl focus:outline-none'/>
                        </label>

                        <button className='bg-black-500 px-5 py-2 min-h-12 rounded-lg shadow-black-200 shadow-2xl flex justify-center items-center text-lg text-white gap-3'
                                type='submit'
                                disabled={loading}>

                            {loading ? 'Sending...' : 'Send Message'}

                            <img src='/assets/arrow-up.png' alt='arrow-up' className='w-2.5 h-2.5 object-contain invert brightness-0'/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
