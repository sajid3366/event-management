import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { updateProfile } from 'firebase/auth';


const Signup = () => {

    const { signUp, profileUpdate} = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');




    const handleSignup = e => {
        e.preventDefault();

        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        const name = form.get('name');
        const photo = form.get('photo');


        console.log(email, password, name,photo);
        setError('')
        setSuccess('')



        if (password.length < 6) {
            return setError('Password should be at least 6 character or logner');
        }

        else if (!/[A-Z]/.test(password)) {
            return setError("Password should be at least one Upper case");
        }
        else if(!/[#?!@$%^&*-]/.test(password)){
            return setError('Password should be at least one special character');
        }

        // profileUpdate(name)
        
        


        signUp(email, password)
            .then(result => {
                console.log(result.user);
                // setSuccess('User created successfully');

                updateProfile(result.user,{
                    displayName : name,
                    photoURL : photo

                })
                .then(()=>console.log('hello vai'))
                .catch(error=>{
                    console.log(error);
                })

            })
            .catch(error => {
                console.error(error);
                

            })

    }

    return (
        <div>
            <h2 className="text-3xl text-center">Please Signup</h2>
            <form onSubmit={handleSignup} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Your Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Photo URL</span>
                    </label>
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Email address</span>
                    </label>
                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-xl font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                    <label className="label">
                        
                        <p>
                            {
                                error && <span className='text-red-600'>{error}</span>
                            }

                            {
                                success && <span className='text-green-500'>{success}</span>
                            }
                        </p>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn text-white bg-[#403F3F]">Sign Up</button>
                </div>
            </form>
            <p className="text-center mt-4">Already have an account? <Link className="text-red-500" to="/login">Login</Link></p>
        </div>
    );
};

export default Signup;