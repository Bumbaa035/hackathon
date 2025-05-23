import React, { useState } from 'react'
import { Navigate, Link, useNavigate } from 'react-router-dom'
import { doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth'
import { useAuth } from '../../context/authContext'

const Login = () => {
    const { userLoggedIn } = useAuth()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isSigningIn, setIsSigningIn] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        if(!isSigningIn) {
            setIsSigningIn(true)
            setErrorMessage('')
            try {
                await doSignInWithEmailAndPassword(email, password)
                navigate('/home', { replace: true })
            } catch (error) {
                setErrorMessage(error.message) // Error message display
                setIsSigningIn(false)
            }
        }
    }
    
    const onGoogleSignIn = async (e) => {
        e.preventDefault()
        if (!isSigningIn) {
            setIsSigningIn(true)
            setErrorMessage('')
            try {
                await doSignInWithGoogle()
                navigate('/dashboard', { replace: true })
            } catch (err) {
                setIsSigningIn(false)
                // Show more user-friendly error messages
                if (err.message.includes('not enabled')) {
                    setErrorMessage('Google Sign-In is not available at the moment. Please try email sign-in instead.');
                } else if (err.message.includes('popup was closed')) {
                    setErrorMessage('Sign-in was cancelled. Please try again.');
                } else if (err.message.includes('Multiple popup requests')) {
                    setErrorMessage('Please wait a moment before trying again.');
                } else {
                    setErrorMessage(err.message);
                }
            }
        }
    }
    

    return (
        <div>
            {userLoggedIn && (<Navigate to={'../dashboard'} replace={true} />)}

            <main className="w-full h-screen flex self-center place-content-center place-items-center">
                <div className="w-96 text-gray-600 space-y-5 p-4 shadow-xl border rounded-xl">
                    <div className="text-center">
                        <div className="mt-2">
                            <h3 className="text-gray-800 text-xl font-semibold sm:text-2xl">Нэвтэрнэ үү</h3>
                        </div>
                    </div>
                    <form
                        onSubmit={onSubmit}
                        className="space-y-5"
                    >
                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Цахим хаяг
                            </label>
                            <input
                                type="email"
                                autoComplete='email'
                                required
                                value={email} onChange={(e) => { setEmail(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>


                        <div>
                            <label className="text-sm text-gray-600 font-bold">
                                Нууц үг
                            </label>
                            <input
                                type="password"
                                autoComplete='current-password'
                                required
                                value={password} onChange={(e) => { setPassword(e.target.value) }}
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg transition duration-300"
                            />
                        </div>

                        {errorMessage && (
                            <span className='text-red-600 font-bold'>{errorMessage}</span>
                        )}

                        <button
                            type="submit"
                            disabled={isSigningIn}
                            className={`w-full px-4 py-2 text-white font-medium rounded-lg ${isSigningIn ? 'bg-gray-300 cursor-not-allowed' : 'bg-indigo-600 hover:bg-indigo-700 hover:shadow-xl transition duration-300'}`}
                        >
                            {isSigningIn ? 'Signing In...' : 'Нэвтрэх'}
                        </button>
                    </form>
                
                </div>
            </main>
        </div>
    )
}

export default Login