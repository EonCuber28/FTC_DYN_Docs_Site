import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import CodeBlock from '@theme/CodeBlock';
import ArtNotMade from '@site/assets/ArtNotMade.png';

// ---------------------------------------------------------------------------
// Page-local styles. Kept in one <style> tag so this file has no CSS-module
// or component dependency — everything reuses the site's existing Infima
// theme variables, so it inherits whatever colors/fonts are already set.
// ---------------------------------------------------------------------------
function PageStyles() {
    return (
        <style>{`
      .dyn-hero-banner {
        padding: 4rem 0;
        text-align: center;
        position: relative;
        overflow: hidden;
      }
      @media screen and (max-width: 996px) {
        .dyn-hero-banner {
          padding: 2rem;
        }
      }
      .dyn-buttons {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .dyn-eyebrow {
        text-transform: uppercase;
        letter-spacing: 0.14em;
        font-size: 0.8rem;
        font-weight: 700;
        opacity: 0.75;
        margin-bottom: 0.5rem;
      }
      .dyn-hero-description {
        max-width: 640px;
        margin: 1rem auto 1.5rem;
        font-size: 1.05rem;
        line-height: 1.6;
      }
      .dyn-section {
        padding: 3rem 0;
      }
      .dyn-section-alt {
        background: var(--ifm-color-emphasis-100);
      }
      .dyn-section-subtitle {
        max-width: 580px;
        margin: 0.5rem auto 2rem;
        color: var(--ifm-color-emphasis-700);
      }
      .dyn-feature-image {
        height: 200px;
        width: 200px;
        object-fit: contain;
      }
      .dyn-pipeline-step {
        padding: 0 1rem 1.5rem;
        text-align: center;
      }
      .dyn-pipeline-index {
        display: inline-block;
        font-family: var(--ifm-font-family-monospace);
        font-size: 0.85rem;
        font-weight: 700;
        color: var(--ifm-color-primary);
        margin-bottom: 0.5rem;
      }
      .dyn-pather-card {
        height: 100%;
        padding: 1.5rem;
        border-radius: var(--ifm-card-border-radius, 8px);
        background: var(--ifm-background-surface-color);
        border: 1px solid var(--ifm-color-emphasis-200);
      }
      .dyn-pather-tag {
        display: inline-block;
        font-family: var(--ifm-font-family-monospace);
        font-size: 0.75rem;
        font-weight: 700;
        color: var(--ifm-color-primary);
        background: var(--ifm-color-emphasis-100);
        padding: 0.15rem 0.5rem;
        border-radius: 4px;
        margin-bottom: 0.75rem;
      }
      .dyn-stat-number {
        font-size: 2.75rem;
        font-weight: 800;
        color: var(--ifm-color-primary);
        line-height: 1;
      }
      .dyn-stat-label {
        color: var(--ifm-color-emphasis-700);
        max-width: 220px;
        margin: 0.5rem auto 0;
      }
    `}</style>
    );
}

function HomepageHeader() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <header className={clsx('hero', 'hero--primary', 'dyn-hero-banner')}>
            <div className="container">
                <p className="dyn-eyebrow">
                    From: <a href="https://ftcscout.org/teams/17153" style={{color: '#1a1a1a', textDecoration: 'underline'}}>FTC Team 17153 Squid Squad</a>
                    <br/>Developed by: <a href="https://github.com/EonCuber28" style={{color: '#1a1a1a', textDecoration: 'underline'}}>Izzy Clark</a>
                </p>
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">{siteConfig.tagline}</p>
                <p className="dyn-hero-description">
                    Dynamite (DYN for short) is a scripting language for FTC autonomous.<br/>
                    Write simple scripts, and run them quickly with USB support.<br/>
                    <u>DYN is compatible with any pather!</u> <small>(no joke)</small><br/>
                    It can use{' '}
                    <a href="https://pedropathing.com/docs" style={{color: '#1a1a1a', textDecoration: 'underline'}}><b>PedroPathing</b></a>,{' '}
                    <a href="https://learnroadrunner.com/" style={{color: '#1a1a1a', textDecoration: 'underline'}}><b>RoadRunner</b></a>, and even custom pathers!
                </p>
                <div className="dyn-buttons">
                    <Link className="button button--secondary button--lg" to="/docs/intro">
                        Get started with DYN<br/>(From Install to a full auto)
                    </Link>
                </div>
            </div>
        </header>
    );
}

// ---------------------------------------------------------------------------
// What DYN is
// ---------------------------------------------------------------------------
const FeatureList = [
    {
        title: 'A Dead Simple Language',
        description: (
            <>
                DYN was designed around a simple linear structure.
                Build from the ground up to make FTC autonomous as
                simple and efficient as possible while still being
                extremely versatile. Making it capable of handling
                autos for years to come.
            </>
        ),
    },
    {
        title: 'One System, Any Pather',
        description: (
            <>
                DYN has the <code>FollowBezier</code> command for PP users.
                It also has full spline move compatability for RR users
                made possible by with its collection of spline commands.
            </>
        ),
    },
    {
        title: 'Two Threads, One Robot',
        description: (
            <>
                DYN scripts run concurrently to the main OpMode thread.
                Meaning that you can actively run vision-code, PID update loops,
                and much more while your auto is running.
            </>
        ),
    },
];

