import Link from "next/link";

export const EmailForm = () => {
	return (
		<section id="email" className="w-full max-w-3xl mx-auto p-8">
			<div className="rounded-xl border border-slate-700 bg-slate-900/60 p-6 text-center space-y-4">
				<h2 className="text-3xl font-bold">Contact</h2>
				<p className="text-zinc-300">
					Open to DevOps, infrastructure, and full-stack engineering
					opportunities.
				</p>
				<div className="flex flex-wrap items-center justify-center gap-3">
					<Link
						href="mailto:jayabe@pdx.edu"
						className="px-4 py-2 rounded-md bg-white text-black hover:bg-zinc-200 transition"
					>
						Email jayabe@pdx.edu
					</Link>
					<Link
						href="tel:+13608312912"
						className="px-4 py-2 rounded-md border border-zinc-500 hover:border-zinc-300 transition"
					>
						Call (360) 831-2912
					</Link>
				</div>
				<p className="text-sm text-zinc-400">
					linkedin.com/in/jacob-abegglen/ | github.com/jaysabe
				</p>
			</div>
		</section>
	);
};
