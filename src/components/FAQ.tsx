'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import  { Link } from 'react-router-dom'

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How do I book a safari with Kuja Twende?',
            answer: 'Simply browse destinations, select your preferred safari package, and follow the easy booking steps. You’ll receive instant confirmation once your trip is reserved.',
        },
        {
            id: 'item-2',
            question: 'What payment methods are supported?',
            answer: 'Kuja Twende supports M-Pesa, bank transfers, and major cards. Payments are securely processed through our PayHero integration.',
        },
        {
            id: 'item-3',
            question: 'Can I reschedule or cancel my safari?',
            answer: 'Yes, you can reschedule or cancel your trip up to 48 hours before departure. Contact our support team to assist with changes or refunds.',
        },
        {
            id: 'item-4',
            question: 'Do you offer group or custom travel packages?',
            answer: 'Absolutely! Kuja Twende curates both individual and group safaris. You can also request a custom itinerary that fits your schedule, budget, and preferred destinations.',
        },
        {
            id: 'item-5',
            question: 'Is transport and accommodation included?',
            answer: 'Most Kuja Twende packages include comfortable transport, guided tours, and accommodation. Details are listed in each package description before booking.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">
                        Find quick answers about Kuja Twende’s safaris, bookings, and travel experiences across Kenya.
                    </p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can’t find what you’re looking for? Reach out to our{' '}
                        <Link
                            href="#"
                            className="text-primary font-medium hover:underline">
                            Kuja Twende support team
                        </Link>{' '}
                        for help.
                    </p>
                </div>
            </div>
        </section>
    )
}
