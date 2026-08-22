"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  ClipboardCheck,
  HeartPulse,
  Leaf,
  MapPin,
  PackageCheck,
  Pill,
  ShieldCheck,
  Sparkles,
  Target,
  Truck,
  Users,
} from "lucide-react";

export default function OurStory() {
  const coreValues = [
    {
      icon: ShieldCheck,
      title: "Quality & Safety First",
      description:
        "We place product quality, safety, authenticity, and responsible pharmaceutical practices at the heart of everything we do.",
    },
    {
      icon: ClipboardCheck,
      title: "Regulatory Compliance",
      description:
        "We are committed to operating through licensed channels and maintaining appropriate pharmaceutical and regulatory standards.",
    },
    {
      icon: Users,
      title: "Customer Satisfaction",
      description:
        "Our approach is customer-first, with a focus on dependable products, responsive support, and a reliable buying experience.",
    },
    {
      icon: BadgeCheck,
      title: "Transparency & Trust",
      description:
        "We believe long-term healthcare relationships are built through transparency, authenticity, consistency, and trust.",
    },
    {
      icon: Sparkles,
      title: "Continuous Growth & Innovation",
      description:
        "We continuously look for better ways to expand our product portfolio, improve operations, and serve customers across India.",
    },
  ];

  const products = [
    {
      icon: Pill,
      title: "Prescription Medicines",
      description:
        "A growing range of pharmaceutical medicines sourced through appropriate and licensed channels.",
    },
    {
      icon: HeartPulse,
      title: "OTC Healthcare Products",
      description:
        "Healthcare products designed to support everyday wellness and accessible healthcare needs.",
    },
    {
      icon: Leaf,
      title: "Wellness Products",
      description:
        "Selected wellness-focused products supporting a broader and more convenient healthcare experience.",
    },
    {
      icon: PackageCheck,
      title: "Pharmaceutical Supplies",
      description:
        "Reliable pharmaceutical supplies for customers, healthcare partners, and distribution requirements.",
    },
  ];

  const commitments = [
    "Licensed pharmaceutical sourcing",
    "Product authenticity assurance",
    "Pan-India delivery network",
    "Professional customer and partner support",
    "Verified supplier sourcing",
    "Continuous quality checks before delivery",
  ];

  const strengths = [
    {
      icon: Truck,
      title: "Growing Distribution Network",
      description:
        "Building stronger distribution capabilities to make healthcare products accessible across India.",
    },
    {
      icon: PackageCheck,
      title: "Expanding Product Portfolio",
      description:
        "Developing a diverse portfolio across medicines, healthcare, wellness, and pharmaceutical categories.",
    },
    {
      icon: ShieldCheck,
      title: "Licensed & Compliant Operations",
      description:
        "Maintaining responsible sourcing and supply practices aligned with applicable pharmaceutical requirements.",
    },
    {
      icon: Target,
      title: "Customer-Focused Approach",
      description:
        "Keeping customer trust, product authenticity, service quality, and dependable support at the center of our operations.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      {/* =========================================================
          BACKGROUND DECORATION
      ========================================================= */}

      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-56 -top-56 h-[650px] w-[650px] rounded-full bg-primary-light/60 blur-3xl" />

        <div className="absolute -bottom-56 -right-56 h-[650px] w-[650px] rounded-full bg-accent-light/40 blur-3xl" />

        <div className="absolute left-1/2 top-1/3 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-surface/70 blur-3xl" />
      </div>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative flex min-h-screen items-center py-20 md:py-28">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            {/* CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.85 }}
              className="order-2 lg:order-1"
            >
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-accent/30 bg-surface px-5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-accent" />

                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">
                  Our Story
                </span>
              </div>

              <h1 className="max-w-3xl font-heading text-5xl font-bold leading-[1.03] sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
                Building Trust
                <br />
                <span className="text-gradient-gold">Through Healthcare</span>
              </h1>

              <div className="mt-9 flex items-center gap-4">
                <div className="h-px w-20 bg-accent" />
                <div className="h-2 w-2 rounded-full bg-primary" />
              </div>

              <p className="mt-9 max-w-2xl text-lg leading-8 text-text-secondary md:text-xl md:leading-9">
                Anart Pharmaceuticals Pvt. Ltd. is an emerging healthcare
                company committed to delivering safe, effective, and
                affordable pharmaceutical solutions across India.
              </p>

              <p className="mt-6 max-w-2xl text-base leading-8 text-text-secondary md:text-lg">
                Established with a vision to make reliable healthcare more
                accessible, we are building a trusted pharmaceutical
                distribution and marketing network focused on quality,
                authenticity, compliance, and customer satisfaction.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <div className="flex items-center gap-3 rounded-full border border-border bg-input-bg px-5 py-3">
                  <BadgeCheck className="h-5 w-5 text-accent" />
                  <span className="text-sm font-semibold text-foreground">
                    Authentic Products
                  </span>
                </div>

                <div className="flex items-center gap-3 rounded-full border border-border bg-input-bg px-5 py-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    Quality Focused
                  </span>
                </div>
              </div>

              <div className="mt-12 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-text-secondary">
                  Established
                </span>

                <span className="text-2xl font-bold text-accent">2024</span>
              </div>
            </motion.div>

            {/* IMAGE */}

            <motion.div
              initial={{ opacity: 0, x: 45 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="relative order-1 lg:order-2"
            >
              <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[42px] bg-primary-light" />

              <div className="relative overflow-hidden rounded-[42px] border border-border bg-surface shadow-2xl">
                <Image
                  src="/anart-pharmacy-story.jpg"
                  alt="Anart Pharmaceuticals"
                  width={1000}
                  height={1150}
                  priority
                  className="h-[560px] w-full object-cover sm:h-[650px] md:h-[720px]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-footer/90 via-footer/30 to-transparent p-7 pt-28 md:p-10 md:pt-32">
                  <div className="flex items-end justify-between gap-5">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.28em] text-accent-light">
                        Anart Pharmaceuticals
                      </p>

                      <p className="mt-2 text-xl font-semibold text-text-on-dark md:text-2xl">
                        Healthcare Built on Trust
                      </p>
                    </div>

                    <div className="hidden rounded-full border border-accent/50 bg-footer/70 px-4 py-2 backdrop-blur-sm sm:block">
                      <span className="text-sm font-semibold text-accent-light">
                        Since 2024
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-5 top-10 hidden rounded-2xl border border-accent/30 bg-input-bg p-4 shadow-xl sm:block md:-left-7">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary">
                    <ShieldCheck className="h-5 w-5 text-text-on-dark" />
                  </div>

                  <div>
                    <p className="text-xs text-text-secondary">
                      Our Promise
                    </p>
                    <p className="font-semibold text-foreground">
                      Quality First
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 9, 0] }}
          transition={{
            repeat: Infinity,
            duration: 1.8,
          }}
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <ArrowDown className="h-7 w-7 text-primary" />
        </motion.div>
      </section>

      {/* =========================================================
          WHO WE ARE
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid items-start gap-14 lg:grid-cols-[0.75fr_1.25fr]"
          >
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                Who We Are
              </p>

              <h2 className="mt-5 max-w-xl font-heading text-4xl font-bold leading-tight md:text-6xl">
                A growing name in{" "}
                <span className="text-gradient-gold">
                  trusted healthcare.
                </span>
              </h2>

              <div className="mt-8 h-px w-24 bg-accent" />
            </div>

            <div className="space-y-6 text-lg leading-9 text-text-secondary">
              <p>
                <strong className="text-foreground">
                  Anart Pharmaceuticals Private Limited
                </strong>{" "}
                is an emerging healthcare company focused on providing quality
                medicines and wellness products while maintaining strict
                attention to pharmaceutical standards and regulatory
                requirements.
              </p>

              <p>
                Established with the vision to make reliable healthcare
                accessible and affordable, the company operates as an
                authorized pharmaceutical distributor and marketer. We aim to
                ensure that products are sourced through licensed channels and
                supplied with a strong focus on authenticity and reliability.
              </p>

              <p>
                With a growing presence and a customer-first approach, Anart
                Pharmaceuticals continues to strengthen its product portfolio,
                distribution capabilities, and professional relationships with
                healthcare professionals, business partners, and customers
                across India.
              </p>

              <div className="rounded-3xl border border-border bg-surface p-7 md:p-9">
                <div className="flex gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary">
                    <HeartPulse className="h-6 w-6 text-text-on-dark" />
                  </div>

                  <div>
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      Healthcare with Responsibility
                    </h3>

                    <p className="mt-3 leading-8 text-text-secondary">
                      Our goal is not simply to move products through a
                      distribution network. We want to build a healthcare
                      ecosystem where quality, authenticity, accessibility,
                      and responsible business practices work together.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          COMPANY INFORMATION
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-14 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                Company Information
              </p>

              <h2 className="mt-5 font-heading text-4xl font-bold md:text-6xl">
                The company behind the mission
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <InfoCard
                icon={Building2}
                label="Legal Name"
                value="Anart Pharmaceuticals Private Limited"
              />

              <InfoCard
                icon={Sparkles}
                label="Incorporation Year"
                value="2024"
              />

              <InfoCard
                icon={Users}
                label="Directors"
                value={
                  <>
                    Anugrah Pratap Singh
                    <br />
                    Priyanka Anugrah Singh
                  </>
                }
              />

              <InfoCard
                icon={MapPin}
                label="Registered Office"
                value={
                  <>
                    2/46, JMK Tower, 1st Floor,
                    <br />
                    Ramadevi Chowk, Kanpur,
                    <br />
                    Uttar Pradesh - 208007, India
                  </>
                }
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          MISSION + VISION
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-7 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-border bg-primary p-8 md:p-12"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                <Target className="h-7 w-7 text-foreground" />
              </div>

              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-accent-light">
                Our Mission
              </p>

              <h2 className="mt-5 font-heading text-4xl font-bold leading-tight text-text-on-dark md:text-5xl">
                Making quality healthcare more accessible.
              </h2>

              <p className="mt-7 text-lg leading-9 text-text-on-dark-muted">
                To make quality medicines accessible and affordable while
                maintaining the highest standards of safety, compliance, and
                customer trust.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
              className="rounded-[32px] border border-accent/30 bg-surface p-8 md:p-12"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent">
                <Sparkles className="h-7 w-7 text-foreground" />
              </div>

              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-accent-dark">
                Our Vision
              </p>

              <h2 className="mt-5 font-heading text-4xl font-bold leading-tight md:text-5xl">
                A trusted pharmaceutical network across India.
              </h2>

              <p className="mt-7 text-lg leading-9 text-text-secondary">
                To become a trusted pharmaceutical brand known for
                reliability, transparent practices, and a strong healthcare
                distribution network across India.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          CORE VALUES
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Our Core Values
            </p>

            <h2 className="mt-5 font-heading text-4xl font-bold leading-tight md:text-6xl">
              Principles that guide{" "}
              <span className="text-gradient-gold">every decision.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-text-secondary">
              Our values shape how we source, distribute, communicate, and
              build long-term relationships.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="surface-card p-8"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-text-secondary">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.75 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                What We Do
              </p>

              <h2 className="mt-5 font-heading text-4xl font-bold leading-tight md:text-6xl">
                Connecting quality products with{" "}
                <span className="text-gradient-gold">
                  healthcare needs.
                </span>
              </h2>

              <p className="mt-7 text-lg leading-9 text-text-secondary">
                Anart Pharmaceuticals provides a growing range of healthcare
                and pharmaceutical products while working to create a reliable
                supply experience for customers and partners.
              </p>

              <div className="mt-9 space-y-4">
                {commitments.slice(0, 4).map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                    <span className="text-base text-foreground">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid gap-5 sm:grid-cols-2">
              {products.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.08,
                    }}
                    viewport={{ once: true }}
                    className="surface-card p-7 md:p-8"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-light">
                      <Icon className="h-6 w-6 text-accent-dark" />
                    </div>

                    <h3 className="mt-7 font-heading text-2xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-4 leading-8 text-text-secondary">
                      {item.description}
                    </p>

                    <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-primary">
                      Learn more
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          QUALITY & COMMITMENT
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[40px] border border-border bg-surface p-8 md:p-14 lg:p-20"
          >
            <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary">
                  <ShieldCheck className="h-8 w-8 text-text-on-dark" />
                </div>

                <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                  Our Commitment to Quality
                </p>

                <h2 className="mt-5 font-heading text-4xl font-bold leading-tight md:text-5xl">
                  Quality is not a feature.
                  <br />
                  <span className="text-gradient-gold">
                    It is our responsibility.
                  </span>
                </h2>
              </div>

              <div>
                <p className="text-lg leading-9 text-text-secondary">
                  At Anart Pharmaceuticals, quality is our top priority. We
                  follow strict sourcing and supply standards to ensure that
                  every product is handled with appropriate attention to
                  pharmaceutical safety, authenticity, and regulatory
                  requirements.
                </p>

                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  {commitments.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-3 rounded-2xl border border-border bg-input-bg p-4"
                    >
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-success" />

                      <span className="text-sm font-medium leading-6 text-foreground">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          OUR STRENGTHS
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                Our Strengths
              </p>

              <h2 className="mt-5 max-w-3xl font-heading text-4xl font-bold leading-tight md:text-6xl">
                Built to grow with the{" "}
                <span className="text-gradient-gold">
                  healthcare ecosystem.
                </span>
              </h2>
            </div>

            <p className="max-w-md text-base leading-7 text-text-secondary">
              We are developing our capabilities around quality products,
              responsible sourcing, efficient logistics, and lasting
              partnerships.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {strengths.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.08,
                  }}
                  viewport={{ once: true }}
                  className="group rounded-[28px] border border-border bg-input-bg p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-xl md:p-9"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-light">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>

                    <ChevronRight className="h-5 w-5 text-text-secondary transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent" />
                  </div>

                  <h3 className="mt-7 font-heading text-2xl font-bold">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-8 text-text-secondary">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          GROWTH VISION
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[42px] bg-primary"
          >
            <div className="relative p-8 md:p-14 lg:p-20">
              <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

              <div className="relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent-light">
                    Our Growth Vision
                  </p>

                  <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-text-on-dark md:text-6xl">
                    Growing responsibly.
                    <br />
                    <span className="text-accent-light">
                      Serving more people.
                    </span>
                  </h2>
                </div>

                <div>
                  <p className="text-lg leading-9 text-text-on-dark-muted">
                    Looking ahead, Anart Pharmaceuticals aims to strengthen
                    accessibility, scale operations, and support better
                    healthcare outcomes across India.
                  </p>

                  <div className="mt-9 space-y-5">
                    {[
                      "Expand our product range",
                      "Strengthen distribution channels across India",
                      "Build long-term partnerships with healthcare providers",
                      "Improve systems, service quality, and operational efficiency",
                    ].map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-4 border-b border-text-on-dark-muted/20 pb-5"
                      >
                        <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent">
                          <CheckCircle2 className="h-4 w-4 text-foreground" />
                        </div>

                        <span className="text-base leading-7 text-text-on-dark">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CLOSING STORY
      ========================================================= */}

      <section className="py-24 md:py-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mx-auto max-w-5xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
              Looking Ahead
            </p>

            <h2 className="mt-6 font-heading text-4xl font-bold leading-tight md:text-7xl">
              More than a pharmaceutical company.
              <br />
              <span className="text-gradient-gold">
                A growing healthcare relationship.
              </span>
            </h2>

            <p className="mx-auto mt-10 max-w-4xl text-lg leading-9 text-text-secondary md:text-xl">
              Our journey is just beginning. As Anart Pharmaceuticals grows,
              our focus will remain unchanged — provide reliable products,
              maintain responsible practices, strengthen customer trust, and
              make quality healthcare more accessible across India.
            </p>

            <div className="mx-auto mt-12 h-px w-28 bg-accent" />

            <p className="mx-auto mt-10 max-w-3xl font-heading text-2xl font-semibold leading-relaxed text-foreground md:text-4xl">
              “Healthcare is built on trust, and every product we deliver is
              an opportunity to strengthen that trust.”
            </p>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CONTACT / REGISTERED OFFICE
      ========================================================= */}

      <section className="pb-24 pt-10 md:pb-32">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-[38px] border border-accent/30 bg-surface p-8 md:p-12 lg:p-16"
          >
            <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-accent">
                  Contact & Registered Office
                </p>

                <h2 className="mt-5 font-heading text-4xl font-bold md:text-5xl">
                  Let&apos;s build better healthcare connections.
                </h2>

                <p className="mt-5 max-w-2xl text-lg leading-8 text-text-secondary">
                  Whether you are a healthcare professional, business partner,
                  distributor, or customer, we look forward to building a
                  reliable and transparent relationship with you.
                </p>
              </div>

              <div className="min-w-0 rounded-3xl border border-border bg-input-bg p-7 md:min-w-[390px]">
                <div className="flex gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary">
                    <MapPin className="h-5 w-5 text-text-on-dark" />
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                      Registered Address
                    </p>

                    <p className="mt-3 leading-7 text-foreground">
                      2/46, JMK Tower, 1st Floor,
                      <br />
                      Ramadevi Chowk,
                      <br />
                      Kanpur, Uttar Pradesh - 208007,
                      <br />
                      India
                    </p>
                  </div>
                </div>

                <div className="my-6 h-px bg-border" />

                <div className="space-y-3 text-sm">
                  <p className="text-text-secondary">
                    <span className="font-semibold text-foreground">
                      Phone:
                    </span>{" "}
                    +91 9876543210
                  </p>

                  <p className="break-all text-text-secondary">
                    <span className="font-semibold text-foreground">
                      Email:
                    </span>{" "}
                    contact@anartpharmaceuticals.com
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          FINAL BRAND STATEMENT
      ========================================================= */}

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-between gap-5 border-t border-border pt-8 text-center md:flex-row md:text-left">
            <div>
              <p className="font-heading text-xl font-bold text-primary">
                Anart Pharmaceuticals
              </p>

              <p className="mt-1 text-sm text-text-secondary">
                Quality Healthcare. Trusted Supply. Better Access.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-text-secondary">
              <span>Established</span>
              <span className="font-semibold text-accent">2024</span>
              <span>•</span>
              <span>Kanpur, India</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ================================================================
   INFO CARD
================================================================ */

function InfoCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Building2;
  label: string;
  value: React.ReactNode;
}) {
  return (
    <div className="surface-card p-7 md:p-8">
      <div className="flex items-start gap-5">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-light">
          <Icon className="h-6 w-6 text-primary" />
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {label}
          </p>

          <div className="mt-3 text-lg font-semibold leading-8 text-foreground">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}