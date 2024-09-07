interface ProjectExperienceProps {
    title: string;
    date: string;
    responsibilities: string[];
}

export default function ProjectExperience({title,date,responsibilities}: ProjectExperienceProps) {
    return (
        <div className="mb-8">
        <h2 className="text-2xl font-semibold text-black">{title}</h2>
        <p className="text-sm mb-2 text-black">{date}</p>
        <ul className="list-disc list-inside text-black">
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