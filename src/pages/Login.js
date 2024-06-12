import LogoByOne from "../components/LogoByOne"

function Login() {
    return (
        <div className="lg:flex lg:w-full lg:justify-between">
            <div className="lg:w-full">
                <LogoByOne className="pt-24 pb-16"/>
                <div className="flex flex-col gap-5 px-16">
                    <input 
                        className="bg-neutral-200 rounded-2xl w-full pl-3 placeholder:text-black placeholder:text-base py-1.5" 
                        type="email" 
                        id="email" 
                        placeholder="Email"
                    />
                    <input 
                        className="bg-neutral-200 rounded-2xl w-full pl-3 placeholder:text-black placeholder:text-base py-1.5" 
                        type="password" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <button 
                    className="px-16 py-1 w-full text-end font-bold tracking-wide text-xs"
                >Esqueci a senha</button>
                <div className="flex justify-center w-full pt-5">
                    <button 
                        className="bg-gradient-to-r from-pink via-purple to-blue w-2/4 h-8 rounded-xl text-white font-bold tracking-wide"
                    >Entrar</button>
                </div>
            </div>
            <div className="px-10 pt-12">
                <div className="w-full h-1 bg-gradient-to-r from-pink via-purple to-blue lg:h-full lg:w-1"/>
            </div>
            <div>

            </div>
        </div>
    )
}

export default Login