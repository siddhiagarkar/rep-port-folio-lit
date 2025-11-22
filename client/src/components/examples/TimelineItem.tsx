import TimelineItem from '../TimelineItem';

export default function TimelineItemExample() {
  return (
    <div className="max-w-4xl">
      <TimelineItem
        year="2021 - 2025"
        title="National Institute of Technology, Durgapur"
        subtitle="Bachelor of Technology, Electronics and Communication Engineering"
        description="CGPA: 8.11/10"
      />
      <TimelineItem
        year="2021"
        title="St. John's Senior Secondary School, Kota"
        subtitle="Higher Secondary Examination"
        description="Aggregate: 91%"
        isLast={true}
      />
    </div>
  );
}
