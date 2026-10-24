import { useState } from 'react';
import { ArrowUpRight, ArrowRight, CheckCircle2, Play } from 'lucide-react';
import { publishedWorks, testimonials } from './data/work.js';

export function LiteVideo({ video, title }) {
  const [on, setOn] = useState(false);
  if (!video) return null;
  const poster = video.poster || (video.youtube ? 'https://i.ytimg.com/vi/' + video.youtube + '/hqdefault.jpg' : '');
  if (on) {
    return (
      <div className="lite-video">
        {video.youtube
          ? <iframe src={'https://www.youtube-nocookie.com/embed/' + video.youtube + '?autoplay=1&rel=0'} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
          : <video src={video.src} poster={poster} controls autoPlay playsInline />}
      </div>
    );
  }
  return (
    <button type="button" className="lite-video" onClick={() => setOn(true)} aria-label={'Play video: ' + title} style={poster ? { backgroundImage: 'url(' + poster + ')' } : undefined}>
      <span className="lite-play"><Play size={26} fill="currentColor" /></span>
    </button>
  );
}

export function WorkGrid() {
  if (!publishedWorks.length) return null;
  return (
    <div style={{ marginTop: 64 }}>
      <div className="section-heading">
        <div><h2>Client and studio work</h2></div>
        <p>Websites, brand design, video and software delivered for businesses across India.</p>
      </div>
      <div className="products-grid">
        {publishedWorks.map(w => (
          <article className="product-card work-card" key={w.slug}>
            {w.image && <img className="work-thumb" src={w.image} alt={w.title} loading="lazy" width="640" height="400" />}
            <div className="product-card-top"><span className="product-tag">{w.category}</span></div>
            <h3>{w.title}</h3>
            <p>{w.summary}</p>
            <p className="product-note">{w.type}{w.status ? ' · ' + w.status : ''}{w.client ? ' · ' + w.client : ''}</p>
            <a href={'/work/' + w.slug}>View project <ArrowUpRight size={17} /></a>
          </article>
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  if (!testimonials.length) return null;
  return (
    <div style={{ marginTop: 64 }}>
      <div className="section-heading"><div><h2>In their words</h2></div></div>
      <div className="testi-grid">
        {testimonials.map((t, i) => (
          <figure className="testi-card" key={i}>
            <LiteVideo video={t.video} title={'Testimonial from ' + t.name} />
            {t.quote && <blockquote>{t.quote}</blockquote>}
            <figcaption><strong>{t.name}</strong>{t.role || t.company ? ' — ' + [t.role, t.company].filter(Boolean).join(', ') : ''}</figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}

export function WorkCaseStudy({ w }) {
  return (
    <section className="section inner-content-section">
      <div className="container">
        <div className="detail-layout">
          <div className="detail-copy">
            <h2>{w.title}</h2>
            <p>{w.summary}</p>
            {w.problem && (<><h3>The challenge</h3><p>{w.problem}</p></>)}
            {w.solution && (<><h3>What we built</h3><p>{w.solution}</p></>)}
            {w.outcome && (<><h3>Outcome</h3><p>{w.outcome}</p></>)}
            {w.note && <p className="work-note">{w.note}</p>}
            {w.url && <a className="button button-primary" href={w.url} target="_blank" rel="noopener noreferrer">Visit project <ArrowUpRight size={17} /></a>}
          </div>
          <div className="detail-list">
            <div className="work-meta"><span>{w.type}</span>{w.status && <span>{w.status}</span>}{w.via && <span>{w.via}</span>}{w.client && <span>{w.client}</span>}</div>
            {w.scope.map(s => <div key={s}><CheckCircle2 size={19} /><span>{s}</span></div>)}
            <a className="text-link" href="/work">Back to all work <ArrowRight size={17} /></a>
          </div>
        </div>
        {(w.video || w.image) && (
          <div style={{ marginTop: 48 }}>
            {w.video ? <LiteVideo video={w.video} title={w.title} /> : <img className="work-hero-img" src={w.image} alt={w.title} loading="lazy" />}
          </div>
        )}
      </div>
    </section>
  );
}
