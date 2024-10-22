// import Image from "next/image";

import CommonWrapper from "./components/CommonWrapper";

export default function Home() {
  return (
    <CommonWrapper>
      <div className="isolate px-6 pt-14 lg:px-8">
        <h1 className="text-4xl text-center mx-auto font-bold text-foreground">Welcome to The Titos Dashboard!</h1>
      </div>
      {/* <Image
        src="/logo.svg"
        alt="Logo"
        width={144}
        height={144}
      /> */}
    </CommonWrapper>
  );
}
