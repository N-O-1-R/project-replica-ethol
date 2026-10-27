import { Container, Row, Col, Button } from "react-bootstrap";
import heroImage from "../../assets/hero.png";
import pens_putih from "../../assets/Logo_PENS_putih.png";
import "./hero.css"; // 1. Import file CSS terpisah

export default function AppHero() {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* 1. LAYER OVERLAY BIRU */}
      <div className="hero-overlay" />

      {/* 2. LAYER VIGNETTE */}
      <div className="hero-vignette" />

      {/* 2.5. LAYER PARTIKEL (Melayang dari Bawah ke Atas) */}
      <div className="hero-particles">
        {[...Array(20)].map((_, i) => (
          <span key={i} className={`particle particle-${i + 1}`} />
        ))}
      </div>

      {/* 3. LAYER KONTEN */}
      <Container fluid className="px-4 px-lg-5 ps-xl-5 hero-content">
        <Row className="align-items-center g-0 min-vh-100">
          <Col
            lg={7}
            className="text-white py-0 pe-lg-4"
            style={{ paddingLeft: "10rem" }}
          >
            <div className="d-inline-flex align-items-center px-3 py-2 mb-3 rounded-pill hero-badge">
              <span className="me-3">
                <img
                  src={pens_putih}
                  alt="PENS"
                  style={{ width: "20px", height: "20px" }}
                />
              </span>{" "}
              <span style={{ color: "#F4B41A", fontWeight: "bold" }}>
                ETHOLkw
              </span>
            </div>

            <h1 className="fw-bold mb-3 lh-sm">
              Belajar. <br />
              Terhubung. <br />
              <span style={{ color: "#F4B41A" }}>Di mana saja.</span>
            </h1>

            <p className="text-light opacity-75 mb-4">
              Platform pembelajaran digital PENS untuk mendukung proses belajar
              mengajar yang lebih mudah, terintegrasi, dan kapan saja.
            </p>

            <div className="d-flex flex-wrap align-items-center gap-3 pt-2">
              {/* Tombol Masuk Sekarang */}
              <Button className="fw-semibold border-0 btn-ethol-primary">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                <span>Masuk Sekarang</span>
              </Button>

              {/* Tombol Tentang PENS */}
              <Button
                variant="outline-light"
                className="px-4 py-2-5 fw-semibold d-inline-flex align-items-center gap-2 btn-ethol-outline"
              >
                <span>Tentang PENS</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                </svg>
              </Button>
            </div>
          </Col>

          <Col lg={5} className="d-none d-lg-block" />
        </Row>
      </Container>

      {/* 4. GELOMBANG PUTIH MENGALIR HORISONTAL */}
      <div className="hero-wave">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layer 1: Belakang (Transparan Tipis) */}
          <path
            className="wave-layer wave-layer-1"
            d="M0,60 C240,90 480,30 720,60 C960,90 1200,30 1440,60 L1440,120 L0,120 Z"
            fill="rgba(255, 255, 255, 0.35)"
          />
          {/* Layer 2: Tengah (Transparan Sedang) */}
          <path
            className="wave-layer wave-layer-2"
            d="M0,40 C360,80 360,10 720,40 C1080,80 1080,10 1440,40 L1440,120 L0,120 Z"
            fill="rgba(255, 255, 255, 0.65)"
          />
          {/* Layer 3: Depan (Solid Putih Utama) */}
          <path
            className="wave-layer wave-layer-3"
            d="M0,50 C240,20 480,80 720,50 C960,20 1200,80 1440,50 L1440,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>
    </div>
  );
}
