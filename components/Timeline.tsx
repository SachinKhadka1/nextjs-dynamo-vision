type timelineType = {
  year: number;
  description: string;
};

const timelineData: timelineType[] = [
  { year: 2020, description: "Got My First Camera" },
  { year: 2021, description: "Started Uploading Content" },
  { year: 2022, description: "Started Job as Videographer" },
  { year: 2023, description: "Freelancing Projects" },
];

const TimelineItem = ({
  year,
  description,
  index,
  arraySize,
  fillColor,
}: timelineType & { index: number; arraySize: number; fillColor: string }) => {
  return (
    <li className="text-white">
      {index !== 0 && <hr />}
      <div className="timeline-start">{year}</div>
      <div className="timeline-middle t">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={fillColor}
          className="w-5 h-5"
        >
          <path
            fill-rule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="timeline-end timeline-box text-black">{description}</div>
      {index !== arraySize - 1 && <hr />}
    </li>
  );
};

const Timeline = () => {
  return (
    <div>
      <ul className="timeline timeline-vertical z-50 absolute top-[250px] right-5">
        {timelineData.map(({ year, description }, index) => (
          <TimelineItem
            key={index}
            year={year}
            description={description}
            index={index}
            arraySize={timelineData.length}
            fillColor="white"
          />
        ))}
      </ul>
    </div>
  );
};

export default Timeline;
