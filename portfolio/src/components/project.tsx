import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export const Projects = () => {
	const projects = [
		{
			name: "BERT — Coffee Robotic Arm",
			timeline: "Personal Project | May 2024 – Present",
			points: [
				"Designed a modular Python control system for a robotic arm, managing sensor data pipelines, actuation logic, and a user-facing interface.",
				"Implemented observability hooks to monitor system state in real time, enabling rapid debugging and iteration.",
			],
		},
		{
			name: "Portfolio Website",
			timeline: "Personal Project | Aug 2024 – Dec 2024",
			points: [
				"Deployed a responsive web application on AWS with full CI/CD integration via GitHub Actions, achieving 100% uptime.",
			],
		},
	];

	return (
		<section className="w-full max-w-4xl mx-auto p-8 space-y-6">
			<h2 className="text-3xl font-bold">Projects, Skills &amp; Education</h2>

			<div className="grid gap-4">
				{projects.map((project) => (
					<Card key={project.name}>
						<CardHeader>
							<CardTitle>{project.name}</CardTitle>
							<p className="text-sm text-zinc-400">{project.timeline}</p>
						</CardHeader>
						<CardContent>
							<ul className="list-disc pl-5 space-y-2">
								{project.points.map((point) => (
									<li key={point} className="text-zinc-200">
										{point}
									</li>
								))}
							</ul>
						</CardContent>
					</Card>
				))}
			</div>

			<Card>
				<CardHeader>
					<CardTitle>Technical Skills</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<p>
						Python, C, C++, JavaScript, TypeScript, Java, Bash | GitHub
						Actions, Harness, Docker, CI/CD, AWS, S3, Azure, Vercel
					</p>
					<p>
						Linux &amp; Windows (command line), macOS | PyTest, Jest, Cypress |
						PostgreSQL, MongoDB
					</p>
					<p>
						Git, JIRA, Scrum/Agile, software development life cycle (SDLC), VS
						Code
					</p>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Education</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					<p>Portland State University | B.S. Computer Science | Sep 2023 – Present</p>
					<p>
						Western Washington University | B.S. Music Education | Aug 2014 –
						Sep 2018
					</p>
				</CardContent>
			</Card>
		</section>
	);
};
