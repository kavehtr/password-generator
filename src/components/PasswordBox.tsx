import { FaRegCopy } from "react-icons/fa6";


export default function PasswordBox() {

    let password: string;
    password = "password";
  
    return (
     <div className="bg-box w-80 h-12">
        <div className="float-left ml-2 mt-2.5">{password}</div>
        <button className="float-right mr-2 mt-4"><FaRegCopy /></button>
     </div>
    );
  }
  