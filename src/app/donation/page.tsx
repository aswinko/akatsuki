import { auth, currentUser } from "@clerk/nextjs";
import React from "react";

const Donation = async () => {
  // const user = await auth();
  const user = await currentUser();
  if (!user) return <div>Not signed in</div>;
 

    return <div>Hello {user?.firstName}</div>;

};

export default Donation;
