import { useRouter } from "next/router";
import { useEffect } from "react";
import useSWR from "swr";
import Login from "../widgets/login";

const Main = () => {
  const router = useRouter();
  const { data, mutate } = useSWR("/api/me", async (args) => {
    const res = await fetch(args);
    return res.json();
  });

  useEffect(() => {
    if (data && data.success) router.push("/review");
  }, [data, router]);

  if (!data) return <p>Loading...</p>;
  if (!data.success) return <Login handleRevalidate={mutate} />;
  return null;
};

export default Main;
