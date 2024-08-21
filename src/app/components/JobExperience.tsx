interface JobExperienceProps{
    title: string;
    company: string;
    duration: string
    responsibilities: string[];
}

export default function JobExperience({title,company,duration,responsibilities}: JobExperienceProps) {
    return(
        <div className="mb-8">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <h3 className="text-lg">{company}</h3>
        <p className="text-sm mb-2">{duration}</p>
        <ul className="list-disc list-inside">
        {responsibilities.map((responsibility, index) => {
            return(
                <li key={index} className="text-lg">
                    {responsibility} 
                </li>
            );
        })}
        </ul>
      </div>
    );
}