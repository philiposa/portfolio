import ProjectExperience from "../components/ProjectExperience";

export default function Projects() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gray-100">
        <h1 className="text-4xl font-bold mb-8 text-black">Here are some personal projects I have worked on</h1>
        <div>
        <ProjectExperience
        title = 'Autonomous Car Model'
        date = '2022'
        responsibilities={[
        "Constructed an autonomous car model equipped with an Arduino microcontroller",
        "Integrated a LiDAR sensor to provide real-time distance measurement for course mapping",
        "Programmed algorithms to interpret the LiDAR data and make instantaneous driving decisions, ensuring safe navigation with a 96% success rate"
        ]}
        />    
        </div>
        </main>

    );
}