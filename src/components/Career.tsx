import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Assistant Manager Networks</h4>
                <h5>ZKB Group of Companies (C-PEC)</h5>
              </div>
              <h3>2017-2018</h3>
            </div>
            <p>
              Provided technical expertise and troubleshooting support to resolve complex network issues. Developed and executed network strategies, policies, and procedures ensuring reliability and security. Designed and maintained comprehensive network documentation, budgets, and infrastructure optimization.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Manager Information Technology</h4>
                <h5>Rapid Empire Communication</h5>
              </div>
              <h3>2020-2022</h3>
            </div>
            <p>
              Developed and executed network strategies for LAN, WAN, wireless, and cloud-based networks. Implemented firewalls, intrusion detection systems, and encryption protocols. Led disaster recovery and business continuity planning, ensuring minimal downtime during disruptions.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>IT Systems Administrator</h4>
                <h5>Perception IT</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Administered ManageEngine Endpoint Central for 1,500+ endpoints, reducing setup time by 60%. Implemented Odoo Online ERP for business operations. Configured remote access, RBAC, and MDM for hybrid work environments while maintaining ISO 27001 and ISO/IEC 20000 compliance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
