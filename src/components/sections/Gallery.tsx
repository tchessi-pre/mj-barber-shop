import { useState } from 'react';
import ScrollReveal from '@/components/ScrollReveal';
import galleryFade from '@/assets/gallery-fade.webp';
import galleryDesign from '@/assets/gallery-design.webp';
import galleryDreads from '@/assets/gallery-dreads.webp';
import galleryBraids from '@/assets/gallery-braids.webp';
import galleryBraids2 from '@/assets/gallery-braids2.webp';
import galleryKids from '@/assets/gallery-kids.webp';
import galleryColor from '@/assets/gallery-color.webp';
import galleryWedding from '@/assets/gallery-wedding.webp';
import heroBarber from '@/assets/hero-barber2.webp';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

const images = [
	{ src: galleryFade, alt: 'Dégradé américain', label: 'Dégradé' },
	{ src: galleryDesign, alt: 'Hair design artistique', label: 'Artistique' },
	{ src: galleryDreads, alt: 'Dreadlocks', label: 'Dreadlocks' },
	{ src: galleryBraids, alt: 'Tresses africaines', label: 'Tresses' },
	{ src: galleryKids, alt: 'Coupe enfant', label: 'Enfant' },
	{ src: galleryColor, alt: 'Coloration afro', label: 'Couleur' },
	{ src: galleryBraids2, alt: 'Tresses africaines', label: 'Tresses' },
	{ src: galleryWedding, alt: 'Coloration femme', label: 'Couleur' },
	{ src: heroBarber, alt: 'Barbier en action', label: 'En action' },
];

const Galerie = () => {
	const [selectedImage, setSelectedImage] = useState<string | null>(null);

	return (
		<section id='galerie' className='py-20 md:py-32 bg-secondary/50'>
			<div className='container mx-auto px-4'>
				<ScrollReveal>
					<div className='text-center mb-20 relative'>
						<span className='inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm'>
							Notre Galerie
						</span>
						<h1 className='font-display text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
							Nos <span className='text-gold-gradient'>Réalisations</span>
						</h1>
						<p className='text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed'>
							Chaque coupe est une œuvre d'art — découvrez notre savoir-faire.
						</p>
					</div>
				</ScrollReveal>

				<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4'>
					{images.map((img, i) => (
						<ScrollReveal key={img.label} delay={i * 0.08}>
							<div
								className={`group relative overflow-hidden rounded-sm cursor-pointer ${i === 0 || i === 5 ? 'md:col-span-2 md:row-span-2' : ''
									} aspect-square`}
								onClick={() => setSelectedImage(img.src)}
							>
								<img
									src={img.src}
									alt={img.alt}
									className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700'
									loading='lazy'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6'>
									<span className='text-white font-display text-lg font-semibold tracking-wide'>
										{img.label}
									</span>
								</div>
							</div>
						</ScrollReveal>
					))}
				</div>
			</div>

			<AnimatePresence>
				{selectedImage && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
						className='fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4'
					>
						<motion.div
							initial={{ scale: 0.9, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.9, opacity: 0 }}
							className='relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center'
							onClick={(e) => e.stopPropagation()}
						>
							<button
								onClick={() => setSelectedImage(null)}
								className='absolute -top-12 right-0 text-white hover:text-primary transition-colors'
								aria-label='Fermer'
							>
								<X size={32} />
							</button>
							<img
								src={selectedImage}
								alt='Zoom'
								className='max-w-full max-h-[85vh] object-contain rounded-sm shadow-2xl'
							/>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Galerie;
