import { Link } from "@remix-run/react";
import React from "react";
import Socials from "./socials";

export default function Footer() {
  return (
    <div className="flex h-64 w-full flex-col items-center justify-between border-t-2">
      <div className="flex w-full items-center justify-center gap-12 py-12">
        <div className="mx-12 flex w-72 flex-col items-start justify-start gap-2">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/rtzn-dev.appspot.com/o/rtzn-icon-blue.svg?alt=media&token=e3c072cd-c828-4746-a3cf-a37cd113e8c7"
            alt="RTZN Logo"
            className="w-32"
          />
          <h1 className="text-3xl font-black tracking-tighter text-[color:#00BCE3]">
            RTZN Labs
          </h1>
          <p className="w-full text-lg font-light tracking-widest">
            Lorem ipsum dolor sit amet
          </p>
          <Socials />
        </div>
        <div className="flex h-full w-24 flex-col items-start justify-start gap-2">
          <p className="text-lg">Links</p>
          <div className="flex h-full w-full flex-col items-start justify-start gap-1 font-light tracking-widest">
            <Link to="#home">Home</Link>
            <Link to="#gallery">Gallery</Link>
            <Link to="#mint">Mint</Link>
            <Link to="#roadmap">Roadmap</Link>
          </div>
        </div>
        <div className="flex h-full w-24 flex-col items-start justify-start gap-2">
          <p className="text-lg">Resources</p>
          <div className="flex h-full w-full flex-col items-start justify-start gap-1 font-light tracking-widest">
            <Link to="blog">Blog</Link>
            <Link to="forum">Forum</Link>
            <Link to="faq">FAQ</Link>
            <Link to="contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-4 py-4 text-sm font-light">
        <div className="flex w-full items-center justify-center gap-4">
          <Link to="privacy">Privacy Policy</Link>
          <Link to="privacy">Terms & Conditions</Link>
        </div>
        <div className="flex w-full items-center justify-center">
          &copy; 2022 RTZN Labs. Made with 💜
        </div>
      </div>
    </div>
  );
}
