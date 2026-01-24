
export default function Home() {
  const data = [
    {
      title: "Beds",
      description:
        "Custom-designed beds with storage options, headboards, and platform designs",
      features: [
        "King & Queen Size",
        "Storage Beds",
        "Custom Headboards",
        "Upholstered Options",
      ],
      price: "₹15,000 - ₹80,000",
      image:
        "https://casagold.in/cdn/shop/articles/Scandinavian_Wavy_Rattan_Bed_1.webp?v=1736146037&width=2048",
    },
    {
      title: "Wardrobes",
      description:
        "Space-efficient wardrobes with smart storage solutions and modern designs",
      features: [
        "Sliding Doors",
        "Walk-in Closets",
        "Mirror Finish",
        "Soft-Close Drawers",
      ],
      price: "₹25,000 - ₹1,50,000",
      image:
        "https://ik.imagekit.io/2xkwa8s1i/img/wardrobes/r1/WWRB4DMH1GINGHAMCWR1/1.jpg?tr=w-1200",
    },
    {
      title: "Sofas & Seating",
      description:
        "Comfortable and stylish sofas, sectionals, and living room seating",
      features: [
        "L-Shaped Sofas",
        "Recliners",
        "Fabric & Leather",
        "Modular Designs",
      ],
      price: "₹20,000 - ₹1,20,000",
      image:
        "https://images.unsplash.com/photo-1759722668253-1767030ad9b2?fm=jpg&w=1080",
    },
    {
      title: "Modular Kitchen",
      description:
        "Modern modular kitchens designed for efficiency, style, and durability",
      features: [
        "Custom Layouts",
        "Soft-Close Cabinets",
        "Premium Hardware",
        "Easy Maintenance",
      ],
      price: "₹1,20,000 - ₹5,00,000",
      image:
        "https://images.unsplash.com/photo-1544614940-686234a602e9?fm=jpg&w=1080",
    },
    {
      title: "TV Units",
      description:
        "Stylish TV units that enhance your living room aesthetics",
      features: [
        "Wall-Mounted Units",
        "Storage Drawers",
        "Custom Finishes",
        "LED Panels",
      ],
      price: "₹18,000 - ₹90,000",
      image:
        "https://framerusercontent.com/images/osEW4PNZOf6lmRPT3yeYPuie65I.png?width=1600&height=900",
    },
    {
      title: "Study Tables",
      description:
        "Ergonomic study tables designed for productivity and comfort",
      features: [
        "Compact Designs",
        "Cable Management",
        "Built-in Storage",
        "Custom Sizes",
      ],
      price: "₹8,000 - ₹45,000",
      image:
        "https://ikiru.in/cdn/shop/products/buy-study-table-wooden-side-study-table-with-drawer-or-work-desk-for-living-room-by-the-home-dekor-on-ikiru-online-store-1.jpg?v=1739197530",
    },
    {
      title: "Dining Sets",
      description:
        "Elegant dining sets perfect for family meals and gatherings",
      features: [
        "4 & 6 Seater Options",
        "Solid Wood",
        "Modern Designs",
        "Easy Maintenance",
      ],
      price: "₹25,000 - ₹1,80,000",
      image:
        "https://images.unsplash.com/photo-1617806118233-18e1de247200?fm=jpg&w=1080",
    },
  ];

  return (
    <>
      {/* Poppins Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <style>{`
        body {
          margin: 0;
          font-family: 'Poppins';
          background: #f7f7f7;
        }

        .sectionHeader {
          text-align: center;
          max-width: 800px;
          margin: 0 auto 15px;
        }

        .sectionHeader h2 {
          font-size: 38px;
          font-weight: 600;
          color: #222;
          margin-bottom: 10px;
        }

        .sectionHeader p {
          font-size: 20px;
          color: #666;
          line-height: 1.6;
          margin: 0;
        }

        .container {
          max-width: 1200px;
          margin: auto;
          padding: 40px 20px;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 28px;
        }

        .card {
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 10px 35px rgba(0,0,0,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 45px rgba(0,0,0,0.15);
        }

        .card img {
          width: 100%;
          height: 230px;
          object-fit: cover;
          transition: transform 0.4s ease;
        }

        .card:hover img {
          transform: scale(1.05);
        }

        .content {
          padding: 22px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .titleRow {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 6px;
        }

        .logo {
          width: 26px;
          height: 26px;
          border-radius: 6px;
          background: #ff4d00;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-size: 14px;
          font-weight: 600;
        }

        h3 {
          margin: 0;
          color: #ff4d00;
          font-weight: 600;
        }

        .desc {
          font-size: 14px;
          color: #666;
          margin-bottom: 14px;
        }

        strong {
          font-size: 14px;
          margin-bottom: 6px;
        }

        ul {
          padding-left: 18px;
          margin: 8px 0 20px;
        }

        li {
          font-size: 13.5px;
          margin-bottom: 6px;
          color: #333;
        }

        .footer {
          margin-top: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .price {
          color: #ff4d00;
          font-weight: 600;
          font-size: 14px;
        }

        .orangeBox {
          background-color:#ef6c00;
          color: black;
          padding: 20px 170px;
          text-align: center;
          border-radius: 12px;
          max-width: 700px;
          margin: 50px auto;
        }

        .orangeBox h2 {
          font-size: 32px;
          margin-bottom: 16px;
        }

        .orangeBox p {
          font-size: 18px;
          margin-bottom: 24px;
          line-height: 1.6;
        }

        .whiteButton {
          background-color: white;
          color: orange;
          border: none;
          padding: 14px 32px;
          font-size: 16px;
          font-weight: 600;
          border-radius: 8px;
          cursor: pointer;
          font-family: 'Poppins';
        }

        .whiteButton:hover {
          background-color: black;
          color: white;
        }

        button {
          padding: 9px 18px;
          border-radius: 10px;
          border: 1px solid #ddd;
          background: #fff;
          cursor: pointer;
          font-family: 'Poppins';
          transition: all 0.25s ease;
        }

        button:hover {
          background: #ff4d00;
          color: #fff;
          border-color: #ff4d00;
        }
      `}</style>

      <div className="sectionHeader">
        <h2>Our Services</h2>
        <p>
          Comprehensive furniture solutions tailored to your needs. From single
          pieces to complete home interiors, we bring your vision to life with
          quality craftsmanship.
        </p>
      </div>

      <div className="container">
        {data.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.image} alt={item.title} />

            <div className="content">
              <div className="titleRow">
                <div className="logo">★</div>
                <h3>{item.title}</h3>
              </div>

              <p className="desc">{item.description}</p>

              <strong>Key Features</strong>
              <ul>
                {item.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>

              <div className="footer">
                <span className="price">{item.price}</span>
                <button>Get Quote</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="orangeBox">
        <h2>Ready to Get Started?</h2>

        <p>
          Get a personalized quote with our AI-powered assistant and see
          estimated prices instantly!
        </p>

        <button className="whiteButton">
          Request Free Quote
        </button>
      </div>
    </>
  );
}
