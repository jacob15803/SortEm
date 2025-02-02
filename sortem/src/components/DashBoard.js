import React from "react";
import styled, { keyframes } from "styled-components";
import EmailSummaryCard from "./EmailSummaryCard";
import DailyRecapCard from "./DailyRecapCard";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  color: ${(props) => props.theme.colors.textPrimary};
  gap: 1.5rem;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
  }
`;

const DailyRecap = styled.aside`
  flex: 1;
  min-width: 280px;
  background: linear-gradient(
    135deg,
    ${(props) => props.theme.colors.backgroundSecondary},
    ${(props) => props.theme.colors.backgroundTertiary}
  );
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  height: calc(100vh - 4rem);
  position: sticky;
  top: 2rem;

  @media (max-width: 768px) {
    position: static;
    height: auto;
  }
`;

const EmailSummaries = styled.main`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  padding-right: 0.5rem;

  @media (max-width: 768px) {
    padding-right: 0;
  }
`;

const ScrollContainer = styled.div`
  overflow-y: auto;
  padding-right: 0.5rem;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.05);
  }

  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.accentPrimary};
    border-radius: 4px;
  }
`;

const Dashboard = () => {
  const dailyRecap = "Today, you received 15 emails. 10 work-related, 3 personal, and 2 newsletters.";
  const emailSummaries = [
    {
      sender: "John Doe",
      subject: "ndamental Algorithms: Design and Analysis - Week 2 content is live now!!\nInbox\n\nonlinecourses@nptel.iitm.ac.in\nSun, Jan 26, 4:53\u202fPM (2 days ago)\nto noc25-cs33-announce\n\nDear Students\n\n\nThe lecture videos for Week 2 have been uploaded for the course Fundamental Algorithms: Design and Analysis. The lectures can be accessed using the following link: https://onlinecourses.nptel.ac.in/noc25_cs33/unit?unit=26&lesson=27\n\n\nThe other lectures of this week are accessible from the navigation bar to the left. Please remember to login into the website to view contents (if you aren't logged in already).\n\n\nAssignment 2 for Week 2 is also released and can be accessed from the following \n\nThe assignment has to be submitted on or before Wednesday, 2025-02-05, 23:59 IST.\n\n\nAs we have done so far, please use the discussion forums if you have any questions on this module.\n\n\nNote : Please check the due date of the assignments in the announcement and assignment page if you see any mismatch write to us immediately.\n\nThanks and Regards,\n\n--NPTEL Team",
      summary: "",
      label: "Work",
      labelColor: "#3B82F6"
    },
    {
      sender: "Amazon",
      subject: "\near All,\n\nGreetings from Rajagiri School of Engineering & Technology!\n\n  SLK Global is hiring 2025 batch students\n\n1.      About the Organization\n\n  SLK Global Group is a global leader in supply chain solutions, specializing in logistics, procurement, and subcontracting services across defense, oil and gas, and commercial sectors. With a strong presence in global markets, SLK Global provides innovative and efficient logistics solutions to meet the diverse needs of its clients.\n\nFor more information, please visit https://slkglobal.co/.\n\n\n2.      Eligibility\n\nProgramme\n\nB.Tech, M.Tech\n\nBranches\n\nAEI, AD, CS, CSBS, IT, EC, EEE, ME, CE\n\nMarks\n\n10th (%)\n\n   12th (%)\n\nBTech CGPA/%\n\nMTech CGPA/%\n\n \n\n \n\n \n\n \n\nCurrent Backlogs\n\nZero Backlogs\n\n \n\n \n\n\n3.      Job Details\n\nJob Title: Logistics Executive (Fresh Graduate \u2013 Engineering Background)\nLocation: [Specify Location, e.g., Kochi, India or SLK Global offices]\nKey Responsibilities:\nManaging global logistics operations, including international and domestic movements.\nCoordinating with vendors and carriers to optimize costs and services.\nEnsuring compliance with global trade regulations and managing customs documentation.\nSupporting inventory management and supply chain activities.\nAnalyzing and optimizing logistics processes for efficiency and cost-effectiveness.\nPreparing documentation and generating logistics performance reports.\nKey Skills:\nBasic knowledge of global logistics and supply chain concepts.\nStrong analytical and communication skills.\nAdaptability and teamwork in a dynamic environment.\n4.  Compensation\n\n\nThe compensation details will be informed during the recruitment process.\n\n      \n\n            Last Date of Application: 14th Tuesday 2025\n\n        Register using the link:",
      summary: "",
      label: "Personal",
      labelColor: "#10B981"
    },
    {
      sender: "News Daily",
      subject: "\near All,\n\nGreetings from Rajagiri School of Engineering & Technology!\n\n  SLK Global is hiring 2025 batch students\n\n1.      About the Organization\n\n  SLK Global Group is a global leader in supply chain solutions, specializing in logistics, procurement, and subcontracting services across defense, oil and gas, and commercial sectors. With a strong presence in global markets, SLK Global provides innovative and efficient logistics solutions to meet the diverse needs of its clients.\n\nFor more information, please visit https://slkglobal.co/.\n\n\n2.      Eligibility\n\nProgramme\n\nB.Tech, M.Tech\n\nBranches\n\nAEI, AD, CS, CSBS, IT, EC, EEE, ME, CE\n\nMarks\n\n10th (%)\n\n   12th (%)\n\nBTech CGPA/%\n\nMTech CGPA/%\n\n \n\n \n\n \n\n \n\nCurrent Backlogs\n\nZero Backlogs\n\n \n\n \n\n\n3.      Job Details\n\nJob Title: Logistics Executive (Fresh Graduate \u2013 Engineering Background)\nLocation: [Specify Location, e.g., Kochi, India or SLK Global offices]\nKey Responsibilities:\nManaging global logistics operations, including international and domestic movements.\nCoordinating with vendors and carriers to optimize costs and services.\nEnsuring compliance with global trade regulations and managing customs documentation.\nSupporting inventory management and supply chain activities.\nAnalyzing and optimizing logistics processes for efficiency and cost-effectiveness.\nPreparing documentation and generating logistics performance reports.\nKey Skills:\nBasic knowledge of global logistics and supply chain concepts.\nStrong analytical and communication skills.\nAdaptability and teamwork in a dynamic environment.\n4.  Compensation\n\n\nThe compensation details will be informed during the recruitment process.\n\n      \n\n            Last Date of Application: 14th Tuesday 2025\n\n        Register using the link:"
      ,summary: "",
      label: "Newsletter",
      labelColor: "#6366F1"
    },
  ];

  return (
    <DashboardContainer>
      <DailyRecap>
        <ScrollContainer>
          <DailyRecapCard recap={dailyRecap} />
        </ScrollContainer>
      </DailyRecap>

      <EmailSummaries>
        <ScrollContainer>
          {emailSummaries.map((email, index) => (
            <EmailSummaryCard
              key={index}
              email={email}
              delay={index}
            />
          ))}
        </ScrollContainer>
      </EmailSummaries>
    </DashboardContainer>
  );
};

export default Dashboard;