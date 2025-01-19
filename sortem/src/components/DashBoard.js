import React from "react";
import styled from "styled-components";


const DashboardContainer = styled.div`
  display: flex;
  height: 100vh; /* Full-screen height */
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  color: ${(props) => props.theme.colors.textPrimary};
`;

const DailyRecap = styled.div`
  flex: 1; /* 1/4th width */
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow-y: auto;
  margin: 1rem;
`;

const EmailSummaries = styled.div`
  flex: 3; /* 3/4th width */
  padding: 1rem;
  overflow-y: auto;
  margin: 1rem;
`;

const RecapCard = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const SummaryCard = styled.div`
  background-color: ${(props) => props.theme.colors.cardBackground};
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Sender = styled.h4`
  margin: 0;
  font-size: ${(props) => props.theme.typography.fontSizes.subtitle};
  font-weight: bold;
`;

const Subject = styled.h5`
  margin: 0.5rem 0;
  font-size: ${(props) => props.theme.typography.fontSizes.body};
  font-weight: 600;
`;

const Summary = styled.p`
  margin: 0;
  font-size: ${(props) => props.theme.typography.fontSizes.small};
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Dashboard = () => {
  // Mock data for daily recap and email summaries
  const dailyRecap = "Today, you received 15 emails. 10 work-related, 3 personal, and 2 newsletters.";
  const emailSummaries = [
    {
      sender: "John Doe",
      subject: "Project Update",
      summary: "Here's a quick update on the project timeline and milestones.",
      label: "Work",
    },
    {
      sender: "Amazon",
      subject: "Your Order has Shipped",
      summary: "Your order #12345 has been shipped and will arrive soon.",
      label: "Personal",
    },
    {
      sender: "News Daily",
      subject: "Top Headlines for Today",
      summary: "Check out the top news stories for today, including updates on global events.",
      label: "Newsletter",
    },
  ];

  return (
    <DashboardContainer>
      {/* Daily Recap Section */}
      <DailyRecap>
        <RecapCard>
          <h3>Daily Recap</h3>
          <p>{dailyRecap}</p>
        </RecapCard>
      </DailyRecap>

      {/* Email Summaries Section */}
      <EmailSummaries>
        {emailSummaries.map((email, index) => (
          <SummaryCard key={index}>
            <Sender>{email.sender}</Sender>
            <Subject>{email.subject}</Subject>
            <Summary>{email.summary}</Summary>
          </SummaryCard>
        ))}
      </EmailSummaries>
    </DashboardContainer>
  );
};

export default Dashboard;
