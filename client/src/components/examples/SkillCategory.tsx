import SkillCategory from '../SkillCategory';
import { Code } from 'lucide-react';

export default function SkillCategoryExample() {
  return (
    <div className="max-w-md">
      <SkillCategory
        title="Languages & Frameworks"
        icon={Code}
        skills={['Python', 'JavaScript', 'C++', 'HTML', 'CSS', 'SQL', 'Django', 'Node.js']}
      />
    </div>
  );
}
