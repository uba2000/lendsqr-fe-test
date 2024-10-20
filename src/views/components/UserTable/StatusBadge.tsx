import React from 'react'

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
  const getStatusClass = (status: string) => {
    switch (status) {
      case 'Active':
        return 'status-active';
      case 'Pending':
        return 'status-pending';
      case 'Blacklisted':
        return 'status-blacklisted';
      case 'Inactive':
        return 'status-inactive';
      default:
        return '';
    }
  };

  return <span className={`status-badge ${getStatusClass(status)}`}>{status}</span>;
};

export default StatusBadge