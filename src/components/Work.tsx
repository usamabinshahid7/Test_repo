import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
  let translateX: number = 0;

  function setTranslateX() {
    const box = document.getElementsByClassName("work-box");
    const rectLeft = document
      .querySelector(".work-container")!
      .getBoundingClientRect().left;
    const rect = box[0].getBoundingClientRect();
    const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
    let padding: number =
      parseInt(window.getComputedStyle(box[0]).padding) / 2;
    translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
  }

  setTranslateX();

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: ".work-section",
      start: "top top",
      end: `+=${translateX}`, // Use actual scroll width
      scrub: true,
      pin: true,
      id: "work",
    },
  });

  timeline.to(".work-flex", {
    x: -translateX,
    ease: "none",
  });

  // Clean up (optional, good practice)
  return () => {
    timeline.kill();
    ScrollTrigger.getById("work")?.kill();
  };
}, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>01</h3>
                <div>
                  <h4>Odoo Online ERP Implementation</h4>
                  <p>Enterprise Resource Planning</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Odoo, CRM, Sales, Inventory, Automation Workflows</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>02</h3>
                <div>
                  <h4>ManageEngine Endpoint Central Deployment</h4>
                  <p>Endpoint Management & Security</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>ManageEngine, OS Deployment, Patch Management, MDM</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>03</h3>
                <div>
                  <h4>Network Infrastructure & IT Labs</h4>
                  <p>Network Design & Implementation</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>Routing, Switching, Security Policies, Network Documentation</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>04</h3>
                <div>
                  <h4>Network Monitoring & Performance Optimization</h4>
                  <p>Infrastructure Monitoring</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>LibreNMS, Zabbix, APM Tools, System Uptime Improvement</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>05</h3>
                <div>
                  <h4>IT Support & Ticketing System</h4>
                  <p>Service Management</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>ManageEngine ServiceDesk, ITIL Practices, Workflow Optimization</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="" />
          </div>
          <div className="work-box">
            <div className="work-info">
              <div className="work-title">
                <h3>06</h3>
                <div>
                  <h4>Security & Compliance Implementation</h4>
                  <p>Cybersecurity & Compliance</p>
                </div>
              </div>
              <h4>Tools and features</h4>
              <p>ISO 27001, ISO 20000, Firewalls, Encryption, Audits</p>
            </div>
            <WorkImage image="/images/placeholder.webp" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
