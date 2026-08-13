import React from 'react';
import { Container } from '../ui/Container';
import { LocalMateAdvisor } from '../advisor/LocalMateAdvisor';

export const FreeAuditSection: React.FC = () => {
  return (
    <section
      style={{
        padding: '5rem 0',
        backgroundColor: '#f8fbfa',
        borderBottom: '1px solid var(--color-border)'
      }}
      id="register-form"
    >
      <Container size="lg">
        {/* Render LocalMate Advisor Configurator directly inside Section 7 */}
        <LocalMateAdvisor />
      </Container>
    </section>
  );
};
