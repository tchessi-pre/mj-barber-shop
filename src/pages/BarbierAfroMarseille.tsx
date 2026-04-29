import Layout from "@/components/Layout";
import { MJ_BARBER_ADDRESS_FULL, MJ_BARBER_GOOGLE_MAPS_DIRECTIONS_URL, MJ_BARBER_PHONE_TEL } from "@/lib/utils";

const BarbierAfroMarseille = () => {
	return (
		<Layout>
			<section className="py-24 md:py-32 bg-secondary/40">
				<div className="container mx-auto px-4">
					<div className="max-w-4xl mx-auto">
						<div className="text-center mb-12">
							<span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6">
								Marseille 1er • 13001
							</span>
							<h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight">
								Barbier afro à <span className="text-gold-gradient">Marseille</span>
							</h1>
							<p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
								MJ Barber Chez Junior est un barbershop spécialisé afro à Marseille (Noailles, 13001). Dégradés, tresses,
								dreadlocks et hair design, sans rendez-vous.
							</p>
						</div>

						<div className="bg-card border border-border rounded-sm p-6 md:p-8 space-y-8">
							<div className="space-y-3">
								<h2 className="font-display text-xl font-semibold">Spécialiste coiffure afro à Marseille</h2>
								<div className="text-sm text-muted-foreground leading-relaxed space-y-3">
									<p>
										Si tu cherches un barbier afro à Marseille, l’objectif est toujours le même : un dégradé propre, des contours
										nets, et une coupe adaptée à la forme du visage et à la texture du cheveu. Notre approche est technique,
										précise et pensée pour que le rendu reste beau plusieurs jours.
									</p>
									<p>
										Nous travaillons aussi les styles créatifs : hair design (dessins), couleurs, et looks sur mesure. Pour les
										tresses et les dreadlocks, on met l’accent sur la tenue, la finition et le confort, avec ou sans rajouts
										selon la prestation.
									</p>
								</div>
							</div>

							<div className="space-y-3">
								<h2 className="font-display text-xl font-semibold">Prestations populaires</h2>
								<div className="text-sm text-muted-foreground leading-relaxed space-y-2">
									<p>Dégradé américain • Coupe afro • Dessins / hair design • Tresses (cornrows, vanilles) • Dreadlocks • Couleur</p>
									<p>Coupe enfant et coupe mariage : des finitions premium quand tu veux un résultat impeccable.</p>
								</div>
							</div>

							<div className="space-y-3">
								<h2 className="font-display text-xl font-semibold">Adresse & accès</h2>
								<div className="text-sm text-muted-foreground leading-relaxed space-y-2">
									<p className="text-secondary-foreground font-medium">{MJ_BARBER_ADDRESS_FULL}</p>
									<p>Sans rendez-vous. Horaires affichés sur la page d’accueil.</p>
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
						</div>
					</div>
				</div>
			</section>
		</Layout>
	);
};

export default BarbierAfroMarseille;
