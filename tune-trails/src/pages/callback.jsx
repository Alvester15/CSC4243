import {
    useSearchParams,
    useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
  
const Callback = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
  
    useEffect(() => {
      window.localStorage.setItem("authorization", searchParams.get("code"));
      navigate("/");
    }, []);
  
    return (
      <main>
        redirecting...
      </main>
    );
  };

export default Callback;