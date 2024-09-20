import { useState, useEffect } from "react";
import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import Logo from "../assets/logo.svg";
import Button from "../components/Button";
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Codebar from "../assets/codebar.svg";
import Bank from "../assets/bank.svg";
import Human from "../assets/human.svg";
import "../styles/hero.css";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/coiso.css";

export default function Home() {
    const [showMobileMenu, setShowMobileMenu] = useState(false);

    useEffect(() => {
        if (showMobileMenu) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
    }, [showMobileMenu]);

    return (
        <>
            <header className="container py-sm">
                <nav className="flex items-center justify-between">
                    <img src={Logo} alt="Logo Financion" width={220} height={80} />
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
                            <a className="reverse-color" id="login" href="#">Login</a>
                            <Button text="Cadastre-se" />
                        </div>
                    </div>
                    <div className="mobile-menu">
                        {showMobileMenu ? (
                            <div className="mobile-menu-content">
                                <div className="container flex">
                                    <ul>
                                        <li><a href="#">Home</a></li>
                                        <li><a href="#solution">Soluções</a></li>
                                        <li><a href="#testimonials">Depoimentos</a></li>
                                        <li><a href="#pricing">Preços</a></li>
                                        <li><a href="#contact">Contato</a></li>
                                    </ul>
                                    <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                        <img src={Close} alt="ícone fechar menu" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                        ) : (
                            <span onClick={() => setShowMobileMenu(!showMobileMenu)} className="btn-wrapper">
                                <img src={Menu} alt="ícone menu" width={24} height={24} />
                            </span>
                        )}
                    </div>
                </nav>
            </header>

            <section id="hero">
                <span>
                    <img src={HeroRectangleTwo} alt="Retangulo" className="retnagulo2" />
                </span>
                <img src={HeroRectangleOne} alt="Retangulo" />
                <div className="container content">
                    <h1>Um sistema inovador para organizar suas finanças</h1>
                    <p>
                        Quer organizar seu dinheiro para comprar o carro dos seus sonhos, ou não consegue administrar suas dívidas?
                        Este é o site perfeito para você.
                    </p>
                    <div className="flex gap-1">
                        <span><Button text="Cadastre-se" /></span>
                        <span className="desktop-only">
                            <Button text="Veja mais" secondary />
                        </span>
                    </div>
                </div>
            </section>

            <section id="coiso">
                <div className="container">
                    <header>
                        <h3>Estatísticas</h3>
                        <h1>Para monitorar seus gastos</h1>
                        <p>
                            O site do <span className="colorido">FinanciON</span> possui funções e recursos dinâmicos e intuitivos para
                            melhorar a sua experiência.
                        </p>
                    </header>

                    <div className="products">
                        <div className="product-card">
                            <div className="icone-1"><img src={Codebar} alt="Código de barra" /></div>
                            <p>
                                Fazemos e monitoramos pagamentos por boleto, pix e cartão de crédito e débito.
                            </p>
                        </div>
                        <div className="product-card">
                            <div className="icone-2"><img src={Bank} alt="banco" /></div>
                            <p>
                                Nós realizamos <span className="colorido">OpenFinance</span> com os mais diversos bancos, entre
                                eles Caixa, Banco do Brasil, Itaú, Nubank, entre outros.
                            </p>
                        </div>
                        <div className="product-card">
                            <div className="icone-3"><img src={Human} alt="pessoa" /></div>
                            <p>
                                Usamos os dados coletados para trazer gráficos e estatísticas personalizadas para refletir
                                o seu perfil de consumidor.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
