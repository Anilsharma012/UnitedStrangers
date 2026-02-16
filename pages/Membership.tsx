
import React from 'react';
import BecomeAMember from './BecomeAMember';
import LaunchesSection from '../components/LaunchesSection';

interface MembershipProps {
  onApplyClick: () => void;
}

const Membership: React.FC<MembershipProps> = ({ onApplyClick }) => {
  return (
    <div className="fade-in">
      <BecomeAMember onApplyClick={onApplyClick} />
      <LaunchesSection />
      <div className="h-20 bg-white"></div>
    </div>
  );
};

export default Membership;
