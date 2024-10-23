'use client'
import Image from "next/image";
import { useState } from "react";

import CommonWrapper from "./components/CommonWrapper";
import Dashboard from "./dashboard/page";

export default function Home() {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.values);
    // Check if credentials are valid
    setLoggedIn(!loggedIn); // Replace with actual login logic);
  };
  return (
    <CommonWrapper>
      <section className="flex justify-center items-center h-screen">
        <div className="log-in-section">
          <div className="log-in-image">
            <Image
              src="/images/titos.png"
              alt="Logo"
              width={150}
              height={150}
            />
          </div>
          {loggedIn ? <Dashboard/> : (
            <div className="log-in">
              <h2>Log In</h2>
              <form onSubmit={(e) => handleSubmit(e)}>
                <label>
                  Username
                  <input type="text" name="username" required/>
                </label>
                <label>
                  Password
                  <input type="password" name="password" required/>
                </label>
                <input type="submit" value="Submit" />
              </form>
            </div>
          )}
        </div>
      </section>
    </CommonWrapper>
  );
}
