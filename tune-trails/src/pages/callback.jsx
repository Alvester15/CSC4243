import {
    useSearchParams,
    useNavigate,
} from "react-router-dom";
  
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
  