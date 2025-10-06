import React, { useRef } from 'react';
import Title from '../Components/Title';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_jv0jtem', 'template_vhsc9pg', form.current, {
                publicKey: 'bwOd-cc3weFEgVc-Z',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Thank you! Rupon Gomez has received your message and will get back to you soon.', {
                        style: {
                            background: '#000',    // full black background
                            color: '#fff',         // white text
                            border: '1px solid #fff', // optional subtle border
                            padding: '16px',
                        },
                        iconTheme: {
                            primary: '#fff',       // white icon color
                            secondary: '#000',     // black background behind the icon
                        },
                    });

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <div id="contact" className="mt-52 w-full">
            <Title title={"Contact"} />
            <p className='text-center mb-20'>Looking forward to working on exciting freelance projects.</p>

            <h2 className='border-radios w-fit p-3 mb-10 font-bold text-xl bg-white text-black  mx-auto'>Send Me a message</h2>


            <form ref={form} onSubmit={sendEmail} className="mx-auto w-8/12">
                {/* stack on small screens, row on md+; smaller gap */}
                <div className="flex flex-col md:flex-row md:gap-6 gap-4">
                    {/* flex-1 + min-w-0 so the child can shrink/expand correctly */}
                    <div className="flex-1 min-w-0">
                        <label className="block mb-2 font-semibold">Your Name*</label>
                        <input
                            name="from_name"
                            type="text"
                            placeholder="Enter your name"
                            className="p-2 border rounded-lg mb-4 w-full"
                        />
                    </div>

                    <div className="flex-1 min-w-0">
                        <label className="block mb-2 font-semibold">Your Email*</label>
                        <input
                            name="from_email"
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 border rounded-lg mb-4 w-full"
                        />
                    </div>
                </div>

                <div>
                    <label className="block mb-2 font-semibold">Your Message</label>
                    <textarea
                        name="message"
                        placeholder="Write your message"
                        rows={6}
                        className="p-2 border rounded-lg mb-4 w-full"
                    />
                </div>
                <input className='btn bg-white text-black rounded-full mx-auto block w-20' type="submit" value="Send" />
            </form>
        </div>
    );
};

export default Contact;
