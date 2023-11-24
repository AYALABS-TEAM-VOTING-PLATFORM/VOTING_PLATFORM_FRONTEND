import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import { useNotification } from "@web3uikit/core";
import { useMoralis } from "react-moralis";
import { useEffect, useState } from "react";
import { ConnectButton } from "@web3uikit/web3";
import { _loginVoter } from "../constants/_helperFunctions";

export default function Login() {
  const dispatch = useNotification();
  const navigate = useNavigate();
  const { account } = useMoralis();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    voterWalletAddress: "",
    password: "",
  });

  const handleSignIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!formData.voterWalletAddress) {
      setLoading(false);
      return dispatch({
        type: "error",
        position: "topR",
        title: "Error",
        message: "Please connect your wallet Address",
      });
    }

    if (!formData.password) {
      setLoading(false);
      return dispatch({
        type: "error",
        position: "topR",
        title: "Error",
        message: "Password is required",
      });
    }

    await _loginVoter({ ...formData, navigate, setError, setLoading });
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      voterWalletAddress: account,
    }));
  }, [account]);

  useEffect(() => {
    if (error == "") return;
    dispatch({
      type: "error",
      position: "topR",
      title: "Error",
      message: error,
    });
    setError("");
  }, [error]);
  return (
    <div className="min-h-[100vh] grid place-items-center py-5 px-4 bg-[url(/images/web3-bg.png)]">
      <div className="w-full max-w-[600px] rounded-[4px] p-[30px] bg-[#313338]">
        <header className="text-center text-white">
          <h1 className="text-[24px] mb-2">Welcome back!</h1>
          <h2 className="text-[16px] font-normal text-[#EFF0F2]">
            Africa Decentralized Platform
          </h2>
        </header>
        <div className="pt-8 flex flex-col gap-4">
          <fieldset>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">
              PASSWORD
            </label>
            <input
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
              onChange={handleChange}
              name="password"
              value={formData.password}
            />
            <div className="pt-[3px]">
              <Link
                to="/forgot-password"
                className="text-[14px] text-[#00A8FC] hover:text-[#00A8FC] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </fieldset>
          <ConnectButton />
          <fieldset>
            <Button handleSignUp={handleSignIn} loading={loading}>
              Log In
            </Button>
            <div className="pt-[5px] text-[#848A93] text-[14px]">
              Need an account? &nbsp;
              <Link
                to="/register"
                className="text-[#00A8FC] hover:text-[#00A8FC] hover:underline"
              >
                Register
              </Link>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
}
