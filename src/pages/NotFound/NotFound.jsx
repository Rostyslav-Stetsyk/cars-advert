import { useNavigate } from "react-router-dom";
import notFoundImg from "../../img/404.png";
import { NotFoundImg, NotFoundTitle, NotFoundWrapper } from "./NotFound.styled";
import { useEffect, useState } from "react";

export const NotFound = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((state) => state - 1);
    }, 1000);

    setTimeout(() => navigate("/"), 6000);
    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <NotFoundWrapper>
      <NotFoundTitle>404 Not found!</NotFoundTitle>
      <NotFoundImg src={notFoundImg} alt="Not found" />
      <p>
        Oops! It seems like you&apos;ve taken a wrong turn. The page you are
        looking for might have been moved, deleted, or it&apos;s possible that
        you entered an incorrect URL. Don&apos;t worry, even the best explorers
        sometimes get lost. Let&apos;s navigate you back to the right path. You
        can return to the homepage or double-check the URL. If you continue to
        encounter this issue, feel free to contact our support team. We
        apologize for any inconvenience, and thank you for your patience!
      </p>
      <span>{count === 0 ? "Redirect to homepage..." : count}</span>
    </NotFoundWrapper>
  );
};
