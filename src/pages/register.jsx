import { Link } from "react-router-dom";
import Button from "../components/button";


export default function Register() {

  return (
    <div className="min-h-[100vh] grid place-items-center py-5 px-4 bg-[url(/images/web3-bg.png)]">
      <div className="w-full max-w-[600px] rounded-[4px] p-[30px] bg-[#313338]">
        <header className="text-center text-white">
          <h1 className="text-[24px] mb-2">Create Account</h1>
          <h2 className="text-[16px] font-normal text-[#EFF0F2]">Africa Decentralized Platform</h2>
        </header>
        <form className="pt-8 flex flex-col gap-4">
          <fieldset>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">EMAIL</label>
            <input
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </fieldset>
          <fieldset>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">DISPLAY NAME</label>
            <input
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </fieldset>
          <fieldset>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">USERNAME</label>
            <input
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </fieldset>
          <fieldset>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">PASSWORD</label>
            <input
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </fieldset>
          <fieldset>
            <label className="inline-block mb-2 text-[12px] text-white text-[#B0B5BC] font-semibold">CONFIRM PASSWORD</label>
            <input
              className="w-full bg-[#1E1F22] rounded-[4px] h-[40px] outline-none text-white px-3 border-[1px] border-[#1E1F22] hover:border-primary"
            />
          </fieldset>
          <fieldset>
            <Button>Register</Button>
            <div className="pt-[5px] text-[#848A93] text-[14px]">
              Already have an account? &nbsp;
              <Link to='/login' className="text-[#00A8FC] hover:text-[#00A8FC] hover:underline">Login</Link>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
