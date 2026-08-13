import React from 'react';
import { Container } from '../components/ui/Container';
import { LocalMateAdvisor } from '../components/advisor/LocalMateAdvisor';

export const AdvisorPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#f8fbfa', padding: '3.5rem 0 5rem 0' }}>
      <Container size="lg">
        {/* Page Container */}
        <LocalMateAdvisor />
      </Container>
    </div>
  );
};
