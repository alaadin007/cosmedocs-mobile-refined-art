
import React from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import PartnerInvitation from '@/pages/PartnerInvitation';

const PartnerInvitationWrapper = () => {
  const { fellowName } = useParams();
  const [searchParams] = useSearchParams();
  
  // Get fellow details from URL parameters
  const nameFromParams = fellowName || searchParams.get('name') || 'Dr. [Full Name]';
  const fellowId = searchParams.get('id') || searchParams.get('fellowId') || 'fellow-001';
  
  // Decode URL-encoded name and format it properly
  const decodedName = decodeURIComponent(nameFromParams).replace(/-/g, ' ');
  const formattedName = decodedName.startsWith('Dr.') ? decodedName : `Dr. ${decodedName}`;

  return (
    <PartnerInvitation 
      fellowName={formattedName}
      fellowId={fellowId}
    />
  );
};

export default PartnerInvitationWrapper;
