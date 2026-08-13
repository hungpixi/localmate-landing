import React from 'react';
import { Container } from '../components/ui/Container';
import { FreeAuditSection } from '../components/sections/FreeAuditSection';
import { Sparkles, Phone, Mail, MapPin, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../data/landingContent';

export const ContactPage: React.FC = () => {
  return (
    <div style={{ backgroundColor: '#ffffff', padding: '3.5rem 0 5rem 0' }}>
      <Container size="lg">
        {/* Page Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 3rem auto' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.45rem',
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--color-teal-dark)',
              backgroundColor: 'var(--color-teal-soft)',
              padding: '0.4rem 0.9rem',
              borderRadius: 'var(--radius-full)',
              marginBottom: '1rem'
            }}
          >
            <Sparkles size={15} color="var(--color-teal)" /> THÔNG TIN LIÊN HỆ LOCALMATE
          </span>
          <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
            Liên Hệ Nhận Tư Vấn &amp; Web Demo 0đ
          </h1>
          <p className="subtitle" style={{ marginTop: '0.75rem' }}>
            LocalMate sẵn sàng hỗ trợ khảo sát hiện trạng số và đề xuất giải pháp tối ưu chi phí cho bạn.
          </p>
        </div>

        {/* Quick Contact Info Bar */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '1.5rem',
            marginBottom: '4rem'
          }}
        >
          <a
            href={CONTACT_INFO.zaloUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: '#f8fbfa',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              textDecoration: 'none'
            }}
          >
            <div style={{ width: 50, height: 50, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <MessageSquare size={24} color="var(--color-teal-dark)" />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Chat qua Zalo</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: 2 }}>{CONTACT_INFO.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={`tel:${CONTACT_INFO.phone}`}
            style={{
              backgroundColor: '#f8fbfa',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              textDecoration: 'none'
            }}
          >
            <div style={{ width: 50, height: 50, borderRadius: 'var(--radius-md)', backgroundColor: '#fff4eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Phone size={24} color="var(--color-orange-dark)" />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Hotline Tư Vấn</div>
              <div style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: 2 }}>{CONTACT_INFO.phoneDisplay}</div>
            </div>
          </a>

          <a
            href={CONTACT_INFO.mailtoUrl}
            style={{
              backgroundColor: '#f8fbfa',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.75rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              textDecoration: 'none'
            }}
          >
            <div style={{ width: 50, height: 50, borderRadius: 'var(--radius-md)', backgroundColor: 'var(--color-teal-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Mail size={24} color="var(--color-teal-dark)" />
            </div>
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>Email Hỗ Trợ</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 800, color: 'var(--color-navy)', marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis' }}>{CONTACT_INFO.email}</div>
            </div>
          </a>
        </div>
      </Container>

      <FreeAuditSection />
    </div>
  );
};
