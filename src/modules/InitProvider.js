import { getUser } from "./api/user";
import { authorized } from "./firestore/auth";
import { useDispatch } from "react-redux";
import { setUser } from "./stores/userSlice";
import { useEffect, useState } from "react";

export default function InitProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = await startApp();
        dispatch(setUser(user));
      } catch (error) {
        console.error("Error initializing provider:", error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);
  if (loading) {
    return null;
  } else {
    return <>{children}</>;
  }
}

async function startApp() {
  try {
    const user = await authorized();
    const usered = await getUser(user.uid);
    // console.log(usered);
    return usered;
  } catch (err) {
    console.log(err);
    if (!window.location.pathname.includes("signIn")) {
      window.location = "/signIn";
    }
  }
}
