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
      subject: "Project Update",
      summary: "Here's a quick update on the project timeline and milestones.",
      label: "Work",
      labelColor: "#3B82F6"
    },
    {
      sender: "Amazon",
      subject: "Your Order has Shipped",
      summary: "Your order #12345 has been shipped and will arrive soon.",
      label: "Personal",
      labelColor: "#10B981"
    },
    {
      sender: "News Daily",
      subject: "Top Headlines for Today",
      summary: "Check out the top news stories for today, including updates on global events.",
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