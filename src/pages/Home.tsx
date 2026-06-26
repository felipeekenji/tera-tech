import { useEffect, useState } from "react";

import Logo from "../assets/logo.svg";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Button from "../components/Button";

import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import "../styles/hero.css";
import Champion from "../assets/champion.svg";

import "../styles/header.css";
import "../styles/utility.css";

import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";

import ProfileImageOne from "../assets/images/vampeta.png";
import ProfileImageTwo from "../assets/images/indio.png";
import ProfileImageThree from "../assets/images/virginia.png";

import Star from "../assets/star.svg";
import StarOuter from "../assets/starOuter.svg";

import "../styles/testimonials.css";

import Check from "../assets/check.svg";
import "../styles/pricing.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {

        const html = document.querySelector("html");

        if (html) {
            html.style.overflowY = showMobileMenu ? "hidden" : "auto";
        }

    }, [showMobileMenu]);

  return (
    <>
      <header className="header-bg">

        <div className="container py-sm">

         <nav className="flex items-center justify-between">

        <img
        src={Logo}
        alt="Logo"
        width={220}
        height={80}
      />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li><a href="#">Home</a></li>
              <li><a href="#solution">Soluções</a></li>
              <li><a href="#testimonials">Depoimentos</a></li>
              <li><a href="#pricing">Preços</a></li>
              <li><a href="#contact">Contato</a></li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg">
                Login
              </a>

              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">

                <div className="container flex">

                  <ul>
                    <li><a href="#">Home</a></li>
                    <li>
  <a
    onClick={() =>
      setShowMobileMenu(false)
    }
    href="#solution"
  >
    Soluções
  </a>
</li>
                    <li>
  <a
    onClick={() =>
      setShowMobileMenu(false)
    }
    href="#testimonials"
  >
    Depoimentos
  </a>
</li>
<li>
  <a
    onClick={() =>
      setShowMobileMenu(false)
    }
    href="#pricing"
  >
    Preços
  </a>
</li>
                    <li>
                  <a href="#contact">
                    Contato
                  </a>
                </li>
                  
                    <li><a
                        className="reverse-color"
                        href="#"
                            >
                                Login
                        </a>
                    </li>
                  </ul>

                  <span
                    className="btn-wrapper"
                    onClick={() =>
                      setShowMobileMenu(false)
                    }
                  >
                    <img
                      src={Close}
                      width={24}
                    />
                  </span>

                </div>

              </div> 
            ) : (
              <span
                className="btn-wrapper"
                onClick={() =>
                  setShowMobileMenu(true)
                }
              >
                <img
                  src={Menu}
                  width={24}
                />
              </span>
            )}
          </div>

        </nav>
        </div>
      </header>
            <section id="hero">

      <span className="desktop-only">
        <img
          src={HeroRectangleTwo}
          alt="Retangulo um tela inicial"
        />
      </span>

      <img
        src={HeroRectangleOne}
        alt="Retangulo dois tela inicial"
      />

      <div className="container content">
    <p className="desktop-only">
        Olá
    </p>
    <h1>Tera Tech possui as melhores soluções de tecnologia para seu negócio</h1>
    <p>Está buscando automação industrial, desenvolvimento de software ou consultoria em TI? A Tera Tech é a escolha certa para você.
    </p>
    <div className="flex gap-1">
        <span><Button text="Cadastre-se" /></span>
        <span className="desktop-only">
            <Button text="Veja mais" secondary />
        </span>
    </div>
</div>


    </section>
    
    <section className="container" id="solution">
            <header>
    <span>
        <h2>Soluções</h2>
        <span className="desktop-only">
            <h2>
                Sob medida para você
            </h2>
        </span>
    </span>
    <p>
        Inovação é com a gente! A <strong>Tera Tech </strong>
        já conquistou diversos clientes, seja você mais um deles,
        veja tudo que pode ganhar com nossos serviços.
    </p>
</header>

        <section className="even-columns">
    <div className="card">
        <span>
            <img src={Champion} alt="ícone campeão" width={64} height={64} />
        </span>
        <div>
            <h3>
                Produto Vencedor
            </h3>
            <p>
                Lider em inovação e tecnologia, a Tera Tech é referência no mercado de soluções tecnológicas.
            </p>
            <hr />
        </div>
    </div>
