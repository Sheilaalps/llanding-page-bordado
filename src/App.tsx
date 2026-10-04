import { useEffect, useState, type FormEvent } from 'react'
import './App.css'

const instagramPosts = [
  {
    shortcode: 'Dcv_SXeFvju',
    label: 'Publicação 1 de 6',
    couple: 'Beatriz & Daniel',
    image:
      'https://scontent-gig4-2.cdninstagram.com/v/t51.82787-15/789554357_18083459066676136_693609067212909475_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=102&ig_cache_key=Mzk3NjY3MzUxMTk4NDE4MTUyNA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjI2OC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=q9D99wFCvkIQ7kNvwHreNhr&_nc_oc=AdoBKZSaiGnqQg2jfuE_m_MG2jJOC3NS88XGtJcpZ6Vw7fQAd77nUxPML2mK8axhm3k&_nc_zt=23&_nc_ht=scontent-gig4-2.cdninstagram.com&_nc_gid=1yga2fIB520UStuRokP9sA&_nc_ss=79689&oh=00_AQN4THzzNxYedElgJ00mRDzOV5kJiLvMr0eeSRle-M3O5A&oe=6AC79639',
    className: 'portfolio-image--portrait',
  },
  {
    shortcode: 'DRaCrx9kUAf',
    label: 'Publicação 2 de 6',
    couple: 'Samanth & Alexandro',
    image:
      'https://scontent-gig4-1.cdninstagram.com/v/t51.82787-15/588193445_18047479940676136_3985696828453396618_n.jpg?stp=dst-jpg_e35_p1080x1080_sh2.08_tt6&_nc_cat=105&ig_cache_key=Mzc3MjMzOTQyNDE1NjgxNzE3MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=99O5DgUoDQ4Q7kNvwFkCVnh&_nc_oc=Adr4MtJFX8eLmXyJemwMfwfH5EBx0BADTa4VPRNAUFSJts7hBfnWnWrGOi1-k3jRz2w&_nc_zt=23&_nc_ht=scontent-gig4-1.cdninstagram.com&_nc_gid=uWA1Sh_C9wrJMytdO1IWSw&_nc_ss=79689&oh=00_AQNDipb1Nee00mPdNKKbDQE3SibUFwjnSAgrqpllfPRp2w&oe=6AC79F4D',
    className: 'portfolio-image--wide',
  },
  {
    shortcode: 'DRK8EAZkpS5',
    label: 'Publicação 3 de 6',
    couple: 'Letícia & Vinicius',
    image:
      'https://scontent-gig4-1.cdninstagram.com/v/t51.82787-15/581444390_18046900175676136_2580594484358272655_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=Mzc2ODA4ODE3OTg3MTE5MTc3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuOTYwLnNkci5yZWd1bGFyX3Bob3RvLkMzIn0%3D&_nc_ohc=ohaF-MMou9gQ7kNvwGksjEF&_nc_oc=Adp2qe2INpyCk3rbBn4Y09x1FZ_KyqQ-7n6kxEYd7RhbJRNS1umBrum2CFsInfFcMwk&_nc_zt=23&_nc_ht=scontent-gig4-1.cdninstagram.com&_nc_gid=Ri2gScijVtv6eK2LAD0Fpg&_nc_ss=79689&oh=00_AQMkgsMuobcdcZ5SR6emKLnP4uSFK5EYop5uevT78u-sYA&oe=6AC78288',
    className: 'portfolio-image--portrait',
  },
  {
    shortcode: 'DQMskEJkUs-',
    label: 'Publicação 4 de 6',
    couple: 'Flávia & Leonardo',
    image:
      'https://scontent-gig4-1.cdninstagram.com/v/t51.82787-15/569258471_18044510582676136_7874691503086929198_n.jpg?stp=dst-jpg_e35_p1080x1080_sh2.08_tt6&_nc_cat=105&ig_cache_key=Mzc1MDU2ODU3MTA5MDA5OTk0OQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=ubsxYjxWou4Q7kNvwGtiJ6Z&_nc_oc=AdrxCXkGnC3Ul97uDu7Fe38_UEU0fho1-iUd0URnEqqTIPDDKaFnp9wdQq82wjj52SU&_nc_zt=23&_nc_ht=scontent-gig4-1.cdninstagram.com&_nc_gid=sXw_Ucj2QCpkngz8DLFMTA&_nc_ss=79689&oh=00_AQM2P45nf1JzHwS7kW8U0iREMjQgzAj0_w55hWkVMPruyQ&oe=6AC769A2',
    className: 'portfolio-image--portrait',
  },
  {
    shortcode: 'DLgMeRdy1Q1',
    label: 'Publicação 5 de 6',
    couple: 'Débora & Vitor',
    image:
      'https://scontent-gig4-1.cdninstagram.com/v/t51.75761-15/514336736_18030767234676136_6259400267839985960_n.jpg?stp=dst-jpegr_e35_s1080x1080_tt6&_nc_cat=100&ig_cache_key=MzY2NTk4NDkzODMyNDk4MDUyNg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTQ0MC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=l5e35kTEa4oQ7kNvwH8Mb5I&_nc_oc=AdoKsljZ_6RlzYwhrPiUK2EflmcihxLmW-wwO8GfSjKA4bTE258jkjq1ro2ID6-H588&_nc_zt=23&_nc_ht=scontent-gig4-1.cdninstagram.com&_nc_gid=zAcbGOnrdPAN3p9mFy1LTw&_nc_ss=79689&oh=00_AQM9TbOA3yQAQaSCAYqfM-xuv3my_z97-nDjgHnlBBjMzA&oe=6AC7970A',
    className: 'portfolio-image--portrait',
  },
  {
    shortcode: 'Dbaw1Unlqpf',
    label: 'Publicação 6 de 6',
    couple: 'Julia A & Kenny',
    image:
      'https://scontent-gig4-1.cdninstagram.com/v/t51.82787-15/758328797_18078431390676136_3138621730336403581_n.jpg?stp=dst-jpegr_e35_p1080x1080_tt6&_nc_cat=110&ig_cache_key=Mzk1MjY4MzM3NTk1NzE0OTY3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMjI2OC5oZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=xAOR5Jv9Jh4Q7kNvwHtK8dw&_nc_oc=AdqlxPh0WN2RTWhwjEc7AN0on2nzUn7kYUI8SlI3PvCPwQSMfbD4V2FfJ4ir09PebhQ&_nc_zt=23&_nc_ht=scontent-gig4-1.cdninstagram.com&_nc_gid=JTWc7wWVKX2493vL841Igg&_nc_ss=79689&oh=00_AQMIPnFYINKoERqB5khDMsoemhvCsTVJ47sAfHnCR95TJg&oe=6AC773DC',
    className: 'portfolio-image--portrait',
  },
]

