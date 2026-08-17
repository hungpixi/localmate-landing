import { INITIAL_SERVICES_CATALOG, CatalogServiceItem } from '../data/servicesCatalog';

const STORAGE_KEY = 'localmate_services_catalog_v2';
const EVENT_KEY = 'localmate_catalog_updated';

export const getCatalogServices = (): CatalogServiceItem[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed) && parsed.length > 0) {
        return parsed;
      }
    }
  } catch (err) {
    console.warn('Unable to load catalog from localStorage, falling back to SSOT defaults', err);
  }
  return INITIAL_SERVICES_CATALOG;
};

export const saveCatalogServices = (services: CatalogServiceItem[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(services));
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: services }));
  } catch (err) {
    console.error('Failed to save catalog to localStorage', err);
  }
};

export const resetCatalogToDefault = (): CatalogServiceItem[] => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    window.dispatchEvent(new CustomEvent(EVENT_KEY, { detail: INITIAL_SERVICES_CATALOG }));
  } catch (err) {
    console.error('Failed to reset catalog', err);
  }
  return INITIAL_SERVICES_CATALOG;
};

export const updateSingleService = (updatedService: CatalogServiceItem): CatalogServiceItem[] => {
  const current = getCatalogServices();
  const next = current.map((item) => (item.id === updatedService.id ? updatedService : item));
  saveCatalogServices(next);
  return next;
};

export const subscribeCatalogChanges = (callback: (services: CatalogServiceItem[]) => void): (() => void) => {
  const handler = (e: Event) => {
    const customEvent = e as CustomEvent<CatalogServiceItem[]>;
    if (customEvent.detail) {
      callback(customEvent.detail);
    } else {
      callback(getCatalogServices());
    }
  };

  window.addEventListener(EVENT_KEY, handler);
  return () => {
    window.removeEventListener(EVENT_KEY, handler);
  };
};
