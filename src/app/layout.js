import { Inter } from "next/font/google";
import "../../styles/globals.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='true'></link>
<link href="https://fonts.googleapis.com/css2?family=Oranienbaum&display=swap" rel="stylesheet"></link>
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
