import { useForm } from "react-hook-form";

import ValidationMessage from "../components/ValidationMessage/ValidationMessage";
import "../login.scss";

interface FormData {
  username: string;
  password: string;
}
function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ mode: "all" });

  const submitData = (data: FormData) => {
    console.log(import.meta);
    const apiurl = import.meta.env.VITE_API_URL;
    alert("Goint to submit form to url: " + apiurl);

    console.log(data);
    return;
  };
  return (
    <>
      <div className="container user-area">
        <div className="row">
          <div className="col-12">
            <div className="login-area py-90">
              <div className="container">
                <div className="row">
                  <div className="col-md-7 col-lg-5 mx-auto">
                    <div className="login-form">
                      <div className="login-header">
                        <img src="/images/logo.jpg" alt="Logo" height="50" />
                        <p>Login with your Vein360 account</p>
                      </div>

                      <form onSubmit={handleSubmit(submitData)}>
                        <div className="form-group">
                          <label>Username</label>
                          <input
                            {...register("username", {
                              required: true,
                            })}
                            className="form-control"
                            placeholder="Your Username"
                          />
                          <ValidationMessage
                            errors={errors}
                            fielName="username"></ValidationMessage>
                        </div>

                        <div className="form-group">
                          <label>Password</label>
                          <input
                            {...register("password", { required: ".required" })}
                            type="password"
                            className="form-control"
                            placeholder="Your Password"
                          />
                          <ValidationMessage
                            errors={errors}
                            fielName="password"></ValidationMessage>
                        </div>
                        <div className="d-flex align-items-center">
                          <button type="submit" className="vein-btn-success">
                            <i className="fa fa-sign-in mg-1"></i>
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
