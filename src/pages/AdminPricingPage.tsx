import React, { useState, useEffect } from 'react';
import { Container } from '../components/ui/Container';
import { CatalogServiceItem, TECH_CATEGORIES, TechCategoryKey } from '../data/servicesCatalog';
import { getCatalogServices, saveCatalogServices, resetCatalogToDefault } from '../services/pricingStorage';
import { Search, Save, RotateCcw, Check, SlidersHorizontal, Edit3, ShieldAlert, Sparkles } from 'lucide-react';
import { useRouter } from '../components/layout/Router';

export const AdminPricingPage: React.FC = () => {
  const { navigate } = useRouter();
  const [services, setServices] = useState<CatalogServiceItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTechGroup, setSelectedTechGroup] = useState<string>('all');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<CatalogServiceItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  useEffect(() => {
    setServices(getCatalogServices());
  }, []);

  const showNotification = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleEditClick = (item: CatalogServiceItem) => {
    setEditingId(item.id);
    setEditingItem({ ...item });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditingItem(null);
  };

  const handleSaveEdit = () => {
    if (!editingItem) return;
    const next = services.map((s) => (s.id === editingItem.id ? editingItem : s));
    setServices(next);
    saveCatalogServices(next);
    setEditingId(null);
    setEditingItem(null);
    showNotification(`Đã lưu thay đổi cho dịch vụ #${editingItem.id} - ${editingItem.name}`);
  };

  const handleToggleActive = (id: string) => {
    const next = services.map((s) => (s.id === id ? { ...s, isActive: !s.isActive } : s));
    setServices(next);
    saveCatalogServices(next);
    showNotification('Đã cập nhật trạng thái hiển thị dịch vụ.');
  };

  const handleResetDefaults = () => {
    if (window.confirm('Bạn có chắc chắn muốn khôi phục toàn bộ 40 dịch vụ về Bảng Giá Gốc SSOT ban đầu?')) {
      const defaults = resetCatalogToDefault();
      setServices(defaults);
      showNotification('Đã khôi phục thành công toàn bộ 40 dịch vụ về giá SSOT mặc định.');
    }
  };

  const filteredServices = services.filter((srv) => {
    const matchesSearch =
      srv.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      srv.scope.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesGroup = selectedTechGroup === 'all' || srv.categoryGroup === selectedTechGroup;
    return matchesSearch && matchesGroup;
  });

  return (
    <div style={{ backgroundColor: '#f8fbfa', padding: '3rem 0 5rem 0', minHeight: '85vh' }}>
      <Container size="lg">
        {/* Toast Notification */}
        {toastMessage && (
          <div
            style={{
              position: 'fixed',
              bottom: '24px',
              right: '24px',
              zIndex: 999,
              backgroundColor: 'var(--color-navy)',
              color: '#ffffff',
              padding: '0.85rem 1.4rem',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.6rem',
              fontSize: '0.9rem',
              fontWeight: 600
            }}
          >
            <Check size={18} color="var(--color-teal)" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', marginBottom: '2.5rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)', display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                <Sparkles size={13} /> LOCALMATE PRICING CMS
              </span>
              <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-orange-dark)', backgroundColor: '#fff4eb', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)' }}>
                SSOT Catalogue (40 Dịch Vụ)
              </span>
            </div>

            <h1 style={{ fontSize: 'var(--font-size-h1)', color: 'var(--color-navy)', fontWeight: 800 }}>
              Quản Trị Bảng Giá &amp; Scope Dịch Vụ
            </h1>
            <p style={{ fontSize: '0.925rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
              Chỉnh sửa giá niêm yết, mô tả phạm vi công việc và bật/tắt dịch vụ. Mọi thay đổi sẽ cập nhật trực tiếp ngoài Trang chủ &amp; Trang Bảng giá.
            </p>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/bang-gia')}
              style={{
                padding: '0.7rem 1.25rem',
                backgroundColor: '#ffffff',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                color: 'var(--color-navy)',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer'
              }}
            >
              Xem Trang Bảng Giá Mới
            </button>

            <button
              onClick={handleResetDefaults}
              style={{
                padding: '0.7rem 1.25rem',
                backgroundColor: '#fff1f1',
                border: '1px solid #ffcdd2',
                borderRadius: 'var(--radius-md)',
                color: '#d32f2f',
                fontWeight: 700,
                fontSize: '0.875rem',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}
            >
              <RotateCcw size={15} /> Khôi phục Bảng giá SSOT Gốc
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.25rem 1.5rem',
            marginBottom: '2rem',
            boxShadow: 'var(--shadow-sm)',
            display: 'flex',
            gap: '1.25rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          {/* Search Box */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', backgroundColor: '#f8fbfa', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', padding: '0.6rem 0.9rem', flex: '1 1 300px' }}>
            <Search size={18} color="var(--color-text-muted)" />
            <input
              type="text"
              placeholder="Tìm theo tên dịch vụ, mã code hoặc phạm vi..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: 'none',
                backgroundColor: 'transparent',
                outline: 'none',
                width: '100%',
                fontSize: '0.875rem',
                color: 'var(--color-navy)'
              }}
            />
          </div>

          {/* Technical Group Filter Select */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
            <SlidersHorizontal size={16} color="var(--color-teal-dark)" />
            <select
              value={selectedTechGroup}
              onChange={(e) => setSelectedTechGroup(e.target.value)}
              style={{
                padding: '0.6rem 1rem',
                borderRadius: 'var(--radius-md)',
                border: '1px solid var(--color-border)',
                backgroundColor: '#ffffff',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--color-navy)'
              }}
            >
              <option value="all">Tất cả 8 nhóm kỹ thuật ({services.length})</option>
              {TECH_CATEGORIES.map((cat) => (
                <option key={cat.key} value={cat.key}>
                  {cat.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Services Data Table / Grid */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {filteredServices.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', backgroundColor: '#ffffff', borderRadius: 'var(--radius-xl)', border: '1px solid var(--color-border)' }}>
              <ShieldAlert size={36} color="var(--color-text-muted)" style={{ margin: '0 auto 0.75rem auto' }} />
              <h3 style={{ fontSize: '1.1rem', color: 'var(--color-navy)', fontWeight: 700 }}>Không tìm thấy dịch vụ phù hợp</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)' }}>Thử lại với từ khóa hoặc nhóm kỹ thuật khác.</p>
            </div>
          ) : (
            filteredServices.map((srv) => {
              const isEditing = editingId === srv.id;
              const techMeta = TECH_CATEGORIES.find((t) => t.key === srv.categoryGroup);

              if (isEditing && editingItem) {
                return (
                  <div
                    key={srv.id}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '2px solid var(--color-teal)',
                      borderRadius: 'var(--radius-xl)',
                      padding: '1.75rem',
                      boxShadow: 'var(--shadow-md)'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                      <span style={{ fontWeight: 800, fontSize: '0.9rem', color: 'var(--color-teal-dark)' }}>
                        ĐANG SỬA DỊCH VỤ #{srv.id} [{srv.code}]
                      </span>
                      <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button
                          onClick={handleSaveEdit}
                          style={{
                            padding: '0.5rem 1.1rem',
                            backgroundColor: 'var(--color-orange)',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: 700,
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                          }}
                        >
                          <Save size={15} /> Lưu Thay Đổi
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          style={{
                            padding: '0.5rem 1rem',
                            backgroundColor: 'var(--color-bg)',
                            color: 'var(--color-text-muted)',
                            border: '1px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            fontWeight: 600,
                            fontSize: '0.85rem',
                            cursor: 'pointer'
                          }}
                        >
                          Hủy
                        </button>
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                      <div>
                        <label style={{ display: 'block', fontSize: '0.775rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                          Tên dịch vụ *
                        </label>
                        <input
                          type="text"
                          value={editingItem.name}
                          onChange={(e) => setEditingItem({ ...editingItem, name: e.target.value })}
                          style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.775rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                          Giá hiển thị *
                        </label>
                        <input
                          type="text"
                          value={editingItem.priceDisplay}
                          onChange={(e) => setEditingItem({ ...editingItem, priceDisplay: e.target.value })}
                          style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--color-orange-dark)' }}
                        />
                      </div>

                      <div>
                        <label style={{ display: 'block', fontSize: '0.775rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                          Effort ước tính
                        </label>
                        <input
                          type="text"
                          value={editingItem.effort}
                          onChange={(e) => setEditingItem({ ...editingItem, effort: e.target.value })}
                          style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem' }}
                        />
                      </div>

                      <div style={{ gridColumn: '1 / -1' }}>
                        <label style={{ display: 'block', fontSize: '0.775rem', fontWeight: 700, color: 'var(--color-navy)', marginBottom: '0.25rem' }}>
                          Phạm vi công việc (Scope) *
                        </label>
                        <textarea
                          rows={2}
                          value={editingItem.scope}
                          onChange={(e) => setEditingItem({ ...editingItem, scope: e.target.value })}
                          style={{ width: '100%', padding: '0.6rem 0.8rem', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)', fontSize: '0.875rem', resize: 'none' }}
                        />
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={srv.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-xl)',
                    padding: '1.25rem 1.5rem',
                    boxShadow: 'var(--shadow-sm)',
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '1.25rem',
                    alignItems: 'center',
                    opacity: srv.isActive ? 1 : 0.65
                  }}
                >
                  {/* Service ID & Name */}
                  <div style={{ flex: '2 1 240px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', marginBottom: '0.25rem' }}>
                      <span style={{ fontSize: '0.7rem', fontWeight: 800, color: 'var(--color-teal-dark)', backgroundColor: 'var(--color-teal-soft)', padding: '0.2rem 0.5rem', borderRadius: 4 }}>
                        #{srv.id}
                      </span>
                      <span style={{ fontSize: '0.7rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
                        [{srv.code}]
                      </span>
                      {techMeta && (
                        <span style={{ fontSize: '0.7rem', color: 'var(--color-navy)', fontWeight: 600, backgroundColor: '#f0f7f5', padding: '0.2rem 0.5rem', borderRadius: 4 }}>
                          {techMeta.title.split('. ')[1]}
                        </span>
                      )}
                    </div>
                    <h3 style={{ fontSize: '1rem', fontWeight: 800, color: 'var(--color-navy)', margin: 0 }}>
                      {srv.name}
                    </h3>
                    <p style={{ fontSize: '0.825rem', color: 'var(--color-text-muted)', margin: '0.25rem 0 0 0', lineHeight: 1.5 }}>
                      {srv.scope}
                    </p>
                  </div>

                  {/* Effort & Price */}
                  <div>
                    <div style={{ fontSize: '0.725rem', color: 'var(--color-text-muted)' }}>Effort: {srv.effort}</div>
                    <div style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-orange-dark)', marginTop: 2 }}>
                      {srv.priceDisplay}
                    </div>
                  </div>

                  {/* Actions & Status Toggle */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'flex-end' }}>
                    <button
                      onClick={() => handleToggleActive(srv.id)}
                      style={{
                        padding: '0.4rem 0.8rem',
                        borderRadius: 'var(--radius-full)',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: srv.isActive ? '#e8f5e9' : '#ffebee',
                        color: srv.isActive ? '#2e7d32' : '#c62828',
                        border: '1px solid',
                        borderColor: srv.isActive ? '#a5d6a7' : '#ef9a9a',
                        cursor: 'pointer'
                      }}
                    >
                      {srv.isActive ? 'Đang bật' : 'Tắt'}
                    </button>

                    <button
                      onClick={() => handleEditClick(srv)}
                      style={{
                        padding: '0.5rem 0.85rem',
                        backgroundColor: 'var(--color-bg)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        color: 'var(--color-navy)',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        cursor: 'pointer',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem'
                      }}
                    >
                      <Edit3 size={14} /> Sửa
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Container>
    </div>
  );
};
