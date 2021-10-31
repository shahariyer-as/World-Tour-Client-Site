import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';

const Login = () => {

    const { user, googleSignIn } = useAuth()
    console.log(user);
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
    }

    return (
        <div className="m-5 img-fluid" style={{
            backgroundImage: `url("https://i.ibb.co/PzxdftJ/ggg.png")`,
            padding: "80px",
            height: "400px",
            backgroundSize: "cover",
        }}>
            <div className=" w-md-50 d-flex justify-content-center ">
                <div className="p-5">
                    <h4 className="text-center">Login In</h4>
                    <Button onClick={handleGoogleSignIn} className="bg-light  text-dark rounded-pill">
                        <img className="me-2" width="30px" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" />
                        With Google</Button>
                </div>

            </div>

        </div >
    );
};

export default Login;