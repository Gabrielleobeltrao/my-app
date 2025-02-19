import { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import LogoByOne from "../components/LogoByOne"
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, db } from "../service/fireBaseConfig"
import { doc, setDoc } from 'firebase/firestore'

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault()
        const userCredential = await createUserWithEmailAndPassword(email, password)
        if (userCredential) {
            const user = userCredential.user;
            await setDoc(doc(db, 'users', user.uid), {
                email: user.email,
                createdAt: new Date(),
            })
        }
    };

    useEffect(() => {
        if (user) {
            navigate('/home');
        }
    }, [user, navigate]);

    return (
        <div className="w-screen h-screen flex items-center xl:justify-center xl:items-center xl:py-16">
            <div className="w-full pb-28 xl:w-1/2">
                <LogoByOne />
                <form onSubmit={handleRegister} className="flex flex-col gap-5 px-10">
                    <input 
                        className="bg-neutral-200 rounded-2xl w-full pl-3 placeholder:text-black placeholder:text-base py-1.5" 
                        type="email" 
                        id="email" 
                        placeholder="Email"
                        onChange={e => setEmail(e.target.value)}
                        value={email}
                    />
                    <input 
                        className="bg-neutral-200 rounded-2xl w-full pl-3 placeholder:text-black placeholder:text-base py-1.5" 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                        onChange={e => setPassword(e.target.value)}
                        value={password}
                    />
                    <div className="flex justify-center w-full pt-5">
                        <button 
                            type="submit"
                            className="bg-gradient-to-r from-pink via-purple to-blue w-3/4 h-8 rounded-xl text-white font-bold tracking-wide text-lg"
                        >Create</button>
                    </div>
                </form>
                <div className="flex gap-2.5 justify-center pt-2.5 font-bold text-sm">
                    <h3>Already have an account?</h3>
                    <Link to="/login" className="text-gradient">Log in to your account here</Link>
                </div>
            </div>
        </div>
    )
}

export default Register