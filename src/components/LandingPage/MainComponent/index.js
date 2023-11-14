import React from "react";
import "./styles.css";
import Button from "../../Common/Button";
import iphone from "../../../assets/iphone.png";
import gradient from "../../../assets/gradient.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RWebShare } from "react-web-share";
import { toast } from "react-toastify";
import Footer from "../../Common/Footer";

function MainComponent() {
  return (
    
    <div className="flex-box">
      <div className="left-container">
        <motion.h1
          className="track-crypto-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time-heading"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, dealy: 0.5 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, dealy: 1 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, dealy: 1.5 }}
        >
          <Link to="/dashboard">
            {" "}
            <Button text={"Dashboard"} />
          </Link>
          {/*web sharing part  */}
          <RWebShare
            data={{
              text: "CryptoDashboard made by Manjeet Maan using React JS.",
              url: "https://mannmanjeet988.github.io/crypto_tracker_website/",
              title: "CryptoTracker.",
            }}
            onClick={() => toast.info("App Shared!")}
          >
            <Button text={"Share"} outlined={true} />
          </RWebShare>
          {/* <Button text={"Share"} outlined={true}/> */}
        </motion.div>
      </div>

      <div className="phone-container">
        <motion.img
          className="iphone"
          src={iphone}
          initial={{ y: -10 }}
          animate={{ y: 10 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <motion.img className="gradient" src={gradient} />
      </div>

    </div>
    
    
  );
}

export default MainComponent;