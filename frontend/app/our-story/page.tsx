"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function OurStory() {
  return (
    <main
      className="overflow-hidden"
      style={{
        background: "#F8FCFA",
        color: "#0D281B",
      }}
    >
      {/* ================================================= */}
      {/* Background Decoration */}
      {/* ================================================= */}

      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-52 -left-52 w-[650px] h-[650px] rounded-full blur-3xl opacity-30"
          style={{ background: "#B9E3CE" }}
        />

        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
          style={{ background: "#EFF8F3" }}
        />
      </div>

      {/* ================================================= */}
      {/* HERO */}
      {/* ================================================= */}

      <section className="relative min-h-screen flex items-center py-20 md:py-28">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Left - Content */}

            <motion.div
              initial={{
                opacity: 0,
                x: -50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
              }}
              className="order-2 lg:order-1"
            >
              {/* Small Label */}

              <p
                className="uppercase tracking-[8px] text-sm mb-8"
                style={{
                  color: "#4D6B5C",
                }}
              >
                OUR STORY
              </p>

              {/* Heading */}

              <h1
                className="font-serif font-bold leading-[1.05]
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-7xl
                xl:text-8xl"
                style={{
                  color: "#0D281B",
                }}
              >
                A Journey
                <br />

                <span
                  style={{
                    color: "#489A71",
                  }}
                >
                  I Chose to Continue
                </span>
              </h1>

              {/* Line */}

              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: 120,
                }}
                transition={{
                  delay: .5,
                  duration: .8,
                }}
                className="h-[2px] mt-10"
                style={{
                  background: "#0D281B",
                }}
              />

              {/* Intro */}

              <motion.p
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: .4,
                  duration: .8,
                }}
                className="mt-10 max-w-2xl leading-9 text-lg md:text-xl"
                style={{
                  color: "#4D6B5C",
                }}
              >
                Some journeys begin with an idea.

                <br />
                <br />

                Ours began with trust.

                <br />
                <br />

                Built by a father,
                strengthened through relationships,
                and carried forward with a vision
                that continues to grow every single day.
              </motion.p>

              {/* Since */}

              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                transition={{
                  delay: .9,
                }}
                className="mt-10"
              >
                <p
                  className="text-base tracking-[5px] uppercase font-medium"
                  style={{
                    color: "#489A71",
                  }}
                >
                  Since 2013
                </p>
              </motion.div>
            </motion.div>

            {/* Right - Ujjwal Image */}

            <motion.div
              initial={{
                opacity: 0,
                x: 50,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: 0.9,
                delay: .15,
              }}
              className="relative order-1 lg:order-2"
            >
              {/* Decorative Background */}

              <div
                className="absolute -bottom-6 -right-6 w-full h-full rounded-[40px]"
                style={{
                  background: "#B9E3CE",
                }}
              />

              {/* Image */}

              <div
                className="relative overflow-hidden rounded-[40px] shadow-2xl"
                style={{
                  background: "#EFF8F3",
                }}
              >
                <Image
                  src="/Ujjwal.jpg.jpeg"
                  alt="Ujjwal"
                  width={900}
                  height={1100}
                  priority
                  className="w-full h-[620px] md:h-[720px] object-cover object-center"
                />
              </div>

              {/* Small Image Caption */}

              <div
                className="absolute -bottom-5 left-6 md:left-10 px-6 py-3 rounded-full shadow-lg"
                style={{
                  background: "#0D281B",
                  color: "#B9E3CE",
                }}
              >
                <span className="text-sm tracking-[3px] uppercase">
                  Since 2013
                </span>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Scroll */}

        <motion.div
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
        >
          <ArrowDown
            size={30}
            color="#0D281B"
          />
        </motion.div>
      </section>

      {/* ================================================= */}
      {/* INTRODUCTION */}
      {/* ================================================= */}

      <section className="py-28 md:py-36">

        <div className="container mx-auto max-w-6xl px-6">

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .8,
            }}
            viewport={{
              once: true,
            }}
          >
            {/* Label */}

            <p
              className="uppercase tracking-[8px] text-sm mb-6"
              style={{
                color: "#4D6B5C",
              }}
            >
              OUR BEGINNING
            </p>

            {/* Title */}

            <h2
              className="font-serif text-4xl md:text-6xl leading-tight max-w-4xl"
              style={{
                color: "#0D281B",
              }}
            >
              Every journey has
              <br />

              a story worth remembering.
            </h2>

            {/* Quote */}

            <div
              className="mt-20 border-l-[5px] pl-8"
              style={{
                borderColor: "#0D281B",
              }}
            >
              <p
                className="text-2xl md:text-4xl font-serif leading-relaxed"
                style={{
                  color: "#0D281B",
                }}
              >
                People often ask me,
              </p>

              <p
                className="mt-8 italic text-3xl md:text-5xl font-serif leading-relaxed"
                style={{
                  color: "#0D281B",
                }}
              >
                “When did you start
                <br />
                your business?”
              </p>
            </div>

            <div className="mt-16 space-y-10">

              <p
                className="text-xl leading-10"
                style={{
                  color: "#4D6B5C",
                }}
              >
                The truth is...
              </p>

              <p
                className="text-3xl md:text-5xl font-serif leading-relaxed"
                style={{
                  color: "#0D281B",
                }}
              >
                I didn't start it—
                <br />
                I grew up with it.
              </p>
                            <p
                className="text-xl leading-10"
                style={{
                  color: "#4D6B5C",
                }}
              >
                In <strong style={{ color: "#0D281B" }}>2013</strong>, my father
                started{" "}
                <strong style={{ color: "#0D281B" }}>
                  UJJWAL KITCHEN KING PRODUCT
                </strong>{" "}
                with a simple vision: to provide quality kitchenware and
                household products while earning the trust of every customer and
                retailer we served.
              </p>

              <p
                className="text-xl leading-10"
                style={{
                  color: "#4D6B5C",
                }}
              >
                At that time, I was just a child. But I had the privilege of
                watching the business grow—not through advertisements, but
                through trust, quality, and long-term relationships.
              </p>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* 2013 Timeline */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
            className="mt-32"
          >
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left Image */}

              <div className="relative">

                {/* Background Box */}

                <div
                  className="absolute -top-6 -left-6 w-full h-full rounded-[32px]"
                  style={{
                    background: "#B9E3CE",
                  }}
                />

                <div
                  className="relative overflow-hidden rounded-[32px] shadow-2xl"
                  style={{
                    background: "#EFF8F3",
                  }}
                >
                  <Image
                    src="/banner1.png"
                    alt="UJJWAL KITCHEN KING PRODUCT"
                    width={700}
                    height={850}
                    className="w-full h-[650px] object-cover"
                  />
                </div>
              </div>

              {/* Right */}

              <div>

                <p
                  className="uppercase tracking-[8px] text-sm mb-6"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  2013
                </p>

                <h2
                  className="font-serif text-5xl leading-tight"
                  style={{
                    color: "#0D281B",
                  }}
                >
                  Where Everything
                  <br />
                  Began
                </h2>

                <div
                  className="w-24 h-[2px] mt-8 mb-10"
                  style={{
                    background: "#0D281B",
                  }}
                />

                <p
                  className="text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  Every successful business has a beginning. Ours started with
                  honesty, dedication, and a simple promise to never compromise
                  on quality.
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  My father believed that businesses aren't built by selling
                  products alone. They're built by keeping promises, respecting
                  customers, and delivering value every single day.
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  That philosophy became the strongest foundation of our
                  business, and those values continue to guide every decision we
                  make today.
                </p>

                <div
                  className="mt-12 rounded-3xl p-8"
                  style={{
                    background: "#EFF8F3",
                    border: "1px solid #C0E5D2",
                  }}
                >
                  <p
                    className="text-2xl font-serif leading-relaxed"
                    style={{
                      color: "#0D281B",
                    }}
                  >
                    "Trust isn't earned in a day.
                    <br />
                    It's earned one customer at a time."
                  </p>
                </div>

              </div>
            </div>
          </motion.div>

          {/* ================================================= */}
          {/* 2015 Starts Here */}
          {/* ================================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: .8,
            }}
            viewport={{
              once: true,
            }}
            className="mt-40"
          >            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* Left Content */}

              <div>

                <p
                  className="uppercase tracking-[8px] text-sm mb-6"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  2015
                </p>

                <h2
                  className="font-serif text-5xl leading-tight"
                  style={{
                    color: "#0D281B",
                  }}
                >
                  Learning Before
                  <br />
                  Leading
                </h2>

                <div
                  className="w-24 h-[2px] mt-8 mb-10"
                  style={{
                    background: "#0D281B",
                  }}
                />

                <p
                  className="text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  By <strong style={{ color: "#0D281B" }}>2015</strong>, I began
                  spending more time understanding the business.
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  I wasn't preparing to become an entrepreneur.
                  I was simply learning from the person who inspired me the most.
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  Watching customers return again and again taught me something
                  extraordinary. Success wasn't created by advertising—it was
                  created by trust, relationships, and consistency.
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  Those years became my greatest education. Every conversation,
                  every customer, and every challenge quietly shaped the way I
                  see business today.
                </p>

              </div>

              {/* Right Image */}

              <div className="relative">

                <div
                  className="absolute -bottom-6 -right-6 w-full h-full rounded-[32px]"
                  style={{
                    background: "#B9E3CE",
                  }}
                />

                <div
                  className="relative overflow-hidden rounded-[32px] shadow-2xl"
                  style={{
                    background: "#EFF8F3",
                  }}
                >
                  <Image
                    src="/handmade.png"
                    alt="Learning the Business"
                    width={700}
                    height={850}
                    className="w-full h-[650px] object-cover"
                  />
                </div>

              </div>

            </div>

          </motion.div>

          {/* ============================================= */}
          {/* Lessons */}
          {/* ============================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="mt-40"
          >

            <div className="text-center max-w-4xl mx-auto">

              <p
                className="uppercase tracking-[8px] text-sm"
                style={{
                  color: "#4D6B5C",
                }}
              >
                LESSONS
              </p>

              <h2
                className="font-serif text-5xl mt-6 leading-tight"
                style={{
                  color: "#0D281B",
                }}
              >
                Those years taught me lessons
                <br />
                no classroom ever could.
              </h2>

            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-20">

              {/* Card 1 */}

              <div
                className="rounded-[30px] p-10 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "#EFF8F3",
                  border: "1px solid #C0E5D2",
                }}
              >

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: "#B9E3CE",
                    color: "#0D281B",
                  }}
                >
                  01
                </div>

                <h3
                  className="font-serif text-3xl mt-8"
                  style={{
                    color: "#0D281B",
                  }}
                >
                  Trust
                </h3>

                <p
                  className="mt-6 leading-9"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  Trust is never built overnight.
                  It grows through honesty,
                  consistency,
                  and every promise you keep.
                </p>

              </div>

              {/* Card 2 */}

              <div
                className="rounded-[30px] p-10 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "#EFF8F3",
                  border: "1px solid #C0E5D2",
                }}
              >

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: "#B9E3CE",
                    color: "#0D281B",
                  }}
                >
                  02
                </div>

                <h3
                  className="font-serif text-3xl mt-8"
                  style={{
                    color: "#0D281B",
                  }}
                >
                  Quality
                </h3>

                <p
                  className="mt-6 leading-9"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  Customers may forget prices,
                  but they'll always remember
                  the quality and experience
                  you deliver.
                </p>

              </div>

              {/* Card 3 */}

              <div
                className="rounded-[30px] p-10 transition-all duration-500 hover:-translate-y-2"
                style={{
                  background: "#EFF8F3",
                  border: "1px solid #C0E5D2",
                }}
              >

                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold"
                  style={{
                    background: "#B9E3CE",
                    color: "#0D281B",
                  }}
                >
                  03
                </div>

                <h3
                  className="font-serif text-3xl mt-8"
                  style={{
                    color: "#0D281B",
                  }}
                >
                  Consistency
                </h3>

                <p
                  className="mt-6 leading-9"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  Great businesses aren't built
                  by one extraordinary day.
                  They're built by doing the
                  ordinary things extraordinarily
                  well every single day.
                </p>

              </div>

            </div>

          </motion.div>

                    {/* ============================================= */}
          {/* Offline Growth */}
          {/* ============================================= */}

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-40"
          >
            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* Image */}

              <div className="relative order-2 lg:order-1">

                <div
                  className="absolute -top-6 -left-6 w-full h-full rounded-[32px]"
                  style={{
                    background: "#B9E3CE",
                  }}
                />

                <div
                  className="relative overflow-hidden rounded-[32px] shadow-2xl"
                  style={{
                    background: "#EFF8F3",
                  }}
                >
                  <Image
                    src="/handmade2.png"
                    alt="Offline Growth"
                    width={700}
                    height={900}
                    className="w-full h-[650px] object-cover"
                  />
                </div>

              </div>

              {/* Content */}

              <div className="order-1 lg:order-2">

                <p
                  className="uppercase tracking-[8px] text-sm mb-6"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  GROWING TOGETHER
                </p>

                <h2
                  className="font-serif text-5xl leading-tight"
                  style={{
                    color: "#0D281B",
                  }}
                >
                  Trust Spread
                  <br />
                  Beyond Products
                </h2>

                <div
                  className="w-24 h-[2px] mt-8 mb-10"
                  style={{
                    background: "#0D281B",
                  }}
                />

                <p
                  className="text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  Over the years, our offline network expanded across different
                  markets. Every retailer who partnered with us and every
                  customer who returned became a part of our journey.
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  We never measured our success by the number of products we
                  sold. We measured it by the number of people who trusted us
                  enough to come back again and recommend us to others.
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  That trust became our greatest achievement—and the strongest
                  foundation for everything we would build in the future.
                </p>

              </div>

            </div>
          </motion.section>

          {/* ============================================= */}
          {/* Quote Block */}
          {/* ============================================= */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-36"
          >

            <div
              className="rounded-[40px] px-10 md:px-20 py-20 text-center"
              style={{
                background: "#EFF8F3",
                border: "1px solid #C0E5D2",
              }}
            >

              <p
                className="font-serif text-3xl md:text-5xl leading-relaxed"
                style={{
                  color: "#0D281B",
                }}
              >
                "Businesses don't become successful
                because they sell products.
                <br />
                <br />
                They become successful because
                people trust the hands behind them."
              </p>

            </div>

          </motion.div>

          {/* ============================================= */}
          {/* Birth of Anart Pharmacy */}
          {/* ============================================= */}

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="mt-40"
          >

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* Content */}

              <div>

                <p
                  className="uppercase tracking-[8px] text-sm mb-6"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  THE NEXT CHAPTER
                </p>

                <h2
                  className="font-serif text-5xl leading-tight"
                  style={{
                    color: "#0D281B",
                  }}
                >
                  The Birth
                  <br />
                  of Anart Pharmacy
                </h2>

                <div
                  className="w-24 h-[2px] mt-8 mb-10"
                  style={{
                    background: "#0D281B",
                  }}
                />

                <p
                  className="text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  Years of offline experience inspired us to take the next step.
                  We wanted to bring the same trust, quality, and commitment to
                  people beyond our local markets.
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  That vision gave birth to
                  <strong style={{ color: "#0D281B" }}>
                    {" "}Anart Pharmacy.
                  </strong>
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  Anart Pharmacy isn't just an online store.
                  It is our digital identity—built upon years of offline
                  experience, genuine relationships, and customer trust earned
                  since 2013.
                </p>

              </div>

              {/* Image */}

              <div className="relative">

                <div
                  className="absolute -bottom-6 -right-6 w-full h-full rounded-[32px]"
                  style={{
                    background: "#B9E3CE",
                  }}
                />

                <div
                  className="relative overflow-hidden rounded-[32px] shadow-2xl"
                  style={{
                    background: "#EFF8F3",
                  }}
                >

                  <Image
                    src="/handmade3.png"
                    alt="Anart Pharmacy"
                    width={700}
                    height={900}
                    className="w-full h-[650px] object-cover"
                  />

                </div>

              </div>

            </div>

          </motion.section>
                    {/* ============================================= */}
          {/* 2026 */}
          {/* ============================================= */}

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-40"
          >
            <div
              className="rounded-[40px] p-10 md:p-16 lg:p-20"
              style={{
                background: "#EFF8F3",
                border: "1px solid #C0E5D2",
              }}
            >
              <div className="max-w-5xl">

                <p
                  className="uppercase tracking-[8px] text-sm mb-6"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  2026
                </p>

                <h2
                  className="font-serif text-4xl md:text-6xl leading-tight"
                  style={{
                    color: "#0D281B",
                  }}
                >
                  A New Identity,
                  <br />
                  The Same Values
                </h2>

                <div
                  className="w-24 h-[2px] mt-8 mb-10"
                  style={{
                    background: "#0D281B",
                  }}
                />

                <p
                  className="text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  In <strong style={{ color: "#0D281B" }}>2026</strong>, our
                  journey entered a new chapter as{" "}
                  <strong style={{ color: "#0D281B" }}>
                    UJJWAL KITCHEN KING PRODUCT
                  </strong>{" "}
                  evolved into{" "}
                  <strong style={{ color: "#0D281B" }}>
                    Ujjwal Household Pvt. Ltd.
                  </strong>
                  .
                </p>

                <p
                  className="mt-8 text-lg leading-10"
                  style={{
                    color: "#4D6B5C",
                  }}
                >
                  It wasn't simply a legal transformation or a new company name.
                  It reflected our commitment to innovation, stronger systems,
                  larger ambitions, and a future-ready brand while remaining
                  deeply connected to the values that built our foundation.
                </p>

              </div>
            </div>
          </motion.section>

          {/* ============================================= */}
          {/* Today */}
          {/* ============================================= */}

          <motion.section
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-40"
          >
            <div className="max-w-5xl mx-auto text-center">

              <p
                className="uppercase tracking-[8px] text-sm"
                style={{
                  color: "#4D6B5C",
                }}
              >
                TODAY
              </p>

              <h2
                className="font-serif text-5xl md:text-7xl mt-8 leading-tight"
                style={{
                  color: "#0D281B",
                }}
              >
                Every Order
                <br />
                Carries A Story
              </h2>

              <p
                className="mt-12 text-xl leading-10"
                style={{
                  color: "#4D6B5C",
                }}
              >
                Today, every order we deliver carries far more than a product.
              </p>

              <p
                className="mt-8 text-xl leading-10"
                style={{
                  color: "#4D6B5C",
                }}
              >
                It carries the trust we've earned since <strong>2013</strong>,
                the values my father built this business on, and our promise to
                continue growing while staying true to our roots.
              </p>

            </div>
          </motion.section>

          {/* ============================================= */}
          {/* Final Closing */}
          {/* ============================================= */}

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="mt-44 mb-32"
          >

            <div
              className="rounded-[48px] p-12 md:p-20 text-center"
              style={{
                background: "#0D281B",
              }}
            >

              <p
                className="uppercase tracking-[8px] text-sm"
                style={{
                  color: "#B9E3CE",
                }}
              >
                OUR JOURNEY CONTINUES
              </p>

              <h2
                className="font-serif text-4xl md:text-6xl leading-tight mt-8"
                style={{
                  color: "#F8FCFA",
                }}
              >
                Our journey didn't begin
                <br />
                with a website.
              </h2>

              <p
                className="mt-12 text-xl leading-10 max-w-4xl mx-auto"
                style={{
                  color: "rgba(255,251,245,.85)",
                }}
              >
                It began with a dream in <strong>2013</strong>.
              </p>

              <p
                className="mt-8 text-xl leading-10 max-w-4xl mx-auto"
                style={{
                  color: "rgba(255,251,245,.85)",
                }}
              >
                Today, that dream continues with a new identity, a larger
                vision, and an even stronger commitment to every customer who
                places their trust in us.
              </p>

              <div
                className="w-32 h-[2px] mx-auto mt-16 mb-16"
                style={{
                  background: "#B9E3CE",
                }}
              />

              <p
                className="font-serif italic text-2xl md:text-4xl leading-relaxed"
                style={{
                  color: "#B9E3CE",
                }}
              >
                "Some businesses are started.
                <br />
                Ours was inherited with trust,
                <br />
                nurtured with passion,
                <br />
                and built for the future."
              </p>

            </div>

          </motion.section>

        </div>
      </section>
    </main>
  );
}