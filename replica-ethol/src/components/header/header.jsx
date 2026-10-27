import { useState, useEffect } from "react";
import etholLogo from "../../assets/ethol.png";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./header.css";

export default function AppHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  // State untuk melacak halaman/menu mana yang aktif
  const [activeNav, setActiveNav] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={
        isScrolled ? "bg-white navbar-shadow py-2" : "bg-transparent py-3"
      }
      style={{ transition: "all 0.4s ease-in-out" }}
    >
      <Container fluid className="px-4 px-lg-5">
        <Navbar.Brand href="#beranda" className="d-flex align-items-center">
          <img
            src={etholLogo}
            alt="ETHOL Logo"
            height="75"
            style={{
              filter: isScrolled ? "none" : "brightness(0) invert(1)",
              transition: "filter 0.3s ease-in-out",
            }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center gap-1">
            <Nav.Link
              href="#beranda"
              onClick={() => setActiveNav("beranda")}
              className={`mx-1 nav-link-custom ${
                isScrolled ? "nav-link-scrolled" : "nav-link-top"
              } ${activeNav === "beranda" ? "active" : ""}`}
            >
              Beranda
            </Nav.Link>
            <Nav.Link
              href="#tentang"
              onClick={() => setActiveNav("tentang")}
              className={`mx-1 nav-link-custom ${
                isScrolled ? "nav-link-scrolled" : "nav-link-top"
              } ${activeNav === "tentang" ? "active" : ""}`}
            >
              Tentang
            </Nav.Link>
            <Nav.Link
              href="#layanan"
              onClick={() => setActiveNav("layanan")}
              className={`mx-1 nav-link-custom ${
                isScrolled ? "nav-link-scrolled" : "nav-link-top"
              } ${activeNav === "layanan" ? "active" : ""}`}
            >
              Layanan
            </Nav.Link>
            <Nav.Link
              href="#faq"
              onClick={() => setActiveNav("faq")}
              className={`mx-1 nav-link-custom ${
                isScrolled ? "nav-link-scrolled" : "nav-link-top"
              } ${activeNav === "faq" ? "active" : ""}`}
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              href="#kontak"
              onClick={() => setActiveNav("kontak")}
              className={`mx-1 nav-link-custom ${
                isScrolled ? "nav-link-scrolled" : "nav-link-top"
              } ${activeNav === "kontak" ? "active" : ""}`}
            >
              Hubungi Kami
            </Nav.Link>
          </Nav>
          <Button
            className={`ms-lg-3 px-3 py-1-5 border-0 ${
              isScrolled ? "btn-login-scrolled" : "btn-login-top"
            }`}
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}