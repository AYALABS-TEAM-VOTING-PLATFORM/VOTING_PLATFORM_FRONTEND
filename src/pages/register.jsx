import { Link, useNavigate } from "react-router-dom";
import Button from "../components/button";
import { useEffect, useState } from "react";
import { _addVoter, _signInVoter } from "../constants/_helperFunctions";
import { useNotification } from "@web3uikit/core";
import { useMoralis } from "react-moralis";
import { ConnectButton } from "@web3uikit/web3";

export default function Register() {
  const { account } = useMoralis();
  const [formData, setFormData] = useState({
    voterWalletAddress: "",
    fullName: "",
    country: "",
    ID: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const dispatch = useNotification();
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
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

    if (
      !formData.voterWalletAddress ||
      !formData.fullName ||
      !formData.country ||
      !formData.ID ||
      !formData.phoneNumber ||
      !formData.password ||
      !formData.confirmPassword
    ) {
      setLoading(false);
      return dispatch({
        type: "error",
        position: "topR",
        title: "Error",
        message: "All fields are required",
      });
    }

    if (formData.password !== formData.confirmPassword) {
      setLoading(false);
      return dispatch({
        type: "error",
        position: "topR",
        title: "Error",
        message: "Password doesnt match",
      });
    }

    await _signInVoter({ ...formData, navigate });
    // await _addVoter();
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUploadID = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    // Set the callback for when reading is complete
    reader.onloadend = () => {
      // Use reader.result to get the base64 string
      setFormData((prev) => ({
        ...prev,
        ID: reader.result,
      }));
    };

    // Read the file
    if (file) {
      reader.readAsDataURL(file);
    } else {
      setFormData((prev) => ({
        ...prev,
        ID: "",
      }));
    }
  };

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      voterWalletAddress: account,
    }));
  }, [account]);

  console.log(formData);

  return (
    <div className="min-h-[100vh] grid place-items-center py-5 px-4 bg-[url(/images/web3-bg.png)]">
      <div className="w-full max-w-[600px] rounded-[4px] p-[30px] bg-[#313338]">
        <header className="text-center text-white">
          <h1 className="text-[24px] mb-2">Create Account</h1>
          <h2 className="text-[16px] font-normal text-[#EFF0F2]">
            Africa Decentralized Platform
          </h2>
        </header>
        <div className="pt-8 flex flex-col gap-4">
          <div>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">
              FULL NAME
            </label>
            <input
              onChange={handleChange}
              name="fullName"
              value={formData.fullName}
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </div>
          <div>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">
              COUNTRY
            </label>
            <input
              onChange={handleChange}
              name="country"
              value={formData.country}
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </div>
          <div>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">
              PHONE NUMBER
            </label>
            <input
              onChange={handleChange}
              name="phoneNumber"
              value={formData.phoneNumber}
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </div>

          <div>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">
              PASSWORD
            </label>
            <input
              onChange={handleChange}
              name="password"
              value={formData.password}
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </div>
          <div>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">
              CONFIRM PASSWORD
            </label>
            <input
              onChange={handleChange}
              name="confirmPassword"
              value={formData.confirmPassword}
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </div>
          <div>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">
              ID
            </label>
            <input
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
              type="file"
              onChange={handleUploadID}
              // name="ID"
              // value={formData.ID}
            />
          </div>
          <ConnectButton />
          <div>
            <Button handleSignUp={handleSignUp} loading={loading}>
              Register
            </Button>
            <div className="pt-[5px] text-[#848A93] text-[14px]">
              Already have an account? &nbsp;
              <Link
                to="/login"
                className="text-[#00A8FC] hover:text-[#00A8FC] hover:underline"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