</section>

            <section
  className="container"
  id="solution"
>

  <Card
    title="Suporte rápido"
    description="Disponível 24 horas por dia."
  />

  <Card
    title="Qualidade garantida"
    description="Resultados comprovados."
  />

  <Card
    title="Preço justo"
    description="Qualidade sem gastar muito."
  />

</section>

        <section id="testimonials">

  <header>

    <span>

      <p className="desktop-only">
        Conselho de quem conhece
      </p>

      <h2>
        Cada cliente importa!
      </h2>

    </span>

    <p>
      Quem já precisou de soluções tecnológicas sabe a importância de contar com uma empresa confiável. Veja o que nossos clientes têm a dizer sobre nós.
    </p>

  </header>

  <section className="carousel">

  <div className="carousel-content">

    <TestimonialCard
      profile={ProfileImageOne}
      testimony="
        Na necessidade de um programa
        para gerenciamento para minha
        arena de fut sete, a Tera Tech
        se disponibilizou para desenvolver
        uma solução personalizada.
      "
      name="Vam Peta"
      role="CEO FUT SETE"
      stars={4}
      star={Star}
      starOuter={StarOuter}
    />

    <TestimonialCard
      profile={ProfileImageTwo}
      testimony="
        Ajudaram a resolver com um
        sistema para minha arena
        de futevôlei.
      "
      name="Índio"
      role="Profissional de Futevôlei"
      stars={5}
      star={Star}
      starOuter={StarOuter}
    />

    <TestimonialCard
      profile={ProfileImageThree}
      testimony="
        Automatizaram meu
        atendimento aos fãs.
      "
      name="Virgínia"
      role="Influencer"
      stars={5}
      star={Star}
      starOuter={StarOuter}
    />

  </div>

</section>

</section>

<section
  id="pricing"
  className="container"
>

  <header>

    <p className="desktop-only">
      Planos e preços
    </p>

    <h2>
      Nossos planos
    </h2>

  </header>

  <section
    className="even-columns gap-1.5"
  >

    <div className="pricing-card">

      <span className="plan">

        <h3>
          Gratuito
        </h3>

        <p>
          Você tem direito a uma consultoria com a equipa Tera Tech, para conhecer melhor nossos serviços e soluções.
        </p>

      </span>

      <h2>
        Grátis
      </h2>

      <Button
        text="Contatar agora"
        secondary
      />

      <span className="hr" />

      <span className="features">

        <img
          src={Check}
          alt="ícone check"
          width={24}
          height={24}
        />

        <p>
          Agendamento de consultoria em até 24h
        </p>

      </span>

      <ul className="features">

        <li>

          <img
            src={Check}
            alt="ícone check"
            width={24}
            height={24}
          />

          <p>
            Apenas 1 por CNPJ
          </p>

        </li>

      </ul>

    </div>


    <div className="pricing-card premium">

      <span className="bonus">

        <p>
          1º MÊS COM DESCONTO
        </p>

      </span>

      <span className="plan">

        <h3>
          Premium
        </h3>

        <p>
          Para quem já sabe o que precisa, a Tera Tech oferece um plano completo de soluções tecnológicas para seu negócio.
        </p>

      </span>

      <span className="price">

        <h2>
          R$50 até R$1000
        </h2>

        <p>
          /mês
        </p>

      </span>

      <Button
        text="Contatar agora"
      />

      <span className="hr" />

      <span className="features">

        <img
          src={Check}
          width={24}
          height={24}
        />

        <p>
          Suporte 24h
        </p>

      </span>

      <span className="features">

        <img
          src={Check}
          width={24}
          height={24}
        />

        <p>
          Atendimento personalizado
        </p>

      </span>

      <span className="features">

        <img
          src={Check}
          width={24}
          height={24}
        />

        <p>
          Implementação de soluções sob medida
        </p>

      </span>

    </div>

  </section>

</section>
        
</section>
    
    </>
  );
}