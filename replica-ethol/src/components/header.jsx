// 1. butuh alat dari React untuk membuat memori (useState) dan memantau scroll (useEffect)
import { useState, useEffect } from "react";

// 2. butuh komponen-komponen UI yang sudah jadi dari React Bootstrap
import { Navbar, Container, Nav, Button } from "react-bootstrap";

import "./header.css";

export default function AppHeader() {
  // 3. buat state untuk menyimpan apakah navbar sedang di-scroll atau tidak
  const [isScrolled, setIsScrolled] = useState(false);

  // 4. gunakan useEffect untuk memantau scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    handleScroll(); // panggil sekali untuk mengatur state awal

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      // Ganti shadow-sm menjadi navbar-shadow
      className={
        isScrolled ? "bg-white navbar-shadow py-2" : "bg-transparent py-3"
      }
      // Tambahkan ease-in-out agar perpindahan warna dan shadow lebih halus
      style={{ transition: "all 0.4s ease-in-out" }}
    >
      <Container fluid className="px-4 px-lg-5">
        <Navbar.Brand
          href="#beranda"
          className="fw-bold d-flex align-items-baseline"
        >
          <span
            style={{
              color: isScrolled ? "#F4B41A" : "white",
              fontSize: "2.5rem", // Turun dari 3.5rem
              lineHeight: "1",
            }}
          >
            e
          </span>
          <span
            className={isScrolled ? "text-biru-tua" : "text-white"}
            style={{
              fontSize: "1.5rem", // Turun dari 2rem
              marginLeft: "2px",
            }}
          >
            thol
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link
              href="#beranda"
              className={`mx-2 fw-semibold nav-link-custom ${isScrolled ? "nav-link-scrolled" : "nav-link-top"}`}
            >
              Beranda
            </Nav.Link>
            <Nav.Link
              href="#tentang"
              className={`mx-2 fw-semibold nav-link-custom ${isScrolled ? "nav-link-scrolled" : "nav-link-top"}`}
            >
              Tentang
            </Nav.Link>
            <Nav.Link
              href="#layanan"
              className={`mx-2 fw-semibold nav-link-custom ${isScrolled ? "nav-link-scrolled" : "nav-link-top"}`}
            >
              Layanan
            </Nav.Link>
            <Nav.Link
              href="#faq"
              className={`mx-2 fw-semibold nav-link-custom ${isScrolled ? "nav-link-scrolled" : "nav-link-top"}`}
            >
              FAQ
            </Nav.Link>
            <Nav.Link
              href="#kontak"
              className={`mx-2 fw-semibold nav-link-custom ${isScrolled ? "nav-link-scrolled" : "nav-link-top"}`}
            >
              Hubungi Kami
            </Nav.Link>
          </Nav>
          <Button
            className="ms-3 px-3 fw-bold" // px-4 diubah ke px-3
            style={{
              backgroundColor: isScrolled ? "#0F2C59" : "#F4B41A",
              color: isScrolled ? "white" : "#0F2C59",
              border: "none",
              transition: "all 0.3s ease-in-out",
              fontSize: "0.9rem", // Mengecilkan teks tombol
              paddingTop: "6px", // Merampingkan tombol bagian atas
              paddingBottom: "6px", // Merampingkan tombol bagian bawah
            }}
          >
            Login
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
