import React, { Children, useState } from "react";
import { useContext } from "react";

export const language = useContext();

const langProvider = ({ Children }) => {
  const [lang, setlang] = useState("");
  const value = { lang, setlang };
  return <language.provider value={value}>{Children}</language.provider>;
};

export default langProvider;
