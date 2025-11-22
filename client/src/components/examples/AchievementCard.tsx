import AchievementCard from '../AchievementCard';
import { Trophy } from 'lucide-react';

export default function AchievementCardExample() {
  return (
    <div className="max-w-sm">
      <AchievementCard
        icon={Trophy}
        title="JEE Advanced Qualified"
        description="All India Rank of 25,123 in one of India's most competitive engineering entrance examinations."
      />
    </div>
  );
}
