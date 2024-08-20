export default function Projects() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Here are some personal projects I have worked on</h1>
        <p className = "text-lg text-center max-w-2xl">
            Autonomous Car Model (2022) 
            <br/>
            •Constructed an autonomous car model equipped with an Arduino microcontroller
            <br/>
            •Integrated a LiDAR sensor to provide real-time distance measurement for course mapping
            <br/>
            •Programmed algorithms to interpret the LiDAR data and make instantaneous driving decisions, ensuring safe navigation with a 96% success rate
        </p>   
        </main>

    );
}