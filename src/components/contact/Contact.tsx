import React, { useState } from 'react';
import './Contact.css';
import { useForm } from 'react-hook-form';
import useWeb3Forms from '@web3forms/react';
    
interface FormData {
    name: string;
    email: string;
    message: string;
}

const Contact: React.FC = () => {
    const { register, handleSubmit, reset } = useForm<FormData>();
    const [isSuccess, setIsSuccess] = useState<boolean>(false);
    const [result, setResult] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const accessKey = "4f88f749-ac12-4b49-bc9b-0ac8c40d560f";

    const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
        from_name: "Website Contact Form",
        subject: "New Message from Your Website",
    },
    onSuccess: (msg: string, data: any) => {
        setIsSuccess(true);
        setResult(msg);
        reset();
        setIsSubmitting(false);
    },
    onError: (msg: string, data: any) => {
        setIsSuccess(false);
        setResult(msg);
        setIsSubmitting(false);
    },
    });

    return (
    <section id="contact">
        <div className="contact-container">
            <h1 className="contact-title">Contact</h1>
            
            <div className="contact-form">
            {result && (
                <div className={`submit-status ${
                isSuccess ? 'success' : 
                isSubmitting ? 'sending' : 
                'error'}`}>
                {result}
                </div>
            )}
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder="Your name"
                    {...register("name", { required: true })}
                />
                </div>
                
                <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder="your.email@example.com"
                    {...register("email", { required: true })}
                />
                </div>
                
                <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    className="form-textarea"
                    placeholder="Your message here..."
                    rows={5}
                    {...register("message", { required: true })}
                />
                </div>
                
                <input type="hidden" name="redirect" value="false" />
                
                <button 
                type="submit" 
                disabled={isSubmitting} 
                className="submit-btn"
                >
                {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>
            </div>
        </div>
    </section>
    );
};

export default Contact;