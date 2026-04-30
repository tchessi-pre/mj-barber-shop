import Layout from "@/components/Layout";
import {
	MJ_BARBER_ADDRESS_FULL,
	MJ_BARBER_GOOGLE_MAPS_DIRECTIONS_URL,
	MJ_BARBER_PHONE_TEL,
} from "@/lib/utils";

const BarbierAfroMarseille = () => {
	return (
		<Layout>
			<section className="py-24 md:py-32 bg-secondary/40">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						{/* HEADER */}
						<div className="text-center mb-12">
							<span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
								Marseille 1er • 13001
							</span>

							<h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
								Barbier Afro Marseille –{" "}
								<span className="text-gold-gradient">
									Spécialiste cheveux afro
								</span>
							</h1>

							<p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
								MJ Barber Chez Junior est un barber afro à Marseille spécialisé
								en dégradé, tresses, dreadlocks et hair design. Salon situé à
								Noailles (13001), sans rendez-vous.
							</p>
						</div>

						<div className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-10">
							{/* INTRO SEO */}
							<div className="space-y-3">
								<h2 className="font-display text-xl font-semibold">
									Barber afro à Marseille – expertise et précision
								</h2>

								<div className="text-sm text-muted-foreground leading-relaxed space-y-3">
									<p>
										MJ Barber Chez Junior est un barbier afro à Marseille
										spécialisé dans les cheveux afro pour homme. Situé dans le
										quartier Noailles (13001), le salon propose des prestations
										modernes adaptées à tous les styles et toutes les textures
										de cheveux.
									</p>

									<p>
										Si tu recherches un barber afro à Marseille, l’objectif est
										d’obtenir un dégradé propre (fade), des contours précis
										(line-up) et une coupe adaptée à la forme du visage. Chaque
										prestation est réalisée avec rigueur pour garantir un rendu
										net et durable.
									</p>

									<p>
										En tant que coiffeur afro à Marseille, le salon propose aussi
										des styles créatifs comme le hair design (dessins), les
										coupes personnalisées et les looks tendance.
									</p>
								</div>
							</div>

							{/* SERVICES */}
							<div className="space-y-3">
								<h2 className="font-display text-xl font-semibold">
									Prestations de barbier afro à Marseille
								</h2>

								<ul className="text-sm text-muted-foreground leading-relaxed space-y-2">
									<li>Dégradé (fade)</li>
									<li>Coupe afro</li>
									<li>Contours (line-up)</li>
									<li>Hair design (dessins)</li>
									<li>Taille de barbe</li>
									<li>Tresses afro (cornrows, vanilles)</li>
									<li>Dreadlocks (création et entretien)</li>
								</ul>
							</div>

							{/* DETAILS SEO */}
							<div className="space-y-3">
								<h2 className="font-display text-xl font-semibold">
									Coiffeur afro à Marseille – tresses et dreadlocks
								</h2>

								<p className="text-sm text-muted-foreground leading-relaxed">
									En plus des coupes, MJ Barber Chez Junior est aussi un
									coiffeur afro à Marseille spécialisé dans les tresses afro
									(cornrows, vanilles) et les dreadlocks. Chaque coiffure est
									réalisée avec soin pour garantir une bonne tenue et un style
									propre.
								</p>
							</div>

							{/* LOCAL SEO */}
							<div className="space-y-3">
								<h2 className="font-display text-xl font-semibold">
									Barbier afro Marseille centre – Noailles (13001)
								</h2>

								<p className="text-sm text-muted-foreground leading-relaxed">
									Situé dans le centre-ville de Marseille, le salon est
									facilement accessible depuis le Vieux-Port, Noailles et les
									quartiers alentours. C’est l’endroit idéal si tu cherches un
									barber afro à Marseille proche de toi.
								</p>
							</div>

							{/* CTA */}
							<div className="space-y-3">
								<h2 className="font-display text-xl font-semibold">
									Adresse & accès
								</h2>

								<div className="text-sm text-muted-foreground leading-relaxed space-y-2">
									<p className="text-secondary-foreground font-medium">
										{MJ_BARBER_ADDRESS_FULL}
									</p>

									<p>Sans rendez-vous – service rapide et professionnel.</p>

									<div className="flex flex-col sm:flex-row gap-3 pt-2">
										<a
											href={MJ_BARBER_PHONE_TEL}
											className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground font-semibold px-6 h-12 hover:opacity-90 transition-opacity"
										>
											Appeler le salon
										</a>

										<a
											href={MJ_BARBER_GOOGLE_MAPS_DIRECTIONS_URL}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center justify-center rounded-full border border-border bg-background font-semibold px-6 h-12 hover:bg-muted transition-colors"
										>
											Itinéraire Google Maps
										</a>
									</div>
								</div>
							</div>

							{/* INTERNAL LINKS SEO */}
							{/* <div className="space-y-3">
								<h2 className="font-display text-xl font-semibold">
									Nos autres services
								</h2>

								<div className="text-sm text-muted-foreground">
									<p>
										Découvrez aussi notre service de{" "}
										<a
											href="/coiffeur-afro-marseille"
											className="underline"
										>
											coiffeur afro à Marseille
										</a>{" "}
										ou nos{" "}
										<a
											href="/tresses-afro-marseille"
											className="underline"
										>
											tresses afro à Marseille
										</a>
										.
									</p>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default BarbierAfroMarseille;