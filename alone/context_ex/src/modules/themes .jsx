import { createContext } from "react"; 
import React from "react";

export const themes1 = {
  light: {
    foreground: "#3feeee",
    background: "#3feeee"
  },
};


export const themes2 = {
  light: {
    foreground: "#f01230",
    background: "#eeeeee"
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222"
  }
};




export const themes = createContext(themes2);