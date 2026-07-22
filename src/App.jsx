import React, { useState } from "react";
import {
	Menu,
	X,
	CheckCircle2,
	Calculator,
	HeadphonesIcon,
	TrendingUp,
	ArrowRight,
	Star,
	Bot,
	Zap,
	ShieldCheck,
} from "lucide-react";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => setIsOpen(!isOpen);

	const navLinks = [
		{ name: "Co automatyzujemy?", href: "#uslugi" },
		{ name: "Korzyści", href: "#korzysci" },
		{ name: "Opinie", href: "#opinie" },
	];

	return (
		<header className='fixed w-full top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-20'>
					{/* Logo */}
					<div
						className='flex-shrink-0 flex items-center gap-2 cursor-pointer'
						onClick={() => window.scrollTo(0, 0)}>
						<div className='bg-blue-600 p-2 rounded-lg'>
							<Bot className='h-6 w-6 text-white' />
						</div>
						<span className='font-bold text-2xl text-slate-900'>
							Auto<span className='text-blue-600'>Firma</span>
						</span>
					</div>

					{/* Desktop Menu */}
					<nav className='hidden md:flex space-x-8 items-center'>
						{navLinks.map(link => (
							<a
								key={link.name}
								href={link.href}
								className='text-slate-600 hover:text-blue-600 font-medium transition-colors'>
								{link.name}
							</a>
						))}
						<a
							href='#kontakt'
							className='px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5'>
							Darmowa wycena
						</a>
					</nav>

					{/* Mobile Menu Button */}
					<div className='md:hidden flex items-center'>
						<button
							onClick={toggleMenu}
							className='text-slate-600 hover:text-blue-600 focus:outline-none p-2'>
							{isOpen ? (
								<X className='h-7 w-7' />
							) : (
								<Menu className='h-7 w-7' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Menu Dropdown */}
			{isOpen && (
				<div className='md:hidden bg-white border-b border-slate-100 absolute w-full shadow-lg'>
					<div className='px-4 pt-2 pb-6 space-y-2'>
						{navLinks.map(link => (
							<a
								key={link.name}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className='block px-3 py-3 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50'>
								{link.name}
							</a>
						))}
						<a
							href='#kontakt'
							onClick={() => setIsOpen(false)}
							className='block px-3 py-3 text-center rounded-md text-base font-medium bg-blue-600 text-white hover:bg-blue-700 mt-4'>
							Darmowa wycena
						</a>
					</div>
				</div>
			)}
		</header>
	);
};

const Hero = () => {
	return (
		<section className='pt-32 pb-20 lg:pt-48 lg:pb-32 bg-gradient-to-br from-slate-50 to-blue-50/50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
				<div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-medium text-sm mb-8'>
					<Zap className='h-4 w-4' />
					<span>Przyszłość Twojego Biznesu</span>
				</div>
				<h1 className='text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight max-w-4xl mx-auto mb-6'>
					Zastąp powtarzalną pracę <br className='hidden md:block' />
					<span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600'>
						inteligentną automatyzacją
					</span>
				</h1>
				<p className='mt-4 text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed'>
					Oszczędzaj setki godzin miesięcznie, redukuj błędy i pozwól swojemu
					zespołowi skupić się na tym, co naprawdę rozwija Twój biznes. Wdrażamy
					systemy szyte na miarę.
				</p>
				<div className='flex flex-col sm:flex-row justify-center gap-4'>
					<a
						href='#kontakt'
						className='inline-flex justify-center items-center gap-2 px-8 py-4 text-lg font-semibold rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:shadow-xl hover:-translate-y-1'>
						Zacznij automatyzować
						<ArrowRight className='h-5 w-5' />
					</a>
					<a
						href='#uslugi'
						className='inline-flex justify-center items-center px-8 py-4 text-lg font-semibold rounded-xl bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all shadow-sm'>
						Dowiedz się więcej
					</a>
				</div>
			</div>
		</section>
	);
};

