import React from 'react'
import { MdOutlineEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Toaster, toast } from "react-hot-toast";
import { FiInstagram } from "react-icons/fi";
import { FaSquareXTwitter } from "react-icons/fa6";
function Contact() {

    function handleSubmit(e) {
        e.preventDefault();

        const formData = new FormData(e.target);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
        })
            .then(() => {
                toast.success("Message sent successfully!");
                e.target.reset(); // optional: clears the form
            })
            .catch((error) => toast.error("Something went wrong. Try again."))
    }
    return (

        <section id='contact' className='md:container md:mx-auto py-10 px-4  flex flex-col gap-10'>
            <Toaster position="md:top-right " />

            <div className='heading-about'>
                <h2 className='font-extrabold md:text-5xl text-3xl'>
                    Get In Touch
                </h2>
                <div className='border-2 w-18 md:w-28 border-blue-500'></div>
            </div>
            <div className="sub-section flex flex-col gap-10 ">
                <p className='text-gray-400'>
                    Have a question or want to work together? Feel free to drop me a message. I'd love to hear from you!
                </p>
                <div className="sub-sub-section flex md:flex-row flex-col gap-4 ">
                    <div className="contact-information   md:w-3/4 flex flex-col gap-2">
                        <div className='flex flex-col gap-2'>
                            <h2 className='font-semibold text-xl'>
                                Contact Information
                            </h2>
                            <p className='text-gray-400'>
                                Fill up the form and I'll get back to you as soon as possible.
                            </p>
                        </div>
                        <div className='social-cards flex flex-col gap-2'>
                            <div className='social-handle-card  p-3'>
                                <span className='flex gap-3 items-center justify-start '>
                                    <span>
                                        <MdOutlineEmail className='text-3xl text-blue-500' />

                                    </span>
                                    <h3 className='flex flex-col items-start justify-start'>
                                        <span className='text-lg font-medium'>
                                            Email
                                        </span>
                                        <span className='text-gray-400 '>
                                            ahmedsial295@gmail.com
                                        </span>
                                    </h3>
                                </span>
                            </div>
                            <div className='social-handle-card  p-3'>
                                <span className='flex gap-3 items-center justify-start'>
                                    <span>
                                        <FaPhoneAlt className='text-2xl text-blue-500' />

                                    </span>
                                    <h3 className='flex flex-col items-start justify-start'>
                                        <span className='text-lg font-medium'>
                                            Phone
                                        </span>
                                        <span className='text-gray-400 '>
                                            +92 341 5941505
                                        </span>
                                    </h3>
                                </span>
                            </div>
                            <div className='social-handle-card  p-3'>
                                <span className='flex gap-3 items-center justify-start'>
                                    <span>
                                        <SlLocationPin className='text-2xl text-blue-500' />

                                    </span>
                                    <h3 className='flex flex-col items-start justify-start'>
                                        <span className='text-lg font-medium'>
                                            Location
                                        </span>
                                        <span className='text-gray-400 '>
                                            Gujranwala, Pakistan
                                        </span>
                                    </h3>
                                </span>
                            </div>
                        </div>
                        <div className='Connect-with-me flex flex-col gap-3 px-3 py-2' >
                            <h2 className='text-xl font-semibold'>
                                Connect With Me
                            </h2>
                            <div className='flex items-center gap-3 pl-5'>

                                <span className=' p-2 rounded-full cursor-pointer bg-gray-700 hover:bg-blue-500'>
                                    <a href="https://github.com/razaahmad0192" target="_blank" rel="noopener noreferrer"> <FaGithub className="w-7 h-7 text-gray-400" /> </a>
                                </span>



                                <span className=' p-2 rounded-full cursor-pointer bg-gray-700 hover:bg-blue-500'>
                                    <a href="https://www.linkedin.com/in/ahmed-raza-239b21237/" target="_blank" rel="noopener noreferrer">  <FaLinkedin className=" w-7 h-7 text-gray-400" />
                                    </a>
                                </span>




                                <span className=' p-2 rounded-full cursor-pointer bg-gray-700 hover:bg-blue-500'>
                                    <a href="https://www.instagram.com/ahmed_sial_1/" target="_blank" rel="noopener noreferrer">       <FiInstagram className=" w-7 h-7 text-gray-400" />   </a>
                                </span>



                                <span className=' p-2 rounded-full cursor-pointer bg-gray-700 hover:bg-blue-500'><a href="https://x.com/ahmedsial999" target="_blank" rel="noopener noreferrer"><FaSquareXTwitter className=" w-7 h-7 text-gray-400" /></a>
                                </span>
 



                            </div>
                        </div>
                    </div>

                    <div className='COntact-form border rounded-xl border-gray-800 md:px-6 px-2 md:pt-12 pt-5 pb-6 md:w-full flex flex-col gap-4'>
                        <form
                            name="contact"
                            method="POST"
                            data-netlify="true"
                            onSubmit={handleSubmit}
                            className='flex flex-col gap-5'
                        >
                            {/* Required hidden input for Netlify DIAAA KUCH TO GARBAR A*/}
                            <input type="hidden" name="form-name" value="contact" />
                            <div className='NAME_EMAIL grid md:grid-cols-2 grid-cols-1 gap-7 '>
                                <div className='NAME-LABEL flex flex-col gap-1.5'>

                                    <label className='font-medium' id='name' htmlFor="name">Name</label>
                                    <input className='w-full p-2 border border-gray-800 rounded-lg text-sm' type="text" name="name" placeholder="John Doe" required />
                                </div>
                                <div className='EMAIL-LABEL flex flex-col gap-1.5'>
                                    <label className='font-medium' id='email' htmlFor="email">Email</label>
                                    <input className='w-full p-2 border border-gray-800 rounded-lg text-sm' type="email" name="email" placeholder="john@example.com" required />
                                </div>

                            </div>
                            <div className='EMAIL-LABEL flex flex-col gap-1.5'>

                                <label className='font-medium' id='subject' htmlFor="subject">Subject</label>
                                <input className='w-full p-2 border border-gray-800 rounded-lg text-sm' type="text" name="subject" placeholder="How can I help you?" required />
                            </div>
                            <div className='EMAIL-LABEL flex flex-col gap-1.5'>

                                <label className='font-medium' id='message' htmlFor="message">Message</label>
                                <textarea className='w-full p-2 h-35  border border-gray-800 rounded-lg text-sm' name="message" placeholder="Your Message here..." required ></textarea>
                            </div>
                               
                            <div>
                                    <button className='bg-blue-500 hover:bg-blue-800 w-full p-3 rounded-xl' type="submit">Send</button>
                            </div>
                             




                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
