import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useQuery } from "react-query";
import { HelloDataType } from "../api/hello";

export default () => {
  const { isLoading, error, data } = useQuery<HelloDataType>(
    "posts",
    async () => fetch("/api/hello").then((res) => res.json())
  );

  console.log(data, isLoading);
  if (!data || isLoading) return "Loading...";

  if (error) return "An error has occurred: ";

  return (
    <>
      <Head>
        <title>一覧画面</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <main>
          <h1>犬の画像</h1>
        </main>
        <div style={{ position: "relative", width: 400, height: 400 }}>
          {data.data.map((item) => (
            <div>{item.name}</div>
          ))}
        </div>
        {/* <button onClick={handleClick}>画像を検索</button> */}
      </main>
    </>
  );
};