function Feature({title, description}) {
    return (
        <div className="col col--4">
            <div className="text--center">
                <img src={ArtNotMade} className="dyn-feature-image" alt="" />
            </div>
            <div className="text--center padding-horiz--md">
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

function HomepageFeatures() {
    return (
        <section className="dyn-section">
            <div className="container">
                <div className="row">
                    {FeatureList.map((props, idx) => (
                        <Feature key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ---------------------------------------------------------------------------
// Pather compatibility — DYN's command layer never imports a pathing
// library directly, so PedroPathing, Road Runner, and custom pathers all
// plug into the same seam.
// ---------------------------------------------------------------------------
const PatherList = [
    {
        tag: 'PPInterface',
        title: 'PedroPathing',
        description:
            'Provides standard movement commands and also compatibility with PedroPathing\'s flexible Bézier movements.'
    },
    {
        tag: 'RRInterface',
        title: 'Road Runner',
        description:
            "Same interface, different adapter. A Road Runner–backed FTCInterface plugs in the same way, and your .dyn scripts don't change.",
    },
    {
        tag: 'YourInterface',
        title: 'Custom Pathers',
        description:
            'Rolling your own drivetrain logic? Implement FTCInterface and DYN drives it exactly like it drives PedroPathing.',
    },
];

function PatherCard({tag, title, description}) {
    return (
        <div className="col col--4">
            <div className="dyn-pather-card">
                <span className="dyn-pather-tag">{tag}</span>
                <Heading as="h3">{title}</Heading>
                <p>{description}</p>
            </div>
        </div>
    );
}

function PatherSection() {
    return (
        <section className="dyn-section dyn-section-alt">
            <div className="container">
                <Heading as="h2" className="text--center">
                    Bring your own pather
                </Heading>
                <p className={clsx('text--center', 'dyn-section-subtitle')}>
                    The <code>DYNCore</code> package provides the needed interface for
                    everything DYN ➜ FTC. And the <code>DYN_PP</code>, <code>DYN_RR</code>,
                    <code>DYN_HYBRID</code> packages provide a user accessible OpMode
                    that remains consistent across all interfaces.<br/>
                    <small><small><code>DYN_CUSTOM</code> only provides a toolset to help make a proper <code>DynOpMode</code>.</small></small>
                </p>
                <div className="row">
                    {PatherList.map((props, idx) => (
                        <PatherCard key={idx} {...props} />
                    ))}
                </div>
            </div>
        </section>
    );
}

// ---------------------------------------------------------------------------
// How a script runs
// ---------------------------------------------------------------------------
function PipelineStep({index, title, children}) {
    return (
        <div className="col col--3">
            <div className="dyn-pipeline-step">
                <span className="dyn-pipeline-index">{index}</span>
                <Heading as="h3">{title}</Heading>
                <p>{children}</p>
            </div>
        </div>
    );
}

function HowItRuns() {
    return (
        <section className="dyn-section">
            <div className="container">
                <Heading as="h2" className="text--center">
                    How a script runs
                </Heading>
                <p className={clsx('text--center', 'dyn-section-subtitle')}>
                    Every <code>.dyn</code> file goes through the same pipeline before
                    a single motor turns.
                </p>
                <div className="row">
                    <PipelineStep index="01" title="Load">
                        Read from local storage on the robot controller, or straight off
                        a USB drive plugged into the REV Control Hub.
                    </PipelineStep>
                    <PipelineStep index="02" title="Tokenize">
                        Raw script text becomes a stream of typed tokens.
                    </PipelineStep>
                    <PipelineStep index="03" title="Construct">
                        Tokens are assembled into an executable command tree.
                    </PipelineStep>
                    <PipelineStep index="04" title="Run">
                        Commands execute against a live FTCInterface — moving the robot,
                        updating variables, and streaming telemetry to the Driver
                        Station.
                    </PipelineStep>
                </div>
            </div>
        </section>
    );
}

// ---------------------------------------------------------------------------
// A taste of the syntax
// ---------------------------------------------------------------------------
function ScriptPreview() {
    return (
        <section className="dyn-section dyn-section-alt">
            <div className="container">
                <div className="row">
                    <div className="col col--5">
                        <Heading as="h2">A taste of .dyn</Heading>
                        <p>
                            Movement commands compile down through <code>FTCInterface</code>{' '}
                            to whatever pather is wired in — PedroPathing here. This
                            snippet drives to a point, turns in place, then follows a
                            Bezier curve into a scoring pose.
                        </p>
                    </div>
                    <div className="col col--7">
                        <CodeBlock language="text" title="Main.dyn">
                            {`GoTo(24, 36)
TurnTo 90
doBez (24,36) to (48,60,90)`}
                        </CodeBlock>
                    </div>
                </div>
            </div>
        </section>
    );
}

// ---------------------------------------------------------------------------
// Stats
// ---------------------------------------------------------------------------
function StatsStrip() {
    return (
        <section className="dyn-section">
            <div className="container">
                <div className="row">
                    <div className="col col--4 text--center">
                        <div className="dyn-stat-number">32</div>
                        <p className="dyn-stat-label">commands across 8 categories</p>
                    </div>
                    <div className="col col--4 text--center">
                        <div className="dyn-stat-number">7</div>
                        <p className="dyn-stat-label">
                            variable types, from numbers to field poses
                        </p>
                    </div>
                    <div className="col col--4 text--center">
                        <div className="dyn-stat-number">2</div>
                        <p className="dyn-stat-label">
                            threads running concurrently, one watchdog
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function Home() {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout
            title={siteConfig.title}
            description="DYN is a scripting language and runtime for FIRST Tech Challenge autonomous programs.">
            <PageStyles />
            <HomepageHeader />
            <main>
                <HomepageFeatures />
                <PatherSection />
                <HowItRuns />
                <ScriptPreview />
                <StatsStrip />
            </main>
        </Layout>
    );
}