const faqs = [
  {
    question: 'Como começo a personalizar minha peça?',
    answer:
      'Conte um pouco sobre a ocasião, a peça que imaginou e os detalhes que gostaria de bordar. A partir daí, conversamos sobre as possibilidades e preparamos uma proposta.',
  },
  {
    question: 'Posso escolher palavras, cores e desenhos?',
    answer:
      'Sim. O bordado pode partir de palavras, datas, iniciais ou referências especiais. Cada escolha é conversada para que o resultado tenha a sua cara.',
  },
  {
    question: 'Com quanto tempo de antecedência devo pedir?',
    answer:
      'Como cada peça é feita à mão, o prazo depende do desenho, da quantidade e da agenda do atelier. Se puder, entre em contato com antecedência para planejarmos com calma.',
  },
  {
    question: 'Como recebo um orçamento?',
    answer:
      'Envie os detalhes do que procura pelo formulário. Com as informações sobre a peça e a data, fica mais fácil preparar uma proposta adequada ao seu pedido.',
  },
]

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      className="arrow-icon"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path d="M3.5 10h12m-5-5 5 5-5 5" />
    </svg>
  )
}

function App() {
  const [formNotice, setFormNotice] = useState('')
  const [activeInstagramPost, setActiveInstagramPost] = useState(0)
  const [selectedPortfolioPost, setSelectedPortfolioPost] = useState<
    number | null
  >(null)

  function showInstagramPost(index: number) {
    setActiveInstagramPost(
      (index + instagramPosts.length) % instagramPosts.length,
    )
  }

  useEffect(() => {
    if (selectedPortfolioPost === null) {
      return
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setSelectedPortfolioPost(null)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.classList.add('portfolio-lightbox-open')

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('portfolio-lightbox-open')
    }
  }, [selectedPortfolioPost])

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormNotice(
      'Obrigada pelo interesse. O formulário ainda precisa ser conectado a um serviço de envio para encaminhar seu pedido.',
    )
  }

  return (
    <>
      <header className="site-header">
        <a className="brand-caption" href="#inicio" aria-label="Início">
          atelier autoral
          <span>bordados feitos à mão</span>
        </a>
        <nav className="main-nav" aria-label="Navegação principal">
          <a href="#atelier">O atelier</a>
          <a href="#portfolio">Bordados</a>
          <a href="#processo">Como funciona</a>
          <a className="nav-contact" href="#orcamento">
            Conversar sobre uma peça <ArrowIcon />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <p className="eyebrow">Bordado feito com tempo e intenção</p>
            <h1>
              Algumas histórias
              <br />
              merecem ser <span className="sebian-accent">bordadas.</span>
            </h1>
            <p className="hero-description">
              Peças artesanais para guardar perto aquilo que faz sentido —
              criadas para acompanhar os dias importantes e continuar com você
              muito depois deles.
            </p>
            <a className="button button--primary" href="#portfolio">
              Conheça os bordados <ArrowIcon />
            </a>
            <p className="hero-footnote">Feito à mão, para ser seu.</p>
          </div>
          <figure className="hero-image-wrap">
            <img
              className="hero-image"
              src={instagramPosts[0].image}
              alt={`Bordado de ${instagramPosts[0].couple}`}
              fetchPriority="high"
            />
            <figcaption>
              <span>Um gesto pequeno.</span>
              <span>Uma lembrança para sempre.</span>
            </figcaption>
            <span className="image-index" aria-hidden="true">
              01 / 06
            </span>
          </figure>
          <a className="scroll-cue" href="#atelier">
            <span aria-hidden="true" />
            Desça para conhecer
          </a>
        </section>

        <section className="intro-section section-pad" id="atelier">
          <p className="eyebrow">O atelier</p>
          <div className="intro-content">
            <h2>
              O valor de um detalhe está em <em>tudo o que ele carrega.</em>
            </h2>
            <div className="intro-text">
              <p>
                Um nome, uma data, uma frase que só vocês entendem. No meio de
                tantos preparativos, existe espaço para algo feito sem pressa
                — e inteiramente de vocês.
              </p>
              <p>
                Cada bordado nasce de uma conversa e ganha forma, ponto a ponto,
                no tecido. Não para enfeitar um grande dia, mas para transformar
                uma história em algo que pode ser tocado, guardado e revisitado.
              </p>
              <a className="text-link" href="#personalizacao">
                Um pouco sobre o processo <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="intro-rule">
            <span>01</span>
            <span aria-hidden="true" />
            <span>feito à mão, desde o primeiro ponto</span>
          </div>
        </section>

        <section className="values-section section-pad">
          <div className="section-heading">
            <p className="eyebrow">O que importa em cada peça</p>
            <h2>Intenção em cada escolha.</h2>
          </div>
          <div className="values-list">
            <article className="value-item">
              <span className="value-number">01</span>
              <h3>Feito para você</h3>
              <p>
                Cada pedido começa do zero, a partir das suas palavras,
                referências e do que você quer guardar.
              </p>
            </article>
            <article className="value-item">
              <span className="value-number">02</span>
              <h3>Sem pressa, à mão</h3>
              <p>
                O cuidado artesanal pede tempo. Cada ponto é construído com
                atenção ao tecido e à história da peça.
              </p>
            </article>
            <article className="value-item">
              <span className="value-number">03</span>
              <h3>Para seguir com você</h3>
              <p>
                Mais que um detalhe de ocasião, um objeto afetivo feito para
                permanecer depois que o dia passa.
              </p>
            </article>
          </div>
        </section>

        <section className="portfolio-section section-pad" id="portfolio">
          <div className="portfolio-heading">
            <div>
              <p className="eyebrow">Peças com história</p>
              <h2>O tempo também deixa marcas bonitas.</h2>
            </div>
            <p>
              Um olhar para o gesto, a textura e os pequenos detalhes de cada
              criação.
            </p>
          </div>
          <div className="portfolio-grid">
            {instagramPosts.map((item, index) => (
              <figure
                className={`portfolio-item portfolio-item--${index + 1}`}
                key={item.shortcode}
              >
                <button
                  className="portfolio-image-link"
                  onClick={() => setSelectedPortfolioPost(index)}
                  type="button"
                  aria-label={`Ampliar o bordado de ${item.couple}`}
                >
                  <img
                    className={item.className}
                    src={item.image}
                    alt={`Bordado de ${item.couple}`}
                    loading="lazy"
                  />
                </button>
                <figcaption>
                  <span>{item.couple}</span>
                  <span>Bordado personalizado</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="portfolio-note">
            Fotografias reais do atelier, abertas diretamente nas publicações
            originais do Instagram.
          </p>
        </section>

        <section className="process-section section-pad" id="processo">
          <div className="process-title">
            <p className="eyebrow">Do primeiro oi ao último ponto</p>
            <h2>Um processo feito em conversa.</h2>
            <p>
              Você traz a ideia. A gente encontra, junto, a melhor forma de
              bordá-la.
            </p>
          </div>
          <ol className="process-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Você conta</h3>
                <p>
                  Compartilhe a ocasião, a peça e os detalhes que gostaria de
                  ver bordados.
                </p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>A gente desenha a ideia</h3>
                <p>
                  Conversamos sobre possibilidades, materiais, personalização e
                  prazo.
                </p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>O bordado ganha vida</h3>
                <p>
                  Com tudo combinado, a peça é feita à mão e preparada para
                  chegar até você.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section className="personalization-section section-pad" id="personalizacao">
          <div className="personalization-image">
            <img
              src={instagramPosts[4].image}
              alt={`Bordado de ${instagramPosts[4].couple}`}
              loading="lazy"
            />
            <span className="image-caption">A matéria de uma lembrança.</span>
          </div>
          <div className="personalization-copy">
            <p className="eyebrow">Do seu jeito</p>
            <h2>
              Um detalhe que só poderia ser <em>seu.</em>
            </h2>
            <p>
              Iniciais, uma data, poucas palavras ou um desenho cheio de
              significado: a personalização começa pelo que importa para você.
              Cada escolha é pensada para encontrar seu lugar no tecido.
            </p>
            <a className="text-link" href="#orcamento">
              Vamos imaginar sua peça? <ArrowIcon />
            </a>
          </div>
        </section>

        <section className="instagram-section section-pad" id="instagram">
          <p className="eyebrow">Um olhar de perto</p>
          <div className="instagram-content">
            <h2>
              Um pouco do atelier, <em>direto do Instagram.</em>
            </h2>
            <div>
              <p>
                Fotografias reais das peças e dos bastidores, compartilhadas
                diretamente pelas publicações do atelier.
              </p>
              <a
                className="text-link"
                href="https://www.instagram.com/bordandorecordacoes/"
                target="_blank"
                rel="noreferrer"
              >
                Ver o perfil no Instagram <ArrowIcon />
              </a>
            </div>
          </div>
          <div className="instagram-carousel" aria-label="Publicações do Instagram">
            <button
              className="carousel-arrow"
              type="button"
              onClick={() => showInstagramPost(activeInstagramPost - 1)}
              aria-label="Ver publicação anterior"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M16.5 10h-12m5 5-5-5 5-5" />
              </svg>
            </button>
            <div className="instagram-slide">
              <iframe
                key={instagramPosts[activeInstagramPost].shortcode}
                title={`Instagram: ${instagramPosts[activeInstagramPost].label}`}
                src={`https://www.instagram.com/p/${instagramPosts[activeInstagramPost].shortcode}/embed/`}
                loading="lazy"
                allow="encrypted-media"
                referrerPolicy="strict-origin-when-cross-origin"
              />
              <a
                className="instagram-post-link"
                href={`https://www.instagram.com/p/${instagramPosts[activeInstagramPost].shortcode}/`}
                target="_blank"
                rel="noreferrer"
              >
                Abrir publicação no Instagram <ArrowIcon />
              </a>
            </div>
            <button
              className="carousel-arrow"
              type="button"
              onClick={() => showInstagramPost(activeInstagramPost + 1)}
              aria-label="Ver próxima publicação"
            >
              <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
                <path d="M3.5 10h12m-5-5 5 5-5 5" />
              </svg>
            </button>
            <div
              className="carousel-pagination"
              role="group"
              aria-label="Selecionar publicação"
            >
              {instagramPosts.map((post, index) => (
                <button
                  aria-label={`Ir para ${post.label}`}
                  aria-current={index === activeInstagramPost ? 'true' : undefined}
                  className={
                    index === activeInstagramPost ? 'is-active' : undefined
                  }
                  key={post.shortcode}
                  onClick={() => showInstagramPost(index)}
                  type="button"
                />
              ))}
            </div>
            <p className="carousel-count" aria-live="polite">
              {String(activeInstagramPost + 1).padStart(2, '0')} /{' '}
              {String(instagramPosts.length).padStart(2, '0')}
            </p>
          </div>
        </section>

        <section className="faq-section section-pad" id="faq">
          <div className="faq-heading">
            <p className="eyebrow">Antes de começar</p>
            <h2>Algumas respostas, com calma.</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item" key={faq.question}>
                <summary>
                  {faq.question}
                  <span className="faq-toggle" aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="budget-section section-pad" id="orcamento">
          <div className="budget-copy">
            <p className="eyebrow">Vamos conversar?</p>
            <h2>
              Sua história pode começar <em>com um ponto.</em>
            </h2>
            <p>
              Conte o que está imaginando. Cada detalhe ajuda a transformar
              essa ideia em uma peça feita para guardar.
            </p>
            <span className="budget-aside">Sem compromisso, no seu tempo.</span>
          </div>
          <form className="budget-form" onSubmit={handleSubmit}>
            <label>
              Seu nome
              <input autoComplete="name" name="name" required />
            </label>
            <label>
              Seu e-mail
              <input
                autoComplete="email"
                name="email"
                type="email"
                required
              />
            </label>
            <label>
              Para quando você imagina a peça?
              <input name="date" type="text" placeholder="Mês ou data aproximada" />
            </label>
            <label>
              O que gostaria de bordar?
              <textarea
                name="details"
                rows={4}
                placeholder="Conte um pouco sobre a peça e o que ela significa para você."
                required
              />
            </label>
            <button className="button button--primary" type="submit">
              Preparar pedido <ArrowIcon />
            </button>
            <p className="form-notice" role="status" aria-live="polite">
              {formNotice}
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="footer-brand" href="#inicio">
            Atelier autoral
            <span>Bordados feitos à mão</span>
          </a>
          <p>Feito à mão, para ser lembrado.</p>
          <a className="text-link" href="#inicio">
            Voltar ao início <ArrowIcon />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Bordando Recordações</span>
          <span>Feito com intenção, ponto a ponto.</span>
        </div>
      </footer>
      {selectedPortfolioPost !== null && (
        <div
          className="portfolio-lightbox"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) {
              setSelectedPortfolioPost(null)
            }
          }}
        >
          <section
            className="portfolio-lightbox__panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="portfolio-lightbox-title"
          >
            <button
              className="portfolio-lightbox__close"
              type="button"
              onClick={() => setSelectedPortfolioPost(null)}
              aria-label="Fechar foto ampliada"
              autoFocus
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
            <img
              src={instagramPosts[selectedPortfolioPost].image}
              alt={`Bordado de ${instagramPosts[selectedPortfolioPost].couple}`}
            />
            <div className="portfolio-lightbox__caption">
              <h2 id="portfolio-lightbox-title">
                {instagramPosts[selectedPortfolioPost].couple}
              </h2>
              <a
                className="text-link"
                href={`https://www.instagram.com/p/${instagramPosts[selectedPortfolioPost].shortcode}/`}
                target="_blank"
                rel="noreferrer"
              >
                Ver publicação original <ArrowIcon />
              </a>
            </div>
          </section>
        </div>
      )}
    </>
  )
}

export default App
