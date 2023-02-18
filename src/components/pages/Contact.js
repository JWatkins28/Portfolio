import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { validateEmail } from '../../utils/helpers';

export default function Contact() {

    const theme = createTheme({
        status: {
            danger: '#e53e3e',
        },
        palette: {
            dark: {
                main: '#000000',
                contrastText: '#fff',
            },
        },
    });

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { target } = e;
        const inputName = target.name;
        const inputValue = target.value;

        if (inputName === 'email') {
            setEmail(inputValue)
        } else if (inputName === 'name') {
            setName(inputValue)
        } else {
            setMessage(inputValue)
        }
    }

    const inputValidation = (v) => {

        const iName = v.target.name;
        const iValue = v.target.value;

        const nameError = document.getElementById('name-error')
        const emailError = document.getElementById('email-error')
        const messageError = document.getElementById('message-error')

        if (iName === 'email' && !iValue && emailError.classList.contains('opacity-0')) {
            emailError.classList.toggle('opacity-0')
        } else if (iName === 'email' && iValue) {
            if (!validateEmail(iValue) && emailError.classList.contains('opacity-0')) {
                emailError.classList.toggle('opacity-0')
            } else if (validateEmail(iValue) && !emailError.classList.contains('opacity-0')) {
                emailError.classList.toggle('opacity-0')
            }
        } else if (iName === 'name' && !iValue && nameError.classList.contains('opacity-0')) {
            nameError.classList.toggle('opacity-0')
        } else if (iName === 'name' && iValue && !nameError.classList.contains('opacity-0')) {
            nameError.classList.toggle('opacity-0')
        } else if (iName === 'message' && !iValue && messageError.classList.contains('opacity-0')) {
            messageError.classList.toggle('opacity-0')
        } else if (iName === 'message' && iValue && !messageError.classList.contains('opacity-0')) {
            messageError.classList.toggle('opacity-0')
        }
    }


    return (
        <ThemeProvider theme={theme}>
            <div className="bg-white rounded-lg drop-shadow-lg w-1/2">
                <div className="flex items-center justify-center p-12">
                    <div className="mx-auto w-full max-w-[550px] text-center">
                        <p className="text-2xl font-semibold">Contact Me!</p>
                        <form>
                            <div className="mb-5 text-left">
                                <label
                                    htmlFor="name"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Your Name"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleInputChange}
                                    onBlur={inputValidation}
                                />
                                <p className="opacity-0" id="name-error">You must enter your name.</p>
                            </div>
                            <div className="mb-5 text-left">
                                <label
                                    htmlFor="email"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="example@domain.com"
                                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleInputChange}
                                    onBlur={inputValidation}
                                />
                                <p className="opacity-0" id="email-error">You must enter a valid email.</p>
                            </div>
                            <div className="mb-5 text-left">
                                <label
                                    htmlFor="message"
                                    className="mb-3 block text-base font-medium text-[#07074D]"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows="4"
                                    name="message"
                                    id="message"
                                    placeholder="Type your message"
                                    className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                    onChange={handleInputChange}
                                    onBlur={inputValidation}
                                ></textarea>
                                <p className="opacity-0" id="message-error">You must enter a message.</p>
                            </div>
                            <div>
                                <Button color="dark" variant="contained" size="large">Submit</Button>
                            </div>
                        </form>
                    </div>
                    {/* <!-- Author: FormBold Team --> <!-- Learn More: https://formbold.com --> */}
                </div>
            </div>
        </ThemeProvider>
    )
}
