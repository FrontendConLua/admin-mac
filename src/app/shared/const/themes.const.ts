import { Theme } from '../../interfaces';

export const macLight: Theme = {
  name: 'macLight',
  properties: {
    '--text-primary-color': '#000000',
    '--select_background': 'rgba(0, 0, 0, 0.05)',
    '--icon-backgound': '#ffffff',
    '--background-color': '#f6f6f6',
    '--breadcrumbs-disabled': 'rgba(0, 0, 0, 0.4)',
    '--breadcrumbs-line': 'rgba(0, 0, 0, 0.4)',
    '--box-shadow-select': '0px 1px 0px 0px rgba(0, 0, 0, 0.1)',
    '--search-container': 'rgba(0, 0, 0, 0.05)',
    '--placeholder': 'rgba(0, 0, 0, 0.2)',
    '--grdient-dark':
      'linear-gradient(180deg,rgba(0, 0, 0, 1),rgba(0, 0, 0, 0.76))',
    '--grdient-blue':
      'linear-gradient(180deg, #007aff, rgba(0, 122, 255, 0.67))',
    '--gradient-drak-icon':
      'linear-gradient(180deg,rgb(43, 42, 42),rgba(0, 0, 0, 0.6))',
    '--gradient-blue-icon':
      'linear-gradient(180deg,rgba(0, 122, 255, 0.6),rgba(0, 122, 255, 0.67))',
    '--card-background': '#ffffff',
    '--box-shadow-sidebar': '0 8px 16px rgba(0, 0, 0, 0.2)',
    '--blur': 'rgba(255, 255, 255, 0.5)',
  },
};

export const macDark: Theme = {
  name: 'macDark',
  properties: {
    '--text-primary-color': '#ffffff',
    '--select_background': 'rgba(255, 255, 255, 0.1)',
    '--icon-backgound': '#000000',
    '--background-color': '#2a2a2a',
    '--breadcrumbs-disabled': 'rgba(255, 255, 255, 0.4)',
    '--breadcrumbs-line': 'rgba(255, 255, 255, 0.4)',
    '--box-shadow-select': '0px 1px 0px 0px rgba(0, 0, 0, 0.1)',
    '--search-container': 'rgba(255, 255, 255, 0.1)',
    '--placeholder': 'rgba(255, 255, 255, 0.2)',
    '--grdient-dark':
      'linear-gradient(180deg,rgba(0, 0, 0, 1),rgba(255, 255, 255, 0.1))',
    '--grdient-blue':
      'linear-gradient(180deg,rgba(10, 132, 255, 0.5),rgba(10, 132, 255, 1))',
    '--gradient-drak-icon':
      'linear-gradient(180deg,rgba(255, 255, 255, 0.2),rgba(255, 255, 255, 0.5))',
    '--gradient-blue-icon':
      'linear-gradient(180deg,rgba(0, 122, 255, 0.6),rgba(0, 122, 255, 0.67))',
    '--card-background': 'rgba(255, 255, 255, 0.05)',
    '--box-shadow-sidebar': '0 8px 16px rgba(0, 0, 0, 0.5)',
    '--blur': 'rgba(0, 0, 0, 0.5)',
  },
};
