import React from "react";
import Button from "../Component/Shared/Button";
import SocialButton from "../Component/Shared/SocialButton";
import Link from "next/link";
export default function Signup() {
  return (
    <div>
      <div className='signupMainContainer'>
        <div className='signupMain'>
          <div className='signup'>
            <div>
              <h3>Welcome To Ecommerce</h3>
              <p>Log in with email &amp; password</p>
              <div>
                <form>
                  <div className='signupForm'>
                    <div>
                      <label>Email or Phone Number</label>
                      <input type='text' placeholder='example@mail.com' />
                    </div>
                    <div>
                      <label>Password</label>
                      <input type='password' placeholder='*********' />
                    </div>
                    <div className='loginBtn'>
                      <Button
                        text='Login'
                        type='sliderShopBtn'
                        width={"100%"}
                      />
                    </div>
                  </div>
                  <div className='dividerMain'>
                    <div className='divider'>or</div>
                  </div>
                  <div className='socialLogin'>
                    <div>
                      <SocialButton
                        name='continue with facebook'
                        provider={"fb"}
                      />
                    </div>
                    <div>
                      <SocialButton
                        name='continue with google'
                        provider={"google"}
                      />
                    </div>
                  </div>
                  <div className='linkRoute'>
                    <p>
                      Don’t have account?{" "}
                      <span>
                        <Link href='/signup' passHref>
                          Signup
                        </Link>{" "}
                      </span>{" "}
                    </p>
                  </div>
                </form>
                <div className='modalBottom'>
                  <p>
                    Forgot your password?
                    <span>Reset It</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
