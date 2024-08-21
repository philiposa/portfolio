import JobExperience from "../components/JobExperience";

export default function Work() {
    return(
        <main className="flex min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-4xl font-bold mb-8">Below you can find my work experience</h1>
        <div className="max-w-2xl">
        <JobExperience 
        title="Systems Developer, Intern"
        company="Co-operators"
        duration="Winter 2023 - Fall 2023"
        responsibilities={[
        "Developed Python Scripts to collect Atlassian user data for the company, increasing the efficiency of the yearly audit by 70%",
        "Used Kubernetes to orchestrate the deployment of Docker containers on to Splunk",
        "Worked with Jenkins to provision and manage development, testing, and production environments, reducing the risk of bugs by 30%",
        "Collaborated with customers to solve Atlassian Jira and Confluence issues, decreasing the ticket wait-time by 50%",
          ]}
        />
        <JobExperience
        title="Software Engineer, Intern"
        company="Big Shooter Golf Inc"
        duration="Summer 2022"
        responsibilities={[
        "Developed over 50 dynamic web components in V2 of the application using the Ionic framework and TypeScript, resulting in a 30% boost in user interaction time",
        "Created multiple API’s using the Django REST framework, which helped increase the user signup count by 10%",
        "Engineered database schema in Postgres to ensure data integrity and optimized indexing",
        "Performed unit testing, debugging and rigorous problem solving in the Django framework",
        ]}
        />
        <JobExperience
        title="Software Engineer, Intern"
        company="Year Zero Studios"
        duration="Fall 2021"
        responsibilities={[
        "Successfully executed and delivered 20+ critical enhancements for the company website using TypeScript and React within a Linux environment, addressing key Jira tickets",
        "Designed multiple pages using CSS and HTML, increasing the total user count by 25%",
        "Conducted over 40 code review sessions with developers to debug and optimize code",
        "Collaborated with UX engineers in Figma to design and iterate user interfaces",
        ]}
        />
        </div>
        </main>
    );
}