const Services = () => {
	const services = [
		{
			icon: <Calculator className='h-8 w-8 text-blue-600' />,
			title: "Księgowość i Finanse",
			description:
				"Automatyczne odczytywanie faktur (OCR), generowanie raportów finansowych, powiadomienia o braku wpłat oraz integracja systemów księgowych z CRM.",
		},
		{
			icon: <HeadphonesIcon className='h-8 w-8 text-blue-600' />,
			title: "Obsługa Klienta",
			description:
				"Wdrożenie inteligentnych chatbotów AI, automatyczne systemy biletowe (ticketing), przypomnienia o spotkaniach oraz zautomatyzowane ankiety.",
		},
		{
			icon: <TrendingUp className='h-8 w-8 text-blue-600' />,
			title: "Marketing i Sprzedaż",
			description:
				"Automatyzacja lejków sprzedażowych, sekwencje e-mail (cold mailing), przypisywanie leadów do handlowców oraz śledzenie aktywności.",
		},
	];

	return (
		<section id='uslugi' className='py-24 bg-white'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center max-w-3xl mx-auto mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
						Jakie procesy możemy zautomatyzować?
					</h2>
					<p className='text-lg text-slate-600'>
						Praktycznie każdy powtarzalny proces cyfrowy można zoptymalizować.
						Oto obszary, w których najczęściej generujemy oszczędności.
					</p>
				</div>
				<div className='grid md:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<div
							key={index}
							className='bg-slate-50 rounded-2xl p-8 border border-slate-100 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group'>
							<div className='w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform'>
								{service.icon}
							</div>
							<h3 className='text-xl font-bold text-slate-900 mb-3'>
								{service.title}
							</h3>
							<p className='text-slate-600 leading-relaxed'>
								{service.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const Benefits = () => {
	const benefits = [
		{
			title: "Odcięcie kosztów operacyjnych",
			desc: "Boty i skrypty pracują 24/7 bez urlopów, przerw i nadgodzin.",
		},
		{
			title: "Eliminacja ludzkich błędów",
			desc: "Przepisywanie danych między systemami odbywa się ze 100% dokładnością.",
		},
		{
			title: "Szybsza skalowalność",
			desc: "Rozwój firmy nie musi oznaczać proporcjonalnego zatrudniania back-office.",
		},
		{
			title: "Zadowoleni pracownicy",
			desc: "Uwolnienie zespołu od nużących, powtarzalnych kliknięć (tzw. małpiej pracy).",
		},
	];

	return (
		<section
			id='korzysci'
			className='py-24 bg-slate-900 text-white overflow-hidden relative'>
			{/* Decorative background elements */}
			<div className='absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-blue-600/20 blur-3xl'></div>
			<div className='absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-indigo-600/20 blur-3xl'></div>

			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
				<div className='grid lg:grid-cols-2 gap-16 items-center'>
					<div>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Dlaczego warto wdrożyć automatyzację już teraz?
						</h2>
						<p className='text-slate-400 text-lg mb-8 leading-relaxed'>
							Firmy, które jako pierwsze cyfryzują swoje procesy, zyskują
							ogromną przewagę konkurencyjną. Nie pozwól, aby Twoja firma
							została w tyle przez ręczne przepisywanie danych.
						</p>
						<div className='space-y-6'>
							{benefits.map((benefit, index) => (
								<div key={index} className='flex gap-4'>
									<div className='flex-shrink-0 mt-1'>
										<CheckCircle2 className='h-6 w-6 text-blue-400' />
									</div>
									<div>
										<h4 className='text-xl font-semibold mb-1'>
											{benefit.title}
										</h4>
										<p className='text-slate-400'>{benefit.desc}</p>
									</div>
								</div>
							))}
						</div>
					</div>
					<div className='relative'>
						<div className='bg-slate-800 border border-slate-700 p-8 rounded-2xl shadow-2xl relative z-10'>
							<div className='flex items-center gap-4 border-b border-slate-700 pb-6 mb-6'>
								<ShieldCheck className='h-12 w-12 text-green-400' />
								<div>
									<h3 className='text-2xl font-bold'>
										Gwarancja Zwrotu z Inwestycji
									</h3>
									<p className='text-slate-400'>
										Automatyzacja to nie koszt, to inwestycja.
									</p>
								</div>
							</div>
							<p className='text-lg text-slate-300 italic'>
								"Średni czas zwrotu z wdrożenia naszych rozwiązań (ROI) wynosi
								zaledwie od 3 do 6 miesięcy. Po tym czasie system generuje dla
								Ciebie czysty zysk z zaoszczędzonych roboczogodzin."
							</p>
						</div>
						{/* Decorative offset box */}
						<div className='absolute top-4 -right-4 w-full h-full border-2 border-blue-500/30 rounded-2xl z-0 rounded-bl-3xl'></div>
					</div>
				</div>
			</div>
		</section>
	);
};

const Testimonials = () => {
	const testimonials = [
		{
			name: "Jan Kowalski",
			role: "CEO, Logis-Tech Sp. z o.o.",
			content:
				"Wdrożenie automatycznego fakturowania zaoszczędziło naszej księgowości około 40 godzin miesięcznie. Fantastyczny kontakt z zespołem wdrażającym.",
			rating: 5,
		},
		{
			name: "Anna Nowak",
			role: "Dyrektor Sprzedaży, E-commerce Plus",
			content:
				"Bot obsługujący zapytania klientów po godzinach pracy zwiększył naszą konwersję o 15%. Klienci nie muszą już czekać na odpowiedź do rana.",
			rating: 5,
		},
	];

	return (
		<section id='opinie' className='py-24 bg-slate-50'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl md:text-4xl font-bold text-slate-900 mb-4'>
						Zaufali nam najlepsi
					</h2>
					<p className='text-lg text-slate-600'>
						Zobacz, co mówią klienci, którzy już przeszli cyfrową transformację
						z nami.
					</p>
				</div>
				<div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
					{testimonials.map((test, index) => (
						<div
							key={index}
							className='bg-white p-8 rounded-2xl shadow-sm border border-slate-100 relative'>
							<div className='flex text-yellow-400 mb-4'>
								{[...Array(test.rating)].map((_, i) => (
									<Star key={i} className='h-5 w-5 fill-current' />
								))}
							</div>
							<p className='text-slate-700 text-lg mb-6 italic'>
								"{test.content}"
							</p>
							<div className='flex items-center gap-4'>
								<div className='h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-bold text-xl'>
									{test.name.charAt(0)}
								</div>
								<div>
									<div className='font-bold text-slate-900'>{test.name}</div>
									<div className='text-sm text-slate-500'>{test.role}</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

const Contact = () => {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		setIsSubmitted(true);
		// W prawdziwej aplikacji tutaj wysyłalibyśmy dane na serwer
		setTimeout(() => {
			setIsSubmitted(false);
			e.target.reset();
		}, 5000);
	};

	return (
		<section id='kontakt' className='py-24 bg-white'>
			<div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='bg-blue-600 rounded-3xl overflow-hidden shadow-2xl'>
					<div className='grid md:grid-cols-2'>
						<div className='p-10 lg:p-12 text-white'>
							<h2 className='text-3xl font-bold mb-4'>
								Jesteś gotowy na optymalizację?
							</h2>
							<p className='text-blue-100 text-lg mb-8'>
								Opisz krótko swój proces lub problem, a my odezwiemy się w ciągu
								24h z pomysłem na jego automatyzację.
							</p>
							<div className='space-y-4'>
								<div className='flex items-center gap-3'>
									<div className='bg-blue-500/50 p-2 rounded-lg'>
										<Zap className='h-5 w-5' />
									</div>
									<span>Darmowa konsultacja (30 min)</span>
								</div>
								<div className='flex items-center gap-3'>
									<div className='bg-blue-500/50 p-2 rounded-lg'>
										<ShieldCheck className='h-5 w-5' />
									</div>
									<span>Gwarancja poufności (NDA)</span>
								</div>
							</div>
						</div>

						<div className='bg-slate-50 p-10 lg:p-12'>
							{isSubmitted ? (
								<div className='h-full flex flex-col items-center justify-center text-center space-y-4'>
									<div className='w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center'>
										<CheckCircle2 className='h-8 w-8' />
									</div>
									<h3 className='text-2xl font-bold text-slate-900'>
										Dziękujemy!
									</h3>
									<p className='text-slate-600'>
										Twoja wiadomość została wysłana. Odezwiemy się najszybciej
										jak to możliwe.
									</p>
								</div>
							) : (
								<form onSubmit={handleSubmit} className='space-y-4'>
									<div>
										<label
											htmlFor='name'
											className='block text-sm font-medium text-slate-700 mb-1'>
											Imię i Nazwisko
										</label>
										<input
											type='text'
											id='name'
											required
											className='w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all'
											placeholder='Jan Kowalski'
										/>
									</div>
									<div>
										<label
											htmlFor='email'
											className='block text-sm font-medium text-slate-700 mb-1'>
											Adres E-mail
										</label>
										<input
											type='email'
											id='email'
											required
											className='w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all'
											placeholder='jan@twojafirma.pl'
										/>
									</div>
									<div>
										<label
											htmlFor='message'
											className='block text-sm font-medium text-slate-700 mb-1'>
											Jak możemy pomóc?
										</label>
										<textarea
											id='message'
											rows='3'
											required
											className='w-full px-4 py-3 rounded-lg border border-slate-200 focus:ring-2 focus:ring-blue-600 focus:border-blue-600 outline-none transition-all resize-none'
											placeholder='Chciałbym zautomatyzować proces wystawiania faktur...'></textarea>
									</div>
									<button
										type='submit'
										className='w-full bg-slate-900 text-white font-bold py-3 px-4 rounded-lg hover:bg-slate-800 transition-colors shadow-lg'>
										Wyślij zapytanie
									</button>
								</form>
							)}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

const Footer = () => (
	<footer className='bg-slate-950 text-slate-400 py-8 text-center border-t border-slate-900'>
		<div className='max-w-7xl mx-auto px-4'>
			<div className='flex items-center justify-center gap-2 mb-4'>
				<Bot className='h-5 w-5 text-blue-500' />
				<span className='font-bold text-xl text-white'>
					Auto<span className='text-blue-500'>Firma</span>
				</span>
			</div>
			<p>&copy; 2026 AutoFirma. Wszelkie prawa zastrzeżone.</p>
		</div>
	</footer>
);

export default function App() {
	return (
		<div className='min-h-screen bg-slate-50 font-sans selection:bg-blue-200 selection:text-blue-900'>
			<Navbar />
			<main>
				<Hero />
				<Services />
				<Benefits />
				<Testimonials />
				<Contact />
			</main>
			<Footer />
		</div>
	);
}
